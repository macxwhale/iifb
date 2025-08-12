
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
      <IntroductionSection />
      <EventsSection />
      <StatementsCarousel />
      <NewsCarousel />
      <SideEventsCarousel />
      <KeyResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
