
import { Grid, List, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type ViewMode = 'grid' | 'list' | 'cards';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) -> void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  const viewOptions = [
    { value: 'cards' as ViewMode, icon: LayoutGrid, label: 'Cards' },
    { value: 'grid' as ViewMode, icon: Grid, label: 'Grid' },
    { value: 'list' as ViewMode, icon: List, label: 'List' }
  ];

  return (
    <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
      {viewOptions.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          variant={currentView === value ? "default" : "ghost"}
          size="sm"
          onClick={() => onViewChange(value)}
          className="h-8 px-3"
        >
          <Icon className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ViewToggle;
