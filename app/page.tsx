import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaqJsonLd } from "@/components/json-ld";
import HeroSection from "@/components/hero-section";
import UseCasesSection from "@/components/use-cases-section";
import AssistantsSection from "@/components/assistants-section";
import IntegrationsSection from "@/components/integrations-section";
import PlatformSection from "@/components/platform-section";
import WhyArconSection from "@/components/why-arcon-section";
import SwissQualitySection from "@/components/swiss-quality-section";
import ContactCtaSection from "@/components/contact-cta-section";
import GettingStartedSection from "@/components/getting-started-section";
import PricingSection from "@/components/pricing-section";
import FaqSection, { faqs } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "Arcon Agents | KI für Unternehmen aus der Schweiz",
  description:
    "Eigene KI-Assistenten, Ihr Unternehmenswissen und individuelle Abacus-Integrationen. In der Schweiz gehostet und persönlich von Arcon betreut.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <FaqJsonLd faqs={faqs} />
      <Header />
      <HeroSection />
      <UseCasesSection />
      <WhyArconSection />
      <AssistantsSection />
      {/* <IntegrationsSection /> */}
      <PlatformSection />
      <GettingStartedSection />
      <PricingSection />
      <FaqSection />
      <SwissQualitySection />
      <ContactCtaSection />
      <Footer />
    </div>
  );
}
