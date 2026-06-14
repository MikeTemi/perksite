'use client'

import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export default function DashboardPreview() {
    return (
        <section className="bigshot">
            <div className="bigshot-inner">

                {/* Header */}
                <div className="bigshot-head">
                    <RevealOnScroll>
                        <p className="subline">Inside the portal · what you see</p>
                        <h2 className="h1">
                            One screen. <em>The four numbers that matter.</em>
                        </h2>
                        <p className="lede">
                            Stamps, redemptions, joiners, total customers — all live, all
                            on every plan. The Free tier shows the KPI counts; paid plans
                            unlock the chart, filters and activity feed.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Dashboard image */}
                <RevealOnScroll delay={1}>
                    <div className="bigshot-img-wrap">
                        <img
                            src="/images/dashboard.png"
                            alt="Perk+ business dashboard showing the four KPI tiles, stamps activity chart and member metrics"
                        />
                    </div>
                </RevealOnScroll>

                {/* CTA */}
                <RevealOnScroll delay={2}>
                    <div style={{ textAlign: 'center', marginTop: '36px' }}>
                        <Link href="/how-it-works" className="btn btn-md btn-primary">
                            See the full product walkthrough
                        </Link>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}