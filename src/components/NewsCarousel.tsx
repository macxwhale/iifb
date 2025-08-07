import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, ExternalLink } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "CBD COP16 Establishes Historic Indigenous Subsidiary Body",
    description: "Parties to the Convention on Biological Diversity made the groundbreaking decision to create a permanent subsidiary body dedicated to Indigenous Peoples and local communities.",
    date: "March 2025",
    category: "Policy Update",
    link: "#"
  },
  {
    id: 2,
    title: "Panama to Host Crucial Biodiversity Meetings",
    description: "Panama City will welcome global experts for SBSTTA-27 and the inaugural SB8J-1 meeting, marking a new era in biodiversity governance.",
    date: "February 2025",
    category: "Event News",
    link: "#"
  },
  {
    id: 3,
    title: "IPBES Workshop Prepares for SBSTTA-27",
    description: "Latest IPBES assessments will inform scientific recommendations at the upcoming SBSTTA meeting, providing crucial data for biodiversity framework implementation.",
    date: "January 2025",
    category: "Research",
    link: "#"
  },
  {
    id: 4,
    title: "Indigenous Leaders Prepare for Historic SB8J-1",
    description: "IIFB organizes preparatory sessions to ensure meaningful participation of Indigenous Peoples in the first meeting of the new subsidiary body.",
    date: "December 2024",
    category: "Community",
    link: "#"
  },
  {
    id: 5,
    title: "Kunming-Montreal Framework Progress Review",
    description: "Global assessment shows mixed progress on biodiversity targets, highlighting need for accelerated action and Indigenous involvement.",
    date: "November 2024",
    category: "Assessment",
    link: "#"
  }
];

const NewsCarousel = () => {
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
      prev + itemsPerView >= newsItems.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, newsItems.length - itemsPerView) : prev - 1
    );
  };

  return (
    <section id="news" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest News
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest developments
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(newsItems.length / itemsPerView) * 100}%`
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / newsItems.length}%` }}
              >
                <Card className="h-full shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {item.description}
                    </CardDescription>
                    <Button variant="ghost" className="w-full justify-between group">
                      Read More
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(newsItems.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-primary'
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;