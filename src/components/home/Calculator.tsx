'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const tradeDefaults = {
    cafe: { spend: 12, regs: 80, visits: 30, margin: 0.65 },
    hair: { spend: 65, regs: 50, visits: 10, margin: 0.75 },
    retail: { spend: 55, regs: 60, visits: 8, margin: 0.50 },
    restaurant: { spend: 45, regs: 70, visits: 20, margin: 0.65 },
    wellness: { spend: 90, regs: 40, visits: 12, margin: 0.70 },
};

const plans = {
    free: { lift: 0.12, monthly: 0, label: 'Free', liftLabel: '12% visit lift' },
    starter: { lift: 0.32, monthly: 9.99, label: 'Starter', liftLabel: '32% visit lift' },
    growth: { lift: 0.52, monthly: 19.99, label: 'Growth', liftLabel: '52% visit lift' },
};

const rewards = {
    pct10: { label: '10% off', sub: 'Safe', costFn: (spend: number) => spend * 0.10 },
    pct50: { label: '50% off', sub: 'Good', costFn: (spend: number) => spend * 0.50 },
    favfree: { label: 'Free item', sub: 'Best', costFn: (spend: number) => spend },
};

const industries = [
    { key: 'cafe', label: '☕ Café' },
    { key: 'hair', label: '✂ Hair' },
    { key: 'retail', label: '🛍 Retail' },
    { key: 'restaurant', label: '🍽 Restaurant' },
    { key: 'wellness', label: '🌿 Wellness' },
];

const tradeLabels: Record<string, string> = {
    cafe: 'Café', hair: 'Hair', retail: 'Retail',
    restaurant: 'Restaurant', wellness: 'Wellness',
};

const money = (n: number) => '$' + Math.round(n).toLocaleString('en-AU');

type Industry = keyof typeof tradeDefaults;
type Reward = keyof typeof rewards;
type Plan = keyof typeof plans;

