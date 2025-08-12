
import { Button } from '@/components/ui/button';
import { Play, Users, Globe, Triangle } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Full-width welcome title with enhanced styling */}
      <section className="w-full py-8 lg:py-12 text-center bg-background border-b-4 border-primary/30 shadow-medium">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Welcome to
            <span className="block text-primary mt-2 drop-shadow-sm">CBD Panama 2025</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A landmark gathering bringing together global leaders, scientists, and Indigenous communities to advance biodiversity conservation
          </p>
        </div>
      </section>
      
      {/* Main content section with enhanced visual structure */}
      <section className="py-8 lg:py-12 bg-gradient-subtle relative">
        {/* Decorative border elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-secondary"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* YouTube Video Section with enhanced frame */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-strong bg-muted aspect-video border-4 border-white">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CBD Panama 2025 Introduction"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Enhanced decorative overlay */}
                <div className="absolute top-4 left-4 bg-gradient-primary backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-semibold">CBD Panama 2025</span>
                </div>
              </div>
            </div>

            {/* Text Content with enhanced visual hierarchy */}
            <div className="space-y-6 mt-0">
              <div className="space-y-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-soft">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Panama City will host two critical meetings that will shape the future of biodiversity governance. SBSTTA-27 will provide scientific guidance for implementing the Global Biodiversity Framework, while SB8J-1 marks a historic milestone in recognizing Indigenous Peoples' rights.
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Join us for this unprecedented gathering that represents a new era of inclusive decision-making in biodiversity conservation.
                </p>
              </div>

              {/* Enhanced feature cards with better visual separation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-gradient-to-br from-white to-iifb-cream border-2 border-primary/20 rounded-xl p-6 hover:shadow-medium hover:scale-105 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
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

                <div className="bg-gradient-to-br from-white to-iifb-sage/20 border-2 border-secondary/20 rounded-xl p-6 hover:shadow-medium hover:scale-105 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Global Impact
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Advancing the Global Biodiversity Framework
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;
