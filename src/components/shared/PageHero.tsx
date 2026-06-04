'use client'
import RevealOnScroll from '@/components/shared/RevealOnScroll';

interface PageHeroProps {
  subline: string;
  headline: string;
  headlineEm: string;
  body: string;
}

export default function PageHero({
  subline,
  headline,
  headlineEm,
  body,
}: PageHeroProps) {
  return (
    <section style={{
      background: 'var(--navy)',
      padding: '80px 40px 72px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <RevealOnScroll>
          <p className="subline subline-light" style={{ marginBottom: '16px' }}>
            {subline}
          </p>
          <h1 className="page-hero-display h1-light" style={{ marginBottom: '20px' }}>
            {headline}<br />
            <em>{headlineEm}</em>
          </h1>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'var(--on-n)',
            maxWidth: '580px',
            margin: '0 auto',
          }}>
            {body}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}