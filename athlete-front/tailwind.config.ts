import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f94f06",
        "background-light": "#f8f6f5",
        "background-dark": "#23150f",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        "muted-foreground": "var(--muted-foreground)",
        "surface-light": "#F0F0F0",
        "surface-dark": "#2c2c2e",
        "mint-green": "#45D194",
        destructive: "#ef4444",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
