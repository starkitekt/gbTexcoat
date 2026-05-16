import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { TweaksProvider } from '@/components/TweaksContext';
import { TweaksPanel } from '@/components/TweaksPanel';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sg', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], style: ['normal', 'italic'], weight: '400', variable: '--font-is', display: 'swap' });

export const metadata: Metadata = {
  title: 'GB Texcoat Solution — Advanced Coated Fabric Systems',
  description: 'Engineering coated fabrics for aerospace, defence, and industrial applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <TweaksProvider>
          <ScrollProgress />
          <Nav />
          {children}
          <Footer />
          <TweaksPanel />
        </TweaksProvider>
      </body>
    </html>
  );
}
