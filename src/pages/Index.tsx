import React from "react";
// Import the new Header component
import Header from "@/components/Header"; 
// Using Lucide icons for the trust badges
import { ShieldCheck, CheckCircle2, Phone } from "lucide-react";
// Import the LeadCaptureForm component
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

const Index = () => {

  return (
    // Applied bg-hero-gradient for background ambiance
    <div className="min-h-screen w-full bg-background flex flex-col relative overflow-hidden">
      {/* Background Ambience - subtle glow effect */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-0" />

      {/* Header */}
      <Header />

      {/* Main Content - Centered Hero Section */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 pt-10 pb-20 flex flex-col items-center relative z-10 text-center">
        
        {/* Headline Section - Font sizing, weight, and tracking match the visual target */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
          Instant, Real-Time Call <br className="hidden md:block" />
          Routing for <span className="text-primary text-glow">High-Intent Leads</span>
        </h1>
        
        {/* Subtext - Subtle muted color, correct margin spacing */}
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mb-16 md:mb-20">
          This page demonstrates Retreaver's powerful real-time lead capture and 
          call routing technology. Submit your information to experience seamless, 
          instant connection with our team.
        </p>

        {/* Form Component (The Card) */}
        <LeadCaptureForm />

        {/* Footer Badges - Matched visual spacing, subtle color, and uppercase text */}
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
            <Phone className="w-4 h-4 text-primary/70" /> 
            Instant Connection
          </div>
        </div>
      </main>
      
      {/* Footer Copyright - Border is set by base class, text is muted/subtle */}
      <footer className="w-full py-6 text-center text-xs text-muted-foreground/50 relative z-10 border-t border-white/5">
        &copy; Retreaver. For demonstration and testing purposes only.
      </footer>
    </div>
  );
};

export default Index;
