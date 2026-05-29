'use client'

import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export default function DashboardPreview() {
    return (
        <section style={{
            background: '#f0f4f7',
            padding: '100px 40px',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
            }}>

                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    maxWidth: '640px',
                    margin: '0 auto 48px',
                }}>
                    <RevealOnScroll>
                        <p className="subline">Inside the portal · what you see</p>
                        <h2 className="h1" style={{
                            color: 'var(--navy)',
                            margin: '12px 0 16px',
                        }}>
                            One screen.{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>
                                The four numbers that matter.
                            </em>
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: 1.65,
                            color: '#4a6070',
                        }}>
                            Stamps, redemptions, joiners, total customers — all live, all
                            on every plan. The Free tier shows the KPI counts; paid plans
                            unlock the chart, filters and activity feed.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Dashboard image */}
                <RevealOnScroll delay={1}>
                    <div style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(0,0,0,0.06)',
                        position: 'relative',
                    }}>
                        <img
                            src="/images/dashboard.png"
                            alt="Perk+ business dashboard"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                </RevealOnScroll>

                {/* CTA */}
                <RevealOnScroll delay={2}>
                    <div style={{ textAlign: 'center', marginTop: '36px' }}>
                        <Link href="/how-it-works" className="btn btn-md btn-primary">
                            See the full product walkthrough →
                        </Link>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}