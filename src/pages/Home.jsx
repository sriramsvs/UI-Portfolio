import { Home } from "lucide-react";


export default function HeroHeader() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">



      {/* Background diagonal lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.04)_50%,transparent_55%)] dark:bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.05)_50%,transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-[320px] rounded-2xl shadow-xl"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          {/* Greeting */}
          <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            Hi there! 👋 I’m
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Cameron Williamson
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-gray-600 dark:text-gray-400">
            I believe that collaboration and creativity are the essence of
            progress. And I am dedicated to bringing a fresh perspective to
            every project I undertake.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition">
              Let’s Talk ↗
            </button>

            <button className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-sm transition">
              Download CV ↗
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-4">
            {["f", "X", "Be", "🌐"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 text-sm opacity-80 hover:opacity-100 transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BACKGROUND TEXT */}
      <h2 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[120px] font-extrabold tracking-widest opacity-[0.04] dark:opacity-[0.05] whitespace-nowrap pointer-events-none">
        UI UX DESIGNER
      </h2>
    </section>
  )
}
