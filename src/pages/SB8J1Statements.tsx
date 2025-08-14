
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SB8J1Statements = () => {
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
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16 lg:py-20">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              SB8J-1 Statements
              <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                Indigenous Voices & Positions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-90">
              Official statements, position papers, and declarations from Indigenous Peoples and local communities
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
