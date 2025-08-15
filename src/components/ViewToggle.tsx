
import { LayoutGrid, List, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type ViewMode = 'grid' | 'list' | 'cards';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  const viewOptions = [
    { id: 'grid' as ViewMode, icon: LayoutGrid, label: 'Grid' },
    { id: 'list' as ViewMode, icon: List, label: 'List' },
    { id: 'cards' as ViewMode, icon: Square, label: 'Cards' }
  ];

  return (
    <div className="flex items-center gap-2 bg-card rounded-lg p-1 border">
      {viewOptions.map(({ id, icon: Icon, label }) => (
        <Button
          key={id}
          variant={currentView === id ? "default" : "ghost"}
          size="sm"
          onClick={() => onViewChange(id)}
          className={`flex items-center gap-2 transition-all ${
            currentView === id 
              ? 'bg-primary text-primary-foreground shadow-sm' 
              : 'hover:bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ViewToggle;
