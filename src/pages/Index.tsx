
import HeroBanner from '@/components/HeroBanner';
import IntroductionSection from '@/components/IntroductionSection';
import EventsSection from '@/components/EventsSection';
import NewsCarousel from '@/components/NewsCarousel';
import SideEventsCarousel from '@/components/SideEventsCarousel';
import StatementsCarousel from '@/components/StatementsCarousel';
import KeyResourcesSection from '@/components/KeyResourcesSection';
import SectionBackground from '@/components/SectionBackground';

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero Section - Gradient background */}
      <SectionBackground variant="hero">
        <HeroBanner />
      </SectionBackground>
      
      {/* Introduction Section - Weave pattern */}
      <SectionBackground variant="introduction" className="border-y-2 border-primary/20">
        <IntroductionSection />
      </SectionBackground>
      
      {/* Events Section - Diamond pattern with accent border */}
      <SectionBackground variant="events" className="border-l-8 border-l-secondary relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>
        <EventsSection />
      </SectionBackground>
      
      {/* Statements Section - Zigzag pattern with textured background */}
      <SectionBackground variant="statements" className="border-y border-border/40 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] opacity-20"></div>
        <StatementsCarousel />
      </SectionBackground>
      
      {/* News Section - Spiral pattern with geometric elements */}
      <SectionBackground variant="news" className="border-y-4 border-y-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-24 -translate-x-24"></div>
        <NewsCarousel />
      </SectionBackground>
      
      {/* Side Events Section - Weave pattern with dot grid */}
      <SectionBackground variant="side-events" className="border-t-8 border-t-accent relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--primary), 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <SideEventsCarousel />
      </SectionBackground>
      
      {/* Key Resources Section - Diamond pattern with gradient overlay */}
      <SectionBackground variant="resources" className="border-t-4 border-t-iifb-forest relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-iifb-rust/5 via-transparent to-iifb-orange/5"></div>
        <KeyResourcesSection />
      </SectionBackground>
    </div>
  );
};

export default Index;
