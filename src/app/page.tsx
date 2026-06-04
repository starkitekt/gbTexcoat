import { HomeHero } from '@/components/home/HomeHero';
import { TickerBar, IndustriesSection, EngineeringSolutions, ResearchInnovation, TechnicalAdvantages, ProductSystems, ApplicationShowcase, WhyTexcoat, ClientsSection, InvestorTeaser, ContactCTA } from '@/components/home/HomeSections';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <TickerBar />
      <IndustriesSection />
      <EngineeringSolutions />
      <ResearchInnovation />
      <TechnicalAdvantages />
      <ProductSystems />
      <ApplicationShowcase />
      <WhyTexcoat />
      <ClientsSection />
      <InvestorTeaser />
      <ContactCTA />
    </main>
  );
}
