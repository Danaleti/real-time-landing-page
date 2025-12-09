// src/components/LeadCaptureForm.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone, Check } from "lucide-react"; 
import { cn } from "@/lib/utils";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  zip: string;
  company_name: string;
  // Hidden fields / Auto-captured parameters
  gclid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  zip?: string;
}

export const LeadCaptureForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    zip: "",
    company_name: "",
    gclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Read URL parameters (UTM, GCLID) on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      gclid: urlParams.get("gclid") || "",
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
    }));
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.first_name.trim()) { newErrors.first_name = "First name is required"; }
    if (!formData.last_name.trim()) { newErrors.last_name = "Last name is required"; }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      newErrors.zip = "Please enter a valid ZIP code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // 1. Update URL with all form data and captured parameters
      const params = new URLSearchParams();
      params.set("first_name", formData.first_name);
      params.set("last_name", formData.last_name);
      params.set("email", formData.email);
      params.set("zip", formData.zip);
      if (formData.company_name) params.set("company_name", formData.company_name);
      
      // Append hidden tracking params if they exist
      if (formData.gclid) params.set("gclid", formData.gclid);
      if (formData.utm_source) params.set("utm_source", formData.utm_source);
      if (formData.utm_medium) params.set("utm_medium", formData.utm_medium);
      if (formData.utm_campaign) params.set("utm_campaign", formData.utm_campaign);

      const newUrl = window.location.pathname + "?" + params.toString();
      window.history.replaceState({}, '', newUrl);

      setIsSubmitted(true);
      
      // 2. Manually trigger change event on caller_number input to force Retreaver script update
      const callerNumberInput = document.getElementById('caller_number');
      if (callerNumberInput) {
        // Dispatch synthetic change event to notify Retreaver script in index.html
        callerNumberInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for the field being changed
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // --- Success State (lovable app.jpg) ---
  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto animate-scale-in">
        <Card className="rounded-2xl p-10 text-center shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-card border-4 border-primary/20 flex items-center justify-center shadow-inner">
            <div className="w-12 h-12 rounded-full bg-background/50 border border-primary/50 flex items-center justify-center">
              <Check className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Thanks! You're ready to connect with our team.
          </h3>
          <p className="text-muted-foreground mb-8 text-base">
            Click below to speak with a Retreaver specialist now.
          </p>
          <a href="tel:18668987878" className="block">
            <Button variant="call" size="xl" className="w-full h-14">
              <Phone className="w-6 h-6" />
              Call Retreaver Now
              <span className="ml-2 text-lg font-normal opacity-90">(866) 898-7878</span>
            </Button>
          </a>
        </Card>
      </div>
    );
  }

  // --- Form State (lovable app 2.jpg) ---
  return (
    <div className="w-full max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <Card className="rounded-2xl p-8 shadow-2xl">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
          Get Started Today
        </h3>
        <form id="retreaver-form" onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden fields for Retreaver/Tracking data */}
          <input id="caller_number" type="hidden" name="caller_number" />
          <input type="hidden" name="gclid" value={formData.gclid} />
          <input type="hidden" name="utm_source" value={formData.utm_source} />
          <input type="hidden" name="utm_medium" value={formData.utm_medium} />
          <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name" className="text-xs text-muted-foreground/90 font-semibold uppercase tracking-widest">
                First Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="John"
                value={formData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
                className={cn("h-12 text-base px-4 bg-input border-border focus-visible:ring-primary", 
                              errors.first_name ? "border-destructive focus-visible:ring-destructive" : ""
                            )}
              />
              {errors.first_name && (
                <p className="text-sm text-destructive mt-1">{errors.first_name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name" className="text-xs text-muted-foreground/90 font-semibold uppercase tracking-widest">
                Last Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={formData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
                className={cn("h-12 text-base px-4 bg-input border-border focus-visible:ring-primary", 
                              errors.last_name ? "border-destructive focus-visible:ring-destructive" : ""
                            )}
              />
              {errors.last_name && (
                <p className="text-sm text-destructive mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs text-muted-foreground/90 font-semibold uppercase tracking-widest">
              Email Address <span className="text-primary">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={cn("h-12 text-base px-4 bg-input border-border focus-visible:ring-primary", 
                            errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                          )}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip" className="text-xs text-muted-foreground/90 font-semibold uppercase tracking-widest">
              ZIP Code <span className="text-primary">*</span>
            </Label>
            <Input
              id="zip"
              name="zip"
              placeholder="12345"
              value={formData.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
              className={cn("h-12 text-base px-4 bg-input border-border focus-visible:ring-primary", 
                            errors.zip ? "border-destructive focus-visible:ring-destructive" : ""
                          )}
            />
            {errors.zip && (
              <p className="text-sm text-destructive mt-1">{errors.zip}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company_name" className="text-xs text-muted-foreground/90 font-semibold uppercase tracking-widest">
              Company Name <span className="text-muted-foreground/70">(optional)</span>
            </Label>
            <Input
              id="company_name"
              name="company_name"
              placeholder="Acme Inc."
              value={formData.company_name}
              onChange={(e) => handleChange("company_name", e.target.value)}
              className="h-12 text-base px-4 bg-input border-border focus-visible:ring-primary"
            />
          </div>

          {/* Submit button using 'gradient' variant and 'lg' size */}
          <Button 
            type="submit" 
            variant="gradient" 
            size="lg" 
            className="w-full mt-6 text-base font-semibold"
          >
            Submit & Generate Call Button
          </Button>
        </form>
      </Card>
    </div>
  );
};
