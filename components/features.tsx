"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Network, Shield, ListTodo } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Full Control",
    description:
      "Make sure that all your application transactions are backed up by providers",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description:
      "Detects transactions that are at your provider you do not have, or vice versa",
  },
  {
    icon: ListTodo,
    title: "Automated Tasks",
    description:
      "Free your ops team from manual processes and tech where the focus is not",
  },
];

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black" ref={ref}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl">
          It dominates everything that happens inside.
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "text-center transition-all duration-700 transform",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
                index === 1 && "delay-200",
                index === 2 && "delay-400"
              )}
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
