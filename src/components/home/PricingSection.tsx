import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const plans = [
    {
        label: 'Free forever',
        price: '$0',
        per: '/mo',
        name: 'Free',
        summary: '1 stamp card, 1 offer, 1 location. View-only analytics, customer profiles.',
        cta: 'Select Free',
        ctaHref: '/pricing',
        featured: false,
    },
    {
        label: 'For small business',
        price: '$9.99',
        per: '/mo',
        name: 'Starter',
        summary: '3 offers, analytics summary, basic customer list, communications.',
        cta: 'Select Starter',
        ctaHref: '/pricing',
        featured: false,
    },
    {
        label: '★ Recommended',
        price: '$19.99',
        per: '/mo',
        name: 'Growth',
        summary: '10 stamp cards, 20 offers, 1–3 locations. Full analytics, Push/SMS/Email.',
        cta: 'Select Growth',
        ctaHref: '/pricing',
        featured: true,
    },
    {
        label: 'Multi-location',
        price: 'Contact us',
        per: '',
        name: 'Custom',
        summary: 'Unlimited cards, locations & offers. Advanced analytics, priority support.',
        cta: 'Contact us',
        ctaHref: '/pricing',
        featured: false,
    },
];

export default function PricingSection() {
    return (
        <section className="pricing-teaser">
            <div className="pricing-teaser-inner">

                {/* Header */}
                <RevealOnScroll>
                    <div className="pt-head">
                        <p className="subline">Pricing</p>
                        <h2 className="h1">
                            Start free. Upgrade <em>when the numbers make you.</em>
                        </h2>
                    </div>
                </RevealOnScroll>

                {/* Cards Grid */}
                <div className="pt-grid">
                    {plans.map((plan, i) => (
                        <RevealOnScroll key={plan.name} delay={i as 0 | 1 | 2 | 3}>
                            <Link href={plan.ctaHref} className={`pt-card ${plan.featured ? 'featured' : ''}`}>
                                <div className="pt-tag">{plan.label}</div>
                                <div className="pt-price">
                                    <span className="num" style={plan.price === 'Contact us' ? { fontSize: '22px' } : undefined}>
                                        {plan.price}
                                    </span>
                                    {plan.per && <span className="per">{plan.per}</span>}
                                </div>
                                <h3>{plan.name}</h3>
                                <p>{plan.summary}</p>
                                <span className="pt-link">{plan.cta}</span>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
}