'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const trades = [
    "café's", "barber's", "bakery's", "salon's", "pub's",
    "pizzeria's", "restaurant's", "retail shop's", "gelato bar's", "studio's"
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
        <section className="hero">
            <div className="hero-inner">

                {/* Left, copy */}
                <RevealOnScroll>
                    <p className="subline subline-light">
                        For local business owners · Your partner in rewards &amp; benefits
                    </p>

                    <h1 className="h-display">
                        Keep regulars.<br />
                        <em>Win new ones.</em>
                    </h1>

                    <p className="hero-sub">
                        One QR on the counter does both: brings your{' '}
                        <span className={`cycle-trade ${fading ? 'swap' : ''}`} id="cycleTrade">
                            {trades[tradeIndex]}
                        </span>{' '}
                        regulars back, and puts you on the rewards map every Perk+ customer nearby is already using.{' '}
                        <strong>
                            No new hardware. No paper card.
                        </strong>
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas">
                        <a href="https://dashboard.perkplus.com.au/register" className="btn btn-lg btn-primary">
                            Start free
                        </a>
                        <a href="#calc" className="btn-text">
                            See what your regulars are worth
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="hero-trust">
                        {['Free tier, no card', '30-day trial on paid', 'Cancel any time'].map(badge => (
                            <span key={badge}>
                                <span className="check">✓</span>
                                {badge}
                            </span>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Right, phone mockup */}
                <RevealOnScroll delay={2}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="video-phone">
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            >
                                <source src="/videos/perk-journey.mp4" type="video/mp4" />
                            </video>

                            {/* Sound overlay */}
                            {muted && (
                                <div className="video-play-overlay" onClick={handleUnmute}>
                                    <button className="video-play-btn" aria-label="Unmute video">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" />
                                        </svg>
                                    </button>
                                    <span className="video-play-label">Tap for sound</span>
                                </div>
                            )}
                        </div>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}