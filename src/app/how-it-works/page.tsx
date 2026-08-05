import PageHero from '@/components/shared/PageHero';
import DashboardBigshot from '@/components/how-it-works/DashboardBigshot';
import AppShowcase from '@/components/how-it-works/AppShowcase';
import DiscoverySection from '@/components/how-it-works/DiscoverySection';
import BrandsTicker from '@/components/home/BrandsTicker';
import PageCTA from '@/components/shared/PageCTA';

export const metadata = {
    title: 'Perk+, How it works',
    description: 'Inside the Perk+ portal: stamp cards, dashboard, members, discovery.',
};

export default function HowItWorksPage() {
    return (
        <main>
            <PageHero
                subline="The product, end to end"
                headline="One portal for you."
                headlineEm="One app for them."
                body="A QR on the counter. A dashboard in your phone. A discovery map in theirs. Three pieces, all stitched together so nothing slips."
            />
            <DashboardBigshot />
            <AppShowcase />
            <DiscoverySection />
            <BrandsTicker />
            <PageCTA
                headline="Ready to see your"
                headlineEm="real numbers?"
                body="Open the calculator, drag the sliders, see what loyalty would add to your year. Then start free."
                primaryLabel="Open the calculator"
                primaryHref="/#calc"
                secondaryLabel="See pricing"
                secondaryHref="/pricing"
                note="Free · no card · 4 live KPIs from day one"
            />
        </main>
    );
}