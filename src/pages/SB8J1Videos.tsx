
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Play, Calendar, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import heroBannerImage from '@/assets/hero-banner-indigenous.jpg';

const SB8J1Videos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const videos = [
    {
      title: "Understanding Article 8(j): A Historic Milestone",
      description: "IIFB Co-Chair explains the significance of the first Subsidiary Body meeting and its impact on Indigenous rights in biodiversity governance.",
      duration: "12:35",
      date: "October 22, 2025",
      category: "Educational",
      thumbnail: "/assets/news-indigenous-body.jpg",
      featured: true
    },
    {
      title: "Traditional Knowledge Keepers: Voices from the Amazon",
      description: "Indigenous leaders from the Amazon region share their perspectives on protecting traditional knowledge and territorial rights.",
      duration: "18:42",
      date: "October 20, 2025",
      category: "Documentary",
      thumbnail: "/assets/news-indigenous-prep.jpg"
    },
    {
      title: "Indigenous Women in Biodiversity Conservation",
      description: "A powerful discussion with Indigenous women leaders about their crucial role as environmental stewards and knowledge keepers.",
      duration: "25:18",
      date: "October 18, 2025",
      category: "Panel Discussion",
      thumbnail: "/assets/news-framework-review.jpg"
    },
    {
      title: "Youth Caucus: The Future of Indigenous Rights",
      description: "Young Indigenous activists discuss their vision for the implementation of Article 8(j) and intergenerational knowledge transfer.",
      duration: "15:27",
      date: "October 16, 2025",
      category: "Interview",
      thumbnail: "/assets/news-panama-meetings.jpg"
    },
    {
      title: "From Consultation to Partnership: A New Paradigm",
      description: "Legal experts and Indigenous rights advocates explore the shift from consultation to genuine partnership in biodiversity governance.",
      duration: "22:14",
      date: "October 14, 2025",
      category: "Expert Panel",
      thumbnail: "/assets/news-indigenous-body.jpg"
    },
    {
      title: "Preparing for Panama: IIFB Strategy Session",
      description: "Behind-the-scenes look at IIFB's preparation for SB8J-1, including strategy discussions and position development.",
      duration: "30:45",
      date: "October 12, 2025",
      category: "Behind the Scenes",
      thumbnail: "/assets/news-indigenous-prep.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBannerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20 lg:py-24">
          <div className="mb-12 lg:mb-16">
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
          </div>

          {/* Navigation */}
          <div className="pt-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Home</Link>
                <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">About</Link>
                <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Statements</Link>
                <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Documents</Link>
                
                {/* News & Media Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-sm font-medium">
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
                      <Link to="/sb8j-1/videos" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
                        Videos
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Side Events</Link>
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
                  <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Home</Link>
                  <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">About</Link>
                  <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Statements</Link>
                  <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Documents</Link>
                  
                  {/* Mobile News & Media submenu */}
                  <div className="border-b border-white/10">
                    <div className="px-6 py-3 text-white bg-white/20 text-sm font-medium">News & Media</div>
                    <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">General News</Link>
                    <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Media Coverage Links</Link>
                    <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">IIFB Social Media Toolkit</Link>
                    <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Press Conferences</Link>
                    <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Articles</Link>
                    <Link to="/sb8j-1/videos" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-sm">Videos</Link>
                  </div>
                  
                  <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Side Events</Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Videos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Video content featuring Indigenous leaders, experts, and community voices discussing Article 8(j), traditional knowledge, and biodiversity governance.
            </p>
          </div>

          <div className="grid gap-8">
            {videos.map((video, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${video.featured ? 'border-secondary' : ''}`}>
                <div className="md:flex">
                  {/* Video Thumbnail */}
                  <div className="md:w-1/3 relative">
                    <div 
                      className="aspect-video bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-t-none relative"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    >
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                        <div className="bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer transition-colors">
                          <Play className="h-6 w-6 text-secondary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={video.featured ? "default" : "secondary"} className={video.featured ? "bg-secondary" : ""}>
                              {video.category}
                            </Badge>
                            {video.featured && (
                              <Badge variant="outline" className="border-secondary text-secondary">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                            {video.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4 text-base">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {video.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {video.duration}
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed mb-4">
                        {video.description}
                      </p>
                      <div className="flex gap-3">
                        <Button className="bg-secondary text-white hover:bg-secondary-hover">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Video
                        </Button>
                        <Button variant="outline">
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Play className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">Video Library</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Access our complete video library featuring interviews, documentaries, educational content, and live recordings from SB8J-1 and related events.
            </p>
            <div className="flex gap-4">
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                Browse All Videos
              </Button>
              <Button variant="outline">
                Subscribe to Channel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Videos;
