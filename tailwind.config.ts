// danaleti/real-time-landing-page/real-time-landing-page-4384333c4d5da351d4f064e6e593e6bdd4349b07/tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Synchronized with :root in index.css
        border: "hsl(217 33% 15%)",
        input: "hsl(222 30% 9%)",
        ring: "hsl(186 100% 50%)",
        background: "hsl(222 47% 5%)", 
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(186 100% 50%)", 
          foreground: "hsl(222 47.4% 11.2%)",
        },
        secondary: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(215 20.2% 65.1%)",
        },
        accent: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(210 40% 98%)",
        },
        card: {
          DEFAULT: "hsl(217 33% 10%)", 
          foreground: "hsl(210 40% 98%)",
        },
      },
      borderRadius: {
        // Set higher for smoother global aesthetic. Overriding standard Shadcn config for Lovable look.
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
        // Explicitly define a larger radius for the form card (~24px)
        "2xl": "1.5rem", 
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Custom keyframe for the glowing CTA button
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 10px rgba(0, 229, 255, 0.5)", transform: "scale(1)" },
          "50%": { "box-shadow": "0 0 25px rgba(0, 229, 255, 0.8), 0 0 10px rgba(0, 229, 255, 0.6)", transform: "scale(1.01)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
