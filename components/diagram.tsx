"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Settings, Zap, Clock } from "lucide-react";

export function Diagram() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black overflow-hidden" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div
            className={cn(
              "relative transition-all duration-1000 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-yellow-500/20 rounded-lg" />

              {/* Connection diagram */}
              <div className="relative h-full flex flex-col items-center justify-between py-8">
                {[
                  "Banking as a Service",
                  "Bank",
                  "Blockchain Provider",
                  "Database",
                ].map((item) => (
                  <div
                    key={item}
                    className="w-64 p-4 bg-black/90 rounded-lg border border-zinc-200 border-emerald-500/20 text-center dark:border-zinc-800"
                  >
                    <div className="text-white font-medium">{item}</div>
                    <div className="text-emerald-500 text-sm">Connected</div>
                  </div>
                ))}
                {/* Connector lines */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-emerald-500/20" />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <h2 className="text-4xl font-bold text-white mb-12 md:text-5xl">
              Your Finops team
              <br />
              never sleeps easy.
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Settings className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Average fintech has +25 providers
                  </h3>
                  <p className="text-gray-400">
                    Financial data is scattered across numerous providers and a
                    complex set of systems. Big banks have huge data teams that
                    fintechs cannot afford.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Tech team is focused on shipping
                  </h3>
                  <p className="text-gray-400">
                    For the reconciliation automation process to be safe, tech
                    teams must dedicate at least one month to each of them,
                    taking attention away from shipping features.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Manual processes
                  </h3>
                  <p className="text-gray-400">
                    Finops teams spends an average of +100 hours a month solving
                    financial data issues and reconciliating transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
