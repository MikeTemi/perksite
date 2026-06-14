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
                    <Link href="/pricing" className="btn btn-lg btn-primary">
                        Start free
                    </Link>
                    <Link href="/retention-101" className="btn btn-lg btn-ghost btn-ghost-white">
                        Read Retention 101
                    </Link>
                </div>
                <p className="cta-note">
                    No credit card · 1 published card · 1 active offer · 4 live KPIs
                </p>
            </RevealOnScroll>
        </section>
    );
}
