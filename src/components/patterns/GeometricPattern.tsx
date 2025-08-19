
import React from 'react';

interface GeometricPatternProps {
  variant: 'diamond' | 'zigzag' | 'spiral' | 'weave' | 'chevron' | 'honeycomb' | 'aztec' | 'tribal-dots';
  color?: string;
  opacity?: number;
  size?: number;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ 
  variant, 
  color = 'currentColor', 
  opacity = 0.1,
  size = 60 
}) => {
  const patternId = `pattern-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  const renderPattern = () => {
    switch (variant) {
      case 'diamond':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <path d="M30,5 L55,30 L30,55 L5,30 Z" fill="none" stroke={color} strokeWidth="2"/>
                  <path d="M30,15 L45,30 L30,45 L15,30 Z" fill={color} opacity="0.3"/>
                  <circle cx="30" cy="30" r="3" fill={color}/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      case 'zigzag':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size * 2} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <path d="M0,30 L15,15 L30,30 L45,15 L60,30 L75,15 L90,30 L105,15 L120,30" 
                        fill="none" stroke={color} strokeWidth="3"/>
                  <path d="M0,30 L15,45 L30,30 L45,45 L60,30 L75,45 L90,30 L105,45 L120,30" 
                        fill="none" stroke={color} strokeWidth="2" opacity="0.6"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      case 'spiral':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <path d="M30,10 Q50,15 45,35 Q40,50 20,45 Q5,40 10,25 Q15,15 25,20 Q35,25 30,35" 
                        fill="none" stroke={color} strokeWidth="2"/>
                  <path d="M30,18 Q42,22 38,32 Q34,42 24,38 Q14,34 18,26 Q22,18 28,22" 
                        fill="none" stroke={color} strokeWidth="1.5" opacity="0.7"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      case 'weave':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <rect x="0" y="20" width="60" height="4" fill={color}/>
                  <rect x="20" y="0" width="4" height="60" fill={color}/>
                  <rect x="36" y="0" width="4" height="60" fill={color}/>
                  <rect x="0" y="36" width="60" height="4" fill={color}/>
                  <circle cx="30" cy="30" r="2" fill={color} opacity="0.8"/>
                  <circle cx="10" cy="10" r="1.5" fill={color} opacity="0.6"/>
                  <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.6"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );

      case 'chevron':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size * 0.8} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <path d="M0,24 L30,6 L60,24 L30,18 Z" fill={color} opacity="0.4"/>
                  <path d="M0,40 L30,22 L60,40 L30,34 Z" fill={color} opacity="0.6"/>
                  <path d="M0,24 L30,6 L60,24" fill="none" stroke={color} strokeWidth="2"/>
                  <path d="M0,40 L30,22 L60,40" fill="none" stroke={color} strokeWidth="2"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );

      case 'honeycomb':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size * 1.2} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <polygon points="18,10 30,4 42,10 42,22 30,28 18,22" fill="none" stroke={color} strokeWidth="2"/>
                  <polygon points="54,25 66,19 78,25 78,37 66,43 54,37" fill="none" stroke={color} strokeWidth="2"/>
                  <polygon points="18,40 30,34 42,40 42,52 30,58 18,52" fill="none" stroke={color} strokeWidth="2"/>
                  <circle cx="30" cy="16" r="1.5" fill={color}/>
                  <circle cx="66" cy="31" r="1.5" fill={color}/>
                  <circle cx="30" cy="46" r="1.5" fill={color}/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );

      case 'aztec':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size * 1.5} height={size * 1.5} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <rect x="15" y="15" width="30" height="30" fill="none" stroke={color} strokeWidth="2"/>
                  <path d="M30,15 L45,30 L30,45 L15,30 Z" fill="none" stroke={color} strokeWidth="2"/>
                  <rect x="20" y="20" width="20" height="20" fill={color} opacity="0.3"/>
                  <path d="M25,25 L35,30 L30,35 L25,30 Z" fill={color}/>
                  <circle cx="15" cy="15" r="2" fill={color}/>
                  <circle cx="45" cy="15" r="2" fill={color}/>
                  <circle cx="15" cy="45" r="2" fill={color}/>
                  <circle cx="45" cy="45" r="2" fill={color}/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );

      case 'tribal-dots':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <circle cx="15" cy="15" r="3" fill={color}/>
                  <circle cx="45" cy="15" r="2" fill={color} opacity="0.7"/>
                  <circle cx="30" cy="30" r="4" fill={color}/>
                  <circle cx="15" cy="45" r="2" fill={color} opacity="0.7"/>
                  <circle cx="45" cy="45" r="3" fill={color}/>
                  <circle cx="7" cy="30" r="1.5" fill={color} opacity="0.5"/>
                  <circle cx="53" cy="30" r="1.5" fill={color} opacity="0.5"/>
                  <circle cx="30" cy="7" r="1.5" fill={color} opacity="0.5"/>
                  <circle cx="30" cy="53" r="1.5" fill={color} opacity="0.5"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {renderPattern()}
    </div>
  );
};

export default GeometricPattern;
