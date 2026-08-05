'use client'

import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

interface PageCTAProps {
    headline: string;
    headlineEm: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    note?: string;
}

export default function PageCTA({
    headline,
    headlineEm,
    body,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    note,
}: PageCTAProps) {
    return (
        <section className="section-padding" style={{
            background: 'var(--navy)',
            textAlign: 'center',
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <RevealOnScroll>
                    <h2 style={{
                        fontSize: 'clamp(28px, 3.5vw, 46px)',
                        fontWeight: 800,
                        color: 'var(--white)',
                        lineHeight: 1.1,
                        letterSpacing: '-1px',
                        marginBottom: '16px',
                    }}>
                        {headline}{' '}
                        <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>
                            {headlineEm}
                        </em>
                    </h2>

                    <p style={{
                        fontSize: '16px',
                        color: 'var(--on-n)',
                        lineHeight: 1.65,
                        marginBottom: '32px',
                    }}>
                        {body}
                    </p>

                    <div className="cta-buttons" style={{
                        marginBottom: note ? '20px' : '0',
                    }}>
                        <Link href={primaryHref} className="btn btn-lg btn-primary" style={{ width: '100%' }}>
                            {primaryLabel}
                        </Link>
                        <Link href={secondaryHref} style={{
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '15px 28px',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: 'var(--white)',
                            border: '1.5px solid rgba(255,255,255,0.25)',
                            borderRadius: '999px',
                            textDecoration: 'none',
                            transition: 'border-color 0.15s',
                            width: '100%',
                        }}
                            className="ghost-cta-btn"
                        >
                            {secondaryLabel}
                        </Link>
                    </div>

                    {note && (
                        <p style={{
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.3)',
                        }}>
                            {note}
                        </p>
                    )}
                </RevealOnScroll>
            </div>
        </section>
    );
}