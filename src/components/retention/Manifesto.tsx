import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export default function Manifesto() {
    return (
        <section className="section-padding" style={{
            background: '#061824',
        }}>
            <div style={{
                maxWidth: '720px',
                margin: '0 auto',
                textAlign: 'center',
            }}>
                <RevealOnScroll>
                    <p className="subline subline-light" style={{ marginBottom: '32px' }}>
                        The hard truth · why local businesses struggle to survive
                    </p>

                    <blockquote style={{
                        fontSize: 'clamp(22px, 3vw, 32px)',
                        fontWeight: 700,
                        color: 'var(--white)',
                        lineHeight: 1.4,
                        letterSpacing: '-0.5px',
                        marginBottom: '28px',
                        fontStyle: 'normal',
                    }}>
                        <span style={{
                            fontSize: '80px',
                            color: 'var(--green)',
                            lineHeight: 0.5,
                            display: 'block',
                            marginBottom: '16px',
                            opacity: 0.4,
                        }}>"</span>
                        You don't lose a regular in one big moment.<br />
                        You lose them in{' '}
                        <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>
                            three quiet weeks
                        </em>{' '}
                        where nobody told you they hadn't been in.
                    </blockquote>

                    <p style={{
                        fontSize: '16px',
                        color: 'var(--on-n)',
                        lineHeight: 1.7,
                        marginBottom: '32px',
                    }}>
                        The data was always there.{' '}
                        <strong style={{ color: 'var(--white)' }}>
                            Paper just couldn't show it to you.
                        </strong>{' '}
                        Perk+ turns the silent drift into a single tap,{' '}
                        <em style={{ color: 'var(--green)' }}>
                            "send all three a we-miss-you."
                        </em>{' '}
                        That's the whole thing.
                    </p>

                    <Link href="/how-it-works" className="btn btn-lg btn-primary">
                        See how Perk+ does it →
                    </Link>
                </RevealOnScroll>
            </div>
        </section>
    );
}