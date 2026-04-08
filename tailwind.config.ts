import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'subtle': 'var(--shadow-subtle)',
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-8px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(15px) translateX(-12px)" },
          "66%": { transform: "translateY(-10px) translateX(6px)" },
        },
        "orbit": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(30px) translateY(-20px)" },
          "50%": { transform: "translateX(0px) translateY(-40px)" },
          "75%": { transform: "translateX(-30px) translateY(-20px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "orbit-reverse": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-25px) translateY(15px)" },
          "50%": { transform: "translateX(0px) translateY(30px)" },
          "75%": { transform: "translateX(25px) translateY(15px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "orbit-slow": {
          "0%": { transform: "translateX(0) translateY(0) scale(1)" },
          "50%": { transform: "translateX(20px) translateY(-25px) scale(1.5)" },
          "100%": { transform: "translateX(0) translateY(0) scale(1)" },
        },
        "spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float-delayed 10s ease-in-out infinite",
        "orbit": "orbit 6s linear infinite",
        "orbit-reverse": "orbit-reverse 8s linear infinite",
        "orbit-slow": "orbit-slow 12s ease-in-out infinite",
        "spin": "spin 4s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
