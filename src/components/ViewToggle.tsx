
import { Grid, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ViewType = 'grid' | 'list' | 'cards';

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
      <Button
        variant={currentView === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('grid')}
        className="px-3"
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={currentView === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('list')}
        className="px-3"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant={currentView === 'cards' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('cards')}
        className="px-3"
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;
