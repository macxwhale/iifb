import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Download, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SB8J1Statements = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const statements = [
    {
      title: "IIFB Opening Statement",
      organization: "International Indigenous Forum on Biodiversity",
      date: "October 27, 2025",
      type: "Opening Statement",
      description: "Comprehensive opening statement outlining IIFB priorities for SB8J-1 including Indigenous territories, traditional knowledge protocols, and meaningful participation frameworks.",
      status: "Available"
    },
    {
      title: "Indigenous Women's Position Paper",
      organization: "Indigenous Women's Network",
      date: "October 28, 2025",
      type: "Position Paper",
      description: "Statement emphasizing the critical role of Indigenous women in biodiversity conservation and the need for gender-responsive implementation of Article 8(j).",
      status: "Available"
    },
    {
      title: "Youth Caucus Declaration",
      organization: "Global Indigenous Youth Caucus",
      date: "October 28, 2025",
      type: "Declaration",
      description: "Joint declaration from Indigenous youth representatives calling for intergenerational knowledge transfer and youth participation in decision-making processes.",
      status: "Available"
    },
    {
      title: "Traditional Knowledge Guidelines Statement",
      organization: "Coalition of Indigenous Organizations",
      date: "October 29, 2025",
      type: "Technical Statement",
      description: "Detailed technical statement on the development of guidelines for documenting, protecting, and applying traditional knowledge in biodiversity planning.",
      status: "Forthcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/assets/news-indigenous-prep.jpg)` }}
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
                <Link to="/sb8j-1/statements" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-sm font-medium">Statements</Link>
                <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Documents</Link>
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
                  <Link to="/sb8j-1/statements" className="px-6 py-4 text-white bg-white/20 transition-all duration-300 border-b border-white/10">Statements</Link>
                  <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Documents</Link>
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
          <div className="grid gap-6 mb-12">
            {statements.map((statement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{statement.title}</CardTitle>
                      <CardDescription className="text-base">
                        {statement.organization}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={statement.status === "Available" ? "default" : "secondary"}>
                        {statement.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {statement.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">{statement.type}</span>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {statement.description}
                  </p>
                  <div className="flex gap-3">
                    {statement.status === "Available" ? (
                      <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <Calendar className="h-4 w-4 mr-2" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">Submit Your Statement</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Indigenous organizations and local community representatives are invited to submit official statements for SB8J-1. 
              All submissions should align with the meeting's agenda items and contribute to the advancement of Article 8(j) implementation.
            </p>
            <Button className="bg-secondary text-white hover:bg-secondary-hover">
              Submit Statement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Statements;
