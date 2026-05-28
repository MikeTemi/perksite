import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Perk+ — Know your regulars before they slip away',
  description: 'A digital loyalty platform for local businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}