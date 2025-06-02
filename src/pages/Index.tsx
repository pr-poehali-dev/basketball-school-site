import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import CoachesSection from "@/components/CoachesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="programs">
        <ProgramsSection />
      </div>
      <CoachesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
