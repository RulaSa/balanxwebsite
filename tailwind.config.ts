import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Wellness color palette
        ivory: {
          50: "#fefdfb",
          100: "#fdf9f0",
          200: "#faf2e1",
          300: "#f6ebd2",
          400: "#f0ddb4",
          500: "#e9cf95",
          600: "#d2bb86",
          700: "#af9c70",
          800: "#8c7d5a",
          900: "#726549",
        },
        "rose-gold": {
          50: "#fef7f4",
          100: "#fdeee8",
          200: "#fad5c5",
          300: "#f7bca2",
          400: "#f1895c",
          500: "#eb5616",
          600: "#d44d14",
          700: "#b04011",
          800: "#8d330e",
          900: "#732a0c",
        },
        champagne: {
          50: "#fefcf8",
          100: "#fdf8f0",
          200: "#faeed9",
          300: "#f7e4c2",
          400: "#f1d094",
          500: "#ebbc66",
          600: "#d4a95c",
          700: "#b08d4d",
          800: "#8d713e",
          900: "#735c32",
        },
        gold: {
          50: "#fefdf7",
          100: "#fdfaef",
          200: "#faf2d7",
          300: "#f7eabf",
          400: "#f1da8f",
          500: "#ebca5f",
          600: "#d4b656",
          700: "#b09747",
          800: "#8d7939",
          900: "#73632f",
        },
        "light-green": {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        float: "float 4s ease-in-out infinite",
      },
      fontFamily: {
        serif: ["var(--font-agrandir-wide)", "Agrandir Wide", "serif"],
        sans: ["var(--font-agrandir-wide)", "Agrandir Wide", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        md: "12px", // Added for a stronger blur effect
      },
      spacing: {
        golden: "61.8%",
        "golden-sm": "38.2%",
      },
    },
  },
  plugins: [],
}
export default config
