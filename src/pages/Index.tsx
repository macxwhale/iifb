
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
      {/* Hero Section - Full bleed with overlay */}
      <div className="relative">
        <HeroBanner />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Introduction Section - Clean white background with subtle borders */}
      <div className="bg-card border-y border-border/20">
        <IntroductionSection />
      </div>

      {/* Visual Separator */}
      <div className="h-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>

      {/* Events Section - Elevated with shadow and accent background */}
      <div className="bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
        <div className="relative border-y border-border/30 shadow-lg">
          <EventsSection />
        </div>
      </div>

      {/* Statements Section - Distinct card background with border accent */}
      <div className="bg-card/60 backdrop-blur-sm border-y border-border/40">
        <div className="border-l-4 border-l-secondary">
          <StatementsCarousel />
        </div>
      </div>

      {/* Visual Separator with pattern */}
      <div className="h-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="h-4 bg-gradient-subtle"></div>

      {/* News Section - Rich background with depth */}
      <div className="bg-gradient-to-br from-muted/40 via-background to-card/40 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--muted))_25%,hsl(var(--muted))_50%,transparent_50%,transparent_75%,hsl(var(--muted))_75%)] opacity-5"></div>
        <div className="relative shadow-inner border-y border-border/20">
          <NewsCarousel />
        </div>
      </div>

      {/* Side Events Section - Contrasting background */}
      <div className="bg-gradient-to-l from-card via-background to-card border-y border-border/30">
        <SideEventsCarousel />
      </div>

      {/* Visual Separator */}
      <div className="h-3 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>

      {/* Resources Section - Clean, organized feel */}
      <div className="bg-card border-y border-border/40 shadow-sm">
        <KeyResourcesSection />
      </div>

      {/* Footer - Dark contrast */}
      <div className="bg-muted border-t-2 border-border">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
