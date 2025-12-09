// danaleti/real-time-landing-page/real-time-landing-page-4384333c4d5da351d4f064e6e593e6bdd4349b07/src/pages/Index.tsx
import React from "react";
// FIX: Pointing to the correct location for the logo
import retreaverLogo from "../components/assets/retreaver-logo.png"; 
// Using Lucide icons for the trust badges (standard in Lovable/Shadcn projects)
import { ShieldCheck, CheckCircle2 } from "lucide-react";
// Import the refactored LeadCaptureForm component
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const Index = () => {

  return (
    // Applied bg-hero-gradient for background ambience
    <div className="min-h-screen w-full bg-background flex flex-col relative overflow-hidden">
      {/* Background Ambience - subtle glow effect */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-0" />

      {/* Header - Fixed height and spacing for pixel parity */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-start relative z-10">
        {/* Logo should be positioned on the top left, slight padding adjustment */}
        <div className="w-48 pt-1">
          <img src={retreaverLogo} alt="Retreaver" className="w-full h-auto object-contain" />
        </div>
        {/* Subtitle positioned top right, matching the mockup font/color */}
        <div className="hidden md:block text-sm text-muted-foreground/70 font-normal">
          Retreaver's Real-Time Landing Page
        </div>
      </header>

      {/* Main Content - Centered Hero Section */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 pt-10 pb-20 flex flex-col items-center relative z-10 text-center">
        
        {/* Headline Section - Adjusted spacing and font weight for visual parity */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
          Instant, Real-Time Call <br className="hidden md:block" />
          Routing for <span className="text-primary text-glow">High-Intent Leads</span>
        </h1>
        
        {/* Subtext - Adjusted font size and color opacity, increased margin-bottom */}
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mb-16 md:mb-20">
          This page demonstrates Retreaver's powerful real-time lead capture and 
          call routing technology. Submit your information to experience seamless, 
          instant connection with our team.
        </p>

        {/* Form Container (The "Card") - Use the refactored component */}
        <LeadCaptureForm />

        {/* Footer Badges - Matched visual spacing, font, color, and icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary/70" />
            Secure & Encrypted
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary/70" />
            Real-Time Routing
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary/70" /> 
            Instant Connection
          </div>
        </div>
      </main>
      
      {/* Footer Copyright - Matched font size, color, and border */}
      <footer className="w-full py-6 text-center text-xs text-muted-foreground/50 relative z-10 border-t border-white/5">
        &copy; Retreaver. For demonstration and testing purposes only.
      </footer>
    </div>
  );
};

export default Index;
