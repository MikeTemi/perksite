'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const sections = [
    {
        title: 'Loyalty Card Management',
        rows: [
            { feature: 'Published stamp cards', free: '1', starter: '1', growth: '10', custom: 'Unlimited' },
            { feature: 'Draft cards', free: '999', starter: '999', growth: '999', custom: 'Unlimited' },
        ],
    },
    {
        title: 'Offer Management',
        rows: [
            { feature: 'Active offers', free: '1', starter: '3', growth: '20', custom: 'Unlimited' },
            { feature: 'Offer types', free: 'Basic', starter: 'Basic', growth: 'Full', custom: 'Full' },
        ],
    },
    {
        title: 'Analytics',
        rows: [
            { feature: 'KPI dashboard', free: '✓', starter: '✓', growth: '✓', custom: '✓' },
            { feature: 'Charts & exports', free: '×', starter: '×', growth: '✓', custom: '✓' },
            { feature: 'Customer filters', free: '×', starter: '×', growth: '✓', custom: '✓' },
        ],
    },
    {
        title: 'Communications',
        rows: [
            { feature: 'Push notifications', free: '0', starter: '0', growth: '1,000', custom: 'Unlimited' },
            { feature: 'SMS', free: '0', starter: '0', growth: '500', custom: 'Unlimited' },
            { feature: 'Email', free: '0', starter: '0', growth: '500', custom: 'Unlimited' },
        ],
    },
    {
        title: 'Locations',
        rows: [
            { feature: 'Max locations', free: '1', starter: '1', growth: '1–3', custom: 'Unlimited' },
        ],
    },
];

const colStyle = (featured: boolean) => ({
    background: featured ? 'var(--navy)' : 'transparent',
    color: featured ? 'var(--white)' : 'var(--navy)',
    padding: '8px 16px',
    textAlign: 'center' as const,
    fontSize: '13px',
});

export default function ComparisonTable() {
    const [open, setOpen] = useState(false);

    return (
        <section style={{
            background: '#f7f9fb',
            padding: '40px 40px 60px',
        }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
                <RevealOnScroll>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <h2 className="h1" style={{ color: 'var(--navy)', marginBottom: '8px' }}>
                            The complete{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>
                                side-by-side breakdown.
                            </em>
                        </h2>
                        <p style={{ fontSize: '15px', color: '#6b8fa8' }}>
                            Every limit, every feature, all four plans.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <button
                            onClick={() => setOpen(!open)}
                            style={{
                                fontSize: '14px',
                                fontWeight: 700,
                                color: 'var(--navy)',
                                background: 'transparent',
                                border: '1.5px solid #e0e8ed',
                                borderRadius: '999px',
                                padding: '10px 24px',
                                cursor: 'pointer',
                                transition: 'all 0.15s',
                            }}
                            className="compare-toggle-btn"
                        >
                            {open ? 'Hide breakdown ↑' : 'See the full breakdown ↓'}
                        </button>
                    </div>

                    {open && (
                        <div style={{
                            background: '#fff',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #e8edf2',
                            overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                        }}>
                            {/* Header row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                borderBottom: '1px solid #e8edf2',
                            }}>
                                <div style={{ padding: '16px', fontSize: '13px', fontWeight: 700, color: '#8aa0b0' }}>
                                    Features
                                </div>
                                {['Free', 'Starter', 'Growth', 'Custom'].map((plan, i) => (
                                    <div key={plan} style={{
                                        ...colStyle(i === 2),
                                        padding: '16px',
                                        fontWeight: 700,
                                        fontSize: '13px',
                                        borderBottom: i === 2 ? '2px solid var(--green)' : 'none',
                                    }}>
                                        {plan}
                                    </div>
                                ))}
                            </div>

                            {/* Sections */}
                            {sections.map(section => (
                                <div key={section.title}>
                                    {/* Section header */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                        background: '#f7f9fb',
                                        borderTop: '1px solid #e8edf2',
                                        borderBottom: '1px solid #e8edf2',
                                    }}>
                                        <div style={{
                                            padding: '10px 16px',
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            color: '#8aa0b0',
                                            gridColumn: '1 / -1',
                                        }}>
                                            {section.title}
                                        </div>
                                    </div>

                                    {/* Rows */}
                                    {section.rows.map((row, ri) => (
                                        <div key={row.feature} style={{
                                            display: 'grid',
                                            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                            borderBottom: ri < section.rows.length - 1
                                                ? '1px solid #f0f4f7' : 'none',
                                        }}>
                                            <div style={{
                                                padding: '12px 16px',
                                                fontSize: '13px',
                                                color: '#4a6070',
                                            }}>
                                                {row.feature}
                                            </div>
                                            {[row.free, row.starter, row.growth, row.custom].map((val, vi) => (
                                                <div key={vi} style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'center',
                                                    fontSize: '13px',
                                                    background: vi === 2 ? 'rgba(4,41,64,0.03)' : 'transparent',
                                                    color: val === '✓' ? 'var(--green2)'
                                                        : val === '×' ? '#ccd8e0'
                                                            : vi === 2 ? 'var(--navy)' : '#4a6070',
                                                    fontWeight: val === '✓' || val === '×' ? 700 : 500,
                                                }}>
                                                    {val}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <p style={{
                                padding: '16px',
                                fontSize: '12px',
                                color: '#8aa0b0',
                                textAlign: 'center',
                                borderTop: '1px solid #e8edf2',
                            }}>
                                Yearly billing saves ~2 months on every paid tier · cancel any time.
                            </p>
                        </div>
                    )}
                </RevealOnScroll>
            </div>
        </section>
    );
}