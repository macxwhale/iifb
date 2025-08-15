
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
import ViewToggle, { ViewMode } from '@/components/ViewToggle';

const SB8J1SideEvents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
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

  const renderCardsView = () => (
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

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sideEvents.map((event, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow h-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg mb-2 leading-tight line-clamp-2">
              {event.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {event.organizers}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2 mb-3 text-sm text-muted-foreground">
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
                {event.location}
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3 line-clamp-3">
              {event.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              {event.attendees}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {sideEvents.map((event, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{event.organizers}</p>
                <p className="text-sm leading-relaxed line-clamp-2">{event.description}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {event.attendees}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (viewMode) {
      case 'grid':
        return renderGridView();
      case 'list':
        return renderListView();
      default:
        return renderCardsView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-fit h-auto overflow-hidden">
        {/* Background Image */}
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

        {/* Content */}
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

              {/* Navigation */}
              <div className="pt-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                  <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    {/* News & Media Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">
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

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
                  </div>
                </nav>

                {/* Mobile Menu Button */}
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

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">Documents</Link>
                      
                      {/* Mobile News & Media submenu */}
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-xl font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Videos</Link>
                      </div>
                      
                      <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white bg-white/20 transition-all duration-300 text-xl">Side Events</Link>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Side Events</h2>
            <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SB8J1SideEvents;
