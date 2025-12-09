import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * LeadCaptureForm
 * - Keeps core lead fields
 * - Accepts onSuccess prop: called after a (simulated) successful submission
 *
 * Props:
 *  - onSuccess?: () => void
 *
 * NOTE: This is a presentational/local form with simulated submit.
 * Replace the submit handler integration when you connect to a real API.
 */

type Props = {
  onSuccess?: () => void;
};

export const LeadCaptureForm: React.FC<Props> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!name || !phone) {
      setError("Please provide at least your name and phone number.");
      return;
    }

    setLoading(true);

    try {
      // Simulate a network request / success response
      await new Promise((res) => setTimeout(res, 900));

      // Call onSuccess to inform parent (Index.tsx) to show Success Card
      if (onSuccess) onSuccess();
    } catch (err) {
      setError("Submission failed — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col">
          <span className="text-xs text-muted-foreground/80 mb-1">Full name</span>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            aria-label="Full name"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-xs text-muted-foreground/80 mb-1">
            Company (optional)
          </span>
          <Input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme, Inc."
            aria-label="Company"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col">
          <span className="text-xs text-muted-foreground/80 mb-1">Email</span>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@company.com"
            aria-label="Email"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-xs text-muted-foreground/80 mb-1">Phone</span>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 555-5555"
            aria-label="Phone"
            required
          />
        </label>
      </div>

      {error && <div className="text-sm text-destructive mt-1">{error}</div>}

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={loading} aria-label="Submit lead form">
          {loading ? "Connecting..." : "Connect me now"}
        </Button>
      </div>

      <div className="text-xs text-muted-foreground/70 mt-2">
        By submitting, you agree to be contacted by Retreaver regarding this demo.
      </div>
    </form>
  );
};

export default LeadCaptureForm;
