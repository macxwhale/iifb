
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Globe, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SB8J1About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="bg-card border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <Link to="/sb8j-1" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to SB8J-1
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About SB8J-1
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding the First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-secondary" />
                  Historical Context
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  The establishment of the Subsidiary Body on Article 8(j) and Related Provisions represents a historic milestone in the Convention on Biological Diversity (CBD). Following decades of advocacy by Indigenous Peoples and local communities (IPLCs), COP 16 made the groundbreaking decision to create this permanent subsidiary body.
                </p>
                <p className="text-foreground leading-relaxed">
                  Article 8(j) of the CBD calls for Parties to respect, preserve, and maintain knowledge, innovations, and practices of Indigenous and local communities embodying traditional lifestyles relevant for the conservation and sustainable use of biological diversity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-secondary" />
                  Mandate and Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enhance the participation of Indigenous Peoples and local communities in CBD processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide scientific, technical, and technological advice on Article 8(j) implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Support the achievement of the Kunming-Montreal Global Biodiversity Framework targets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advance the rights and contributions of IPLCs in biodiversity conservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-secondary" />
                  Global Significance
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  This subsidiary body represents the first formal mechanism within the CBD dedicated exclusively to Indigenous and traditional knowledge systems. It acknowledges that Indigenous territories encompass 80% of the world's biodiversity and that Indigenous Peoples are the most effective guardians of nature, despite comprising only 5% of the global population.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/sb8j-1">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary-hover">
                <Calendar className="h-4 w-4 mr-2" />
                View Meeting Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1About;
