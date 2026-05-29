import Link from 'next/link';

export default function RetentionBand() {
    return (
        <section style={{
            background: 'var(--green)',
            padding: '20px 40px',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
            }}>
                <p style={{
                    fontSize: '15px',
                    color: 'var(--navy)',
                    lineHeight: 1.5,
                }}>
                    <strong>Marketing is loud. Retention is quiet.</strong>{' '}
                    Most local businesses get this backwards — and pay for it.
                </p>

                <Link href="/retention-101" style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    border: '1.5px solid rgba(4,41,64,0.35)',
                    borderRadius: '999px',
                    padding: '8px 18px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s',
                    textDecoration: 'none',
                    background: 'transparent',
                }}
                    className="retention-band-btn"
                >
                    Read Retention 101 →
                </Link>
            </div>
        </section>
    );
}