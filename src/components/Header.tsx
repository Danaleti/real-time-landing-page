import React from "react";

/**
 * Header component
 * - Left: Large neon-teal Retreaver logo (text mark for now)
 * - Right: Small breadcrumb / page title
 * - Responsive: stacks on small screens
 */

const Header: React.FC = () => {
  return (
    <div className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="w-12 h-12 rounded-md bg-gradient-to-br from-teal-300 to-cyan-200 flex items-center justify-center shadow-[0_10px_30px_rgba(15,191,204,0.14)]"
          >
            {/* Simple mark - replace with SVG or image if available */}
            <span className="text-black font-extrabold tracking-tight">R</span>
          </div>

          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-bold text-teal-300">Retreaver</span>
            <span className="text-xs text-muted-foreground/70 -mt-1">
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
