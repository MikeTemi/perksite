import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

export default function FinalCTA() {
    return (
        <section className="cta">
            <RevealOnScroll className="cta-inner">
                <h2 className="h1 h1-light">
                    Know your regulars. <em>Before they slip away.</em>
                </h2>
                <p>
                    Start on the Free plan and have your first stamp card live this
                    afternoon. Upgrade only when the numbers tell you to.
                </p>
                <div className="cta-btns">
                    <a href="https://dashboard.perkplus.com.au/register" className="btn btn-lg btn-primary">
                        Start free
                    </a>
                </div>
                <p className="cta-note">
                    No credit card · 1 published card · 1 active offer · 4 live KPIs
                </p>
            </RevealOnScroll>
        </section>
    );
}
