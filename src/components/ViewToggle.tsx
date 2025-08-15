
import { Grid3X3, LayoutGrid, List } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export type ViewMode = 'cards' | 'grid' | 'list';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Official Statements</h2>
        <p className="text-muted-foreground">
          Key statements and interventions from Indigenous Peoples and local communities
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">View:</span>
        <ToggleGroup 
          type="single" 
          value={viewMode} 
          onValueChange={(value) => value && onViewModeChange(value as ViewMode)}
          className="bg-muted rounded-lg p-1"
        >
          <ToggleGroupItem 
            value="cards" 
            aria-label="Cards view"
            className="data-[state=on]:bg-background data-[state=on]:text-foreground"
          >
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="grid" 
            aria-label="Grid view"
            className="data-[state=on]:bg-background data-[state=on]:text-foreground"
          >
            <Grid3X3 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="list" 
            aria-label="List view"
            className="data-[state=on]:bg-background data-[state=on]:text-foreground"
          >
            <List className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ViewToggle;
