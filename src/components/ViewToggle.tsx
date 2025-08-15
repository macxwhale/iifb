
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Grid3X3, LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'cards' | 'grid' | 'list';
  onViewChange: (view: 'cards' | 'grid' | 'list') => void;
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sm font-medium text-muted-foreground">Layout:</span>
      <ToggleGroup 
        type="single" 
        value={view} 
        onValueChange={(value) => value && onViewChange(value as 'cards' | 'grid' | 'list')}
        className="bg-muted/50 rounded-lg p-1"
      >
        <ToggleGroupItem 
          value="cards" 
          className="data-[state=on]:bg-background data-[state=on]:shadow-sm"
          aria-label="Card view"
        >
          <LayoutGrid className="h-4 w-4" />
          <span className="ml-2 text-sm">Cards</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="grid" 
          className="data-[state=on]:bg-background data-[state=on]:shadow-sm"
          aria-label="Grid view"
        >
          <Grid3X3 className="h-4 w-4" />
          <span className="ml-2 text-sm">Grid</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="list" 
          className="data-[state=on]:bg-background data-[state=on]:shadow-sm"
          aria-label="List view"
        >
          <List className="h-4 w-4" />
          <span className="ml-2 text-sm">List</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ViewToggle;
