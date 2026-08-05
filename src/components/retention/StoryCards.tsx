import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const stories = [
    {
        img: '/images/social-coffee.jpg',
        meta: 'Café · Brisbane',
        title: 'Fisherman\'s Daughter, 9 coffees, 1 free.',
        body: 'Old card was a coaster. New card is a database. Same offer, but now they know the names of their best 50 regulars.',
        cite: 'In partnership · live since Q3',
        accent: false,
    },
    {
        img: '/images/social-barber.jpg',
        meta: 'Barber · West End',
        title: 'Royal Fades, 5 cuts, the 6th free.',
        body: 'Higher ticket, longer cycle, harder to track on paper. Perk+ catches the 8-week-no-visit pattern before it becomes a 12-week one.',
        cite: 'Live since Q4',
        accent: true,
    },
    {
        img: '/images/social-paper.jpg',
        meta: 'The switch',
        title: 'Still using paper? It\'s not telling you anything.',
        body: 'Paper doesn\'t lose customers, it just doesn\'t tell you they\'re gone. One QR replaces the stamp pad, the binder, the spreadsheet, and the guesswork.',
        cite: '',
        accent: false,
    },
];

export default function StoryCards() {
    return (
        <section className="section-padding" style={{
            background: 'var(--navy)',
        }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '48px',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    <RevealOnScroll>
                        <p className="subline subline-light">Stories from the counter</p>
                        <h2 className="h1 h1-light" style={{ margin: '12px 0 0' }}>
                            The same offer.{' '}
                            <em>Better intelligence.</em>
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={1}>
                        <Link href="/pricing" style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: 'var(--white)',
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '10px 20px',
                            textDecoration: 'none',
                            transition: 'all 0.15s',
                        }}>
                            See plans →
                        </Link>
                    </RevealOnScroll>
                </div>

                {/* Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                }} className="story-grid">
                    {stories.map((story, i) => (
                        <RevealOnScroll key={story.title} delay={i as 0 | 1 | 2}>
                            <div style={{
                                background: story.accent
                                    ? 'rgba(245,166,35,0.06)'
                                    : 'rgba(255,255,255,0.04)',
                                border: story.accent
                                    ? '1px solid rgba(245,166,35,0.2)'
                                    : '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                {/* Image */}
                                <div style={{
                                    height: '200px',
                                    background: 'rgba(255,255,255,0.04)',
                                    overflow: 'hidden',
                                }}>
                                    <img
                                        src={story.img}
                                        alt={story.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>

                                {/* Body */}
                                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        letterSpacing: '1.5px',
                                        textTransform: 'uppercase',
                                        color: story.accent ? 'var(--amber)' : 'var(--g2)',
                                    }}>
                                        {story.meta}
                                    </span>
                                    <h4 style={{
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--white)',
                                        lineHeight: 1.3,
                                    }}>
                                        {story.title}
                                    </h4>
                                    <p style={{
                                        fontSize: '13px',
                                        color: 'var(--on-n)',
                                        lineHeight: 1.65,
                                        flex: 1,
                                    }}>
                                        {story.body}
                                    </p>
                                    {story.cite && (
                                        <span style={{
                                            fontSize: '11px',
                                            color: 'rgba(255,255,255,0.3)',
                                            marginTop: '4px',
                                        }}>
                                            {story.cite}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
}