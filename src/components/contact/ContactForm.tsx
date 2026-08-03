'use client'

import React, { useState, useEffect, useRef } from 'react';

const reasonOptions = [
    { value: 'sales', label: 'Sales Inquiry' },
    { value: 'support', label: 'General Support' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
];

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [reason, setReason] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Simulate a network request
        setTimeout(() => {
            setStatus('success');
        }, 1200);
    };

    if (status === 'success') {
        return (
            <div style={{
                background: 'var(--white)',
                padding: '40px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-card)',
                textAlign: 'center',
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--green-tint)',
                    color: 'var(--green-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    margin: '0 auto 24px',
                }}>
                    ✓
                </div>
                <h3 className="h2" style={{ marginBottom: '12px' }}>Message Sent!</h3>
                <p className="body" style={{ marginBottom: '24px' }}>
                    Thanks for reaching out. Our team will get back to you shortly.
                </p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="btn btn-ghost"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div style={{
            background: 'var(--white)',
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
        }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="name" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            required 
                            placeholder="Jane Doe"
                            className="form-input"
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="business" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>Business Name</label>
                        <input 
                            type="text" 
                            id="business" 
                            required 
                            placeholder="Jane's Café"
                            className="form-input"
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="jane@example.com"
                        className="form-input"
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>Reason for Contact</label>
                    <div ref={dropdownRef} style={{ position: 'relative' }}>
                        <div 
                            className="form-input" 
                            style={{ 
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderColor: isDropdownOpen ? 'var(--green-mid)' : 'var(--line)',
                                boxShadow: isDropdownOpen ? '0 0 0 3px var(--green-tint)' : 'none',
                                color: reason ? 'var(--navy)' : 'rgba(4, 41, 64, 0.6)'
                            }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {reason ? reasonOptions.find(o => o.value === reason)?.label : 'Select a topic...'}
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        
                        {isDropdownOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                marginTop: '8px',
                                background: 'var(--white)',
                                border: '1px solid var(--line)',
                                borderRadius: 'var(--radius-sm)',
                                boxShadow: 'var(--shadow-card)',
                                zIndex: 10,
                                overflow: 'hidden'
                            }}>
                                {reasonOptions.map(opt => (
                                    <div
                                        key={opt.value}
                                        onClick={() => {
                                            setReason(opt.value);
                                            setIsDropdownOpen(false);
                                        }}
                                        style={{
                                            padding: '12px 16px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            background: reason === opt.value ? 'var(--green-tint)' : 'transparent',
                                            color: reason === opt.value ? 'var(--navy)' : 'var(--navy)',
                                            transition: 'all 0.15s',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (reason !== opt.value) e.currentTarget.style.background = 'var(--green-tint)';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (reason !== opt.value) e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        {opt.label}
                                    </div>
                                ))}
                            </div>
                        )}
                        <input type="hidden" name="reason" value={reason} required />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="message" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>Message</label>
                    <textarea 
                        id="message" 
                        required 
                        placeholder="How can we help you?"
                        rows={5}
                        className="form-input"
                        style={{ resize: 'vertical' }}
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary btn-lg" 
                    disabled={status === 'submitting'}
                    style={{ marginTop: '12px', width: '100%' }}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {/* We'll add the .form-input styles in globals.css so they can be reused */}
        </div>
    );
}
