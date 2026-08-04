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
    { label: 'Contact', href: '/contact' },
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
                            
                            {col.title === 'For customers' ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <a 
                                        href="https://apps.apple.com/ng/app/perk/id6759068792" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ 
                                            display: 'inline-flex', alignItems: 'center', gap: '12px', 
                                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                                            borderRadius: '8px', padding: '8px 16px', color: '#fff', 
                                            textDecoration: 'none', transition: 'all 0.2s', width: 'fit-content'
                                        }} 
                                        className="store-btn"
                                    >
                                        <svg viewBox="0 0 384 512" width="22" height="22" fill="currentColor">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                        </svg>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '10px', lineHeight: 1, opacity: 0.7, marginBottom: '2px' }}>Download on the</span>
                                            <span style={{ fontSize: '15px', lineHeight: 1, fontWeight: 600 }}>App Store</span>
                                        </div>
                                    </a>
                                    <a 
                                        href="https://play.google.com/store/apps/details?id=com.perkplus.perkplus" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ 
                                            display: 'inline-flex', alignItems: 'center', gap: '12px', 
                                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                                            borderRadius: '8px', padding: '8px 16px', color: '#fff', 
                                            textDecoration: 'none', transition: 'all 0.2s', width: 'fit-content'
                                        }} 
                                        className="store-btn"
                                    >
                                        <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                        </svg>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '10px', lineHeight: 1, opacity: 0.7, marginBottom: '2px' }}>GET IT ON</span>
                                            <span style={{ fontSize: '15px', lineHeight: 1, fontWeight: 600 }}>Google Play</span>
                                        </div>
                                    </a>
                                </div>
                            ) : (
                                col.links.map(link => (
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
                                ))
                            )}
                        </div>
                    ))}
                    <style dangerouslySetInnerHTML={{__html: `
                        .store-btn:hover { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.2) !important; transform: translateY(-2px); }
                    `}} />
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