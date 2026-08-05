'use client'

import RevealOnScroll from '@/components/shared/RevealOnScroll';

const cards = [
    {
        tag: '01 · Discover',
        tagDark: false,
        bg: 'var(--green)',
        title: 'Walk past, scan, you\'re in.',
        body: 'No app store roulette. The QR on your counter loads the program in 4 seconds, your customer\'s first stamp is already there.',
        img: '/images/discover.jpg',
    },
    {
        tag: '02 · Collect',
        tagDark: false,
        bg: 'var(--cream)',
        title: 'One wallet. Every shop they love.',
        body: 'Their Perk+ wallet stacks every local card they\'ve ever scanned. You don\'t compete for app real-estate, you live alongside their coffee, their cuts, their pizza.',
        img: '/images/collect.jpg',
    },
    {
        tag: '03 · Redeem',
        tagDark: true,
        bg: 'var(--navy)',
        title: 'Free coffee, no awkward conversation.',
        body: 'Reward earned, app shows a code, barista taps it on their portal. 4 seconds at the counter. No paper, no "did you sign a card last time?"',
        img: '/images/redeem.jpg',
    },
];

export default function AppShowcase() {
    return (
        <section className="section-padding" style={{
            background: 'var(--navy)',
        }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

                {/* Header */}
                <RevealOnScroll>
                    <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
                        <p className="subline subline-light">For your customers</p>
                        <h2 className="h1 h1-light" style={{ margin: '12px 0 16px' }}>
                            The customer app does{' '}
                            <em>three things.</em> Beautifully.
                        </h2>
                        <p className="lede lede-light">
                            Built for the regular who doesn't want to download yet another app.
                            Loads in seconds, works offline, only ever asks for a tap.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                }} className="showcase-grid">
                    {cards.map((card, i) => (
                        <RevealOnScroll key={card.tag} delay={i as 0 | 1 | 2}>
                            <div style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}>
                                {/* Visual area */}
                                <div style={{
                                    background: card.bg,
                                    height: '350px',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        top: '16px',
                                        left: '16px',
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        letterSpacing: '1px',
                                        background: card.tagDark ? 'var(--green)' : 'rgba(0,0,0,0.15)',
                                        color: card.tagDark ? 'var(--navy)' : 'rgba(255,255,255,0.9)',
                                        padding: '4px 10px',
                                        borderRadius: '999px',
                                        zIndex: 2,
                                    }}>
                                        {card.tag}
                                    </span>
                                    
                                    {/* Phone Mockup Frame */}
                                    <div style={{
                                        width: '180px',
                                        height: '380px',
                                        marginBottom: '-30px',
                                        background: '#fff',
                                        borderRadius: '24px',
                                        border: '6px solid #1a1a1a',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease',
                                    }} className="phone-mockup">
                                        {/* Simple Notch */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '60px',
                                            height: '14px',
                                            background: '#1a1a1a',
                                            borderBottomLeftRadius: '8px',
                                            borderBottomRightRadius: '8px',
                                            zIndex: 2,
                                        }} />
                                        
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                display: 'block',
                                            }}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Body */}
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    padding: '24px',
                                }}>
                                    <h3 style={{
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        color: 'var(--white)',
                                        marginBottom: '8px',
                                        lineHeight: 1.3,
                                    }}>
                                        {card.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '14px',
                                        color: 'var(--on-n)',
                                        lineHeight: 1.65,
                                    }}>
                                        {card.body}
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
}