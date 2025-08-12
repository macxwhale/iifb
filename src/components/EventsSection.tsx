
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import sbsttaImage from '@/assets/sbstta-event.jpg';
import sb8jImage from '@/assets/sb8j-event.jpg';

const EventsSection = () => {
  return (
    <section id="events" className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-4">
        {/* Enhanced section header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Two Crucial Meetings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join global experts and Indigenous leaders in shaping the future of biodiversity conservation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* SBSTTA-27 Event Card - Enhanced design */}
          <Card className="overflow-hidden shadow-strong hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/80 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src={sbsttaImage} 
                alt="SBSTTA-27 Meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                  Scientific Advisory
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            
            <CardHeader className="pb-4 space-y-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl lg:text-3xl text-foreground font-bold">SBSTTA-27</CardTitle>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">27</span>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 pt-0">
              <p className="text-foreground leading-relaxed">
                Focus on science-based recommendations for implementing the Kunming-Montreal Global Biodiversity Framework, 
                with emphasis on monitoring progress and ecosystem-based approaches.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/20">
                  Biodiversity Monitoring
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/20">
                  Scientific Research
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/20">
                  Policy Framework
                </span>
              </div>
              
              <Link to="/sbstta-27" className="block">
                <Button className="w-full group bg-primary hover:bg-primary-hover text-white font-semibold py-3 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More About SBSTTA-27
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* SB8J-1 Event Card - Enhanced design with secondary theme */}
          <Card className="overflow-hidden shadow-strong hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 group border-2 border-transparent hover:border-secondary/20 bg-gradient-to-br from-card to-card/80 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-secondary/50 to-transparent"></div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src={sb8jImage} 
                alt="SB8J-1 Meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-secondary/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                  Indigenous Rights
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            
            <CardHeader className="pb-4 space-y-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl lg:text-3xl text-foreground font-bold">SB8J-1</CardTitle>
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold text-sm">1st</span>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 pt-0">
              <p className="text-foreground leading-relaxed">
                Historic establishment of a permanent body focused on Indigenous Peoples and local communities, 
                addressing traditional knowledge and territorial rights.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-medium border border-secondary/20">
                  Traditional Knowledge
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-medium border border-secondary/20">
                  Indigenous Rights
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-medium border border-secondary/20">
                  Cultural Diversity
                </span>
              </div>
              
              <Link to="/sb8j-1" className="block">
                <Button className="w-full group bg-secondary hover:bg-secondary-hover text-white font-semibold py-3 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More About SB8J-1
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
