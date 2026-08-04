import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Contact Details Card */}
            <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px',
            }}>
                <h3 className="h2 h2-light" style={{ fontSize: '24px', marginBottom: '32px' }}>
                    Contact Details
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Email */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            background: 'rgba(95,255,159,0.1)', color: 'var(--green)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <Mail size={18} />
                        </div>
                        <div>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Email</p>
                            <a href="mailto:support@perkplus.com.au" style={{ fontSize: '16px', color: 'var(--white)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} className="contact-link">
                                support@perkplus.com.au
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            background: 'rgba(95,255,159,0.1)', color: 'var(--green)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <Phone size={18} />
                        </div>
                        <div>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Phone</p>
                            <a href="tel:+61420551377" style={{ fontSize: '16px', color: 'var(--white)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} className="contact-link">
                                +61 420 551 377
                            </a>
                        </div>
                    </div>

                    {/* Office Address */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '50%',
                            background: 'rgba(95,255,159,0.1)', color: 'var(--green)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <MapPin size={18} />
                        </div>
                        <div>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Office Address</p>
                            <p style={{ fontSize: '16px', color: 'var(--white)', lineHeight: 1.5, fontWeight: 400 }}>
                                5 Archibald Street<br/>
                                Greenbank 4124<br/>
                                Brisbane QLD
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Hours Card */}
            <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px',
            }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: 'rgba(95,255,159,0.1)', color: 'var(--green)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <Clock size={18} />
                    </div>
                    <div>
                        <h3 className="h2 h2-light" style={{ fontSize: '20px', marginBottom: '8px', lineHeight: 1 }}>
                            Support Hours
                        </h3>
                        <p style={{ fontSize: '15px', color: 'var(--white)', lineHeight: 1.6, marginBottom: '8px' }}>
                            Monday – Friday<br />
                            8:00 AM – 5:00 PM
                        </p>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                            *We monitor urgent technical issues 24/7.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Inline styles for hover effects */}
            <style dangerouslySetInnerHTML={{__html: `
                .contact-link:hover { color: var(--green) !important; }
            `}} />
        </div>
    );
}
