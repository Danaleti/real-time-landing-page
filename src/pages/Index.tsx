import React, { useState } from "react";
import Header from "@/components/Header";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Check,
  PhoneCall,
} from "lucide-react";

/**
 * Updated Index:
 * - submitted state controls success card visibility
 * - resetKey increments to trigger form reset (passed to LeadCaptureForm)
 * - subtle animations on form de-emphasis & success card
 */

const FeatureItem: React.FC<{
  Icon: React.ComponentType<any>;
  label: string;
}> = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className="p-3 rounded-full bg-white/5 text-white/80 group-hover:text-teal-300 transition-colors"
        aria-hidden
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-sm text-muted-foreground/80">{label}</div>
    </div>
  );
};

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    // Hide success card and increment resetKey to clear the form
    setSubmitted(false);
    setResetKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center"
        aria-hidden
      >
        <div className="mt-24 w-[1200px] max-w-full teal-radial opacity-80" />
      </div>

      <header className="relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <Header />
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center">
        <div className="w-full max-w-6xl px-6 py-16">
          {/* Hero */}
          <section className="mx-auto max-w-4xl text-center pt-6 pb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4">
              Instant, Real-Time Call
              <br className="hidden md:inline" /> Routing for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-200 text-glow">
                High-Intent Leads
              </span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Retreaver connects high-intent callers instantly with the right
              specialist — real-time routing that reduces friction and improves
              conversion. Submit your info to experience immediate connection.
            </p>
          </section>

          {/* Form Card */}
          <section className="mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute -inset-6 blur-3xl rounded-xl teal-radial/30 pointer-events-none" />
              <div
                className={`relative bg-card/95 border border-white/6 rounded-xl shadow-2xl p-6 md:p-8 transition-all duration-500 ${
                  submitted
                    ? "opacity-40 pointer-events-none scale-98"
                    : "opacity-100 scale-100"
                }`}
              >
                <LeadCaptureForm onSuccess={() => setSubmitted(true)} resetKey={resetKey} />
              </div>
            </div>
          </section>

          {/* Success Card (hidden until submit) */}
          {submitted && (
            <section className="mx-auto max-w-lg mt-12">
              <div className="relative">
                <div className="absolute -inset-8 blur-2xl rounded-2xl teal-radial/40 pointer-events-none" />
                <div className="relative bg-[#111217] border border-white/6 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-stretch gap-4 slide-fade-in">
                  <div className="flex items-center justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-teal-400/10 to-cyan-400/10 text-teal-300">
                      <Check className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold">
                      Thanks! You're ready to connect with our team.
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground/80">
                      Click below to speak with a Retreaver specialist now.
                    </p>
                  </div>

                  <div className="mt-2 flex flex-col gap-3">
                    <a
                      href="tel:+18005551234"
                      className="group inline-flex items-center justify-between w-full rounded-lg bg-gradient-to-r from-teal-400 to-cyan-300 text-black font-semibold px-4 py-3 shadow-lg hover:from-teal-300 hover:to-cyan-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300/40 transition"
                      aria-label="Call Retreaver Now"
                    >
                      <div className="flex items-center gap-3">
                        <PhoneCall className="w-5 h-5 text-black/70" />
                        <span>Call Retreaver Now</span>
                      </div>
                      <span className="text-sm font-mono">+1 (800) 555-1234</span>
                    </a>

                    {/* Submit another action (resets form state and clears inputs) */}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-sm text-muted-foreground/80 hover:text-teal-300 transition"
                    >
                      Submit another lead
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Feature Icons Row */}
          <section className="mx-auto max-w-2xl mt-12">
            <div className="flex justify-center gap-12">
              <FeatureItem Icon={ShieldCheck} label="Secure & Encrypted" />
              <FeatureItem Icon={CheckCircle2} label="Real-Time Routing" />
              <FeatureItem Icon={Phone} label="Instant Connection" />
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full py-6 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground/20 hover:text-muted-foreground/80 transition-opacity opacity-0 hover:opacity-100">
            © Retreaver. For demonstration and testing purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
