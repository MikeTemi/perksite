import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export default function FinalCTA() {
    return (
        <section style={{
            background: 'var(--navy)',
            padding: '100px 40px',
            textAlign: 'center',
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <RevealOnScroll>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        fontWeight: 800,
                        color: 'var(--white)',
                        lineHeight: 1.08,
                        letterSpacing: '-1.5px',
                        marginBottom: '20px',
                    }}>
                        Know your regulars.<br />
                        <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>
                            Before they slip away.
                        </em>
                    </h2>

                    <p style={{
                        fontSize: '16px',
                        color: 'var(--on-n)',
                        lineHeight: 1.65,
                        marginBottom: '36px',
                    }}>
                        Start on the Free plan and have your first stamp card live this
                        afternoon. Upgrade only when the numbers tell you to.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '24px',
                    }}>
                        <Link href="/pricing" className="btn btn-lg btn-primary">
                            Start free →
                        </Link>
                        <Link href="/retention-101" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '15px 28px',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: 'var(--white)',
                            border: '1.5px solid rgba(255,255,255,0.25)',
                            borderRadius: '999px',
                            textDecoration: 'none',
                            transition: 'border-color 0.15s',
                        }}
                            className="ghost-cta-btn"
                        >
                            Read Retention 101
                        </Link>
                    </div>

                    <p style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.3)',
                    }}>
                        No credit card · 1 published card · 1 active offer · 4 live KPIs
                    </p>
                </RevealOnScroll>
            </div>
        </section>
    );
}