import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AddToServerButton } from "./add-server-button";

export function Header() {
  return (
    <header className="bg-slate-900 shadow-lg border-b border-slate-800 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/embedded-logo.png"
              alt="Embedded Bot Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-serif font-black text-xl text-white">
              Embedded
            </span>
          </div>

          {/* Navigation - Hidden on mobile */}
          {/* <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#support"
              className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Support
            </a>
          </nav> */}

          <div className="flex items-center gap-4">
            <AddToServerButton />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
