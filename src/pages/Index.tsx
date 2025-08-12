
import HeroBanner from '@/components/HeroBanner';
import IntroductionSection from '@/components/IntroductionSection';
import EventsSection from '@/components/EventsSection';
import NewsCarousel from '@/components/NewsCarousel';
import SideEventsCarousel from '@/components/SideEventsCarousel';
import StatementsCarousel from '@/components/StatementsCarousel';
import KeyResourcesSection from '@/components/KeyResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero Section - Dark with image overlay */}
      <HeroBanner />
      
      {/* Introduction Section - Light background with borders */}
      <div className="bg-muted/30 border-y-2 border-primary/20">
        <IntroductionSection />
      </div>
      
      {/* Events Section - Clean white with accent borders */}
      <div className="bg-background border-l-8 border-l-secondary relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>
        <EventsSection />
      </div>
      
      {/* Statements Section - Soft colored background */}
      <div className="bg-gradient-to-br from-iifb-sage/10 to-iifb-cream/30 border-y border-border/40 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] opacity-30"></div>
        <div className="relative z-10">
          <StatementsCarousel />
        </div>
      </div>
      
      {/* News Section - Darker background with geometric elements */}
      <div className="bg-gradient-to-r from-background to-muted/50 border-y-4 border-y-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-24 -translate-x-24"></div>
        <div className="relative z-10">
          <NewsCarousel />
        </div>
      </div>
      
      {/* Side Events Section - Distinctive grid background */}
      <div className="bg-gradient-subtle border-t-8 border-t-accent relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--primary), 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="relative z-10">
          <SideEventsCarousel />
        </div>
      </div>
      
      {/* Key Resources Section - Textured background */}
      <div className="bg-card border-t-4 border-t-iifb-forest relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-iifb-rust/5 via-transparent to-iifb-orange/5"></div>
        <div className="relative z-10">
          <KeyResourcesSection />
        </div>
      </div>
      
      {/* Footer - Clean separation */}
      <div className="border-t-8 border-t-gradient-primary relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
