
interface PatternStripProps {
  className?: string;
}

const PatternStrip = ({ className = "" }: PatternStripProps) => {
  return (
    <div 
      className={`relative h-24 bg-repeat-x bg-center opacity-10 ${className}`}
      style={{ 
        backgroundImage: `url('/src/assets/pattern-background.png')`,
        backgroundSize: 'auto 100%'
      }}
    />
  );
};

export default PatternStrip;
