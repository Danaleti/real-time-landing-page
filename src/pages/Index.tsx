import React, { useState } from "react";
// FIX: Pointing to the correct location for the logo
import retreaverLogo from "../components/assets/retreaver-logo.png"; 
// Using Lucide icons for the trust badges (standard in Lovable/Shadcn projects)
import { ShieldCheck, Phone, CheckCircle2 } from "lucide-react";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // The Retreaver script in index.html will detect this via the 'submit' event or data scraping
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none z-0" />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="w-48">
          <img src={retreaverLogo} alt="Retreaver" className="w-full h-auto object-contain" />
        </div>
        <div className="hidden md:block text-sm text-muted-foreground font-medium">
          Retreaver's Real-Time Landing Page
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 pt-10 pb-20 flex flex-col items-center relative z-10 text-center">
        
        {/* Headline Section */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
          Instant, Real-Time Call <br />
          Routing for <span className="text-primary text-glow">High-Intent Leads</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
          This page demonstrates Retreaver's powerful real-time lead capture and 
          call routing technology. Submit your information to experience seamless, 
          instant connection with our team.
        </p>

        {/* Form Container (The "Card") */}
        <div className="w-full max-w-md bg-card border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm p-8">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-white">Get Started Today</h2>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label htmlFor="first_name" className="text-xs font-semibold text-gray-300 ml-1">First Name *</label>
                    <input id="first_name" required type="text" placeholder="John" className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label htmlFor="last_name" className="text-xs font-semibold text-gray-300 ml-1">Last Name *</label>
                    <input id="last_name" required type="text" placeholder="Doe" className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-300 ml-1">Email Address *</label>
                  <input id="email" required type="email" placeholder="john@company.com" className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="zip_code" className="text-xs font-semibold text-gray-300 ml-1">ZIP Code *</label>
                  <input id="zip_code" required type="text" placeholder="12345" className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="company_name" className="text-xs font-semibold text-gray-300 ml-1">Company Name (optional)</label>
                  <input id="company_name" type="text" placeholder="Acme Inc." className="w-full bg-[#0a0f1c] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                </div>

                {/* Hidden input for phone number storage if needed by scripts */}
                <input id="caller_number" type="hidden" />

                <button type="submit" className="w-full bg-primary hover:bg-cyan-400 text-black font-bold py-3.5 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 mt-2">
                  Submit & Generate Call Button
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Thanks! You're ready to connect.</h3>
              <p className="text-muted-foreground">Click below to speak with a Retreaver specialist now.</p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mt-4">
                <a href="tel:8668987878" className="text-2xl font-bold text-primary hover:underline decoration-primary/50 underline-offset-4 flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6" />
                  Call: (866) 898-7878
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-600" />
            Secure & Encrypted
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gray-600" />
            Real-Time Routing
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-600" />
            Instant Connection
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-xs text-gray-600 relative z-10 border-t border-white/5">
        © Retreaver. For demonstration and testing purposes only.
      </footer>
    </div>
  );
};

export default Index;