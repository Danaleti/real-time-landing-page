import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * LeadCaptureForm
 * - Props:
 *    onSuccess?: () => void             // called on simulated successful submit
 *    resetKey?: number                  // when this changes, form fields reset
 *    autoFocusOnReset?: boolean         // when true, focus first input after resetKey changes
 *
 * The form is local-only (simulated submit) and will call onSuccess after submit.
 */

type Props = {
  onSuccess?: () => void;
  resetKey?: number;
  autoFocusOnReset?: boolean;
};

export const LeadCaptureForm: React.FC<Props> = ({
  onSuccess,
  resetKey,
  autoFocusOnReset = true,
}) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ref to the first input (Full name) for focus return on reset.
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // Reset fields when resetKey changes (triggered by parent)
  useEffect(() => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setError(null);
    setLoading(false);

    // After reset, optionally move focus to the first input.
    if (autoFocusOnReset) {
      // A tiny timeout to ensure DOM updates are flushed; avoids focus race
      // and is an accessible-friendly pattern. 0ms is enough.
      // This prevents attempts to focus while the element might still be
      // undergoing transitions in the parent.
      window.setTimeout(() => {
        firstInputRef.current?.focus();
      }, 0);
    }
  }, [resetKey, autoFocusOnReset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Minimal validation
    if (!name || !phone) {
      setError("Please provide at least your name and phone number.");
      return;
    }

    setLoading(true);

    try {
      // Simulate a network request / success response
      await new Promise((res) => setTimeout(res, 900));

      if (onSuccess) onSuccess();
    } catch (err) {
      setError("Submission failed — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3" aria-label="Lead capture form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex flex-col">
          <span className="text-xs text-muted-foreground/80 mb-1">Full name</span>
          <Input
            // attach ref to first input for focus management
            ref={firstInputRef as any}
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

      {error && <div className="text-sm text-destructive mt-1" role="status">{error}</div>}

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
