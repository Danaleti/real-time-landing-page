import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  zip: string;
  company_name: string;
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
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [utm, setUtm] = useState("");
  const [gclid, setGclid] = useState("");

  // Read UTM and gclid from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUtm(urlParams.get("utm") || "");
    setGclid(urlParams.get("gclid") || "");
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

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
      // Update URL with all params
      const params = new URLSearchParams();
      params.set("utm", utm);
      params.set("gclid", gclid);
      params.set("first_name", formData.first_name);
      params.set("last_name", formData.last_name);
      params.set("email", formData.email);
      params.set("zip", formData.zip);
      params.set("company_name", formData.company_name);

      const newUrl = window.location.pathname + "?" + params.toString();
      window.history.replaceState({}, '', newUrl);

      setIsSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto animate-scale-in">
        <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Thanks! You're ready to connect with our team.
          </h3>
          <p className="text-muted-foreground mb-8">
            Click below to speak with a Retreaver specialist now.
          </p>
          <a
            href="tel:18668987878"
            className="block"
          >
            <Button variant="call" size="xl" className="w-full">
              <Phone className="w-5 h-5 mr-2" />
              Call Retreaver Now
              <span className="ml-2 font-normal opacity-90">(866) 898-7878</span>
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
          Get Started Today
        </h3>
        <form id="retreaver-form" onSubmit={handleSubmit} className="space-y-5">
          {/* Hidden fields for UTM and GCLID */}
          <input type="hidden" name="utm" value={utm} />
          <input type="hidden" name="gclid" value={gclid} />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name" className="text-foreground">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="first_name"
                name="first_name"
                placeholder="John"
                value={formData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
                className={errors.first_name ? "border-destructive" : ""}
              />
              {errors.first_name && (
                <p className="text-sm text-destructive">{errors.first_name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name" className="text-foreground">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="last_name"
                name="last_name"
                placeholder="Doe"
                value={formData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
                className={errors.last_name ? "border-destructive" : ""}
              />
              {errors.last_name && (
                <p className="text-sm text-destructive">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip" className="text-foreground">
              ZIP Code <span className="text-destructive">*</span>
            </Label>
            <Input
              id="zip"
              name="zip"
              placeholder="12345"
              value={formData.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
              className={errors.zip ? "border-destructive" : ""}
            />
            {errors.zip && (
              <p className="text-sm text-destructive">{errors.zip}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company_name" className="text-foreground">
              Company Name <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="company_name"
              name="company_name"
              placeholder="Acme Inc."
              value={formData.company_name}
              onChange={(e) => handleChange("company_name", e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            variant="gradient" 
            size="lg" 
            className="w-full mt-6"
          >
            Submit & Generate Call Button
          </Button>
        </form>
      </div>
    </div>
  );
};