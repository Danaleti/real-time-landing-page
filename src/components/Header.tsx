// src/components/Header.tsx
import React from "react";
import retreaverLogo from "@/components/assets/retreaver-logo.png"; // Use alias

const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-start relative z-10">
        {/* Logo positioned top left, fixed size */}
        <div className="w-48 pt-1">
          <img src={retreaverLogo} alt="Retreaver" className="w-full h-auto object-contain" />
        </div>
        {/* Subtitle positioned top right, subtle muted text */}
        <div className="hidden md:block text-sm text-muted-foreground/70 font-normal">
          Retreaver's Real-Time Landing Page
        </div>
    </header>
  );
};

export default Header;
