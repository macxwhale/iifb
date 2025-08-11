import { Button } from '@/components/ui/button';
import { Play, Users, Globe } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Full-width welcome title */}
      <section className="w-full bg-background py-16 lg:py-20 text-center border-b border-border/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to
            <span className="block text-primary mt-2">CBD Panama 2025</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            A landmark gathering bringing together global leaders, scientists, and Indigenous communities to advance biodiversity conservation
          </p>
        </div>
      </section>
      
      <section className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* YouTube Video Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-medium bg-muted aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="CBD Panama 2025 Introduction"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Decorative overlay */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">CBD Panama 2025</span>
              </div>
            </div>
            
            {/* Video Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              <div className="flex-shrink-0 w-24 h-16 bg-muted rounded cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg" 
                  alt="Video thumbnail 1"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 bg-muted rounded cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg" 
                  alt="Video thumbnail 2"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-shrink-0 w-24 h-16 bg-muted rounded cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg" 
                  alt="Video thumbnail 3"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Panama City will host two critical meetings that will shape the future of biodiversity governance. SBSTTA-27 will provide scientific guidance for implementing the Global Biodiversity Framework, while SB8J-1 marks a historic milestone in recognizing Indigenous Peoples' rights.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Join us for this unprecedented gathering that represents a new era of inclusive decision-making in biodiversity conservation.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Learn About the Meetings
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Indigenous Participation
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width horizontal highlights */}
      <div className="w-full bg-card py-12 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
          <div className="flex items-center space-x-6">
            <Users className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-2">Indigenous Leadership</h4>
              <p className="text-muted-foreground">First-ever subsidiary body for Indigenous Peoples</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Globe className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-2">Global Impact</h4>
              <p className="text-muted-foreground">Advancing the Global Biodiversity Framework</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default IntroductionSection;