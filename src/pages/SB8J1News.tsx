
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SB8J1News = () => {
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
          style={{ backgroundImage: `url(/assets/news-indigenous-body.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16 lg:py-20">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              SB8J-1 News & Media
              <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                Latest Updates & Coverage
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-90">
              Latest news, updates, and media coverage related to the First Meeting of the Subsidiary Body on Article 8(j)
            </p>
          </div>

          {/* Back Button */}
          <Link to="/sb8j-1" className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl transition-all duration-300">
            <ArrowLeft className="h-4 w-4" />
            Back to SB8J-1
          </Link>
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
