import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question: "Which social media platforms does Embedded support?",
    answer:
      "Embedded currently supports X (Twitter), Reddit, Bluesky, Twitch (clips), Instagram, Pixiv, and TikTok.",
  },
  {
    question: "Why isn't ____ supported?",
    answer:
      "I try to prioritize platforms that are widely used vs. ease of integration. If there's a specific platform you'd like to see supported, join the support Discord and let me know!",
  },
  {
    question: "I can set the bot to translate to any language?",
    answer:
      "Yes! The bot, by default, will translate any applicable embed to English. You can change this on a server-wide or on a per-channel basis to any language you need.",
  },
  {
    question: "Can I ignore embeddings on a per-message basis?",
    answer:
      "You can use Discord's built in embed suppress syntax by wrapping your message in `<>`. If you want Embedded to ignore your message but still want Discord's default embedding, start your message with `!`.",
  },
  {
    question: "How does NSFW and Spoiler detection work?",
    answer:
      "On certain platforms, post metadata can inform whether a post contains spoilers or is NSFW. I do my best to hide parts of the embed that are sensitive by default. You can configure the default settings server-wide or on a per-channel basis. Discord channels that are marked NSFW (age-restricted) will show NSFW content by default.",
  },
  {
    question: "Can I manually mark an embed as a spoiler?",
    answer: "Yes. Wrap your message in `||` to mark it as a spoiler.",
  },
  {
    question: "How can I share bugs, feedback, or feature requests?",
    answer:
      "The best way to share bugs, feedback, or feature requests is to join the support Discord.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg bg-slate-800/50 backdrop-blur-sm">
      <button
        className="w-full cursor-pointer px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white text-lg">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-cyan-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-slate-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            If you have questions that aren't answered here, join the support
            Discord!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a
            href="https://discord.gg/embedded-support"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 transform hover:scale-105"
          >
            Join our Support Discord
          </a>
        </div> */}
      </div>
    </section>
  );
}
