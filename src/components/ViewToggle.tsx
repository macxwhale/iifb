
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Grid3X3, LayoutGrid, List } from 'lucide-react';

export type ViewMode = 'cards' | 'grid' | 'list';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">IIFB Statements</h2>
        <p className="text-muted-foreground">
          Official statements and interventions from the International Indigenous Forum on Biodiversity
        </p>
      </div>
      
      <ToggleGroup 
        type="single" 
        value={viewMode} 
        onValueChange={(value) => value && onViewModeChange(value as ViewMode)}
        className="bg-card border border-border rounded-lg p-1"
      >
        <ToggleGroupItem 
          value="cards" 
          aria-label="Cards view"
          className="data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground"
        >
          <LayoutGrid className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="grid" 
          aria-label="Grid view"
          className="data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground"
        >
          <Grid3X3 className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="list" 
          aria-label="List view"
          className="data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground"
        >
          <List className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ViewToggle;
