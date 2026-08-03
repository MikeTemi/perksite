import React from 'react';

export default function ContactInfo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    fontSize: '18px',
                }}>
                    ✉️
                </div>
                <h3 className="h2 h2-light" style={{ fontSize: '20px', marginBottom: '8px' }}>
                    Email us directly
                </h3>
                <p className="body-light" style={{ marginBottom: '16px' }}>
                    Prefer to use your own email client? Send us a message and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:hello@perksite.local" className="btn-text">
                    hello@perksite.local →
                </a>
            </div>

            <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    fontSize: '18px',
                }}>
                    🕒
                </div>
                <h3 className="h2 h2-light" style={{ fontSize: '20px', marginBottom: '8px' }}>
                    Support Hours
                </h3>
                <p className="body-light">
                    Monday – Friday<br />
                    9:00 AM – 5:00 PM (AEST)<br />
                    <span style={{ opacity: 0.7, fontSize: '14px', display: 'block', marginTop: '8px' }}>
                        *We monitor urgent technical issues 24/7.
                    </span>
                </p>
            </div>

        </div>
    );
}
