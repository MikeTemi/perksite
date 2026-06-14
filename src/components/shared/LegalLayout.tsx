import Link from 'next/link';

interface Section {
    id: number;
    title: string;
    content: string;
}

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    intro?: React.ReactNode;
    sections: Section[];
    contactTitle: string;
    contactBody: string;
}


export default function LegalLayout({
    title,
    lastUpdated,
    intro,
    sections,
    contactTitle,
    contactBody,
}: LegalLayoutProps) {
    return (
        <main>
            {/* Hero */}
            <section style={{
                background: 'var(--navy)',
                padding: '80px 40px 64px',
                textAlign: 'center',
            }}>
                <h1 style={{
                    fontSize: 'clamp(28px, 4vw, 48px)',
                    fontWeight: 800,
                    color: 'var(--white)',
                    letterSpacing: '-1px',
                    lineHeight: 1.1,
                }}>
                    {title}
                </h1>
                <p style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '12px',
                }}>
                    {lastUpdated}
                </p>
            </section>

            {/* Content */}
            <section style={{
                background: '#fff',
                padding: '80px 40px',
            }}>
                <div style={{
                    maxWidth: '720px',
                    margin: '0 auto',
                }}>

                    {/* Intro */}
                    {intro && (
                        <div style={{
                            fontSize: '15px',
                            lineHeight: 1.8,
                            color: '#4a6070',
                            marginBottom: '48px',
                            paddingBottom: '32px',
                            borderBottom: '1px solid #e8edf2',
                        }}>
                            {intro}
                        </div>
                    )}

                    {/* Sections */}
                    {sections.map(section => (
                        <div key={section.id} style={{ marginBottom: '40px' }}>
                            <h2 style={{
                                fontSize: '16px',
                                fontWeight: 700,
                                color: 'var(--navy)',
                                marginBottom: '12px',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'baseline',
                            }}>
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    color: 'var(--green2)',
                                    background: 'rgba(46,232,158,0.08)',
                                    border: '1px solid rgba(46,232,158,0.2)',
                                    borderRadius: '999px',
                                    padding: '2px 8px',
                                    flexShrink: 0,
                                }}>
                                    {section.id}
                                </span>
                                {section.title}
                            </h2>
                            <div
                                style={{
                                    fontSize: '15px',
                                    lineHeight: 1.8,
                                    color: '#4a6070',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: section.content
                                        .replace(/style="[^"]*"/g, '')
                                        .replace(/<ul>/g, '<ul style="padding-left:24px;margin:8px 0 16px;list-style-type:disc;">')
                                        .replace(/<li>/g, '<li style="margin-bottom:6px;color:#4a6070;font-size:15px;line-height:1.8;">'),
                                }}
                            />
                        </div>
                    ))}

                    {/* Contact */}
                    <div style={{
                        marginTop: '48px',
                        paddingTop: '32px',
                        borderTop: '1px solid #e8edf2',
                    }}>
                        <h2 style={{
                            fontSize: '16px',
                            fontWeight: 700,
                            color: 'var(--navy)',
                            marginBottom: '12px',
                        }}>
                            {contactTitle}
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: 1.8,
                            color: '#4a6070',
                        }}>
                            {contactBody}{' '}
                            <Link
                                href="mailto:support@perkplus.com.au"
                                style={{ color: 'var(--navy)', fontWeight: 600 }}
                            >
                                support@perkplus.com.au
                            </Link>
                        </p>
                    </div>

                    {/* Back link */}
                    <div style={{ marginTop: '48px' }}>
                        <Link href="/" style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--navy)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            opacity: 0.6,
                            transition: 'opacity 0.15s',
                        }}
                            className="back-link"
                        >
                            ← Back to Perk+
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}