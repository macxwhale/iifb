
import { Button } from '@/components/ui/button';
import { Play, Users, Globe, Triangle } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Full-width welcome title with enhanced visual hierarchy */}
      <section className="w-full bg-background py-8 lg:py-12 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Welcome</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Welcome to
              <span className="block text-primary mt-2 relative">
                CBD Panama 2025
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A landmark gathering bringing together global leaders, scientists, and Indigenous communities to advance biodiversity conservation
            </p>
          </div>
        </div>
      </section>
      
      {/* Main content section with enhanced visual separation */}
      <section className="py-12 lg:py-16 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* YouTube Video Section - Enhanced card design */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-xl shadow-strong bg-card aspect-video border border-border/40">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="CBD Panama 2025 Introduction"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Enhanced decorative overlay */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-white text-sm font-medium">CBD Panama 2025</span>
                  </div>
                </div>
              </div>

              {/* Text Content - Enhanced typography and spacing */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                      Panama City will host two critical meetings that will shape the future of biodiversity governance. 
                      <span className="font-medium text-primary">SBSTTA-27</span> will provide scientific guidance for implementing the Global Biodiversity Framework, 
                      while <span className="font-medium text-secondary">SB8J-1</span> marks a historic milestone in recognizing Indigenous Peoples' rights.
                    </p>
                    
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                      Join us for this unprecedented gathering that represents a new era of inclusive decision-making in biodiversity conservation.
                    </p>
                  </div>
                </div>

                {/* Enhanced feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group bg-gradient-to-br from-card to-card/80 border border-border/40 rounded-xl p-6 hover:shadow-medium hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          Indigenous Leadership
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          First-ever subsidiary body for Indigenous Peoples
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-card to-card/80 border border-border/40 rounded-xl p-6 hover:shadow-medium hover:border-secondary/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                        <Globe className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
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
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;
