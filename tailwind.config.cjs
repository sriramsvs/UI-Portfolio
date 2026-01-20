export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          light: "#ffffff",
          dark: "#0b0b0b",
        },
        text: {
          light: "#0b0b0b",
          dark: "#ffffff",
          muted: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
}
