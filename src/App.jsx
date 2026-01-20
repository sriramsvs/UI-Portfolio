import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./pages/Home.jsx"

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <Navbar dark={dark} setDark={setDark} />
      <Hero/>
    </div>
  )
}

