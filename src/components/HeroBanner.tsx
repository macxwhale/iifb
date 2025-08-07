import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import heroBannerImage from '@/assets/hero-banner.jpg';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          CBD Panama
          <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
            Meetings 2025
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Join the global conversation on biodiversity conservation and Indigenous rights in Panama City
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center space-x-2 text-lg">
            <Calendar className="h-5 w-5" />
            <span>October 20-30, 2025</span>
          </div>
          <div className="flex items-center space-x-2 text-lg">
            <MapPin className="h-5 w-5" />
            <span>Panama City, Panama</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold">
            Learn More
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;