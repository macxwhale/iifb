import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import indigenousBodyImage from '@/assets/news-indigenous-body.jpg';
import panamaMeetingsImage from '@/assets/news-panama-meetings.jpg';
import ipbesWorkshopImage from '@/assets/news-ipbes-workshop.jpg';
import indigenousPrepImage from '@/assets/news-indigenous-prep.jpg';
import frameworkReviewImage from '@/assets/news-framework-review.jpg';

const newsItems = [
  {
    id: 1,
    title: "CBD COP16 Establishes Historic Indigenous Subsidiary Body",
    description: "Parties to the Convention on Biological Diversity made the groundbreaking decision to create a permanent subsidiary body dedicated to Indigenous Peoples and local communities.",
    date: "06",
    month: "March",
    year: "2025",
    category: "Policy Update",
    image: indigenousBodyImage,
    link: "#"
  },
  {
    id: 2,
    title: "Panama to Host Crucial Biodiversity Meetings",
    description: "Panama City will welcome global experts for SBSTTA-27 and the inaugural SB8J-1 meeting, marking a new era in biodiversity governance.",
    date: "15",
    month: "February",
    year: "2025",
    category: "Event News",
    image: panamaMeetingsImage,
    link: "#"
  },
  {
    id: 3,
    title: "IPBES Workshop Prepares for SBSTTA-27",
    description: "Latest IPBES assessments will inform scientific recommendations at the upcoming SBSTTA meeting, providing crucial data for biodiversity framework implementation.",
    date: "22",
    month: "January",
    year: "2025",
    category: "Research",
    image: ipbesWorkshopImage,
    link: "#"
  },
  {
    id: 4,
    title: "Indigenous Leaders Prepare for Historic SB8J-1",
    description: "IIFB organizes preparatory sessions to ensure meaningful participation of Indigenous Peoples in the first meeting of the new subsidiary body.",
    date: "08",
    month: "December",
    year: "2024",
    category: "Community",
    image: indigenousPrepImage,
    link: "#"
  },
  {
    id: 5,
    title: "Kunming-Montreal Framework Progress Review",
    description: "Global assessment shows mixed progress on biodiversity targets, highlighting need for accelerated action and Indigenous involvement.",
    date: "04",
    month: "November",
    year: "2024",
    category: "Assessment",
    image: frameworkReviewImage,
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
    <section id="news" className="py-20 lg:py-24 bg-gradient-subtle border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Latest News</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 lg:mb-10">
            Latest News and Articles
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
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.slice(0, 6).map((item) => (
            <Card key={item.id} className="h-full bg-card border-2 border-transparent hover:border-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>
              </div>
              
              {/* Content */}
              <CardContent className="p-6 space-y-4">
                <div className="text-sm text-muted-foreground">
                  {item.month} {item.date}, {item.year}
                </div>
                
                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
                {/* Read More Button */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn hover:bg-primary/5 p-0"
                  >
                    <span className="text-primary font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
