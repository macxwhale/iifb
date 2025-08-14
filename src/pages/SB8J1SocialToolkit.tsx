
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Share2, Download, Copy, ChevronDown } from 'lucide-react';
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

const SB8J1SocialToolkit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const socialMessages = [
    {
      platform: "Twitter/X",
      message: "Historic moment! 🌿 The first meeting of the Subsidiary Body on Article 8(j) starts Oct 27 in Panama. Indigenous Peoples & local communities finally have a permanent voice in biodiversity governance. #SB8J1 #IndigenousRights #BiodiversityGovernance",
      hashtags: "#SB8J1 #IndigenousRights #BiodiversityGovernance #Article8j #IIFB",
      type: "Announcement"
    },
    {
      platform: "Facebook",
      message: "The First Meeting of the Subsidiary Body on Article 8(j) (SB8J-1) represents a groundbreaking moment for Indigenous Peoples and local communities in global biodiversity governance. Join us in amplifying Indigenous voices as we work toward meaningful implementation of traditional knowledge protection and territorial rights. 🌍✊",
      type: "Awareness"
    },
    {
      platform: "Instagram",
      message: "🌿 Indigenous knowledge holders have been guardians of biodiversity for millennia. Now, SB8J-1 creates a permanent space for their voices in global decision-making. Share this post to support Indigenous rights! #IndigenousWisdom #SB8J1 #BiodiversityConservation",
      type: "Educational"
    },
    {
      platform: "LinkedIn",
      message: "The establishment of the Subsidiary Body on Article 8(j) marks a pivotal advancement in inclusive biodiversity governance. As professionals working in sustainability, conservation, and policy, we must support Indigenous Peoples' meaningful participation in decisions affecting their territories and traditional knowledge.",
      type: "Professional"
    }
  ];

  const resources = [
    {
      title: "Official Graphics Pack",
      description: "High-resolution logos, banners, and infographics for SB8J-1",
      fileType: "ZIP",
      fileSize: "15.2 MB"
    },
    {
      title: "Key Messages Document",
      description: "Approved messaging guidelines and key talking points",
      fileType: "PDF",
      fileSize: "2.1 MB"
    },
    {
      title: "Fact Sheet Template",
      description: "Customizable fact sheet about Article 8(j) and Indigenous rights",
      fileType: "DOCX",
      fileSize: "1.8 MB"
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
                      <Link to="/sb8j-1/social-toolkit" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
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
                    <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-sm">IIFB Social Media Toolkit</Link>
                    <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Press Conferences</Link>
                    <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Articles</Link>
                    <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Videos</Link>
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">IIFB Social Media Toolkit</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Help amplify Indigenous voices and share messages about our participation in SB8J-1. Use these resources to spread awareness about Indigenous rights and biodiversity conservation.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <Share2 className="h-5 w-5 text-secondary" />
                <h3 className="text-lg font-semibold">Access Full Toolkit</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get access to our comprehensive social media toolkit with templates, graphics, and messaging guidelines.
              </p>
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                Open Trello Board
              </Button>
            </div>
          </div>

          <div className="grid gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ready-to-Use Messages</h3>
              <div className="grid gap-6">
                {socialMessages.map((message, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{message.platform}</Badge>
                          <Badge variant="outline">{message.type}</Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed mb-4">{message.message}</p>
                      {message.hashtags && (
                        <div className="text-sm text-secondary font-medium">
                          {message.hashtags}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Downloadable Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {resource.fileType} • {resource.fileSize}
                        </div>
                        <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1SocialToolkit;
