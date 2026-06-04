'use client';

import { useState } from 'react';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const faqs = [
    {
        q: 'How long does it take to set up a program?',
        a: 'About 30 minutes end-to-end. Pick your trade, design your stamp card, generate the counter QR, and you\'re live. Most businesses have their first stamp earned the same afternoon.',
    },
    {
        q: 'Can I switch plans anytime?',
        a: 'Yes — upgrade or downgrade whenever. No contracts, no lock-in. Your customer data, stamps and offers carry across plans untouched.',
    },
    {
        q: 'What happens to my data if I downgrade?',
        a: 'Nothing is deleted. Features above your new plan\'s limit are paused, not lost — for example, if you go from Growth to Free, your extra stamp cards stay in drafts and can be republished the moment you upgrade again.',
    },
    {
        q: 'Do my customers pay anything?',
        a: 'No. The Perk+ customer app is always free. The pricing on this page is for your business portal only.',
    },
    {
        q: 'Is there a free trial on paid plans?',
        a: 'Yes — every paid plan starts with a 30-day free trial. No credit card required to start. At day 30 you choose whether to continue or drop back to Free.',
    },
    {
        q: 'What\'s included in Custom?',
        a: 'Everything in Growth, uncapped, plus dedicated account manager, priority support, multi-step campaigns and bespoke integrations. Talk to us and we\'ll scope a price that fits your business.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section style={{
            background: '#fff',
            padding: '80px 40px',
        }}>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                <RevealOnScroll>
                    <p className="subline" style={{ marginBottom: '12px' }}>Common questions</p>
                    <h2 className="h1" style={{
                        color: 'var(--navy)',
                        marginBottom: '48px',
                    }}>
                        Pricing <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>FAQs.</em>
                    </h2>
                </RevealOnScroll>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {faqs.map((faq, i) => (
                        <RevealOnScroll key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
                            <div style={{
                                borderTop: '1px solid #e8edf2',
                                padding: '0',
                            }}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '20px 0',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        gap: '16px',
                                    }}
                                >
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: 'var(--navy)',
                                        lineHeight: 1.4,
                                    }}>
                                        {faq.q}
                                    </span>
                                    <span style={{
                                        fontSize: '20px',
                                        fontWeight: 300,
                                        color: '#8aa0b0',
                                        flexShrink: 0,
                                        transition: 'transform 0.2s',
                                        transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                                        display: 'inline-block',
                                    }}>
                                        +
                                    </span>
                                </button>

                                {openIndex === i && (
                                    <div style={{
                                        paddingBottom: '20px',
                                        fontSize: '14px',
                                        lineHeight: 1.7,
                                        color: '#6b8fa8',
                                    }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        </RevealOnScroll>
                    ))}
                    <div style={{ borderTop: '1px solid #e8edf2' }} />
                </div>
            </div>
        </section>
    );
}