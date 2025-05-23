tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#0B3C5D",
        "primary-light": "#1D5B79",
        secondary: "#1E88E5",
        "secondary-light": "#42A5F5",
        accent: "#FF9800",
        "accent-light": "#FFB74D",
        light: "#F8FAFC",
        dark: "#0F172A",
        gray: "#64748B",
        "gray-light": "#E2E8F0",
        success: "#4CAF50",
        warning: "#FFC107",
        danger: "#F44336",
        info: "#03A9F4",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 10px 25px -5px rgba(30, 136, 229, 0.1), 0 10px 10px -5px rgba(30, 136, 229, 0.04)",
      },
      screens: {
        ipad: { min: "768px", max: "1024px" },
      },
    },
  },
};
