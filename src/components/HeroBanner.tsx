import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Menu, X } from 'lucide-react';
import heroBannerImage from '@/assets/hero-banner.jpg';

const HeroBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex-1 flex flex-col justify-center">
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

        {/* Navigation */}
        <div className="mt-16 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
            <span className="text-xl font-bold text-white">CBD Panama</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#statements" className="text-white/90 hover:text-white transition-colors">Statements</a>
            <a href="#documents" className="text-white/90 hover:text-white transition-colors">Documents</a>
            <a href="#news" className="text-white/90 hover:text-white transition-colors">News & Media</a>
            <a href="#side-events" className="text-white/90 hover:text-white transition-colors">Side Events</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 mt-4 border-t border-white/20">
              <div className="flex flex-col space-y-2">
                <a href="#about" className="px-2 py-2 text-white/90 hover:text-white transition-colors">About</a>
                <a href="#statements" className="px-2 py-2 text-white/90 hover:text-white transition-colors">Statements</a>
                <a href="#documents" className="px-2 py-2 text-white/90 hover:text-white transition-colors">Documents</a>
                <a href="#news" className="px-2 py-2 text-white/90 hover:text-white transition-colors">News & Media</a>
                <a href="#side-events" className="px-2 py-2 text-white/90 hover:text-white transition-colors">Side Events</a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;