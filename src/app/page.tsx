import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gray-200"></div>
      </div>
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
