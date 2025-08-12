
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
      <HeroBanner />
      
      {/* Introduction Section - Light background with subtle gradient */}
      <div className="bg-gradient-subtle border-b-2 border-primary/20">
        <IntroductionSection />
      </div>
      
      {/* Events Section - Clean white background with shadow separator */}
      <div className="bg-background shadow-soft border-b border-border/30">
        <EventsSection />
      </div>
      
      {/* Statements Section - Warm earth tone background */}
      <div className="bg-iifb-cream border-b-2 border-iifb-rust/30">
        <StatementsCarousel />
      </div>
      
      {/* News Section - Subtle forest background */}
      <div className="bg-gradient-to-b from-iifb-sage/10 to-background border-b border-iifb-forest/20">
        <NewsCarousel />
      </div>
      
      {/* Side Events Section - Light orange accent background */}
      <div className="bg-gradient-to-r from-iifb-orange/5 to-iifb-cream/30 border-b-2 border-iifb-orange/20">
        <SideEventsCarousel />
      </div>
      
      {/* Key Resources Section - Deep earth background for contrast */}
      <div className="bg-gradient-to-b from-iifb-earth/10 to-iifb-dark-earth/5 border-b-2 border-iifb-earth/30">
        <KeyResourcesSection />
      </div>
      
      {/* Footer - Dark background for final separation */}
      <div className="bg-iifb-dark-earth text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