export default function Calculator() {
    const [ind, setInd] = useState<Industry>('cafe');
    const [spend, setSpend] = useState(12);
    const [regs, setRegs] = useState(80);
    const [visits, setVisits] = useState(30);
    const [stamps, setStamps] = useState(10);
    const [reward, setReward] = useState<Reward>('favfree');
    const [plan, setPlan] = useState<Plan>('growth');

    const handleIndustry = (key: Industry) => {
        setInd(key);
        const p = tradeDefaults[key];
        setSpend(p.spend);
        setRegs(p.regs);
        setVisits(p.visits);
    };

    const calc = useCallback(() => {
        const p = plans[plan];
        const r = rewards[reward];
        const margin = tradeDefaults[ind].margin;
        const lift = p.lift;

        const baseVisits = regs * visits;
        const extraVisits = baseVisits * lift;
        const liftedVisits = visits * (1 + lift);

        const baseRevenue = baseVisits * spend;
        const extraRevenue = extraVisits * spend;
        const grossProfitExtra = extraRevenue * margin;

        const rewardsEarned = regs * Math.floor(liftedVisits / stamps);
        const costPerReward = r.costFn(spend);
        const totalRewardCost = rewardsEarned * costPerReward * margin;

        const annualSub = p.monthly * 12;
        const netReturn = Math.max(0, grossProfitExtra - totalRewardCost - annualSub);

        return {
            netReturn,
            baseRevenue,
            grossProfitExtra,
            totalRewardCost,
            annualSub,
            liftPct: Math.round(lift * 100),
            marginPct: Math.round(margin * 100),
        };
    }, [ind, spend, regs, visits, stamps, reward, plan]);

    const {
        netReturn, baseRevenue, grossProfitExtra,
        totalRewardCost, annualSub, liftPct, marginPct,
    } = calc();

    return (
        <section id="calc" style={{ padding: '100px 40px', background: '#fff' }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr',
                gap: '64px',
                alignItems: 'center',
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
                        Industry research, your numbers.
                    </p>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6070', marginBottom: '28px' }}>
                        Most local businesses are surprised by the answer. The reward isn't a cost —
                        it's what earns the next visit.
                    </p>
                    <Link href="/pricing" className="btn btn-md btn-primary">
                        Start free →
                    </Link>
                </RevealOnScroll>

                {/* Calculator card */}
                <RevealOnScroll delay={2}>
                    <div style={{
                        background: '#fff',
                        border: '1px solid #e8edf0',
                        borderRadius: 'var(--radius-lg)',
                        padding: '28px',
                        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                    }}>

                        {/* Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '20px',
                        }}>
                            <div>
                                <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>
                                    Your regulars · annual value
                                </h3>
                                <p style={{ fontSize: '12px', color: '#8aa0b0', marginTop: '2px' }}>
                                    Adjust to match your business
                                </p>
                            </div>
                            <span style={{
                                fontSize: '11px', fontWeight: 700, color: 'var(--green2)',
                                background: 'rgba(95,255,159,0.12)', border: '1px solid rgba(95,255,159,0.3)',
                                borderRadius: '999px', padding: '3px 10px',
                            }}>Live</span>
                        </div>

                        {/* Industry chips */}
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{
                                fontSize: '11px', fontWeight: 700, color: '#8aa0b0',
                                textTransform: 'uppercase', letterSpacing: '1px',
                                display: 'block', marginBottom: '8px',
                            }}>Your trade</label>
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {industries.map(item => (
                                    <button
                                        key={item.key}
                                        onClick={() => handleIndustry(item.key as Industry)}
                                        style={{
                                            fontSize: '12px', fontWeight: 600,
                                            padding: '6px 12px', borderRadius: '999px',
                                            border: ind === item.key ? '1.5px solid var(--navy)' : '1.5px solid #e0e8ed',
                                            background: ind === item.key ? 'var(--navy)' : 'transparent',
                                            color: ind === item.key ? '#fff' : '#4a6070',
                                            cursor: 'pointer', transition: 'all 0.15s',
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sliders */}
                        {[
                            { label: 'Avg spend per visit', value: spend, set: setSpend, min: 5, max: 300, step: 5, fmt: (v: number) => `$${v}` },
                            { label: 'Approx. regulars', value: regs, set: setRegs, min: 5, max: 500, step: 5, fmt: (v: number) => `${v}` },
                            { label: 'Visits per year (each regular)', value: visits, set: setVisits, min: 1, max: 52, step: 1, fmt: (v: number) => `${v}` },
                            { label: 'Stamps to get reward', value: stamps, set: setStamps, min: 5, max: 20, step: 1, fmt: (v: number) => `${v}` },
                        ].map(({ label, value, set, min, max, step, fmt }) => (
                            <div key={label} style={{ marginBottom: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#4a6070' }}>
                                        {label}
                                    </label>
                                    <span style={{
                                        fontSize: '12px', fontWeight: 700, color: 'var(--navy)',
                                        background: '#f0f4f7', padding: '2px 8px', borderRadius: '6px',
                                    }}>
                                        {fmt(value)}
                                    </span>
                                </div>
                                <input
                                    type="range" min={min} max={max} step={step} value={value}
                                    onChange={e => set(Number(e.target.value))}
                                    className="calc-slider" style={{ width: '100%' }}
                                />
                            </div>
                        ))}

                        {/* Reward strength */}
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{
                                fontSize: '11px', fontWeight: 700, color: '#8aa0b0',
                                textTransform: 'uppercase', letterSpacing: '1px',
                                display: 'block', marginBottom: '8px',
                            }}>Reward strength</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                {(Object.entries(rewards) as [Reward, typeof rewards[Reward]][]).map(([key, r]) => (
                                    <button
                                        key={key}
                                        onClick={() => setReward(key)}
                                        style={{
                                            padding: '10px 8px', borderRadius: 'var(--radius-sm)',
                                            border: reward === key ? '1.5px solid var(--navy)' : '1.5px solid #e0e8ed',
                                            background: reward === key ? 'var(--navy)' : 'transparent',
                                            cursor: 'pointer', transition: 'all 0.15s', textAlign: 'center',
                                        }}
                                    >
                                        <div style={{ fontSize: '13px', fontWeight: 700, color: reward === key ? '#fff' : '#4a6070' }}>
                                            {r.label}
                                        </div>
                                        <div style={{ fontSize: '11px', color: reward === key ? 'rgba(255,255,255,0.6)' : '#8aa0b0', marginTop: '2px' }}>
                                            {r.sub}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Plan selector */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                fontSize: '11px', fontWeight: 700, color: '#8aa0b0',
                                textTransform: 'uppercase', letterSpacing: '1px',
                                display: 'block', marginBottom: '8px',
                            }}>Perk+ plan</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                {(Object.entries(plans) as [Plan, typeof plans[Plan]][]).map(([key, p]) => (
                                    <button
                                        key={key}
                                        onClick={() => setPlan(key)}
                                        style={{
                                            padding: '10px 8px', borderRadius: 'var(--radius-sm)',
                                            border: plan === key
                                                ? key === 'growth' ? '1.5px solid var(--green2)' : '1.5px solid var(--navy)'
                                                : '1.5px solid #e0e8ed',
                                            background: plan === key ? 'var(--navy)' : 'transparent',
                                            cursor: 'pointer', transition: 'all 0.15s',
                                            textAlign: 'center', position: 'relative',
                                        }}
                                    >
                                        {key === 'growth' && (
                                            <span style={{
                                                position: 'absolute', top: '-10px', left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: 'var(--navy)', color: 'var(--green)',
                                                fontSize: '9px', fontWeight: 700,
                                                padding: '2px 8px', borderRadius: '999px',
                                                border: '1px solid var(--green2)',
                                                whiteSpace: 'nowrap',
                                            }}>★ Recommended</span>
                                        )}
                                        <div style={{
                                            fontSize: '11px', fontWeight: 600,
                                            color: plan === key ? 'var(--green)' : '#8aa0b0',
                                            marginBottom: '2px',
                                        }}>
                                            {p.liftLabel}
                                        </div>
                                        <div style={{ fontSize: '13px', fontWeight: 700, color: plan === key ? '#fff' : '#4a6070' }}>
                                            {p.label}
                                        </div>
                                        <div style={{ fontSize: '11px', color: plan === key ? 'rgba(255,255,255,0.5)' : '#8aa0b0' }}>
                                            {p.monthly === 0 ? 'Free' : `$${p.monthly}/mo`}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <p style={{ fontSize: '12px', color: '#8aa0b0', marginTop: '8px', lineHeight: 1.5 }}>
                                Higher plans unlock push, SMS & email — driving greater visit lift.
                            </p>
                        </div>

                        {/* Result */}
                        <div style={{
                            background: 'var(--navy)', borderRadius: 'var(--radius-md)', padding: '20px',
                        }}>
                            <p style={{
                                fontSize: '11px', color: 'var(--green)', marginBottom: '6px',
                                textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700,
                            }}>
                                Estimated Net Return · Year 1
                            </p>
                            <div style={{
                                fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 800,
                                color: 'var(--green)', letterSpacing: '-1px', lineHeight: 1, marginBottom: '6px',
                            }}>
                                {money(netReturn)}
                                <span style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>
                                    /year
                                </span>
                            </div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>
                                Based on <strong style={{ color: '#fff' }}>{regs} regulars</strong> visiting{' '}
                                <strong style={{ color: '#fff' }}>{liftPct}% more often</strong> — using{' '}
                                <strong style={{ color: '#fff' }}>{marginPct}% margin</strong> for {tradeLabels[ind]}.
                            </p>

                            {/* Breakdown */}
                            <div style={{
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                paddingTop: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                            }}>
                                {[
                                    { label: 'Visit lift from loyalty', value: `+${liftPct}%`, color: 'rgba(255,255,255,0.8)' },
                                    { label: 'Gross profit from extra visits', value: money(grossProfitExtra), color: 'rgba(255,255,255,0.8)' },
                                    { label: 'Base revenue (no loyalty)', value: money(baseRevenue), color: 'rgba(255,255,255,0.8)' },
                                    { label: 'Cost of rewards given', value: `−${money(totalRewardCost)}`, color: 'rgba(255,100,100,0.8)' },
                                    ...(annualSub > 0 ? [{ label: 'Perk+ subscription (annual)', value: `−${money(annualSub)}`, color: 'rgba(255,100,100,0.8)' }] : []),
                                ].map(row => (
                                    <div key={row.label} style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    }}>
                                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>{row.label}</span>
                                        <strong style={{ fontSize: '12px', color: row.color }}>{row.value}</strong>
                                    </div>
                                ))}

                                {/* Net row */}
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px', marginTop: '4px',
                                }}>
                                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                                        Net additional revenue
                                    </span>
                                    <strong style={{ fontSize: '14px', color: 'var(--green)' }}>
                                        {money(netReturn)}
                                    </strong>
                                </div>
                            </div>

                            <p style={{
                                fontSize: '11px', color: 'rgba(255,255,255,0.3)',
                                marginTop: '14px', lineHeight: 1.5,
                            }}>
                                Industry research: loyalty members visit 12–52% more than non-members.
                                Higher Perk+ plans unlock engagement tools that drive greater lift.
                            </p>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}