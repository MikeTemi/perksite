'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const tradeDefaults = {
    cafe: { spend: 12, regs: 80, visits: 30, margin: 0.65, label: 'Café' },
    hair: { spend: 65, regs: 50, visits: 10, margin: 0.75, label: 'Hair' },
    retail: { spend: 55, regs: 60, visits: 8, margin: 0.50, label: 'Retail' },
    restaurant: { spend: 45, regs: 70, visits: 20, margin: 0.65, label: 'Restaurant' },
    wellness: { spend: 90, regs: 40, visits: 12, margin: 0.70, label: 'Wellness' },
};

const plans = {
    free: { lift: 0.12, monthly: 0, annualMonthly: 0 },
    starter: { lift: 0.32, monthly: 9.99, annualMonthly: 8.33 },
    growth: { lift: 0.52, monthly: 19.99, annualMonthly: 16.67 },
};

const rewards = {
    pct10: { label: '10% off', sub: 'Safe', freqMult: 1.00, costFn: (s: number) => s * 0.10 },
    pct50: { label: '50% off', sub: 'Good', freqMult: 1.15, costFn: (s: number) => s * 0.50 },
    favfree: { label: 'Free item', sub: 'Best', freqMult: 1.30, costFn: (s: number) => s },
};

const industries = [
    { key: 'cafe', label: 'Café' },
    { key: 'hair', label: 'Hair' },
    { key: 'retail', label: 'Retail' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'wellness', label: 'Wellness' },
];

type Industry = keyof typeof tradeDefaults;
type Reward = keyof typeof rewards;
type Plan = keyof typeof plans;

const fmt = (n: number) => '$' + Math.round(Math.max(0, n)).toLocaleString('en-AU');

function useAnimatedCounter(target: number) {
    const [displayed, setDisplayed] = useState(target);
    const currentRef = useRef(target);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const start = currentRef.current;
        const diff = target - start;
        const duration = Math.min(600, Math.max(200, Math.abs(diff) * 0.15));
        const startTime = performance.now();

        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(start + diff * ease);
            currentRef.current = value;
            setDisplayed(value);
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                currentRef.current = target;
                setDisplayed(target);
            }
        }

        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [target]);

    return displayed;
}

