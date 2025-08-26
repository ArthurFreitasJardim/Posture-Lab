// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import PlansFlow from '@/components/PlansFlow';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ExpertsSection from '@/components/ExpertsSection'; 

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <HeroSection />
      <MissionSection />
      <PlansFlow />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ExpertsSection />     
    </main>
  );
}