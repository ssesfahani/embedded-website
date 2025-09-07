import { Card, CardContent } from "@/components/ui/card";
import { EyeOff, IdCard, Languages, Settings } from "lucide-react";

const features = [
  {
    icon: IdCard,
    title: "Visually Consistent",
    description:
      "Embed cards look similar across platforms yet retain their native look with custom styling.",
  },
  {
    icon: EyeOff,
    title: "NSFW and Spoiler Management",
    description:
      "Automatically hides NSFW and posts containing spoilers unless the channel is marked as sensitive.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description:
      "Apply server-wide settings and channel-specific overrides to moderate effectively.",
  },
  {
    icon: Languages,
    title: "Translate to Any Language",
    description:
      "Auto translate messages from any platform to any language of choice.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Why <span className="text-cyan-400">Embedded?</span>
          </h2>
          {/* <p className="font-sans text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the powerful features that make Embedded the preferred
            choice for Discord communities worldwide.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-400/50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-400 group-hover:text-navy-900 transition-colors duration-300" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-sans text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
