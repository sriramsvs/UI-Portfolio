import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")

    const isDark =
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newDark = !darkMode
    setDarkMode(newDark)
    document.documentElement.classList.toggle("dark", newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      className="
        p-2 rounded-full
        bg-orange-500/10 hover:bg-orange-500/20
        transition-all duration-300
      "
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-orange-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}
