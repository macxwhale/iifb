import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBannerImage from '@/assets/hero-banner-indigenous.jpg';
import CountdownTimer from '@/components/CountdownTimer';


const HeroBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          {/* Left Container - Original Content */}
          <div className="text-white text-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              CBD
              <span className="block text-4xl md:text-5xl font-normal mt-2 opacity-90">
                Meetings 2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90">
              Join the global conversation on biodiversity conservation and Indigenous rights in Panama City
            </p>

            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <div className="flex items-center space-x-2 text-lg">
                <Calendar className="h-5 w-5" />
                <span>October 20-30, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <MapPin className="h-5 w-5" />
                <span>Panama City, Panama</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm">
                View Schedule
              </Button>
            </div>
          </div>

          {/* Right Container - Countdown Timer */}
          <div className="flex justify-end items-start">
            <CountdownTimer />
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
              <a href="#about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">About</a>
              <a href="#statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Statements</a>
              <Link to="/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Documents</Link>
              <a href="#news" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">News & Media</a>
              <a href="#side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Side Events</a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              <div className="flex flex-col">
                <a href="#about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">About</a>
                <a href="#statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Statements</a>
                <Link to="/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Documents</Link>
                <a href="#news" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">News & Media</a>
                <a href="#side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Side Events</a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;