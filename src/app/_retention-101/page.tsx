'use client';

import PageHero from '@/components/shared/PageHero';
import RetentionStats from '@/components/retention/RetentionStats';
import FourLessons from '@/components/retention/FourLessons';
import Manifesto from '@/components/retention/Manifesto';
import StoryCards from '@/components/retention/StoryCards';
import PageCTA from '@/components/shared/PageCTA';

export default function Retention101Page() {
    return (
        <main>
            <PageHero
                subline="The gap most local owners miss"
                headline="Most local businesses don't have a marketing problem."
                headlineEm="They have a retention problem."
                body="You can pour money into Instagram ads, hand out flyers, run a TikTok. None of it matters if the customer you already paid for never comes back."
            />
            <RetentionStats />
            <FourLessons />
            <Manifesto />
            <StoryCards />
            <PageCTA
                headline="Know your regulars."
                headlineEm="Before they slip away."
                body="Open the calculator and run the maths against your own numbers, then start free."
                primaryLabel="Open the calculator →"
                primaryHref="/#calc"
                secondaryLabel="See pricing"
                secondaryHref="/pricing"
                note="Free tier · no card · 4 live KPIs from day one"
            />
        </main>
    );
}