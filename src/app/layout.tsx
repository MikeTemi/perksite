import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Perk+, Know your regulars before they slip away',
  description: 'A digital loyalty platform for local businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Navbar />
        <div style={{ paddingTop: '64px', flex: 1 }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}