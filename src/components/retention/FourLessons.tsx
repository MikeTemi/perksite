import RevealOnScroll from '@/components/shared/RevealOnScroll';

const points = [
    {
        num: '1',
        text: 'Acquisition is loud, retention is silent.',
        body: 'You hear about the new customer. You don\'t hear about the regular you lost six weeks ago.',
    },
    {
        num: '2',
        text: 'Drift happens in fortnights, not days.',
        body: 'Regulars don\'t quit on a Tuesday. They skip a week, then a fortnight, then a month. By the time you notice, the chain has them.',
    },
    {
        num: '3',
        text: 'One nudge resets the clock.',
        body: 'A "we miss you, here\'s a free coffee" sent at day 15 wins them back ~40% of the time. Sent at day 60, almost never.',
    },
    {
        num: '4',
        text: 'The reward is the cheapest part.',
        body: 'A free coffee is $2. A new customer through Instagram ads is $40+. The maths of loyalty isn\'t even close.',
    },
];

const bars = [
    { height: 78, week: 'W1', type: 'good' },
    { height: 82, week: 'W2', type: 'good' },
    { height: 74, week: 'W3', type: 'good' },
    { height: 48, week: 'W4', type: 'warn' },
    { height: 36, week: 'W5', type: 'warn' },
    { height: 24, week: 'W6', type: 'warn' },
    { height: 12, week: 'W7', type: 'alert' },
    { height: 6, week: 'W8', type: 'alert' },
    { height: 2, week: 'W9', type: 'alert' },
];

const barColors = {
    good: 'var(--green)',
    warn: 'var(--amber)',
    alert: '#ff6b6b',
};

export default function FourLessons() {
    return (
        <section style={{
            background: 'var(--navy)',
            padding: '100px 40px',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '72px',
                alignItems: 'start',
            }} className="lessons-grid">

                {/* Left, lessons */}
                <RevealOnScroll>
                    <p className="subline subline-light">
                        Retention 101 · the part nobody teaches
                    </p>
                    <h2 className="h1 h1-light" style={{ margin: '12px 0 16px' }}>
                        The loyalty card was never the point.{' '}
                        <em>Knowing the customer was.</em>
                    </h2>
                    <p style={{
                        fontSize: '14px',
                        color: 'var(--on-n)',
                        lineHeight: 1.7,
                        marginBottom: '28px',
                    }}>
                        A paper card tracks <strong style={{ color: 'var(--white)' }}>visits</strong>.
                        It can't tell you who's drifting, what they buy, or when they last came in.
                        Perk+ is the same idea, punch, reward, return, but the data underneath
                        is the actual product.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {points.map(p => (
                            <div key={p.num} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    background: 'rgba(95,255,159,0.12)',
                                    border: '1px solid rgba(95,255,159,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'var(--green)',
                                    flexShrink: 0,
                                    marginTop: '2px',
                                }}>
                                    {p.num}
                                </div>
                                <div>
                                    <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--on-n)' }}>
                                        <strong style={{ color: 'var(--white)' }}>{p.text}</strong>{' '}
                                        {p.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Right, lifecycle chart */}
                <RevealOnScroll delay={2}>
                    <div style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '28px',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '20px',
                        }}>
                            <div>
                                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--white)' }}>
                                    A regular's 90-day pulse
                                </p>
                                <p style={{ fontSize: '12px', color: 'var(--on-n)', marginTop: '2px' }}>
                                    Visits per fortnight · without Perk+
                                </p>
                            </div>
                        </div>

                        {/* Bar chart */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '8px',
                            height: '120px',
                            marginBottom: '12px',
                        }}>
                            {bars.map((bar, i) => (
                                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}>
                                    <div style={{
                                        width: '100%',
                                        height: `${bar.height}%`,
                                        background: barColors[bar.type as keyof typeof barColors],
                                        borderRadius: '4px 4px 0 0',
                                        opacity: 0.85,
                                        transition: 'height 0.3s ease',
                                    }} />
                                </div>
                            ))}
                        </div>

                        {/* Week labels */}
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                            {bars.map((bar, i) => (
                                <div key={i} style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    fontSize: '10px',
                                    color: 'rgba(255,255,255,0.3)',
                                }}>
                                    {bar.week}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            flexWrap: 'wrap',
                            marginBottom: '16px',
                        }}>
                            {[
                                { color: 'var(--green)', label: 'Regular (4+ visits/fortnight)' },
                                { color: 'var(--amber)', label: 'Drifting (15-day gap)' },
                                { color: '#ff6b6b', label: 'Lost (45+ days)' },
                            ].map(item => (
                                <span key={item.label} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '11px',
                                    color: 'var(--on-n)',
                                }}>
                                    <span style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '2px',
                                        background: item.color,
                                        flexShrink: 0,
                                    }} />
                                    {item.label}
                                </span>
                            ))}
                        </div>

                        <p style={{
                            fontSize: '12px',
                            color: 'var(--on-n)',
                            lineHeight: 1.55,
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            paddingTop: '14px',
                        }}>
                            <strong style={{ color: 'var(--amber)' }}>Where Perk+ steps in:</strong>{' '}
                            the moment a regular's gap hits the amber band, an alert lands in your
                            portal, with a one-tap "we miss you" message ready to send.
                        </p>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}