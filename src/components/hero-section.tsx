import { ImageCarousel } from "./image-carousel";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="font-sans text-sm text-slate-200">Trusted by 10,000+ Discord servers</span>
          </div> */}

          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Discord Bot Embed Fixer
            <br />
            {/* <span className="text-cyan-400">with Embedded</span> */}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discord bot that has visually consistent and clean embeds for
            Twitter/X, reddit, TikTok, Bluesky, Twitch, Pixiv, Instagram, and
            more!
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-navy-900 font-sans font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started for Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-sans font-medium px-8 py-4 rounded-lg transition-all duration-200 bg-transparent"
            >
              View Demo
            </Button>
          </div> */}

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-400/20 overflow-hidden">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
