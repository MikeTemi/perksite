import PageHero from '@/components/shared/PageHero';
import PricingCards from '@/components/pricing/PricingCards';
import ComparisonTable from '@/components/pricing/ComparisonTable';
import FAQSection from '@/components/pricing/FAQSection';
import PageCTA from '@/components/shared/PageCTA';

export const metadata = {
    title: 'Perk+, Pricing',
    description: 'Four plans, start free. Free forever, Starter $9.99, Growth $19.99, Custom for multi-location.',
};

export default function PricingPage() {
    return (
        <main>
            <PageHero
                subline="Three plans · cancel any time · customers always use Perk+ free"
                headline="Start free."
                headlineEm="Upgrade when the numbers make you."
                body="Every plan starts free or with a 30-day trial. This pricing is for your business portal only, your customers never pay a cent."
            />
            <PricingCards />
            <ComparisonTable />
            <FAQSection />
            <PageCTA
                headline="Try the math"
                headlineEm="against your numbers."
                body="Open the calculator on the homepage, drag the sliders, and see what loyalty would add to your year, before you commit."
                primaryLabel="Open the calculator →"
                primaryHref="/#calc"
                secondaryLabel="How it works"
                secondaryHref="/how-it-works"
                note="No credit card · 1 published card · 1 active offer · 4 live KPIs on Free"
            />
        </main>
    );
}