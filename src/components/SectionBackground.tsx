
import React from 'react';
import GeometricPattern from './patterns/GeometricPattern';
import IndigenousPatterns from './patterns/IndigenousPatterns';

interface SectionBackgroundProps {
  children: React.ReactNode;
  variant: 'hero' | 'introduction' | 'events' | 'statements' | 'news' | 'side-events' | 'resources';
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ children, variant, className = '' }) => {
  const getBackgroundConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          bgClass: 'bg-gradient-to-br from-iifb-rust via-iifb-earth to-iifb-forest',
          pattern: null,
          divider: null
        };
      
      case 'introduction':
        return {
          bgClass: 'bg-gradient-to-r from-iifb-cream to-muted/50',
          pattern: <GeometricPattern variant="weave" color="hsl(var(--iifb-rust))" opacity={0.08} size={80} />,
          divider: <IndigenousPatterns variant="border-diamond" color="hsl(var(--iifb-orange))" opacity={0.2} className="absolute top-0 left-0 right-0" />
        };
      
      case 'events':
        return {
          bgClass: 'bg-gradient-to-br from-background via-muted/30 to-iifb-cream/50',
          pattern: <GeometricPattern variant="diamond" color="hsl(var(--secondary))" opacity={0.06} size={100} />,
          divider: <IndigenousPatterns variant="stepped-diamond" color="hsl(var(--secondary))" opacity={0.05} />
        };
      
      case 'statements':
        return {
          bgClass: 'bg-gradient-to-r from-iifb-sage/20 via-iifb-cream/40 to-iifb-sage/20',
          pattern: <GeometricPattern variant="zigzag" color="hsl(var(--iifb-forest))" opacity={0.1} size={120} />,
          divider: <IndigenousPatterns variant="geometric-border" color="hsl(var(--iifb-forest))" opacity={0.25} className="absolute bottom-0 left-0 right-0" />
        };
      
      case 'news':
        return {
          bgClass: 'bg-gradient-to-bl from-muted/40 via-background to-iifb-orange/10',
          pattern: <GeometricPattern variant="spiral" color="hsl(var(--iifb-orange))" opacity={0.07} size={90} />,
          divider: <IndigenousPatterns variant="border-diamond" color="hsl(var(--iifb-orange))" opacity={0.2} className="absolute top-0 left-0 right-0" />
        };
      
      case 'side-events':
        return {
          bgClass: 'bg-gradient-to-tr from-iifb-earth/10 via-muted/20 to-accent/10',
          pattern: <IndigenousPatterns variant="tribal-weave" color="hsl(var(--accent))" opacity={0.08} />,
          divider: <IndigenousPatterns variant="geometric-border" color="hsl(var(--accent))" opacity={0.3} className="absolute top-0 left-0 right-0" />
        };
      
      case 'resources':
        return {
          bgClass: 'bg-gradient-to-r from-card via-iifb-cream/30 to-card',
          pattern: <GeometricPattern variant="diamond" color="hsl(var(--iifb-rust))" opacity={0.05} size={110} />,
          divider: <IndigenousPatterns variant="stepped-diamond" color="hsl(var(--iifb-rust))" opacity={0.06} />
        };
      
      default:
        return {
          bgClass: 'bg-background',
          pattern: null,
          divider: null
        };
    }
  };

  const { bgClass, pattern, divider } = getBackgroundConfig();

  return (
    <div className={`relative ${bgClass} ${className}`}>
      {pattern}
      {divider}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
