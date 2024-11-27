import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { Diagram } from "@/components/diagram"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Diagram />
      <FAQ />
    </main>
  )
}

