import { Check, Minus, X } from "lucide-react";

type FeatureValue = boolean | "mixed" | null;

export function ComparisonTable() {
  const competitors: {
    name: string;
    features: Record<string, FeatureValue>;
    highlight?: boolean;
  }[] = [
    {
      name: "Embedded",
      features: {
        "Configurable Per Channel": true,
        "Mixed Media (videos + images)": true,
        "Translate to Any Language": true,
        "Auto mark NSFW/spoilers": true,
        "Platform-Specific Context": true,
        "Gallery View for Images and Videos": true,
      },
      highlight: true,
    },
    {
      name: "Others",
      features: {
        "Configurable Per Channel": true,
        "Mixed Media (videos + images)": "mixed",
        "Translate to Any Language": "mixed",
        "Auto mark NSFW/spoilers": false,
        "Platform-Specific Context": false,
        "Gallery View for Images and Videos": false,
      },
    },
    // {
    //   name: "Dyno",
    //   features: {
    //     "Visually Clean": true,
    //     "Advanced Moderation": true,
    //     "Real-time Analytics": false,
    //     "Multi-server Support": true,
    //     "24/7 Uptime": false,
    //     "Free Tier": true,
    //     "Premium Features": true,
    //     "Community Support": false,
    //   },
    // },
    // {
    //   name: "Carl-bot",
    //   features: {
    //     "Visually Clean": true,
    //     "Advanced Moderation": true,
    //     "Real-time Analytics": false,
    //     "Multi-server Support": true,
    //     "24/7 Uptime": true,
    //     "Free Tier": true,
    //     "Premium Features": false,
    //     "Community Support": false,
    //   },
    // },
  ];

  const featureNames = Object.keys(competitors[0].features);

  return (
    <section className="py-20 px-4 bg-navy-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Why Choose <span className="text-cyan-400">Embedded</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our embeds go as far as fetching and displaying Twitter Community
            Notes or the Reddit comment the link may be linked to with the
            original post. If there is relevant context available, it will be
            embedded.
          </p>
        </div>

        {/* Desktop version (hidden on small screens) */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-full bg-navy-900/80 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left p-6 text-slate-300 font-semibold">
                    Features
                  </th>
                  {competitors.map((bot) => (
                    <th
                      key={bot.name}
                      className="text-center p-6 min-w-[140px]"
                    >
                      <div
                        className={`font-bold text-lg ${
                          bot.highlight
                            ? "text-cyan-400 bg-cyan-400/10 py-2 px-4 rounded-lg border border-cyan-400/30"
                            : "text-white"
                        }`}
                      >
                        {bot.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureNames.map((feature, index) => (
                  <tr
                    key={feature}
                    className={`border-b border-slate-700/50 ${
                      index % 2 === 0 ? "bg-navy-800/30" : "bg-transparent"
                    }`}
                  >
                    <td className="p-6 text-slate-200 font-medium">
                      {feature}
                    </td>
                    {competitors.map((bot) => (
                      <td
                        key={`${bot.name}-${feature}`}
                        className="text-center p-6"
                      >
                        {(() => {
                          const value =
                            bot.features[feature as keyof typeof bot.features];
                          if (value === true) {
                            return (
                              <Check
                                className={`w-6 h-6 mx-auto ${
                                  bot.highlight
                                    ? "text-cyan-400"
                                    : "text-green-400"
                                }`}
                              />
                            );
                          } else if (value === false) {
                            return (
                              <X className="w-6 h-6 mx-auto text-red-400" />
                            );
                          } else if (value === "mixed") {
                            return (
                              <Minus className="w-6 h-6 mx-auto text-yellow-400" />
                            );
                          } else {
                            return (
                              <X className="w-6 h-6 mx-auto text-red-400" />
                            );
                          }
                        })()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile version (card-based layout) */}
        <div className="md:hidden space-y-6">
          {featureNames.map((feature, index) => (
            <div 
              key={feature} 
              className={`bg-navy-900/80 rounded-xl border border-cyan-500/20 p-4 backdrop-blur-sm ${
                index % 2 === 0 ? "bg-navy-800/30" : "bg-transparent"
              }`}
            >
              <h3 className="text-slate-200 font-medium text-lg mb-4">{feature}</h3>
              <div className="grid grid-cols-2 gap-4">
                {competitors.map((bot) => {
                  const value = bot.features[feature as keyof typeof bot.features];
                  return (
                    <div key={`${bot.name}-${feature}`} className="flex flex-col items-center">
                      <div 
                        className={`font-semibold text-sm mb-2 ${
                          bot.highlight ? "text-cyan-400" : "text-white"
                        }`}
                      >
                        {bot.name}
                      </div>
                      <div>
                        {value === true ? (
                          <Check
                            className={`w-5 h-5 ${
                              bot.highlight ? "text-cyan-400" : "text-green-400"
                            }`}
                          />
                        ) : value === false ? (
                          <X className="w-5 h-5 text-red-400" />
                        ) : value === "mixed" ? (
                          <Minus className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-cyan-300 font-medium">
              Join over <span className="text-cyan-400 font-bold">50,000+</span>{" "}
              servers already using Embedded
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
