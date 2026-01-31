import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFBF6]">
      <Navbar />
      <HeroSection />
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gray-200"></div>
      </div>
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
