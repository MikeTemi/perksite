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
    const trackBg = `linear-gradient(to right, #042940 0%, #5FFF9F ${pct}%, #dde5e0 ${pct}%)`;

    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '8px 0', borderBottom: '0.5px solid #f0f2f0',
        }}>
            <label style={{ fontSize: '12.5px', color: '#4a5a50', width: '170px', flexShrink: 0 }}>
                {label}
            </label>
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={e => set(Number(e.target.value))}
                className="calc-slider-new"
                style={{ flex: 1, background: trackBg }}
            />
            <span style={{
                fontSize: '12.5px', fontWeight: 600, color: 'var(--navy)',
                width: '44px', textAlign: 'right', fontVariantNumeric: 'tabular-nums',
            }}>
                {fmtFn(value)}
            </span>
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
                        revenue — <strong>after</strong> the cost of every reward you give away.
                    </p>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6070', marginBottom: '28px' }}>
                        Most local businesses are surprised by the answer. The reward isn't a cost —
                        it's what earns the next visit.
                    </p>
                    <Link href="/pricing" className="btn btn-md btn-primary">Start free →</Link>
                </RevealOnScroll>

                {/* Calculator card */}
                <RevealOnScroll delay={2}>
                    <div style={{
                        background: '#fff', border: '0.5px solid #e2e8e4',
                        borderRadius: '16px', overflow: 'hidden',
                        boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                    }}>

                        {/* Header */}
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '16px 20px', borderBottom: '0.5px solid #eef1ee',
                        }}>
                            <div>
                                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)' }}>
                                    Your regulars · annual value
                                </h3>
                                <p style={{ fontSize: '11.5px', color: '#7a8f82', marginTop: '2px' }}>
                                    Adjust to match your business
                                </p>
                            </div>
                            <span style={{
                                fontSize: '11px', fontWeight: 500, color: '#0f6e56',
                                background: '#e8f8f0', border: '0.5px solid #5DCAA5',
                                padding: '4px 10px', borderRadius: '20px',
                            }}>Live</span>
                        </div>

                        <div style={{ padding: '10px 20px 8px' }}>

                            {/* Trade pills */}
                            <p style={{
                                fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.1em',
                                textTransform: 'uppercase', color: '#7a8f82', marginBottom: '5px',
                            }}>Your Trade</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                                {industries.map(item => (
                                    <button
                                        key={item.key}
                                        onClick={() => handleIndustry(item.key as Industry)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '4px',
                                            padding: '4px 12px', borderRadius: '20px',
                                            fontSize: '12px', cursor: 'pointer',
                                            background: ind === item.key ? '#042940' : '#fff',
                                            color: ind === item.key ? '#fff' : '#1a2a1e',
                                            border: ind === item.key ? '0.5px solid #042940' : '0.5px solid #dde5e0',
                                            transition: 'all 0.15s', fontFamily: 'inherit',
                                        }}
                                    >
                                        {ind === item.key && (
                                            <span style={{
                                                width: '6px', height: '6px', borderRadius: '50%',
                                                background: '#5FFF9F', flexShrink: 0,
                                            }} />
                                        )}
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            {/* Sliders */}
                            <div style={{ marginBottom: '16px' }}>
                                <SliderRow label="Avg spend per visit" value={spend} set={setSpend} min={5} max={300} step={5} fmt={v => `$${v}`} />
                                <SliderRow label="Approx. regulars" value={regs} set={setRegs} min={5} max={500} step={5} fmt={v => `${v}`} />
                                <SliderRow label="Visits per year (each regular)" value={visits} set={setVisits} min={1} max={52} step={1} fmt={v => `${v}`} />
                                <SliderRow label="Stamps to get reward" value={stamps} set={setStamps} min={5} max={20} step={1} fmt={v => `${v}`} />
                            </div>

                            {/* Reward strength */}
                            <div style={{ marginBottom: '10px' }}>
                                <p style={{
                                    fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: '#7a8f82', marginBottom: '5px',
                                }}>Reward Strength</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
                                    {(Object.entries(rewards) as [Reward, typeof rewards[Reward]][]).map(([key, r]) => (
                                        <button
                                            key={key}
                                            onClick={() => setReward(key)}
                                            style={{
                                                padding: '8px', borderRadius: '8px', textAlign: 'center',
                                                cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                                                background: reward === key ? '#042940' : '#fff',
                                                color: reward === key ? '#fff' : '#1a2a1e',
                                                border: reward === key ? '0.5px solid #042940' : '0.5px solid #dde5e0',
                                            }}
                                        >
                                            <span style={{ fontSize: '12.5px', fontWeight: 500, display: 'block' }}>
                                                {r.label}
                                            </span>
                                            <span style={{
                                                fontSize: '10px', display: 'block', marginTop: '2px',
                                                color: reward === key ? 'rgba(255,255,255,0.55)' : '#7a8f82',
                                            }}>
                                                {r.sub}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Plan selector */}
                            <div style={{ marginBottom: '8px' }}>
                                <p style={{
                                    fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: '#7a8f82', marginBottom: '5px',
                                }}>Perk+ Plan</p>

                                {/* Billing toggle */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <button
                                        onClick={() => setAnnual(!annual)}
                                        style={{
                                            width: '36px', height: '20px', borderRadius: '20px',
                                            background: annual ? '#042940' : '#dde5e0',
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
                                    <span style={{ fontSize: '12px', color: '#4a5a50' }}>
                                        {annual
                                            ? <><strong style={{ color: '#042940' }}>Annual</strong></>
                                            : 'Monthly'
                                        }
                                    </span>
                                    {annual && (
                                        <span style={{
                                            fontSize: '9.5px', fontWeight: 600,
                                            background: '#e8f8f0', color: '#0f6e56',
                                            border: '0.5px solid #5dcaa5',
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
                                                    ? `0.5px solid ${plan === key ? '#5FFF9F' : '#5FFF9F'}`
                                                    : plan === key ? '0.5px solid #042940' : '0.5px solid #dde5e0',
                                                background: plan === key ? '#042940' : '#fff',
                                                transition: 'all 0.15s',
                                                marginTop: key === 'growth' ? '10px' : '0',
                                            }}
                                        >
                                            {key === 'growth' && (
                                                <span style={{
                                                    position: 'absolute', top: '-11px', left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    fontSize: '9px', fontWeight: 600,
                                                    background: plan === key ? '#5FFF9F' : '#042940',
                                                    color: plan === key ? '#042940' : '#5FFF9F',
                                                    border: '0.5px solid #5FFF9F',
                                                    padding: '2px 8px', borderRadius: '20px',
                                                    whiteSpace: 'nowrap',
                                                }}>★ Recommended</span>
                                            )}
                                            <span style={{
                                                display: 'inline-block', fontSize: '9px', fontWeight: 500,
                                                padding: '1px 6px', borderRadius: '20px', marginBottom: '3px',
                                                background: plan === key ? 'rgba(95,255,159,0.15)' : '#e8f8f0',
                                                color: plan === key ? '#5FFF9F' : '#0f6e56',
                                                border: plan === key ? '0.5px solid rgba(95,255,159,0.3)' : '0.5px solid #5dcaa5',
                                            }}>
                                                {planLiftLabel(key)}
                                            </span>
                                            <span style={{
                                                fontSize: '10px', color: plan === key ? 'rgba(255,255,255,0.5)' : '#7a8f82',
                                                display: 'block', marginBottom: '1px',
                                            }}>
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </span>
                                            {annual && p.monthly > 0 && (
                                                <div style={{
                                                    fontSize: '10px',
                                                    color: plan === key ? 'rgba(255,255,255,0.35)' : '#7a8f82',
                                                    textDecoration: 'line-through',
                                                    marginBottom: '1px',
                                                }}>
                                                    ${p.monthly.toFixed(2)}/mo
                                                </div>
                                            )}
                                            <div style={{
                                                fontSize: '18px', fontWeight: 700,
                                                color: '#5FFF9F', lineHeight: 1,
                                            }}>
                                                {planPrice(key)}
                                                <span style={{
                                                    fontSize: '10px', fontWeight: 400,
                                                    color: plan === key ? 'rgba(255,255,255,0.4)' : '#7a8f82',
                                                    marginLeft: '1px',
                                                }}>/mo</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '11px', color: '#7a8f82', marginTop: '5px' }}>
                                    Higher plans unlock push, SMS &amp; email, driving greater visit lift.
                                </p>
                            </div>

                        </div>

                        {/* Result box */}
                        <div style={{
                            background: '#042940', margin: '0 16px 16px',
                            borderRadius: '12px', padding: '16px 20px', color: '#fff',
                        }}>
                            <p style={{
                                fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.1em',
                                textTransform: 'uppercase', color: '#5FFF9F', marginBottom: '4px',
                            }}>
                                Estimated Net Return · Year 1
                            </p>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                                <span style={{
                                    fontSize: '2.6rem', fontWeight: 700, color: '#5FFF9F',
                                    lineHeight: 1, fontVariantNumeric: 'tabular-nums',
                                }}>
                                    ${animatedNet.toLocaleString('en-AU')}
                                </span>
                                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>/year</span>
                            </div>
                            <p style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.55)', margin: '4px 0 12px', lineHeight: 1.5 }}>
                                Based on <strong style={{ color: '#fff' }}>{regs} regulars</strong> visiting{' '}
                                <strong style={{ color: '#fff' }}>{effectiveLiftPct}% more often</strong>,
                                using <strong style={{ color: '#fff' }}>{Math.round(margin * 100)}%</strong> margin
                                for {tradeDefaults[ind].label}.
                            </p>

                            <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {[
                                    { label: 'Effective visit lift', val: `+${effectiveLiftPct}%`, cls: 'pos' },
                                    { label: 'Revenue with loyalty', val: fmt(loyaltyRevenue), cls: 'pos' },
                                    { label: 'Base revenue (no loyalty)', val: fmt(baseRevenue), cls: 'pos' },
                                    { label: 'Extra gross profit from visits', val: fmt(extraProfit), cls: 'pos' },
                                    { label: 'Cost of rewards given', val: `−${fmt(totalRewardCost)}`, cls: 'neg' },
                                    ...(subCost > 0 ? [{ label: `Subscription (${annual ? 'annual' : 'monthly ×12'})`, val: `−${fmt(subCost)}`, cls: 'neg' }] : []),
                                ].map(row => (
                                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                                        <span>{row.label}</span>
                                        <span style={{
                                            fontWeight: 500,
                                            color: row.cls === 'neg' ? '#e87575' : 'rgba(255,255,255,0.8)',
                                        }}>
                                            {row.val}
                                        </span>
                                    </div>
                                ))}

                                {/* Net total */}
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between',
                                    borderTop: '0.5px solid rgba(255,255,255,0.15)',
                                    paddingTop: '8px', marginTop: '4px',
                                    fontSize: '13px', fontWeight: 600, color: '#fff',
                                }}>
                                    <span>Net additional revenue</span>
                                    <span style={{ color: '#5FFF9F' }}>{fmt(net)}</span>
                                </div>
                            </div>

                            <p style={{
                                fontSize: '10.5px', color: 'rgba(255,255,255,0.3)',
                                marginTop: '12px', paddingTop: '12px',
                                borderTop: '0.5px solid rgba(255,255,255,0.08)', lineHeight: 1.5,
                            }}>
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