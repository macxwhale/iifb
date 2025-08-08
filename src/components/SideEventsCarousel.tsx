import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, MapPin } from 'lucide-react';
import sb8jEventImage from '@/assets/sb8j-event.jpg';
import sbsttaEventImage from '@/assets/sbstta-event.jpg';

const sideEvents = [
  {
    id: 1,
    title: "Indigenous Knowledge Systems in Biodiversity Conservation",
    description: "A collaborative dialogue exploring how traditional ecological knowledge can inform modern conservation strategies and policy frameworks.",
    date: "25",
    month: "October",
    year: "2025",
    time: "09:00 - 11:00",
    location: "Panama Convention Center - Room A",
    organizer: "IIFB & CBD Secretariat",
    image: sb8jEventImage,
    link: "#"
  },
  {
    id: 2,
    title: "Digital Sequence Information: Bridging Science and Rights",
    description: "Technical workshop on digital sequence information implications for Indigenous Peoples' rights and benefit-sharing mechanisms.",
    date: "26",
    month: "October",
    year: "2025",
    time: "14:00 - 16:00",
    location: "Panama Convention Center - Room B",
    organizer: "Scientific Partners Consortium",
    image: sbsttaEventImage,
    link: "#"
  },
  {
    id: 3,
    title: "Youth Voices in Biodiversity Governance",
    description: "Interactive session featuring Indigenous youth leaders sharing perspectives on biodiversity conservation and traditional knowledge preservation.",
    date: "27",
    month: "October",
    year: "2025",
    time: "16:30 - 18:00",
    location: "Panama Convention Center - Main Hall",
    organizer: "Indigenous Youth Network",
    image: sb8jEventImage,
    link: "#"
  },
  {
    id: 4,
    title: "Community-Based Monitoring Systems",
    description: "Hands-on workshop demonstrating how Indigenous communities are using technology to monitor biodiversity and environmental changes.",
    date: "28",
    month: "October",
    year: "2025",
    time: "10:00 - 12:00",
    location: "Panama Convention Center - Room C",
    organizer: "Community Monitoring Alliance",
    image: sbsttaEventImage,
    link: "#"
  },
  {
    id: 5,
    title: "Financing Indigenous-Led Conservation",
    description: "Panel discussion on innovative funding mechanisms and partnerships to support Indigenous-led biodiversity conservation initiatives.",
    date: "29",
    month: "October",
    year: "2025",
    time: "13:00 - 15:00",
    location: "Panama Convention Center - Room A",
    organizer: "Conservation Finance Network",
    image: sb8jEventImage,
    link: "#"
  }
];

const SideEventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= sideEvents.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, sideEvents.length - itemsPerView) : prev - 1
    );
  };

  return (
    <section id="side-events" className="py-20 lg:py-24 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Side Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 lg:mb-10">
            Side Events & Workshops
          </h2>
        </div>

        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <Button variant="ghost" className="group text-primary hover:text-primary-hover">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(sideEvents.length / itemsPerView) * 100}%`
            }}
          >
            {sideEvents.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / sideEvents.length}%` }}
              >
                <Card className="h-full bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Featured Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg">
                      <span className="text-2xl font-bold leading-none">{event.date}</span>
                      <span className="text-xs font-medium leading-none">{event.month}</span>
                      <span className="text-xs leading-none opacity-90">{event.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                    
                    {/* Event Details */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="text-primary font-medium">
                        Organized by: {event.organizer}
                      </div>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="pt-4 border-t border-border/50">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start group/btn hover:bg-primary/5 p-0"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-primary font-medium">Learn More</span>
                          <ArrowRight className="h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.ceil(sideEvents.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-primary shadow-md scale-110'
                  : 'bg-muted hover:bg-primary/50 hover:scale-105'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideEventsCarousel;