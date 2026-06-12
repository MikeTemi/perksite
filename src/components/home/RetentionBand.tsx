import Link from 'next/link';

export default function RetentionBand() {
    return (
        <section className="retention-band">
            <div className="retention-band-inner">
                <p className="rb-copy">
                    <strong>Marketing is loud. Retention is quiet.</strong>{' '}
                    <span className="rb-dim">Most local businesses get this backwards — and pay for it.</span>
                </p>

                <Link href="/retention-101" className="rb-link">
                    Read Retention 101
                </Link>
            </div>
        </section>
    );
}