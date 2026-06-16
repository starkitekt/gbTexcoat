import { HomeHero, HeroStats, TickerBar, IndustriesSection, EngineeringSolutions, TechnicalAdvantages, ProductSystems, ApplicationShowcase, TestimonialsSection, WhyTexcoat, ClientsSection, ContactCTA } from '@/components/home';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HeroStats />
      <TickerBar />
      <IndustriesSection />
      <EngineeringSolutions />
      <TechnicalAdvantages />
      <ProductSystems />
      <ApplicationShowcase />
      <TestimonialsSection />
      <WhyTexcoat />
      <ClientsSection />
      <ContactCTA />
    </main>
  );
}
