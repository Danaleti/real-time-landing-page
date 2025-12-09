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
        // Precise Lovable Dark Theme Colors
        border: "hsl(217 33% 15%)",
        // Adjusted: Input background should be slightly different from Card background for contrast
        input: "hsl(222 30% 9%)", 
        ring: "hsl(186 100% 50%)",
        // Adjusted: Main background darker, closer to black/deep navy
        background: "hsl(222 47% 5%)", // ~#06090e
        foreground: "hsl(210 40% 98%)", // White text
        primary: {
          // Bright Cyan/Teal
          DEFAULT: "hsl(186 100% 50%)", // #00e5ff
          foreground: "hsl(222 47.4% 11.2%)", // Dark text for the bright primary button
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
          // Card Dark, slightly lighter than background
          DEFAULT: "hsl(217 33% 10%)", // ~#111620
          foreground: "hsl(210 40% 98%)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
        // Setting 2xl to 1.5rem (24px) to match the visual target's heavy rounding
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
        // Custom keyframe for the CTA glow pulse effect
        "pulse-glow": {
          "0%, 100%": { "box-shadow": "0 0 10px rgba(0, 229, 255, 0.5)", transform: "scale(1)" },
          "50%": { "box-shadow": "0 0 25px rgba(0, 229, 255, 0.8), 0 0 10px rgba(0, 229, 255, 0.6)", transform: "scale(1.01)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Custom animation application
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
