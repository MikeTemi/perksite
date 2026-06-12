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
        <section className="stats">
            <div className="stats-inner">
                {stats.map((stat, i) => (
                    <RevealOnScroll key={stat.num} delay={i as 0 | 1 | 2 | 3} className="stat-cell">
                        <div className="stat-num">{stat.num}</div>
                        <p className="stat-label">
                            {stat.label}
                            {stat.bold && <strong>{stat.bold}</strong>}
                            {stat.end}
                        </p>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}