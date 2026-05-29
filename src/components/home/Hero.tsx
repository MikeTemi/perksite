'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const trades = [
    "café's", "barber's", "bakery's", "salon's",
    "pub's", "pizzeria's", "restaurant's", "retail shop's",
];

export default function Hero() {
    const [tradeIndex, setTradeIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setTradeIndex(i => (i + 1) % trades.length);
                setFading(false);
            }, 260);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    const handleUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
            setMuted(false);
        }
    };

    return (
        <section style={{
            background: 'var(--navy)',
            padding: '80px 40px 72px',
            minHeight: '88vh',
            display: 'flex',
            alignItems: 'center',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                alignItems: 'center',
            }} className="hero-grid">

                {/* Left — copy */}
                <RevealOnScroll>
                    <p style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: 'rgba(95, 255, 159, 0.7)',
                        marginBottom: '16px',
                        letterSpacing: '0.3px',
                    }}>
                        For local business owners · Your partner in rewards &amp; benefits
                    </p>

                    <h1 className="h-display" style={{ margin: '0 0 20px' }}>
                        Keep regulars.<br />
                        <em>Win new ones.</em>
                    </h1>

                    <p style={{
                        fontSize: '16px',
                        lineHeight: 1.7,
                        color: 'rgba(95, 255, 159, 0.7)',
                        marginBottom: '32px',
                        maxWidth: '480px',
                    }}>
                        One QR on the counter does both: brings your{' '}
                        <em style={{
                            color: 'var(--green)',
                            fontStyle: 'italic',
                            transition: 'opacity 0.26s',
                            opacity: fading ? 0 : 1,
                        }}>
                            {trades[tradeIndex]}
                        </em>{' '}
                        regulars back, and puts you on the rewards map every Perk+ customer nearby is already using.{' '}
                        <strong style={{ color: 'var(--white)', fontWeight: 700 }}>
                            No new hardware. No paper card.
                        </strong>
                    </p>

                    {/* CTAs */}
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '24px',
                    }}>
                        <Link href="/pricing" className="btn btn-lg btn-primary">
                            Start free →
                        </Link>
                        {/* Secondary link */}
                        <Link
                            href="#calc"
                            className="hero-text-link"
                            style={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(255,255,255,0.7)',
                                transition: 'color 0.15s',
                            }}
                        >
                            See what your regulars are worth →
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '24px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: '4px',
                    }}>
                        {['Free tier — no card', '30-day trial on paid', 'Cancel any time'].map(badge => (
                            <span key={badge} style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.7)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                whiteSpace: 'nowrap',
                            }}>
                                <span style={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    border: '1.5px solid var(--green)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '9px',
                                    color: 'var(--green)',
                                    flexShrink: 0,
                                }}>✓</span>
                                {badge}
                            </span>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Right — phone mockup */}
                <RevealOnScroll delay={2}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '300px',
                            height: '580px',
                            background: '#000',
                            borderRadius: '44px',
                            border: '8px solid #222',
                            overflow: 'hidden',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
                        }}>
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                                <source src="/videos/perk-journey.mp4" type="video/mp4" />
                            </video>

                            {/* Sound overlay */}
                            {muted && (
                                <div
                                    onClick={handleUnmute}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        cursor: 'pointer',
                                        background: 'rgba(0,0,0,0.25)',
                                    }}
                                >
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: 'var(--green)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 24px rgba(95,255,159,0.4)',
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--navy)">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" />
                                        </svg>
                                    </div>
                                    <span style={{
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        color: 'white',
                                        textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                                    }}>
                                        Tap for sound
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}