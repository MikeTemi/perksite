'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const presets = {
    cafe: { spend: 6, regs: 80, visits: 48 },
    hair: { spend: 65, regs: 50, visits: 10 },
    retail: { spend: 45, regs: 60, visits: 14 },
    restaurant: { spend: 28, regs: 70, visits: 18 },
    wellness: { spend: 25, regs: 40, visits: 36 },
};

const rewardLift = { weak: 0.12, medium: 0.32, strong: 0.52 };
const rewardCost = {
    weak: { pct: 0.10, cycle: null },
    medium: { pct: 1.00, cycle: 9 },
    strong: { pct: 1.10, cycle: 9 },
};

const industries = [
    { key: 'cafe', label: '☕ Café' },
    { key: 'hair', label: '✂ Hair' },
    { key: 'retail', label: '🛍 Retail' },
    { key: 'restaurant', label: '🍽 Restaurant' },
    { key: 'wellness', label: '🌿 Wellness' },
];

const rewards = [
    { key: 'weak', label: '10% off', sub: 'Safe' },
    { key: 'medium', label: 'Free at 9', sub: 'Good' },
    { key: 'strong', label: 'Their fav, free', sub: 'Best' },
];

const money = (n: number) => '$' + Math.round(n).toLocaleString('en-AU');

type Industry = keyof typeof presets;
type Reward = keyof typeof rewardLift;

