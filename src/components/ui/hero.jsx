
import { ChevronRight } from "lucide-react"
import { Button } from "./button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

      {/* grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      {/* top badge */}
      <div className="relative z-10 mb-6">
        <span className="flex items-center gap-2 text-sm text-gray-300 border border-gray-700 px-4 py-2 rounded-full">
          Future AI Tools
          <ChevronRight size={16} />
        </span>
      </div>

      {/* main heading */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Build Crazy Projects
      </h1>

      {/* subtitle */}
      <p className="relative z-10 mt-6 max-w-xl text-gray-400 text-lg">
        Your personal AI powered system to generate crazy projects,
        build faster and dominate hackathons.
      </p>

      {/* button */}
      <div className="relative z-10 mt-8">
        <Button className="text-lg px-8 py-6">
          Get Started
        </Button>
      </div>

    </section>
  )
}