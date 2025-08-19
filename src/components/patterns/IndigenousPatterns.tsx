
import React from 'react';

interface IndigenousPatternsProps {
  variant: 'border-diamond' | 'stepped-diamond' | 'geometric-border' | 'tribal-weave' | 'feather-motif' | 'sun-rays' | 'water-waves' | 'mountain-peaks';
  color?: string;
  opacity?: number;
  className?: string;
}

const IndigenousPatterns: React.FC<IndigenousPatternsProps> = ({ 
  variant, 
  color = 'hsl(var(--iifb-orange))', 
  opacity = 0.15,
  className = ''
}) => {
  const patternId = `indigenous-pattern-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  const renderPattern = () => {
    switch (variant) {
      case 'border-diamond':
        return (
          <div className={`w-full h-16 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 400 64" preserveAspectRatio="none">
              <defs>
                <pattern id={patternId} x="0" y="0" width="80" height="64" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M40,8 L72,32 L40,56 L8,32 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M40,16 L60,32 L40,48 L20,32 Z" fill={color} opacity="0.4"/>
                    <circle cx="40" cy="32" r="3" fill={color}/>
                    <circle cx="24" cy="32" r="1.5" fill={color} opacity="0.7"/>
                    <circle cx="56" cy="32" r="1.5" fill={color} opacity="0.7"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="8" fill={color} opacity={opacity * 0.8} />
              <rect y="8" width="100%" height="48" fill={`url(#${patternId})`} />
              <rect y="56" width="100%" height="8" fill={color} opacity={opacity * 0.8} />
            </svg>
          </div>
        );

      case 'stepped-diamond':
        return (
          <div className={`absolute inset-0 ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id={patternId} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M60,20 L100,60 L60,100 L20,60 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M60,30 L90,60 L60,90 L30,60 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M60,40 L80,60 L60,80 L40,60 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <rect x="58" y="58" width="4" height="4" fill={color}/>
                    <path d="M50,60 L60,50 L70,60 L60,70 Z" fill={color} opacity="0.5"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'geometric-border':
        return (
          <div className={`w-full h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 800 48" preserveAspectRatio="none">
              <defs>
                <pattern id={patternId} x="0" y="0" width="100" height="48" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M0,24 L12,12 L25,24 L37,12 L50,24 L63,12 L75,24 L88,12 L100,24" 
                          fill="none" stroke={color} strokeWidth="3"/>
                    <path d="M0,24 L12,36 L25,24 L37,36 L50,24 L63,36 L75,24 L88,36 L100,24" 
                          fill="none" stroke={color} strokeWidth="3"/>
                    <circle cx="25" cy="24" r="2" fill={color}/>
                    <circle cx="75" cy="24" r="2" fill={color}/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'tribal-weave':
        return (
          <div className={`absolute inset-0 ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id={patternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <rect x="20" y="0" width="4" height="60" fill={color}/>
                    <rect x="36" y="0" width="4" height="60" fill={color}/>
                    <rect x="0" y="20" width="60" height="4" fill={color}/>
                    <rect x="0" y="36" width="60" height="4" fill={color}/>
                    <circle cx="30" cy="30" r="3" fill={color}/>
                    <circle cx="10" cy="10" r="1.5" fill={color} opacity="0.7"/>
                    <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.7"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'feather-motif':
        return (
          <div className={`absolute inset-0 ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id={patternId} x="0" y="0" width="80" height="120" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M40,10 Q50,30 45,50 Q40,70 35,50 Q30,30 40,10" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M35,20 Q25,25 30,30" fill="none" stroke={color} strokeWidth="1.5"/>
                    <path d="M45,20 Q55,25 50,30" fill="none" stroke={color} strokeWidth="1.5"/>
                    <path d="M35,35 Q25,40 30,45" fill="none" stroke={color} strokeWidth="1.5"/>
                    <path d="M45,35 Q55,40 50,45" fill="none" stroke={color} strokeWidth="1.5"/>
                    <circle cx="40" cy="15" r="2" fill={color}/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'sun-rays':
        return (
          <div className={`absolute inset-0 ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id={patternId} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <circle cx="50" cy="50" r="8" fill="none" stroke={color} strokeWidth="2"/>
                    <circle cx="50" cy="50" r="4" fill={color}/>
                    <line x1="50" y1="20" x2="50" y2="30" stroke={color} strokeWidth="2"/>
                    <line x1="50" y1="70" x2="50" y2="80" stroke={color} strokeWidth="2"/>
                    <line x1="20" y1="50" x2="30" y2="50" stroke={color} strokeWidth="2"/>
                    <line x1="70" y1="50" x2="80" y2="50" stroke={color} strokeWidth="2"/>
                    <line x1="29.3" y1="29.3" x2="35.9" y2="35.9" stroke={color} strokeWidth="2"/>
                    <line x1="64.1" y1="64.1" x2="70.7" y2="70.7" stroke={color} strokeWidth="2"/>
                    <line x1="70.7" y1="29.3" x2="64.1" y2="35.9" stroke={color} strokeWidth="2"/>
                    <line x1="35.9" y1="64.1" x2="29.3" y2="70.7" stroke={color} strokeWidth="2"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'water-waves':
        return (
          <div className={`absolute inset-0 ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id={patternId} x="0" y="0" width="120" height="40" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M0,20 Q30,5 60,20 T120,20" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M0,25 Q30,10 60,25 T120,25" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7"/>
                    <path d="M0,30 Q30,15 60,30 T120,30" fill="none" stroke={color} strokeWidth="1" opacity="0.5"/>
                    <circle cx="30" cy="20" r="1.5" fill={color} opacity="0.6"/>
                    <circle cx="90" cy="20" r="1.5" fill={color} opacity="0.6"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'mountain-peaks':
        return (
          <div className={`absolute inset-0 ${className}`}>
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id={patternId} x="0" y="0" width="160" height="80" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M0,60 L20,20 L40,40 L60,10 L80,35 L100,15 L120,45 L140,25 L160,50" 
                          fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M0,65 L20,25 L40,45 L60,15 L80,40 L100,20 L120,50 L140,30 L160,55" 
                          fill="none" stroke={color} strokeWidth="1.5" opacity="0.7"/>
                    <circle cx="60" cy="10" r="2" fill={color}/>
                    <circle cx="100" cy="15" r="2" fill={color}/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return renderPattern();
};

export default IndigenousPatterns;
