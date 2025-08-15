
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, MapPin, Clock, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle from '@/components/ViewToggle';

type ViewType = 'grid' | 'list' | 'cards';

const SB8J1SideEvents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('cards');
  const { imageUrl, isLoading } = usePexelsImage('sb8j-side-events');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sideEvents = [
    {
      title: "Indigenous Knowledge Fair",
      date: "October 27, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center Foyer",
      organizers: "IIFB & CBD Secretariat",
      description: "A vibrant showcase of Indigenous innovations, traditional practices, and cultural expressions related to biodiversity conservation.",
      attendees: "Open to all registered participants"
    },
    {
      title: "High-Level Dialogue on Traditional Territories",
      date: "October 28, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Plenary Hall 2",
      organizers: "Government of Panama & Indigenous Leadership Forum",
      description: "A strategic discussion on recognizing and protecting Indigenous territories as key to achieving global biodiversity targets.",
      attendees: "By invitation only"
    },
    {
      title: "Youth Innovation Lab",
      date: "October 29, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Innovation Hub",
      organizers: "Global Indigenous Youth Caucus",
      description: "An interactive workshop where young Indigenous leaders develop innovative solutions for integrating traditional knowledge with modern technologies.",
      attendees: "Registered youth participants"
    },
    {
      title: "Women's Leadership Roundtable",
      date: "October 29, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Meeting Room 5",
      organizers: "Indigenous Women's Biodiversity Network",
      description: "A closed-door session for Indigenous women leaders to strategize on gender-responsive implementation of Article 8(j) and the GBF.",
      attendees: "Invited women leaders"
    },
    {
      title: "Traditional Medicine Demonstration",
      date: "October 30, 2025",
      time: "11:00 AM - 12:00 PM",
      location: "Cultural Pavilion",
      organizers: "Panamanian Indigenous Healers Association",
      description: "A live demonstration of traditional healing practices and the sustainable use of medicinal plants.",
      attendees: "Open to all registered participants"
    },
    {
      title: "Closing Ceremony & Cultural Celebration",
      date: "October 30, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Grand Ballroom",
      organizers: "CBD Secretariat & Host Country",
      description: "A festive closing event featuring cultural performances, speeches, and commitments to future action.",
      attendees: "All registered participants"
    }
  ];

  const renderSideEvents = () => {
    if (currentView === 'grid') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sideEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight line-clamp-2 mb-2">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-1">
                  {event.organizers}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-3 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span className="line-clamp-1">{event.attendees}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    if (currentView === 'list') {
      return (
        <div className="space-y-2">
          {sideEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate mb-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{event.organizers}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Default cards view
    return (
      <div className="grid gap-8">
        {sideEvents.map((event, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                {event.title}
              </CardTitle>
              <CardDescription>
                {event.organizers}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                {event.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                {event.attendees}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-fit h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex-1 flex items-center">
            <div className="text-white text-center w-full">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                SB8J-1
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  First Meeting on Article 8(j)
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Historic milestone for Indigenous Peoples and local communities in biodiversity governance
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>October 27-30, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Panama City, Panama</span>
                </div>
              </div>

              <div className="pt-8">
                <nav className="hidden md:block">
                  <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">Documents</Link>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">
                          News & Media
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px]">
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/news" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            General News
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/media-coverage" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Media Coverage Links
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/social-toolkit" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            IIFB Social Media Toolkit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/press-conferences" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Press Conferences
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/articles" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Articles
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/videos" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Videos
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-lg font-medium">Side Events</Link>
                  </div>
                </nav>

                <div className="md:hidden flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>

                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                      
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Videos</Link>
                      </div>
                      
                      <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white bg-white/20 transition-all duration-300 text-lg">Side Events</Link>
                    </div>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Side Events</h2>
              <p className="text-muted-foreground">Special events and activities during SB8J-1</p>
            </div>
            <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
          </div>
          
          {renderSideEvents()}
        </div>
      </div>
    </div>
  );
};

export default SB8J1SideEvents;
