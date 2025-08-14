
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Calendar, User, ChevronDown } from 'lucide-react';
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

const SB8J1Articles = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const articles = [
    {
      title: "The Historic Significance of Article 8(j): A New Era for Indigenous Rights",
      author: "Dr. Victoria Tauli-Corpuz",
      date: "October 20, 2025",
      category: "Analysis",
      readTime: "8 min read",
      excerpt: "As we approach the first meeting of the Subsidiary Body on Article 8(j), it's crucial to understand the historical context and transformative potential of this milestone for Indigenous Peoples worldwide.",
      featured: true
    },
    {
      title: "Traditional Knowledge Systems: Guardians of Global Biodiversity",
      author: "Prof. James Anaya",
      date: "October 18, 2025",
      category: "Research",
      readTime: "12 min read",
      excerpt: "Indigenous and traditional knowledge systems have safeguarded biodiversity for millennia. This article explores how SB8J-1 can formally recognize and protect these invaluable knowledge systems."
    },
    {
      title: "From Consultation to Partnership: Redefining Indigenous Participation",
      author: "Rosa Tanguila",
      date: "October 15, 2025",
      category: "Opinion",
      readTime: "6 min read",
      excerpt: "The establishment of SB8J-1 represents a shift from mere consultation to genuine partnership in biodiversity governance. We examine what this means for Indigenous communities globally."
    },
    {
      title: "Women as Knowledge Keepers: Gender Dimensions of Article 8(j)",
      author: "Maria Santos & Galina Angarova",
      date: "October 12, 2025",
      category: "Feature",
      readTime: "10 min read",
      excerpt: "Indigenous women play crucial roles as knowledge keepers and environmental stewards. This piece highlights the importance of gender-responsive approaches in implementing Article 8(j)."
    },
    {
      title: "Youth Voices in Biodiversity Governance: The Next Generation Speaks",
      author: "Indigenous Youth Caucus",
      date: "October 10, 2025",
      category: "Perspectives",
      readTime: "7 min read",
      excerpt: "Young Indigenous leaders share their vision for the future of biodiversity governance and the role of intergenerational knowledge transfer in Article 8(j) implementation."
    },
    {
      title: "Legal Frameworks for Traditional Knowledge Protection",
      author: "Dr. Patricia Gualinga",
      date: "October 8, 2025",
      category: "Legal Analysis",
      readTime: "15 min read",
      excerpt: "A comprehensive analysis of existing legal frameworks and the potential for new mechanisms to protect Indigenous intellectual property and traditional knowledge systems."
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
                      <Link to="/sb8j-1/articles" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
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
                    <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">IIFB Social Media Toolkit</Link>
                    <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Press Conferences</Link>
                    <Link to="/sb8j-1/articles" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-sm">Articles</Link>
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
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Articles</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In-depth articles, analysis, and perspectives on Article 8(j), Indigenous rights, and biodiversity governance from experts and community leaders.
            </p>
          </div>

          <div className="grid gap-8">
            {articles.map((article, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${article.featured ? 'border-secondary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={article.featured ? "default" : "secondary"} className={article.featured ? "bg-secondary" : ""}>
                          {article.category}
                        </Badge>
                        {article.featured && (
                          <Badge variant="outline" className="border-secondary text-secondary">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline">{article.readTime}</Badge>
                      </div>
                      <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-base">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex gap-3">
                    <Button className="bg-secondary text-white hover:bg-secondary-hover">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                    <Button variant="outline">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">Contribute Your Voice</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We welcome submissions from Indigenous leaders, researchers, and advocates. Share your perspectives on Article 8(j) implementation and Indigenous rights in biodiversity governance.
            </p>
            <div className="flex gap-4">
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                Submit an Article
              </Button>
              <Button variant="outline">
                Editorial Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Articles;
