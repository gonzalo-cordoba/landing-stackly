import { Button } from "@/components/ui/button";
// import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-emerald-700/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
              The core infrastructure
              <br />
              of modern fintech
            </h1>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-400">
              We are the heart of fintech, connecting data from various banking
              providers and specialized databases to improve operations,
              minimize fraud and maximize operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                Get started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black text-white border-white/20 hover:bg-white/10"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          {/* <div className="max-w-6xl mx-auto mt-20">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Dashboard Preview"
                width={1920}
                height={1080}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
