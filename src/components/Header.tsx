import React from "react";

/**
 * Header component
 * - Left: RETREAVER inline SVG logo (neon teal gradient + subtle glow)
 * - Right: Small breadcrumb / page title
 * - Responsive layout
 */

const LogoSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 700 80"
    role="img"
    aria-label="Retreaver logo"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMid meet"
  >
    <defs>
      <linearGradient id="retreaverGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#19F0FF" />
        <stop offset="55%" stopColor="#0FBFCC" />
        <stop offset="100%" stopColor="#19F0FF" />
      </linearGradient>

      <!-- subtle glow filter -->
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Background transparent rect to preserve viewbox sizing -->
    <rect width="100%" height="100%" fill="transparent" />

    <!-- Text-based logo: RETREAVER -->
    <!-- Using a strong, condensed look via font-weight & letter-spacing;
         fallback fonts used if custom condensed is not available. -->
    <g filter="url(#glow)">
      <text
        x="10"
        y="56"
        fontFamily="Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="800"
        fontSize="56"
        letterSpacing="-4"
        fill="url(#retreaverGradient)"
        textRendering="optimizeLegibility"
      >
        RETREAVER
      </text>
    </g>
  </svg>
);

const Header: React.FC = () => {
  return (
    <div className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Left: inline SVG logo + optional tagline */}
        <div className="flex items-center gap-4">
          <a href="/" aria-label="Retreaver home" className="flex items-center">
            <LogoSVG className="h-8 sm:h-10 md:h-12 w-auto" />
          </a>

          {/* Optional small tagline (hidden on smallest screens) */}
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-muted-foreground/70 -mt-1">
              Real-Time Call Routing
            </span>
          </div>
        </div>

        {/* Right: breadcrumb / small page title */}
        <div className="text-right">
          <div className="text-sm text-muted-foreground/60">
            Retreaver’s Real-Time Landing Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
