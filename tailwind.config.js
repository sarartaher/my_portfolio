/* eslint-disable no-undef */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "var(--bg-primary)",
          accent: "var(--accent-primary)",
          text: "var(--text-primary)",
        },
        secondary: {
          accent: "var(--accent-secondary)",
        },
        border: {
          primary: "var(--border-primary)",
        },
        shadow: {
          primary: "var(--shadow-primary)",
        },
        // Legacy mappings for backward compatibility
        "bg-dark": "#0A1A2F",
        "bg-light": "#F0F4FF",
        "text-dark": "#0A1A2F",
        "text-light": "#F0F4FF",
        accent: "#0E76FD",
        "secondary-accent": "#1E90FF",
      },
    },
  },
};
