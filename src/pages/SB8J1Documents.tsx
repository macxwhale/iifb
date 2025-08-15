
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, FileText, Calendar, ChevronDown } from 'lucide-react';
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

const SB8J1Documents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { imageUrl, isLoading } = usePexelsImage('sb8j-documents');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const documents = [
    {
      title: "Provisional Agenda",
      description: "Draft agenda for the first meeting of the Subsidiary Body on Article 8(j).",
      date: "October 27, 2025",
      fileType: "PDF",
      fileSize: "2.1 MB",
      url: "#",
      category: "Official Documents"
    },
    {
      title: "Compilation of Submissions",
      description: "A compilation of submissions received from Parties and observers.",
      date: "October 26, 2025",
      fileType: "DOCX",
      fileSize: "1.5 MB",
      url: "#",
      category: "Working Documents"
    },
    {
      title: "Annotated Provisional Agenda",
      description: "Annotations to the provisional agenda, providing context and background.",
      date: "October 25, 2025",
      fileType: "PDF",
      fileSize: "1.8 MB",
      url: "#",
      category: "Information Documents"
    },
    {
      title: "Report of the Expert Workshop",
      description: "Report from the expert workshop on traditional knowledge.",
      date: "October 24, 2025",
      fileType: "PDF",
      fileSize: "2.5 MB",
      url: "#",
      category: "Background Documents"
    },
    {
      title: "Draft Recommendations",
      description: "Initial draft recommendations for consideration by the Subsidiary Body.",
      date: "October 23, 2025",
      fileType: "DOCX",
      fileSize: "1.2 MB",
      url: "#",
      category: "Official Documents"
    },
    {
      title: "Information Note for Participants",
      description: "Essential information for participants attending the SB8J-1 meeting.",
      date: "October 22, 2025",
      fileType: "PDF",
      fileSize: "0.9 MB",
      url: "#",
      category: "General Information"
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
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16 lg:py-20">
          <div className="mb-8 lg:mb-12">
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
                <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">Home</Link>
                <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">About</Link>
                <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">Statements</Link>
                <Link to="/sb8j-1/documents" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-lg font-medium">Documents</Link>
                
                {/* News & Media Dropdown */}
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

                <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-lg font-medium">Side Events</Link>
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
                  <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
                  <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">About</Link>
                  <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                  <Link to="/sb8j-1/documents" className="px-6 py-4 text-white bg-white/20 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                  
                  {/* Mobile News & Media submenu */}
                  <div className="border-b border-white/10">
                    <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                    <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">General News</Link>
                    <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Media Coverage Links</Link>
                    <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">IIFB Social Media Toolkit</Link>
                    <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Press Conferences</Link>
                    <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Articles</Link>
                    <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Videos</Link>
                  </div>
                  
                  <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Side Events</Link>
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
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl md:text-2xl leading-tight">
                      {doc.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {doc.date}
                    </div>
                  </div>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {doc.category}
                    </Badge>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download ({doc.fileType}, {doc.fileSize})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">Additional Resources</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore further resources, including reports, publications, and multimedia content related to Article 8(j) and the rights of Indigenous Peoples.
            </p>
            <Button className="bg-secondary text-white hover:bg-secondary-hover">
              View All Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Documents;
