import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { AddToServerButton } from "./add-server-button";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/embedded-logo.png"
                alt="Embedded Bot Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-serif font-black text-xl">Embedded</span>
            </div>
            <p className="font-sans text-slate-300 mb-6 max-w-md leading-relaxed">
              If you have any questions or issues, join the support Discord!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AddToServerButton />
              <Button
                onClick={() =>
                  window.open("https://discord.gg/Be9yDnBPBw", "_blank")
                }
                className="border-[#5865f2] border text-[#5865f2] hover:bg-[#4752c4] hover:text-white font-sans font-medium px-6 py-3 rounded-lg transition-all duration-200 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Support Discord
              </Button>
            </div>
          </div>

          {/* <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#changelog"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-serif font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#help"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#status"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Status Page
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="font-sans text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="font-sans text-slate-400 text-sm">
            © 2024 Embedded. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a
              href="/privacy-policy"
              className="font-sans text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="font-sans text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
