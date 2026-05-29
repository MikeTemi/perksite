import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const plans = [
    {
        label: 'FREE FOREVER',
        price: '$0',
        per: '/mo',
        name: 'Free',
        summary: '1 stamp card, 1 offer, 1 location. View-only analytics, customer profiles.',
        cta: 'Select Free →',
        ctaHref: '#',
        featured: false,
    },
    {
        label: 'FOR SMALL BUSINESS',
        price: '$9.99',
        per: '/mo',
        name: 'Starter',
        summary: '3 offers, analytics summary, basic customer list, communications.',
        cta: 'Select Starter →',
        ctaHref: '#',
        featured: false,
    },
    {
        label: '★ RECOMMENDED',
        price: '$19.99',
        per: '/mo',
        name: 'Growth',
        summary: '10 stamp cards, 20 offers, 1–3 locations. Full analytics, Push/SMS/Email.',
        cta: 'Select Growth →',
        ctaHref: '#',
        featured: true,
    },
    {
        label: 'MULTI-LOCATION',
        price: 'Contact us',
        per: '',
        name: 'Custom',
        summary: 'Unlimited cards, locations & offers. Advanced analytics, priority support.',
        cta: 'Contact us →',
        ctaHref: '#',
        featured: false,
    },
];

export default function PricingSection() {
    return (
        <section style={{
            background: '#fff',
            padding: '80px 40px',
        }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>

                {/* Header */}
                <RevealOnScroll>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <p style={{
                            fontSize: '13px',
                            color: '#8aa0b0',
                            marginBottom: '40px',
                            letterSpacing: '0.3px',
                        }}>Pricing</p>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 56px)',
                            fontWeight: 800,
                            color: 'var(--navy)',
                            lineHeight: 1.1,
                            letterSpacing: '-1.5px',
                        }}>
                            Start free.{' '}
                            <em style={{
                                fontStyle: 'italic',
                                color: 'var(--navy)',
                                fontWeight: 800,
                            }}>
                                Upgrade when the<br />numbers make you.
                            </em>
                        </h2>
                    </div>
                </RevealOnScroll>

                {/* Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px',
                    alignItems: 'stretch',
                }} className="pricing-grid">
                    {plans.map((plan, i) => (
                        <RevealOnScroll key={plan.name} delay={i as 0 | 1 | 2 | 3}>
                            <div style={{
                                background: plan.featured ? 'var(--navy)' : '#fff',
                                border: plan.featured
                                    ? 'none'
                                    : '1px solid #e8edf2',
                                borderRadius: '16px',
                                padding: '24px 20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0',
                                height: '100%',
                                boxShadow: plan.featured
                                    ? '0 8px 40px rgba(4,41,64,0.2)'
                                    : '0 2px 12px rgba(0,0,0,0.04)',
                            }}>

                                {/* Label */}
                                <p style={{
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    letterSpacing: '1.5px',
                                    color: plan.featured ? 'var(--green)' : '#8aa0b0',
                                    marginBottom: '12px',
                                }}>
                                    {plan.label}
                                </p>

                                {/* Price */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '2px',
                                    marginBottom: '4px',
                                }}>
                                    <span style={{
                                        fontSize: plan.price === 'Contact us' ? '24px' : '32px',
                                        fontWeight: 800,
                                        color: plan.featured ? 'var(--green)' : 'var(--navy)',
                                        letterSpacing: '-1px',
                                        lineHeight: 1,
                                    }}>
                                        {plan.price}
                                    </span>
                                    {plan.per && (
                                        <span style={{
                                            fontSize: '13px',
                                            color: plan.featured ? 'rgba(255,255,255,0.5)' : '#8aa0b0',
                                        }}>
                                            {plan.per}
                                        </span>
                                    )}
                                </div>

                                {/* Plan name */}
                                <p style={{
                                    fontSize: '18px',
                                    fontWeight: 800,
                                    color: plan.featured ? 'var(--white)' : 'var(--navy)',
                                    marginBottom: '12px',
                                }}>
                                    {plan.name}
                                </p>

                                {/* Summary */}
                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    color: plan.featured ? 'rgba(255,255,255,0.6)' : '#6b8fa8',
                                    marginBottom: '20px',
                                    flex: 1,
                                }}>
                                    {plan.summary}
                                </p>

                                {/* CTA */}
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

                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Fine print */}
                <p style={{
                    textAlign: 'center',
                    marginTop: '32px',
                    fontSize: '13px',
                    color: '#8aa0b0',
                }}>
                    Switch plans anytime. No lock-in contracts. Customers always use Perk+ for free.
                </p>

            </div>
        </section>
    );
}