import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyTrustSection from '@/components/WhyTrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ROICalculator from '@/components/ROICalculator';
import FreeAuditForm from '@/components/FreeAuditForm';
import ClientPhotos from '@/components/ClientPhotos';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      {/* <FounderSection /> */}
      <ServicesSection />
      {/* <IndustriesSection /> */}
      <ProcessSection />
      <WhyTrustSection />
      <TestimonialsSection />
      {/* <ROICalculator /> */}
      {/* <ClientPhotos /> */}
      <FreeAuditForm />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
