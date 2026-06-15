import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sg', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], style: ['normal', 'italic'], weight: '400', variable: '--font-is', display: 'swap' });

export const metadata: Metadata = {
  title: 'GB Texcoat Solution: Advanced Coated Fabric Systems',
  description: 'Engineering coated fabrics for aerospace, defence, and industrial applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
      <body className="mode-safe density-compact">
        <ScrollProgress />
        <Nav />
        <div className="page-transition">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
