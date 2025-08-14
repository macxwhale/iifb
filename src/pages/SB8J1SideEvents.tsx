import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SB8J1SideEvents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sideEvents = [
    {
      title: "Indigenous Knowledge Systems in Climate Adaptation",
      organizer: "Indigenous Climate Adaptation Network",
      date: "October 26, 2025",
      time: "18:00 - 19:30",
      location: "Convention Center - Room A1",
      type: "Panel Discussion",
      capacity: "120 participants",
      description: "Exploring how traditional ecological knowledge can enhance climate resilience strategies and inform national adaptation plans under the Paris Agreement and KMGBF.",
      speakers: ["Dr. Maria Santos (Quechua Nation)", "John Bear (Inuit Circumpolar Council)", "Dr. Priya Sharma (Traditional Healers Association)"],
      registration: "Open"
    },
    {
      title: "Digital Protocols for Traditional Knowledge Protection",
      organizer: "Digital Heritage Foundation & IIFB",
      date: "October 27, 2025",
      time: "12:30 - 14:00",
      location: "Hotel Panama - Conference Hall",
      type: "Technical Workshop",
      capacity: "80 participants",
      description: "Hands-on workshop on developing digital protocols that protect Indigenous intellectual property while enabling appropriate sharing of traditional knowledge for biodiversity conservation.",
      speakers: ["Dr. Robert Kim (MIT)", "Sarah Whitefeather (First Nations Technology Council)", "Dr. Ana Rodriguez (University of Panama)"],
      registration: "Limited Spaces"
    },
    {
      title: "Indigenous Women as Biodiversity Champions",
      organizer: "Indigenous Women's Network for Biodiversity",
      date: "October 28, 2025",
      time: "17:00 - 18:30",
      location: "Cultural Center Panama",
      type: "Cultural Exchange",
      capacity: "200 participants",
      description: "Celebrating the leadership of Indigenous women in biodiversity conservation through storytelling, traditional practices demonstration, and policy dialogue.",
      speakers: ["Victoria Tauli-Corpuz (UN Special Rapporteur)", "Elena Vargas (Amazon Conservation Network)", "Traditional Dancers from Panama"],
      registration: "Open"
    },
    {
      title: "Youth Voices: Future Guardians of Traditional Knowledge",
      organizer: "Global Indigenous Youth Caucus",
      date: "October 29, 2025",
      time: "16:00 - 17:30",
      location: "University of Panama - Auditorium",
      type: "Youth Forum",
      capacity: "150 participants",
      description: "Interactive forum where Indigenous youth share their perspectives on traditional knowledge transmission, modern challenges, and innovative solutions for biodiversity conservation.",
      speakers: ["Youth representatives from 6 continents", "Elders Council", "Dr. James Wilson (Youth Engagement Specialist)"],
      registration: "Priority for Youth"
    },
    {
      title: "Community-Based Monitoring: Technology Meets Tradition",
      organizer: "Forest Peoples Programme & WWF",
      date: "October 29, 2025",
      time: "19:00 - 20:30",
      location: "Convention Center - Room B2",
      type: "Innovation Showcase",
      capacity: "100 participants",
      description: "Showcasing innovative community-based monitoring systems that combine traditional observation methods with modern technology for biodiversity assessment.",
      speakers: ["Community Monitors from Brazil", "Dr. Lisa Thompson (Conservation Technology)", "Miguel Santos (Indigenous Mapping Project)"],
      registration: "Open"
    },
    {
      title: "Sacred Sites and Protected Areas: Finding Common Ground",
      organizer: "Sacred Sites Research Foundation",
      date: "October 30, 2025",
      time: "14:00 - 15:30",
      location: "Cultural Center Panama - Sacred Hall",
      type: "Sacred Ceremony & Dialogue",
      capacity: "80 participants",
      description: "A respectful exploration of how sacred sites can be integrated into formal protected area systems while maintaining their spiritual and cultural integrity.",
      speakers: ["Traditional Leaders from Guna Nation", "IUCN Protected Areas Specialist", "Dr. Amanda Green (Sacred Geography Institute)"],
      registration: "By Invitation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/assets/sb8j-event.jpg)` }}
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
                <Link to="/sb8j-1/news" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">News & Media</Link>
                <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-sm font-medium">Side Events</Link>
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
                  <Link to="/sb8j-1/news" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">News & Media</Link>
                  <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white bg-white/20 transition-all duration-300">Side Events</Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 mb-12">
            {sideEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-secondary text-white">
                          {event.type}
                        </Badge>
                        <Badge variant={event.registration === "Open" ? "default" : event.registration === "Limited Spaces" ? "destructive" : "outline"}>
                          {event.registration}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <CardDescription className="text-base">
                        Organized by {event.organizer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-secondary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-secondary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-secondary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-secondary" />
                      {event.capacity}
                    </div>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Featured Speakers:</h4>
                    <ul className="text-sm text-muted-foreground">
                      {event.speakers.map((speaker, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-secondary rounded-full"></div>
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                      Register Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      More Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground">Organize a Side Event</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Indigenous organizations, research institutions, and civil society groups are invited to organize side events during SB8J-1. 
              Side events provide valuable opportunities for deeper dialogue, capacity building, and cultural exchange.
            </p>
            <div className="flex gap-4">
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                Submit Proposal
              </Button>
              <Button variant="outline">
                Event Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1SideEvents;
