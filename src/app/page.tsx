import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import RetentionBand from '@/components/home/RetentionBand';
import Calculator from '@/components/home/Calculator';
import DashboardPreview from '@/components/home/DashboardPreview';
import PricingSection from '@/components/home/PricingSection';
import BrandsTicker from '@/components/home/BrandsTicker';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <RetentionBand />
      <Calculator />
      <DashboardPreview />
      <PricingSection />
      <BrandsTicker />
      <FinalCTA />
    </main>
  );
} 