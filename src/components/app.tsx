import { ComparisonTable } from "@/components/comparison-table";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { FAQSection } from "./faq-section";
import { SupportedPlatforms } from "./supported-platforms";

export default function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SupportedPlatforms />
      <ComparisonTable />
      <FAQSection />
    </>
  );
}
