
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar } from 'lucide-react';
import ViewToggle, { ViewMode } from '@/components/ViewToggle';

interface Document {
  title: string;
  type: string;
  category: string;
  date: string;
  size: string;
  description: string;
  url: string;
}

interface DocumentsContentProps {
  documents: Document[];
  title: string;
  subtitle?: string;
}

const DocumentsContent = ({ documents, title, subtitle }: DocumentsContentProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  const renderCardsView = () => (
    <div className="grid gap-6">
      {documents.map((doc, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{doc.type}</Badge>
                  <Badge variant="outline">{doc.category}</Badge>
                  <Badge variant="outline">{doc.size}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{doc.title}</CardTitle>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {doc.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed mb-4">{doc.description}</p>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {documents.map((doc, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
              <Badge variant="outline" className="text-xs">{doc.category}</Badge>
            </div>
            <CardTitle className="text-lg mb-2 leading-tight line-clamp-2">{doc.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm leading-relaxed mb-4 line-clamp-3">{doc.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {doc.date}
              </div>
              <Button size="sm">
                <Download className="h-3 w-3 mr-1" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {documents.map((doc, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                  <Badge variant="outline" className="text-xs">{doc.category}</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-1 line-clamp-1">{doc.title}</h3>
                <p className="text-sm leading-relaxed line-clamp-2">{doc.description}</p>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {doc.date}
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {doc.size}
                </div>
              </div>
              <div className="flex justify-end">
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (viewMode) {
      case 'grid':
        return renderGridView();
      case 'list':
        return renderListView();
      default:
        return renderCardsView();
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default DocumentsContent;
