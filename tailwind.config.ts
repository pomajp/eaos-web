import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        // Custom text sizes used in pitch
        "display-lg": "clamp(2.75rem,6vw,4rem)",
        "display-md": "clamp(2rem,5vw,2.75rem)",
        "display-sm": "clamp(2rem,4vw,3rem)",
        "display-xs": "clamp(2rem,4vw,2.75rem)",
      },
      letterSpacing: {
        "extra-wide": "0.35em",
        "wide": "0.3em",
        "medium": "0.25em",
        "tight": "0.2em",
      },
      boxShadow: {
        // Custom shadows from pitch page
        "pitch-lg": "0 40px 140px -70px rgba(15,23,42,0.45)",
        "pitch-md": "0 30px 120px -50px rgba(15,23,42,0.4)",
        "pitch-sm": "0 30px 100px -60px rgba(15,23,42,0.4)",
        "pitch-xl": "0 30px 120px -45px rgba(15,23,42,0.45)",
        "pitch-2xl": "0 30px 120px -45px rgba(15,23,42,0.6)",
      },
      backgroundImage: {
        // Gradient patterns from case studies
        "gradient-curedata": "linear-gradient(120deg, #E9F6FF 0%, #FDFEFF 100%)",
        "gradient-gallup": "linear-gradient(120deg, #F4F1FF 0%, #FBFAFF 100%)",
        "gradient-product": "linear-gradient(120deg, #FFF5EC 0%, #FFFBF7 100%)",
        "gradient-eaos": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-subtle": "linear-gradient(120deg, #fafafa 0%, #f4f4f5 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        slideIn: {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