export default function Calculator() {
    const [ind, setInd] = useState<Industry>('cafe');
    const [spend, setSpend] = useState(6);
    const [regs, setRegs] = useState(80);
    const [visits, setVisits] = useState(48);
    const [reward, setReward] = useState<Reward>('medium');

    const calc = useCallback(() => {
        const lift = rewardLift[reward];
        const rc = rewardCost[reward];
        const baseRev = spend * visits * regs;
        const liftedVisits = visits * (1 + lift);
        const lrev = spend * liftedVisits * regs;
        const rcc = reward === 'weak'
            ? spend * rc.pct * liftedVisits
            : spend * rc.pct * (liftedVisits / (rc.cycle ?? 9));
        const totalCost = rcc * regs;
        const net = Math.max(0, lrev - baseRev - totalCost);
        return {
            net,
            baseRev,
            totalCost,
            liftPct: Math.round(lift * 100),
        };
    }, [spend, regs, visits, reward]);

    const { net, baseRev, totalCost, liftPct } = calc();

    const handleIndustry = (key: Industry) => {
        setInd(key);
        const p = presets[key];
        setSpend(p.spend);
        setRegs(p.regs);
        setVisits(p.visits);
    };

    return (
        <section id="calc" style={{
            padding: '100px 40px',
            background: '#fff',
        }}>
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
                    <h2 className="h1" style={{
                        color: 'var(--navy)',
                        margin: '12px 0 18px',
                    }}>
                        What are your regulars <em style={{
                            fontStyle: 'italic',
                            color: 'var(--navy)',
                        }}>actually worth?</em>
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#4a6070',
                        marginBottom: '18px',
                    }}>
                        Move the sliders. See exactly what a loyalty program could add to
                        your annual revenue — <strong>after</strong> the cost of every
                        reward you give away. Industry research, your numbers.
                    </p>
                    <p style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#4a6070',
                        marginBottom: '28px',
                    }}>
                        Most local businesses are surprised by the answer. The reward
                        isn't a cost — it's what earns the next visit.
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

                        {/* Card header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '20px',
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                }}>Your regulars · annual value</h3>
                                <p style={{ fontSize: '12px', color: '#8aa0b0', marginTop: '2px' }}>
                                    Adjust to match your business
                                </p>
                            </div>
                            <span style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: 'var(--green2)',
                                background: 'rgba(95,255,159,0.12)',
                                border: '1px solid rgba(95,255,159,0.3)',
                                borderRadius: '999px',
                                padding: '3px 10px',
                            }}>Live</span>
                        </div>

                        {/* Industry chips */}
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: '#8aa0b0',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                display: 'block',
                                marginBottom: '8px',
                            }}>Your trade</label>
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {industries.map(item => (
                                    <button
                                        key={item.key}
                                        onClick={() => handleIndustry(item.key as Industry)}
                                        style={{
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            padding: '6px 12px',
                                            borderRadius: '999px',
                                            border: ind === item.key
                                                ? '1.5px solid var(--navy)'
                                                : '1.5px solid #e0e8ed',
                                            background: ind === item.key ? 'var(--navy)' : 'transparent',
                                            color: ind === item.key ? '#fff' : '#4a6070',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s',
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sliders */}
                        {[
                            { label: 'Avg spend per visit', value: spend, set: setSpend, min: 3, max: 200, step: 0.5, fmt: (v: number) => `$${v.toFixed(2)}` },
                            { label: 'Approx. regulars', value: regs, set: setRegs, min: 10, max: 500, step: 5, fmt: (v: number) => `${v}` },
                            { label: 'Visits per year (each regular)', value: visits, set: setVisits, min: 4, max: 104, step: 2, fmt: (v: number) => `${v}` },
                        ].map(({ label, value, set, min, max, step, fmt }) => (
                            <div key={label} style={{ marginBottom: '16px' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '6px',
                                }}>
                                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#4a6070' }}>
                                        {label}
                                    </label>
                                    <span style={{
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: 'var(--navy)',
                                        background: '#f0f4f7',
                                        padding: '2px 8px',
                                        borderRadius: '6px',
                                    }}>
                                        {fmt(value)}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={min}
                                    max={max}
                                    step={step}
                                    value={value}
                                    onChange={e => set(Number(e.target.value))}
                                    className="calc-slider"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        ))}

                        {/* Reward strength */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: '#8aa0b0',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                display: 'block',
                                marginBottom: '8px',
                            }}>Reward strength</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                {rewards.map(r => (
                                    <button
                                        key={r.key}
                                        onClick={() => setReward(r.key as Reward)}
                                        style={{
                                            padding: '10px 8px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: reward === r.key
                                                ? '1.5px solid var(--navy)'
                                                : '1.5px solid #e0e8ed',
                                            background: reward === r.key ? 'var(--navy)' : 'transparent',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <div style={{
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            color: reward === r.key ? '#fff' : '#4a6070',
                                        }}>{r.label}</div>
                                        <div style={{
                                            fontSize: '11px',
                                            color: reward === r.key ? 'rgba(255,255,255,0.6)' : '#8aa0b0',
                                            marginTop: '2px',
                                        }}>{r.sub}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result */}
                        <div style={{
                            background: 'var(--navy)',
                            borderRadius: 'var(--radius-md)',
                            padding: '20px',
                        }}>
                            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Estimated additional revenue · year 1
                            </p>
                            <div style={{
                                fontSize: 'clamp(28px, 3vw, 38px)',
                                fontWeight: 800,
                                color: 'var(--green)',
                                letterSpacing: '-1px',
                                lineHeight: 1,
                                marginBottom: '6px',
                            }}>
                                {money(net)}
                                <span style={{ fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>/year</span>
                            </div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>
                                Based on <strong style={{ color: '#fff' }}>{regs} regulars</strong> visiting{' '}
                                <strong style={{ color: '#fff' }}>{liftPct}% more often</strong> — after every reward given away.
                            </p>

                            {/* Breakdown */}
                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {[
                                    { label: 'Visit lift from loyalty', value: `+${liftPct}%`, highlight: true },
                                    { label: 'Revenue from regulars (no loyalty)', value: money(baseRev), highlight: false },
                                    { label: 'Cost of rewards given', value: `−${money(totalCost)}`, highlight: false, muted: true },
                                    { label: 'Net additional revenue', value: money(net), highlight: true, net: true },
                                ].map(row => (
                                    <div key={row.label} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingTop: row.net ? '8px' : '0',
                                        borderTop: row.net ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                    }}>
                                        <span style={{
                                            fontSize: '12px',
                                            color: row.net ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)',
                                            fontWeight: row.net ? 600 : 400,
                                        }}>{row.label}</span>
                                        <strong style={{
                                            fontSize: '12px',
                                            color: row.net ? 'var(--green)' : row.muted ? 'rgba(255,100,100,0.8)' : 'rgba(255,255,255,0.8)',
                                        }}>{row.value}</strong>
                                    </div>
                                ))}
                            </div>

                            <p style={{
                                fontSize: '11px',
                                color: 'rgba(255,255,255,0.3)',
                                marginTop: '14px',
                                lineHeight: 1.5,
                            }}>
                                Industry research: loyalty members visit 12–52% more than non-members, depending on reward quality.
                            </p>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}