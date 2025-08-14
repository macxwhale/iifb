
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ExternalLink, Folder, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SB8J1Documents = () => {
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
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-16 lg:py-20">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              SB8J-1 Documents
              <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                Official Resources & Materials
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed opacity-90">
              Official documents, background materials, and stakeholder submissions for the First Meeting of the Subsidiary Body on Article 8(j)
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
