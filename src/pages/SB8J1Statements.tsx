
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroBannerImage from '@/assets/hero-banner-indigenous.jpg';

const SB8J1Statements = () => {
  const statements = [
    {
      title: "IIFB Opening Statement to SB8J-1",
      organization: "International Indigenous Forum on Biodiversity",
      date: "October 27, 2025",
      type: "Opening Statement",
      language: "English",
      summary: "The International Indigenous Forum on Biodiversity welcomes the historic establishment of the Subsidiary Body on Article 8(j) and outlines key priorities for Indigenous Peoples' participation in biodiversity governance."
    },
    {
      title: "Indigenous Women's Vision for Article 8(j) Implementation",
      organization: "Indigenous Women's Network for Biodiversity",
      date: "October 28, 2025",
      type: "Position Statement",
      language: "English / Spanish",
      summary: "Indigenous women leaders present their vision for gender-responsive implementation of Article 8(j), emphasizing the critical role of women as knowledge keepers and environmental stewards."
    },
    {
      title: "Youth Statement on Intergenerational Knowledge Transfer",
      organization: "Global Indigenous Youth Caucus",
      date: "October 28, 2025",
      type: "Youth Statement",
      language: "Multiple Languages",
      summary: "Indigenous youth representatives call for innovative approaches to traditional knowledge transmission that honor ancestral wisdom while embracing contemporary challenges and opportunities."
    },
    {
      title: "Forest Peoples Programme on Traditional Territories",
      organization: "Forest Peoples Programme",
      date: "October 29, 2025",
      type: "Technical Statement",
      language: "English",
      summary: "Comprehensive analysis and recommendations on guidelines for Indigenous and traditional territories in the context of the Kunming-Montreal Global Biodiversity Framework Target 3."
    },
    {
      title: "Arctic Council Indigenous Knowledge Statement",
      organization: "Inuit Circumpolar Council",
      date: "October 29, 2025",
      type: "Regional Statement",
      language: "English / Inuktitut",
      summary: "Arctic Indigenous communities share their traditional knowledge of climate change impacts on biodiversity and call for increased recognition of Indigenous climate observations."
    },
    {
      title: "Amazon Indigenous Confederation Final Statement",
      organization: "Confederation of Amazonian Nationalities",
      date: "October 30, 2025",
      type: "Regional Statement",
      language: "Spanish / Portuguese",
      summary: "Amazonian Indigenous leaders present unified positions on forest conservation, traditional knowledge protection, and the implementation of free, prior, and informed consent protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBannerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20 lg:py-24">
          <div className="mb-12 lg:mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              SB8J-1
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                Statements & Interventions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Official statements and interventions from Indigenous organizations and stakeholders
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

          <div className="pt-8">
            <Link to="/sb8j-1" className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl transition-all duration-300">
              <ArrowLeft className="h-4 w-4" />
              Back to SB8J-1
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Official Statements
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Statements and interventions from Indigenous organizations, civil society, and stakeholders participating in SB8J-1
              </p>
            </div>

            <div className="grid gap-8">
              {statements.map((statement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-secondary text-white">
                            {statement.type}
                          </Badge>
                          <Badge variant="outline">
                            {statement.language}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{statement.title}</CardTitle>
                        <CardDescription className="text-base">
                          {statement.organization}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {statement.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed mb-4">
                      {statement.summary}
                    </p>
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Read Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-card p-8 rounded-lg border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Submit a Statement</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Indigenous organizations and civil society groups are invited to submit official statements and interventions for SB8J-1. 
                Statements should focus on Article 8(j) implementation, traditional knowledge, and Indigenous rights in biodiversity governance.
              </p>
              <div className="flex gap-4">
                <Button className="bg-secondary text-white hover:bg-secondary-hover">
                  Submit Statement
                </Button>
                <Button variant="outline">
                  Submission Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SB8J1Statements;
