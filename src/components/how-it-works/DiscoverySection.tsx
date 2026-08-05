'use client'

import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const tiles = [
    { num: '5 km', title: 'Discovery radius', body: 'Customers see every Perk+ business within walking, riding or short-drive distance, sorted by who\'s closest.' },
    { num: '0¢', title: 'Cost per impression', body: 'You don\'t bid for slots. The map is alphabetical-by-distance, every paid plan gets the same shelf space.' },
    { num: '3×', title: 'Cross-shop rate', body: 'The average Perk+ customer carries stamps at 3+ local shops. Most of those started as a Discover tap, not a flyer.' },
    { num: '★', title: '"New here" offers', body: 'Pin a first-visit reward to your tile in Discover, "free coffee, your first time", and watch it convert browsers into walk-ins.' },
];

export default function DiscoverySection() {
    return (
        <section className="section-padding" style={{
            background: '#061824',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '72px',
                alignItems: 'center',
            }} className="discovery-grid">

                {/* Left, phone mockup placeholder */}
                <RevealOnScroll>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            width: '260px',
                            height: '520px',
                            background: '#0a1f2e',
                            borderRadius: '40px',
                            border: '6px solid #1a3a50',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Status Bar Mask to cover screen recording and notifications */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '19px',
                                background: '#ffffff',
                                zIndex: 2,
                            }} />

                            <video
                                src="/videos/discover.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Right, copy */}
                <RevealOnScroll delay={1}>
                    <p className="subline subline-light">Discover · the network effect</p>
                    <h2 className="h1 h1-light" style={{ margin: '12px 0 16px' }}>
                        Your customers find you.{' '}
                        <em>Their customers find you too.</em>
                    </h2>
                    <p className="lede lede-light" style={{ marginBottom: '12px' }}>
                        Every regular at the café next door is already in Perk+. When they open the app
                        for their coffee, your offer is sitting{' '}
                        <strong style={{ color: 'var(--white)' }}>5 minutes' walk away.</strong>{' '}
                        That's not advertising. That's distribution.
                    </p>

                    {/* Tiles */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        margin: '28px 0',
                    }}>
                        {tiles.map(tile => (
                            <div key={tile.num} style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 'var(--radius-md)',
                                padding: '16px',
                            }}>
                                <div style={{
                                    fontSize: '22px',
                                    fontWeight: 800,
                                    color: 'var(--green)',
                                    letterSpacing: '-0.5px',
                                    marginBottom: '6px',
                                }}>
                                    {tile.num}
                                </div>
                                <h5 style={{
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    color: 'var(--white)',
                                    marginBottom: '4px',
                                }}>
                                    {tile.title}
                                </h5>
                                <p style={{ fontSize: '12px', color: 'var(--on-n)', lineHeight: 1.5 }}>
                                    {tile.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link href="/pricing" className="btn btn-md btn-primary">
                        Get on the map →
                    </Link>
                </RevealOnScroll>

            </div>
        </section>
    );
}