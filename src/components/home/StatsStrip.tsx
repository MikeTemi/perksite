import RevealOnScroll from '@/components/shared/RevealOnScroll';

const stats = [
    {
        num: '5×',
        label: 'Acquiring a new customer costs ',
        bold: '5–25× more',
        end: ' than keeping an existing one',
    },
    {
        num: '+25%',
        label: 'A ',
        bold: '5% lift in retention',
        end: ' typically grows profit by 25–95%',
    },
    {
        num: '68%',
        label: 'Of small-business revenue comes from ',
        bold: 'repeat customers',
        end: ' — most owners can\'t name them',
    },
    {
        num: '15 days',
        label: 'The window before a regular\'s drift becomes a permanent loss to another café',
        bold: '',
        end: '',
    },
];

export default function StatsStrip() {
    return (
        <section style={{
            background: '#050e15',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '20px 40px',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
            }} className="stats-grid">
                {stats.map((stat, i) => (
                    <RevealOnScroll key={stat.num} delay={i as 0 | 1 | 2 | 3}>
                        <div style={{
                            padding: '8px 32px 8px',
                            borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            paddingLeft: i === 0 ? '0' : '32px',
                        }}>
                            <div style={{
                                fontSize: 'clamp(24px, 2.5vw, 34px)',
                                fontWeight: 700,
                                color: 'var(--green)',
                                letterSpacing: '-1px',
                                lineHeight: 1,
                                marginBottom: '12px',
                            }}>
                                {stat.num}
                            </div>
                            <p style={{
                                fontSize: '13px',
                                lineHeight: 1.65,
                                color: 'rgba(255,255,255,0.5)',
                            }}>
                                {stat.label}
                                <strong style={{ color: 'var(--white)', fontWeight: 700 }}>
                                    {stat.bold}
                                </strong>
                                {stat.end}
                            </p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}