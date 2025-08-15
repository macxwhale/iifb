import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, ExternalLink, Tag, ChevronDown } from 'lucide-react';
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

const SB8J1News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { imageUrl, isLoading } = usePexelsImage('sb8j-news');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const newsItems = [
    {
      title: "Historic Decision: CBD Establishes Permanent Subsidiary Body for Indigenous Peoples",
      date: "December 15, 2024",
      category: "Breaking News",
      source: "CBD Secretariat",
      summary: "COP 16 adopts groundbreaking decision to create the first permanent subsidiary body dedicated to Article 8(j) and Indigenous Peoples' rights within the Convention on Biological Diversity.",
      image: "/assets/news-indigenous-body.jpg",
      featured: true
    },
    {
      title: "Panama City Prepares to Host First SB8J Meeting",
      date: "January 20, 2025",
      category: "Event Updates",
      source: "Panama Ministry of Environment",
      summary: "Panama announces comprehensive preparations for hosting SB8J-1, including cultural protocols to honor Indigenous traditions and ensure meaningful participation of IPLCs.",
      image: "/assets/news-panama-meetings.jpg"
    },
    {
      title: "IIFB Launches Preparatory Process for SB8J-1",
      date: "February 5, 2025",
      category: "Indigenous Leadership",
      source: "International Indigenous Forum on Biodiversity",
      summary: "The International Indigenous Forum on Biodiversity initiates extensive consultations with Indigenous organizations worldwide to prepare unified positions for the historic first meeting.",
      image: "/assets/news-indigenous-prep.jpg"
    },
    {
      title: "Traditional Knowledge Guidelines: A New Framework for Protection",
      date: "March 10, 2025",
      category: "Policy Development",
      source: "CBD Working Group",
      summary: "Experts develop innovative guidelines for documenting and protecting traditional knowledge while ensuring Indigenous Peoples maintain control over their intellectual heritage.",
      image: "/assets/news-framework-review.jpg"
    },
    {
      title: "Indigenous Women Call for Gender-Responsive Implementation",
      date: "April 18, 2025",
      category: "Gender & Biodiversity",
      source: "Indigenous Women's Network",
      summary: "Indigenous women leaders emphasize the critical need for gender-responsive approaches in Article 8(j) implementation, highlighting women's roles as knowledge keepers and environmental stewards."
    },
    {
      title: "Youth Caucus Demands Intergenerational Representation at SB8J-1",
      date: "May 22, 2025",
      category: "Youth Engagement",
      source: "Global Indigenous Youth Caucus",
      summary: "Indigenous youth organizations worldwide unite to ensure meaningful participation of young Indigenous leaders in SB8J-1 discussions and decision-making processes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-12 lg:py-16">
          <div className="mb-6 lg:mb-8">
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
          <div className="pt-4">
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
                    <button className="flex items-center px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-xl font-medium">
                      News & Media
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px]">
                    <DropdownMenuItem asChild>
                      <Link to="/sb8j-1/news" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
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

                <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
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
                    <div className="px-6 py-3 text-white bg-white/20 text-xl font-medium">News & Media</div>
                    <Link to="/sb8j-1/news" className="px-8 py-3 text-white bg-white/20 transition-all duration-300">General News</Link>
                    <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Media Coverage Links</Link>
                    <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">IIFB Social Media Toolkit</Link>
                    <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Press Conferences</Link>
                    <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Articles</Link>
                    <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Videos</Link>
                  </div>
                  
                  <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-xl">Side Events</Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${item.featured ? 'border-secondary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={item.featured ? "default" : "secondary"} className={item.featured ? "bg-secondary" : ""}>
                          {item.category}
                        </Badge>
                        {item.featured && (
                          <Badge variant="outline" className="border-secondary text-secondary">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {item.source}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                      Read Full Article
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">Media Resources</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Access press releases, media kits, high-resolution images, and other resources for media coverage of SB8J-1. 
              Journalists and media professionals can request interviews with Indigenous leaders and technical experts.
            </p>
            <div className="flex gap-4">
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                Media Kit
              </Button>
              <Button variant="outline">
                Press Contacts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1News;