function SliderRow({
    label, value, set, min, max, step, fmt: fmtFn,
}: {
    label: string;
    value: number;
    set: (v: number) => void;
    min: number; max: number; step: number;
    fmt: (v: number) => string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    const trackBg = `linear-gradient(to right, var(--green) 0%, var(--green) ${pct}%, var(--off) ${pct}%, var(--off) 100%)`;

    return (
        <div className="field-group">
            <label>{label}</label>
            <div className="slider-row">
                <input
                    type="range" min={min} max={max} step={step} value={value}
                    onChange={e => set(Number(e.target.value))}
                    className="calc-slider-new"
                    style={{ background: trackBg }}
                />
                <span className="num-pill">
                    {fmtFn(value)}
                </span>
            </div>
        </div>
    );
}

export default function Calculator() {
    const [ind, setInd] = useState<Industry>('cafe');
    const [spend, setSpend] = useState(12);
    const [regs, setRegs] = useState(80);
    const [visits, setVisits] = useState(30);
    const [stamps, setStamps] = useState(10);
    const [reward, setReward] = useState<Reward>('favfree');
    const [plan, setPlan] = useState<Plan>('growth');
    const [annual, setAnnual] = useState(false);

    const handleIndustry = (key: Industry) => {
        setInd(key);
        const d = tradeDefaults[key];
        setSpend(d.spend); setRegs(d.regs); setVisits(d.visits);
    };

    const result = useCallback(() => {
        const p = plans[plan];
        const r = rewards[reward];
        const margin = tradeDefaults[ind].margin;

        const baseVisits = regs * visits;
        const effectiveVisits = regs * visits * (1 + p.lift) * r.freqMult;
        const baseRevenue = baseVisits * spend;
        const loyaltyRevenue = effectiveVisits * spend;
        const grossProfit = loyaltyRevenue * margin;
        const baseProfit = baseRevenue * margin;
        const extraProfit = grossProfit - baseProfit;

        const rewardsEarned = regs * Math.floor((visits * (1 + p.lift) * r.freqMult) / stamps);
        const totalRewardCost = rewardsEarned * r.costFn(spend) * margin;

        const subCost = annual
            ? (p.annualMonthly === 0 ? 0 : p.annualMonthly * 12)
            : p.monthly * 12;

        const net = extraProfit - totalRewardCost - subCost;
        const effectiveLiftPct = Math.round(((effectiveVisits / baseVisits) - 1) * 100);

        return {
            net: Math.max(0, net),
            baseRevenue, loyaltyRevenue, extraProfit,
            totalRewardCost, subCost, effectiveLiftPct,
            margin, liftPct: Math.round(p.lift * 100),
        };
    }, [ind, spend, regs, visits, stamps, reward, plan, annual]);

    const {
        net, baseRevenue, loyaltyRevenue, extraProfit,
        totalRewardCost, subCost, effectiveLiftPct, margin,
    } = result();

    const animatedNet = useAnimatedCounter(Math.round(net));

    const planLiftLabel = (pk: Plan) => {
        const r = rewards[reward];
        const pl = plans[pk];
        const pct = Math.round(((1 + pl.lift) * r.freqMult - 1) * 100);
        return `${pct}% visit lift`;
    };

    const planPrice = (pk: Plan) => {
        const p = plans[pk];
        if (p.monthly === 0) return '$0';
        return annual ? `$${p.annualMonthly.toFixed(2)}` : `$${p.monthly.toFixed(2)}`;
    };

    return (
        <section id="calc" style={{ padding: '100px 40px', background: '#fff' }}>
            <div style={{
                maxWidth: 'var(--max-w)', margin: '0 auto',
                display: 'grid', gridTemplateColumns: '1fr 1.1fr',
                gap: '64px', alignItems: 'center',
            }} className="calc-grid">

                {/* Left copy */}
                <RevealOnScroll>
                    <p className="subline" style={{ color: 'var(--g2)' }}>Run the math</p>
                    <h2 className="h1" style={{ color: 'var(--navy)', margin: '12px 0 18px' }}>
                        What are your regulars{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>actually worth?</em>
                    </h2>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6070', marginBottom: '18px' }}>
                        Move the sliders. See exactly what a loyalty program could add to your annual
                        revenue <strong>after</strong> the cost of every reward you give away.
                    </p>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6070', marginBottom: '28px' }}>
                        Most local businesses are surprised by the answer. The reward isn't a cost,
                        it's what earns the next visit.
                    </p>
                    <Link href="/pricing" className="btn btn-md btn-primary">Start free</Link>
                </RevealOnScroll>

                {/* Calculator card */}
                <RevealOnScroll delay={2}>
                    <div className="calc" style={{ boxShadow: 'var(--shadow-card)', border: '1px solid var(--line)' }}>

                        {/* Header */}
                        <div className="calc-head">
                            <div>
                                <h3>Your regulars · annual value</h3>
                                <p>Adjust to match your business</p>
                            </div>
                            <span className="calc-live">Live</span>
                        </div>

                        <div className="calc-inputs">

                            {/* Trade pills */}
                            <div className="field-group">
                                <label>Your Trade</label>
                                <div className="ind-chips">
                                    {industries.map(item => (
                                        <button
                                            key={item.key}
                                            type="button"
                                            onClick={() => handleIndustry(item.key as Industry)}
                                            className={`ind-chip ${ind === item.key ? 'on' : ''}`}
                                        >
                                            {ind === item.key && (
                                                <span style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: 'var(--green)',
                                                    flexShrink: 0,
                                                }} />
                                            )}
                                            {item.key === 'cafe' ? '☕ ' : item.key === 'hair' ? '✂ ' : item.key === 'retail' ? '🛍 ' : item.key === 'restaurant' ? '🍽 ' : '🌿 '}
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sliders */}
                            <SliderRow label="Avg spend per visit" value={spend} set={setSpend} min={5} max={300} step={5} fmt={v => `$${v}`} />
                            <SliderRow label="Approx. regulars" value={regs} set={setRegs} min={5} max={500} step={5} fmt={v => `${v}`} />
                            <SliderRow label="Visits per year (each regular)" value={visits} set={setVisits} min={1} max={52} step={1} fmt={v => `${v}`} />
                            <SliderRow label="Stamps to get reward" value={stamps} set={setStamps} min={5} max={20} step={1} fmt={v => `${v}`} />

                            {/* Reward strength */}
                            <div className="field-group">
                                <label>Reward Strength</label>
                                <div className="rew-row">
                                    {(Object.entries(rewards) as [Reward, typeof rewards[Reward]][]).map(([key, r]) => (
                                        <button
                                            key={key}
                                            type="button"
                                            onClick={() => setReward(key)}
                                            className={`rew-opt ${reward === key ? 'on' : ''}`}
                                        >
                                            <span className="lbl">{r.label}</span>
                                            <span className="sub">{r.sub}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Plan selector */}
                            <div className="field-group">
                                <label>Perk+ Plan</label>

                                {/* Billing toggle */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <button
                                        onClick={() => setAnnual(!annual)}
                                        style={{
                                            width: '36px', height: '20px', borderRadius: '20px',
                                            background: annual ? 'var(--navy)' : 'var(--g5)',
                                            border: 'none', cursor: 'pointer',
                                            position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                                            padding: 0,
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute', top: '3px',
                                            left: annual ? 'calc(100% - 17px)' : '3px',
                                            width: '14px', height: '14px', borderRadius: '50%',
                                            background: '#fff', transition: 'left 0.2s',
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                        }} />
                                    </button>
                                    <span style={{ fontSize: '12px', color: 'var(--g1)' }}>
                                        {annual
                                            ? <><strong style={{ color: 'var(--navy)' }}>Annual</strong></>
                                            : 'Monthly'
                                        }
                                    </span>
                                    {annual && (
                                        <span style={{
                                            fontSize: '9.5px', fontWeight: 600,
                                            background: 'var(--green-tint)', color: 'var(--navy)',
                                            border: '0.5px solid var(--green)',
                                            padding: '2px 7px', borderRadius: '20px',
                                        }}>
                                            Save ~17%
                                        </span>
                                    )}
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
                                    {(Object.entries(plans) as [Plan, typeof plans[Plan]][]).map(([key, p]) => (
                                        <div
                                            key={key}
                                            onClick={() => setPlan(key)}
                                            style={{
                                                position: 'relative', borderRadius: '8px',
                                                padding: '7px 8px', cursor: 'pointer',
                                                border: key === 'growth'
                                                    ? `0.5px solid ${plan === key ? 'var(--green)' : 'var(--green)'}`
                                                    : plan === key ? '0.5px solid var(--navy)' : '0.5px solid var(--g5)',
                                                background: plan === key ? 'var(--navy)' : 'var(--white)',
                                                transition: 'all 0.15s',
                                                marginTop: key === 'growth' ? '10px' : '0',
                                            }}
                                        >
                                            {key === 'growth' && (
                                                <span style={{
                                                    position: 'absolute', top: '-11px', left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    fontSize: '9px', fontWeight: 600,
                                                    background: plan === key ? 'var(--green)' : 'var(--navy)',
                                                    color: plan === key ? 'var(--navy)' : 'var(--green)',
                                                    border: '0.5px solid var(--green)',
                                                    padding: '2px 8px', borderRadius: '20px',
                                                    whiteSpace: 'nowrap',
                                                }}>★ Recommended</span>
                                            )}
                                            <span style={{
                                                display: 'inline-block', fontSize: '9px', fontWeight: 500,
                                                padding: '1px 6px', borderRadius: '20px', marginBottom: '3px',
                                                background: plan === key ? 'rgba(95,255,159,0.15)' : 'var(--green-tint)',
                                                color: plan === key ? 'var(--green)' : 'var(--navy)',
                                                border: plan === key ? '0.5px solid rgba(95,255,159,0.3)' : '0.5px solid var(--green)',
                                            }}>
                                                {planLiftLabel(key)}
                                            </span>
                                            <span style={{
                                                fontSize: '10px', color: plan === key ? 'rgba(255,255,255,0.5)' : 'var(--g2)',
                                                display: 'block', marginBottom: '1px',
                                            }}>
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </span>
                                            {annual && p.monthly > 0 && (
                                                <div style={{
                                                    fontSize: '10px',
                                                    color: plan === key ? 'rgba(255,255,255,0.35)' : 'var(--g2)',
                                                    textDecoration: 'line-through',
                                                    marginBottom: '1px',
                                                }}>
                                                    ${p.monthly.toFixed(2)}/mo
                                                </div>
                                            )}
                                            <div style={{
                                                fontSize: '18px', fontWeight: 700,
                                                color: plan === key ? 'var(--green)' : 'var(--navy)',
                                                lineHeight: 1,
                                            }}>
                                                {planPrice(key)}
                                                <span style={{
                                                    fontSize: '10px', fontWeight: 400,
                                                    color: plan === key ? 'rgba(255,255,255,0.4)' : 'var(--g2)',
                                                    marginLeft: '1px',
                                                }}>/mo</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '11px', color: 'var(--g2)', marginTop: '5px', margin: '5px 0 0' }}>
                                    Higher plans unlock push, SMS &amp; email, driving greater visit lift.
                                </p>
                            </div>

                        </div>

                        {/* Result box */}
                        <div className="calc-result">
                            <div className="calc-result-lbl">
                                Estimated Net Return · Year 1
                            </div>
                            <div className="calc-result-amt">
                                ${animatedNet.toLocaleString('en-AU')}
                                <span className="yr">/year</span>
                            </div>
                            <p className="calc-result-desc">
                                Based on <strong>{regs} regulars</strong> visiting{' '}
                                <strong>{effectiveLiftPct}% more often</strong>,
                                using <strong>{Math.round(margin * 100)}%</strong> margin
                                for {tradeDefaults[ind].label}.
                            </p>

                            <div className="calc-bd">
                                {[
                                    { label: 'Effective visit lift', val: `+${effectiveLiftPct}%`, cls: 'pos' },
                                    { label: 'Revenue with loyalty', val: fmt(loyaltyRevenue), cls: 'pos' },
                                    { label: 'Base revenue (no loyalty)', val: fmt(baseRevenue), cls: 'pos' },
                                    { label: 'Extra gross profit from visits', val: fmt(extraProfit), cls: 'pos' },
                                    { label: 'Cost of rewards given', val: `−${fmt(totalRewardCost)}`, cls: 'neg' },
                                    ...(subCost > 0 ? [{ label: `Subscription (${annual ? 'annual' : 'monthly ×12'})`, val: `−${fmt(subCost)}`, cls: 'neg' }] : []),
                                ].map(row => (
                                    <div key={row.label} className="calc-bd-row">
                                        <span>{row.label}</span>
                                        <strong style={{
                                            color: row.cls === 'neg' ? '#c84040' : 'var(--navy)',
                                        }}>
                                            {row.val}
                                        </strong>
                                    </div>
                                ))}

                                {/* Net total */}
                                <div className="calc-bd-row net">
                                    <span className="lbl">Net additional revenue</span>
                                    <strong style={{ color: 'var(--navy)' }}>{fmt(net)}</strong>
                                </div>
                            </div>

                            <p className="calc-disclaimer">
                                {rewards[reward].costFn === rewards.pct10.costFn
                                    ? `After ${stamps} visits, the customer gets 10% off their ${stamps}th visit.`
                                    : rewards[reward].costFn === rewards.pct50.costFn
                                        ? `After ${stamps} visits, the customer gets 50% off their ${stamps}th visit.`
                                        : `After ${stamps} visits, the customer gets a free item on their ${stamps}th visit.`
                                }
                            </p>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}