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
    <section className="relative min-h-[40vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full max-w-6xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-8 w-full">
            {/* Left Container - Main Content */}
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

              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex items-center space-x-2 text-lg">
                  <Calendar className="h-5 w-5" />
                  <span>October 20-30, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  <span>Panama City, Panama</span>
                </div>
              </div>
            </div>

            {/* Right Container - Countdown Timer & Action Buttons */}
            <div className="flex flex-col items-center justify-center md:items-end space-y-6">
              <CountdownTimer />
              <div className="flex flex-col space-y-3 w-full max-w-xs">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 w-full font-semibold shadow-lg">
                  SBSTTA-27
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full font-semibold backdrop-blur-sm bg-white/10">
                  SB8-J
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8">
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