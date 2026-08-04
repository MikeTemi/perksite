'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const plans = [
    {
        label: 'FREE FOREVER',
        price: '$0',
        per: '/mo',
        priceAnnual: '$0',
        perAnnual: '/yr',
        name: 'Free',
        note: 'No card · no expiry · forever',
        summary: '1 stamp card, 1 offer, 1 location. View-only analytics, customer profiles.',
        cta: 'Select Free →',
        ctaHref: 'https://dashboard.perkplus.com.au/register',
        featured: false,
    },
    {
        label: 'FOR SMALL BUSINESS',
        price: '$9.99',
        per: '/mo',
        priceAnnual: '$99.99',
        perAnnual: '/yr',
        name: 'Starter',
        note: '30-day free trial · no card',
        summary: '3 offers, analytics summary, basic customer list, communications.',
        cta: 'Select Starter →',
        ctaHref: 'https://dashboard.perkplus.com.au/register',
        featured: false,
    },
    {
        label: '★ RECOMMENDED',
        price: '$19.99',
        per: '/mo',
        priceAnnual: '$199.99',
        perAnnual: '/yr',
        name: 'Growth',
        note: '30-day free trial · cancel any time',
        summary: '10 stamp cards, 20 offers, 1–3 locations. Full analytics, Push/SMS/Email.',
        cta: 'Select Growth →',
        ctaHref: 'https://dashboard.perkplus.com.au/register',
        featured: true,
    },
    {
        label: 'MULTI-LOCATION',
        price: 'Contact us',
        per: '',
        priceAnnual: 'Contact us',
        perAnnual: '',
        name: 'Custom',
        note: 'Tailored to your business',
        summary: 'Unlimited cards, locations & offers. Advanced analytics, priority support.',
        cta: 'Contact us →',
        ctaHref: '/contact',
        featured: false,
    },
];

export default function PricingCards() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section style={{
            background: '#fff',
            padding: '40px 40px 60px',
        }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
                
                {/* Toggle */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '48px'
                }}>
                    <div style={{
                        background: '#f2f5f8',
                        borderRadius: '100px',
                        padding: '4px',
                        display: 'inline-flex',
                        position: 'relative'
                    }}>
                        <button 
                            onClick={() => setIsAnnual(false)}
                            style={{
                                padding: '10px 28px',
                                borderRadius: '100px',
                                border: 'none',
                                background: !isAnnual ? 'var(--white)' : 'transparent',
                                boxShadow: !isAnnual ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                                color: !isAnnual ? 'var(--navy)' : '#8aa0b0',
                                fontWeight: 700,
                                fontSize: '14px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontFamily: 'inherit'
                            }}
                        >
                            Monthly
                        </button>
                        <button 
                            onClick={() => setIsAnnual(true)}
                            style={{
                                padding: '10px 28px',
                                borderRadius: '100px',
                                border: 'none',
                                background: isAnnual ? 'var(--white)' : 'transparent',
                                boxShadow: isAnnual ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                                color: isAnnual ? 'var(--navy)' : '#8aa0b0',
                                fontWeight: 700,
                                fontSize: '14px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontFamily: 'inherit'
                            }}
                        >
                            Annual
                        </button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px',
                    alignItems: 'stretch',
                }} className="pricing-grid">
                    {plans.map((plan, i) => {
                        const currentPrice = isAnnual ? plan.priceAnnual : plan.price;
                        const currentPer = isAnnual ? plan.perAnnual : plan.per;
                        
                        return (
                            <RevealOnScroll key={plan.name} delay={i as 0 | 1 | 2 | 3}>
                                <div style={{
                                    background: plan.featured ? 'var(--navy)' : '#fff',
                                    border: plan.featured ? 'none' : '1px solid #e8edf2',
                                    borderRadius: '16px',
                                    padding: '24px 20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    boxShadow: plan.featured
                                        ? '0 8px 40px rgba(4,41,64,0.2)'
                                        : '0 2px 12px rgba(0,0,0,0.04)',
                                }}>
                                    <p style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        letterSpacing: '1.5px',
                                        color: plan.featured ? 'var(--green)' : '#8aa0b0',
                                        marginBottom: '12px',
                                    }}>
                                        {plan.label}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '2px',
                                        marginBottom: '4px',
                                    }}>
                                        <span style={{
                                            fontSize: currentPrice === 'Contact us' ? '22px' : '32px',
                                            fontWeight: 800,
                                            color: plan.featured ? 'var(--green)' : 'var(--navy)',
                                            letterSpacing: '-1px',
                                            lineHeight: 1,
                                            transition: 'opacity 0.2s ease',
                                        }}>
                                            {currentPrice}
                                        </span>
                                        {currentPer && (
                                            <span style={{
                                                fontSize: '13px',
                                                color: plan.featured ? 'rgba(255,255,255,0.5)' : '#8aa0b0',
                                            }}>
                                                {currentPer}
                                            </span>
                                        )}
                                    </div>

                                    <p style={{
                                        fontSize: '18px',
                                        fontWeight: 800,
                                        color: plan.featured ? 'var(--white)' : 'var(--navy)',
                                        marginBottom: '4px',
                                    }}>
                                        {plan.name}
                                    </p>

                                    <p style={{
                                        fontSize: '12px',
                                        color: plan.featured ? 'rgba(255,255,255,0.4)' : '#8aa0b0',
                                        marginBottom: '12px',
                                    }}>
                                        {plan.note}
                                    </p>

                                    <p style={{
                                        fontSize: '14px',
                                        lineHeight: 1.6,
                                        color: plan.featured ? 'rgba(255,255,255,0.6)' : '#6b8fa8',
                                        marginBottom: '24px',
                                        flex: 1,
                                    }}>
                                        {plan.summary}
                                    </p>

                                    {plan.ctaHref.startsWith('http') ? (
                                        <a
                                            href={plan.ctaHref}
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                color: plan.featured ? 'var(--green)' : 'var(--navy)',
                                                textDecoration: 'none',
                                                transition: 'opacity 0.15s',
                                            }}
                                            className="pricing-cta-link"
                                        >
                                            {plan.cta}
                                        </a>
                                    ) : (
                                        <Link
                                            href={plan.ctaHref}
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                color: plan.featured ? 'var(--green)' : 'var(--navy)',
                                                textDecoration: 'none',
                                                transition: 'opacity 0.15s',
                                            }}
                                            className="pricing-cta-link"
                                        >
                                            {plan.cta}
                                        </Link>
                                    )}
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>

                <p style={{
                    textAlign: 'center',
                    marginTop: '28px',
                    fontSize: '13px',
                    color: '#8aa0b0',
                }}>
                    Switch plans anytime. No lock-in contracts. Customers always use Perk+ for free.
                </p>
            </div>
        </section>
    );
}