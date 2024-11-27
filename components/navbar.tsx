import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-black/50 backdrop-blur-md">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8">
          <svg
            viewBox="0 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-emerald-500"
          >
            <path
              d="M12 2L2 7L12 12L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-xl font-semibold text-white">stackly</span>
      </Link>
      <Button
        variant="default"
        className="bg-white text-black hover:bg-white/90"
      >
        Get started
      </Button>
    </nav>
  );
}
