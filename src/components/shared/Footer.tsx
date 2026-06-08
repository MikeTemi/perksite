import Link from 'next/link';

const productLinks = [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Retention 101', href: '/retention-101' },
    { label: 'Pricing', href: '/pricing' },
];

const customerLinks = [
    { label: 'Download iOS', href: '#' },
    { label: 'Download Android', href: '#' },
];

const companyLinks = [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
];

export default function Footer() {
    return (
        <footer style={{
            background: '#050e15',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '42px 24px 20px',
        }}>
            <div style={{
                maxWidth: 'var(--max-w)',
                margin: '0 auto',
                width: "100%",
            }}>

                {/* Main grid */}
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '32px',
                    marginBottom: '32px',
                }}>

                    {/* Brand col */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <img
                            src="/images/perk-blue.png"
                            alt="Perk+"
                            style={{ height: '32px', width: 'auto', objectFit: 'contain', objectPosition: 'left' }}
                        />
                        <p style={{
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.45)',
                            lineHeight: 1.7,
                            maxWidth: '260px',
                        }}>
                            Digital loyalty for local businesses. One QR, no new till, four numbers that actually mean something.
                        </p>
                    </div>

                    {/* Link columns */}
                    {[
                        { title: 'Product', links: productLinks },
                        { title: 'For customers', links: customerLinks },
                        { title: 'Company', links: companyLinks },
                    ].map(col => (
                        <div key={col.title} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}>
                            <h5 style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.6)',
                                marginBottom: '4px',
                            }}>
                                {col.title}
                            </h5>
                            {col.links.map(link => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="footer-link"
                                    style={{
                                        fontSize: '14px',
                                        color: 'rgba(255,255,255,0.35)',
                                        transition: 'color 0.15s',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    maxWidth: 'var(--max-w)',
                    margin: '0 auto',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
                        © 2026 Perk+ · Brisbane, AU
                    </span>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        {[
                            { label: 'Privacy Policy', href: '/privacy-policy' },
                            { label: 'User Terms', href: '/user-terms' },
                            { label: 'Merchant Terms', href: '/merchant-terms' },
                        ].map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{
                                    fontSize: '13px',
                                    color: 'rgba(255,255,255,0.3)',
                                    transition: 'color 0.15s',
                                }}
                                className="footer-link"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
                        Built for the regulars · made in QLD
                    </span>
                </div>

            </div>
        </footer>
    );
}