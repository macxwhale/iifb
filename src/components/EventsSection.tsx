import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import sbsttaImage from '@/assets/sbstta-event.jpg';
import sb8jImage from '@/assets/sb8j-event.jpg';

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Two Crucial Meetings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join global experts and Indigenous leaders in shaping the future of biodiversity conservation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* SBSTTA-27 Event Card */}
          <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={sbsttaImage} 
                alt="SBSTTA-27 Meeting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                  Scientific Advisory
                </span>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-foreground mb-2">SBSTTA-27</CardTitle>
              <CardDescription className="text-base">
                27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>October 20-24, 2025</span>
              </div>
              
              <p className="text-foreground leading-relaxed">
                Focus on science-based recommendations for implementing the Kunming-Montreal Global Biodiversity Framework, 
                with emphasis on monitoring progress and ecosystem-based approaches.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-conference-light text-conference-dark px-3 py-1 rounded-full text-sm">
                  Biodiversity Monitoring
                </span>
                <span className="bg-conference-light text-conference-dark px-3 py-1 rounded-full text-sm">
                  Scientific Research
                </span>
                <span className="bg-conference-light text-conference-dark px-3 py-1 rounded-full text-sm">
                  Policy Framework
                </span>
              </div>
              
              <Button className="w-full group bg-primary hover:bg-primary-hover">
                Learn More About SBSTTA-27
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* SB8J-1 Event Card */}
          <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={sb8jImage} 
                alt="SB8J-1 Meeting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-secondary px-3 py-1 rounded-full text-sm font-semibold">
                  Indigenous Rights
                </span>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-foreground mb-2">SB8J-1</CardTitle>
              <CardDescription className="text-base">
                First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>October 27-30, 2025</span>
              </div>
              
              <p className="text-foreground leading-relaxed">
                Historic establishment of a permanent body focused on Indigenous Peoples and local communities, 
                addressing traditional knowledge and territorial rights.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-conference-light text-conference-dark px-3 py-1 rounded-full text-sm">
                  Traditional Knowledge
                </span>
                <span className="bg-conference-light text-conference-dark px-3 py-1 rounded-full text-sm">
                  Indigenous Rights
                </span>
                <span className="bg-conference-light text-conference-dark px-3 py-1 rounded-full text-sm">
                  Cultural Diversity
                </span>
              </div>
              
              <Button className="w-full group bg-secondary hover:bg-secondary-hover">
                Learn More About SB8J-1
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;