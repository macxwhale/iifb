import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Download, ExternalLink, Folder, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SB8J1Documents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const officialDocs = [
    {
      title: "SB8J-1 Provisional Agenda",
      code: "CBD/SB8J/1/1",
      date: "September 2025",
      type: "Agenda",
      description: "Provisional agenda for the first meeting of the Subsidiary Body on Article 8(j) and related provisions.",
      status: "Final"
    },
    {
      title: "Modus Operandi Draft Guidelines",
      code: "CBD/SB8J/1/2",
      date: "October 2025",
      type: "Working Document",
      description: "Draft guidelines for the modus operandi of the Subsidiary Body on Article 8(j) and related provisions.",
      status: "Draft"
    },
    {
      title: "Indigenous and Traditional Territories Guidelines",
      code: "CBD/SB8J/1/3",
      date: "October 2025",
      type: "Technical Document",
      description: "Draft guidelines on Indigenous and traditional territories in the context of the Kunming-Montreal Global Biodiversity Framework.",
      status: "Draft"
    },
    {
      title: "Voluntary Glossary Update",
      code: "CBD/SB8J/1/4",
      date: "October 2025",
      type: "Reference Document",
      description: "Updated voluntary glossary of key terms and concepts related to Article 8(j) and related provisions.",
      status: "Review"
    }
  ];

  const backgroundDocs = [
    {
      title: "Article 8(j) and Related Provisions: Historical Overview",
      date: "August 2025",
      type: "Information Document",
      description: "Comprehensive background on the development and implementation of Article 8(j) within the CBD framework."
    },
    {
      title: "Indigenous Knowledge Systems and Biodiversity Conservation",
      date: "September 2025",
      type: "Technical Report",
      description: "Analysis of traditional knowledge contributions to global biodiversity conservation efforts."
    },
    {
      title: "KMGBF Target 3 and Indigenous Territories",
      date: "September 2025",
      type: "Policy Brief",
      description: "Examination of how Indigenous territories contribute to achieving 30% protection targets under the KMGBF."
    }
  ];

  const submissionDocs = [
    {
      title: "IIFB Submission on Modus Operandi",
      organization: "International Indigenous Forum on Biodiversity",
      date: "August 2025",
      type: "Stakeholder Submission"
    },
    {
      title: "Indigenous Women's Network Position",
      organization: "Indigenous Women's Network for Biodiversity",
      date: "September 2025",
      type: "Stakeholder Submission"
    },
    {
      title: "Forest Peoples Programme Recommendations",
      organization: "Forest Peoples Programme",
      date: "September 2025",
      type: "Stakeholder Submission"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/assets/nature-forest.gif)` }}
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
                <Link to="/sb8j-1/documents" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-sm font-medium">Documents</Link>
                <Link to="/sb8j-1/news" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">News & Media</Link>
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
                  <Link to="/sb8j-1/documents" className="px-6 py-4 text-white bg-white/20 transition-all duration-300 border-b border-white/10">Documents</Link>
                  <Link to="/sb8j-1/news" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">News & Media</Link>
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
          <Tabs defaultValue="official" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="official">Official Documents</TabsTrigger>
              <TabsTrigger value="background">Background Materials</TabsTrigger>
              <TabsTrigger value="submissions">Stakeholder Submissions</TabsTrigger>
            </TabsList>

            <TabsContent value="official" className="space-y-6">
              {officialDocs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                        <CardDescription className="text-base">
                          Document Code: {doc.code}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={doc.status === "Final" ? "default" : "secondary"}>
                          {doc.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {doc.date}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">{doc.type}</span>
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">
                      {doc.description}
                    </p>
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="background" className="space-y-6">
              {backgroundDocs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                    <CardDescription className="text-base">
                      {doc.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <Folder className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">{doc.type}</span>
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">
                      {doc.description}
                    </p>
                    <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="submissions" className="space-y-6">
              {submissionDocs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
                    <CardDescription className="text-base">
                      {doc.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">{doc.type}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      {doc.date}
                    </div>
                    <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Documents;
