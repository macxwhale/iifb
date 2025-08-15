
import { Grid, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type ViewMode = 'grid' | 'list' | 'cards';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-1">
      <Button
        variant={currentView === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('grid')}
        className="h-8 w-8 p-0"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={currentView === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('list')}
        className="h-8 w-8 p-0"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant={currentView === 'cards' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('cards')}
        className="h-8 w-8 p-0"
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;
