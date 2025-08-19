
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
          divider: null,
          edgePattern: null
        };
      
      case 'introduction':
        return {
          bgClass: 'bg-gradient-to-r from-iifb-cream to-muted/50',
          pattern: null,
          divider: <IndigenousPatterns variant="border-diamond" color="hsl(var(--iifb-orange))" opacity={0.2} className="absolute top-0 left-0 right-0" />,
          edgePattern: <GeometricPattern variant="weave" color="hsl(var(--iifb-rust))" opacity={0.12} size={80} className="absolute left-0 top-0 bottom-0 w-32" />
        };
      
      case 'events':
        return {
          bgClass: 'bg-gradient-to-br from-background via-muted/30 to-iifb-cream/50',
          pattern: null,
          divider: null,
          edgePattern: <GeometricPattern variant="diamond" color="hsl(var(--secondary))" opacity={0.08} size={100} className="absolute right-0 top-0 bottom-0 w-40" />
        };
      
      case 'statements':
        return {
          bgClass: 'bg-gradient-to-r from-iifb-sage/20 via-iifb-cream/40 to-iifb-sage/20',
          pattern: null,
          divider: <IndigenousPatterns variant="geometric-border" color="hsl(var(--iifb-forest))" opacity={0.25} className="absolute bottom-0 left-0 right-0" />,
          edgePattern: <IndigenousPatterns variant="stepped-diamond" color="hsl(var(--iifb-forest))" opacity={0.1} className="absolute left-0 top-0 bottom-0 w-36" />
        };
      
      case 'news':
        return {
          bgClass: 'bg-gradient-to-bl from-muted/40 via-background to-iifb-orange/10',
          pattern: null,
          divider: <IndigenousPatterns variant="border-diamond" color="hsl(var(--iifb-orange))" opacity={0.2} className="absolute top-0 left-0 right-0" />,
          edgePattern: <GeometricPattern variant="spiral" color="hsl(var(--iifb-orange))" opacity={0.09} size={90} className="absolute right-0 top-0 bottom-0 w-44" />
        };
      
      case 'side-events':
        return {
          bgClass: 'bg-gradient-to-tr from-iifb-earth/10 via-muted/20 to-accent/10',
          pattern: null,
          divider: <IndigenousPatterns variant="geometric-border" color="hsl(var(--accent))" opacity={0.3} className="absolute top-0 left-0 right-0" />,
          edgePattern: <IndigenousPatterns variant="tribal-weave" color="hsl(var(--accent))" opacity={0.1} className="absolute left-0 top-0 bottom-0 w-48" />
        };
      
      case 'resources':
        return {
          bgClass: 'bg-gradient-to-r from-card via-iifb-cream/30 to-card',
          pattern: null,
          divider: null,
          edgePattern: <GeometricPattern variant="zigzag" color="hsl(var(--iifb-rust))" opacity={0.07} size={110} className="absolute right-0 top-0 bottom-0 w-32" />
        };
      
      default:
        return {
          bgClass: 'bg-background',
          pattern: null,
          divider: null,
          edgePattern: null
        };
    }
  };

  const { bgClass, pattern, divider, edgePattern } = getBackgroundConfig();

  return (
    <div className={`relative ${bgClass} ${className} overflow-hidden`}>
      {pattern}
      {divider}
      {edgePattern}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
