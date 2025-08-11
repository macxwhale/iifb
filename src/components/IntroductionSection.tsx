
import { Button } from '@/components/ui/button';
import { Play, Users, Globe, Triangle } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Full-width welcome title */}
      <section className="w-full bg-background py-6 lg:py-8 text-center border-b border-border/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Welcome to
            <span className="block text-primary mt-1">CBD Panama 2025</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A landmark gathering bringing together global leaders, scientists, and Indigenous communities to advance biodiversity conservation
          </p>
        </div>
      </section>
      
      <section className="py-6 lg:py-8 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
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
          </div>

          {/* Text Content */}
          <div className="space-y-4 mt-0">
            <div className="space-y-3">
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-3">
                Panama City will host two critical meetings that will shape the future of biodiversity governance. SBSTTA-27 will provide scientific guidance for implementing the Global Biodiversity Framework, while SB8J-1 marks a historic milestone in recognizing Indigenous Peoples' rights.
              </p>
              
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Join us for this unprecedented gathering that represents a new era of inclusive decision-making in biodiversity conservation.
              </p>
            </div>

            {/* Cards replacing the buttons */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Triangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Indigenous Leadership
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      First-ever subsidiary body for Indigenous Peoples
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Triangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Powering transformative conservation
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Explore the five key themes of Congress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width horizontal highlights */}
      <div className="w-full bg-card py-6 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 max-w-3xl mx-auto">
          <div className="flex items-center space-x-6">
            <Users className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-1">Indigenous Leadership</h4>
              <p className="text-muted-foreground">First-ever subsidiary body for Indigenous Peoples</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Globe className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground text-lg mb-1">Global Impact</h4>
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
