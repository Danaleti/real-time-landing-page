// src/components/Header.tsx
import React from "react";
import retreaverLogo from "@/components/assets/retreaver-logo.png";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  const STATIC_PHONE_NUMBER = "(866) 898-7878";
  const TEL_HREF = "tel:18668987878";

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-start relative z-10">
        {/* Logo positioned top left, fixed size */}
        <div className="w-48 pt-1">
          <img src={retreaverLogo} alt="Retreaver" className="w-full h-auto object-contain" />
        </div>
        
        <div className="flex items-center gap-8">
            {/* Subtitle positioned top right, subtle muted text */}
            <div className="hidden md:block text-sm text-muted-foreground/70 font-normal">
                Retreaver's Real-Time Landing Page
            </div>
            
            {/* Hardcoded CTA Button - Hidden on mobile for cleaner look, prominent on large screens */}
            <a href={TEL_HREF} className="hidden lg:block">
              <Button 
                variant="call" 
                size="lg" 
                className="rounded-xl h-12"
              >
                <Phone className="w-5 h-5 mr-1" />
                Call Now <span className="font-normal opacity-90 ml-1">{STATIC_PHONE_NUMBER}</span>
              </Button>
            </a>
        </div>
    </header>
  );
};

export default Header;
