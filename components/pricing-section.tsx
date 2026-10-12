"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  AgentNetwork,
  type AgentLink,
  type AgentNode,
} from "@/components/agent-network";

type BillingCycle = "monthly" | "yearly";

type Plan = {
  name: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  features: string[];
  buttonText: string;
  popular: boolean;
};

// Hubs represent assistants, satellites represent integrations.
const agentNodes: AgentNode[] = [
  { id: "a", x: 260, y: 200, hub: true },
  { id: "b", x: 600, y: 130, hub: true },
  { id: "c", x: 940, y: 200, hub: true },
  { id: "d", x: 420, y: 500, hub: true },
  { id: "e", x: 780, y: 540, hub: true },
  { id: "f", x: 150, y: 380 },
  { id: "g", x: 340, y: 330 },
  { id: "h", x: 680, y: 340 },
  { id: "i", x: 1050, y: 420 },
  { id: "j", x: 560, y: 690 },
  { id: "k", x: 220, y: 640 },
  { id: "l", x: 960, y: 690 },
];

const agentLinks: AgentLink[] = [
  ["a", "b"],
  ["b", "c"],
  ["a", "g"],
  ["g", "d"],
  ["b", "h"],
  ["h", "c"],
  ["h", "e"],
  ["c", "i"],
  ["d", "e"],
  ["d", "j"],
  ["e", "l"],
  ["a", "f"],
  ["f", "k"],
  ["k", "j"],
  ["j", "l"],
  ["g", "f"],
  ["i", "l"],
];

// Platzhalter: Preise und Leistungen durch die echten Angaben ersetzen.
const plans: Plan[] = [
  {
    name: "Start",
    priceMonthly: 99,
    priceYearly: 990,
    features: ["1 KI-Assistent", "Upload von Basiswissen", "E-Mail-Support"],
    buttonText: "Jetzt starten",
    popular: false,
  },
  {
    name: "Business",
    priceMonthly: 249,
    priceYearly: 2490,
    features: [
      "3 KI-Assistenten",
      "Unternehmenswissen integrieren",
      "Standard-Integrationen",
      "Prioritäts-Support",
    ],
    buttonText: "Jetzt starten",
    popular: true,
  },
  {
    name: "Professional",
    priceMonthly: 499,
    priceYearly: 4990,
    features: [
      "Unbegrenzte KI-Assistenten",
      "Erweiterte Integrationen",
      "Persönliche Betreuung",
    ],
    buttonText: "Jetzt starten",
    popular: false,
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    features: [
      "Individuelle Abacus-Integrationen",
      "Dedizierte Einrichtung",
      "Service-Level nach Vereinbarung",
    ],
    buttonText: "Kontakt",
    popular: false,
  },
];

function PlanPrice({
  plan,
  billingCycle,
}: {
  plan: Plan;
  billingCycle: BillingCycle;
}) {
  const isYearly = billingCycle === "yearly";
  const price = isYearly ? plan.priceYearly : plan.priceMonthly;

  return (
    <>
      <span className="text-3xl font-bold text-[#1bcb80]">
        CHF {price?.toLocaleString("de-CH")}
      </span>
      <span className="ml-1 text-sm text-gray-600">
        {isYearly ? "/ Jahr" : "/ Monat"}
      </span>
    </>
  );
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section
      id="pricing"
      className="relative px-6 py-32 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004132] via-[#003529] to-[#002b20]" />

        <div className="absolute top-20 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-[#1bcb80]/30 to-[#005f41]/20 blur-3xl animate-pulse animation-delay-0" />
        <div className="absolute bottom-20 left-1/4 h-36 w-36 rounded-full bg-gradient-to-r from-[#005f41]/25 to-[#1bcb80]/15 blur-2xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 h-24 w-24 rounded-full bg-gradient-to-r from-[#1bcb80]/20 to-[#005f41]/30 blur-xl animate-pulse animation-delay-1000" />

        <AgentNetwork nodes={agentNodes} links={agentLinks} />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Flexible Preismodelle
          </h2>
          <p className="mt-4 text-lg text-[#c8d2d7]">
            Flexible Abonnemente für individuelle Bedürfnisse
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "monthly" ? "text-white" : "text-[#c8d2d7]"
              }`}
            >
              Monatlich
            </span>
            <Switch
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) =>
                setBillingCycle(checked ? "yearly" : "monthly")
              }
              aria-label="Abrechnungszeitraum umschalten"
              className="data-[state=checked]:bg-[#1bcb80] data-[state=unchecked]:bg-white/20"
            />
            <span
              className={`text-lg font-medium transition-colors ${
                billingCycle === "yearly" ? "text-white" : "text-[#c8d2d7]"
              }`}
            >
              Jährlich
            </span>
            <Badge className="bg-[#1bcb80]/20 text-[#1bcb80] border-[#1bcb80]/30 text-sm px-3 py-1">
              2 Monate gratis
            </Badge>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-4 animate-fade-in-up animation-delay-200">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col bg-white/95 backdrop-blur-sm border-white/20 shadow-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "ring-2 ring-[#1bcb80]" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1bcb80] text-white shadow-lg">
                  Beliebt
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl pb-2">{plan.name}</CardTitle>
                <div className="mt-4">
                  {plan.priceMonthly === null ? (
                    <span className="text-3xl font-bold text-[#1bcb80]">
                      Individuell
                    </span>
                  ) : (
                    <PlanPrice plan={plan} billingCycle={billingCycle} />
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 pt-0">
                <div className="flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#1bcb80] mt-1 flex-shrink-0" />
                      <span className="text-base text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button
                    className="w-full bg-[#1bcb80] text-white border border-[#1bcb80] hover:bg-[#00b36b] hover:border-[#00b36b] transition-colors duration-200"
                    variant="default"
                    onClick={() => {
                      if (plan.buttonText === "Kontakt") {
                        window.location.href =
                          "mailto:support@meeting-agent.ch?subject=Anfrage%20zu%20Enterprise%20Abos";
                        return;
                      }

                      window.open("/welcome", "_blank");
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
