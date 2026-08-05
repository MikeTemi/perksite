'use client'

import RevealOnScroll from '@/components/shared/RevealOnScroll';

const callouts = [
    {
        num: '01 · STAMPS',
        title: 'What\'s happening at the counter',
        body: 'Every QR scan, in real time. See the morning rush, the Saturday spike, the Tuesday lull.',
    },
    {
        num: '02 · REDEMPTIONS',
        title: 'Rewards walking out the door',
        body: 'How many earned a free coffee this fortnight, and the win-back lift after each one.',
    },
    {
        num: '03 · JOINS',
        title: 'New regulars, named',
        body: 'First-name, first-visit, first order. Every new sign-up by week, against your trend.',
    },
    {
        num: '04 · TOTAL CUSTOMERS',
        title: 'Your real audience size',
        body: 'Not Instagram followers. Not email subscribers. People who\'ve actually walked in.',
    },
];

export default function DashboardBigshot() {
    return (
        <section className="section-padding" style={{
            background: '#f0f4f7',
        }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

                {/* Header */}
                <RevealOnScroll>
                    <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
                        <p className="subline">Inside the portal · what you see</p>
                        <h2 className="h1" style={{ color: 'var(--navy)', margin: '12px 0 16px' }}>
                            One screen.{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>
                                The four numbers that matter.
                            </em>
                        </h2>
                        <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#4a6070' }}>
                            Stamps, redemptions, joiners, total customers, all live, all on every plan.
                            The Free tier shows the KPI counts; paid plans unlock the chart, filters and activity feed.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Dashboard image */}
                <RevealOnScroll delay={1}>
                    <div style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(0,0,0,0.06)',
                        marginBottom: '48px',
                    }}>
                        <img
                            src="/images/dashboard.png"
                            alt="Perk+ business dashboard"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                </RevealOnScroll>

                {/* Callouts grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                }} className="callouts-grid">
                    {callouts.map((c, i) => (
                        <RevealOnScroll key={c.num} delay={i as 0 | 1 | 2 | 3} className="h-full">
                            <div style={{
                                background: '#fff',
                                borderRadius: 'var(--radius-md)',
                                padding: '24px',
                                border: '1px solid rgba(0,0,0,0.06)',
                                height: '100%',
                            }}>
                                <p style={{
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '1.5px',
                                    color: 'var(--green2)',
                                    marginBottom: '10px',
                                }}>
                                    {c.num}
                                </p>
                                <h5 style={{
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    color: 'var(--navy)',
                                    marginBottom: '8px',
                                    lineHeight: 1.3,
                                }}>
                                    {c.title}
                                </h5>
                                <p style={{
                                    fontSize: '13px',
                                    color: '#6b8fa8',
                                    lineHeight: 1.6,
                                }}>
                                    {c.body}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
}