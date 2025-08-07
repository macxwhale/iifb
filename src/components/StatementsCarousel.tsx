import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, FileText, Download } from 'lucide-react';

const statements = [
  {
    id: 1,
    title: "IIFB Position on SB8J-1 Modus Operandi",
    description: "Comprehensive framework for ensuring meaningful Indigenous participation in the new subsidiary body's operations and decision-making processes.",
    date: "March 2025",
    type: "Position Paper",
    status: "Latest",
    link: "#"
  },
  {
    id: 2,
    title: "Indigenous Territorial Guidelines Statement",
    description: "Detailed recommendations for recognizing and protecting Indigenous territorial rights within the KMGBF implementation framework.",
    date: "February 2025",
    type: "Policy Statement",
    status: "Featured",
    link: "#"
  },
  {
    id: 3,
    title: "Traditional Knowledge Integration Framework",
    description: "Guidelines for incorporating Indigenous traditional ecological knowledge into biodiversity conservation and spatial planning initiatives.",
    date: "January 2025",
    type: "Technical Paper",
    status: "New",
    link: "#"
  },
  {
    id: 4,
    title: "SBSTTA-27 Indigenous Participation Strategy",
    description: "Strategic approach to ensure Indigenous voices are heard and considered in scientific and technical advisory processes.",
    date: "December 2024",
    type: "Strategy Document",
    status: "Updated",
    link: "#"
  },
  {
    id: 5,
    title: "Youth and Women Engagement Protocol",
    description: "Special focus on empowering Indigenous youth and women in biodiversity governance and conservation leadership roles.",
    date: "November 2024",
    type: "Protocol",
    status: "Important",
    link: "#"
  }
];

const StatementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
      prev + itemsPerView >= statements.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, statements.length - itemsPerView) : prev - 1
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Latest': return 'bg-green-100 text-green-800';
      case 'Featured': return 'bg-blue-100 text-blue-800';
      case 'New': return 'bg-purple-100 text-purple-800';
      case 'Updated': return 'bg-orange-100 text-orange-800';
      case 'Important': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="statements" className="py-20 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              IIFB Statements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Key documents and position papers from the International Indigenous Forum on Biodiversity
            </p>
          </div>
          
          <div className="flex space-x-3 justify-center lg:justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
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
              width: `${(statements.length / itemsPerView) * 100}%`
            }}
          >
            {statements.map((statement) => (
              <div
                key={statement.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / statements.length}%` }}
              >
                <Card className="h-full shadow-soft hover:shadow-medium transition-shadow duration-300 border-l-4 border-l-secondary">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(statement.status)}`}>
                        {statement.status}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <FileText className="h-3 w-3 mr-1" />
                        {statement.type}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-secondary transition-colors">
                      {statement.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {statement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-foreground leading-relaxed mb-6">
                      {statement.description}
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="secondary" className="flex-1 group">
                        <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform" />
                        Download
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: Math.ceil(statements.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-secondary shadow-md'
                  : 'bg-muted hover:bg-secondary/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatementsCarousel;