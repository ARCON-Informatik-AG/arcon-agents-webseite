"use client";

import { useRef } from "react";
import { Plug, Workflow, Users2, Bot } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function IntegrationsBeamDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const abacusAnchorRef = useRef<HTMLSpanElement>(null);
  const dataAnchorRef = useRef<HTMLSpanElement>(null);
  const appsAnchorRef = useRef<HTMLSpanElement>(null);
  const agentAnchorRef = useRef<HTMLSpanElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[360px] items-center justify-between rounded-2xl border p-8"
    >
      <div className="flex flex-col gap-10">
        <div className="relative flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm">
          <Plug className="h-5 w-5 text-arcon-dark-green" aria-hidden="true" />
          <span className="text-sm font-medium">Abacus</span>
          <span ref={abacusAnchorRef} aria-hidden="true" className="absolute right-0 top-1/2 h-0 w-0" />
        </div>
        <div className="relative flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm">
          <Workflow className="h-5 w-5 text-arcon-dark-green" aria-hidden="true" />
          <span className="text-sm font-medium">Datenquellen</span>
          <span ref={dataAnchorRef} aria-hidden="true" className="absolute right-0 top-1/2 h-0 w-0" />
        </div>
        <div className="relative flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm">
          <Users2 className="h-5 w-5 text-arcon-dark-green" aria-hidden="true" />
          <span className="text-sm font-medium">User</span>
          <span ref={appsAnchorRef} aria-hidden="true" className="absolute right-0 top-1/2 h-0 w-0" />
        </div>
      </div>

      <div className="relative flex items-center gap-3 rounded-2xl bg-arcon-dark-green px-6 py-5 text-white shadow-md">
        <Bot className="h-6 w-6 text-arcon-light-green" aria-hidden="true" />
        <span className="font-semibold">Arcon Agents</span>
        <span ref={agentAnchorRef} aria-hidden="true" className="absolute left-0 top-1/2 h-0 w-0" />
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={abacusAnchorRef}
        toRef={agentAnchorRef}
        gradientStartColor="#1bcb80"
        gradientStopColor="#004132"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dataAnchorRef}
        toRef={agentAnchorRef}
        gradientStartColor="#1bcb80"
        gradientStopColor="#004132"
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={appsAnchorRef}
        toRef={agentAnchorRef}
        gradientStartColor="#1bcb80"
        gradientStopColor="#004132"
        delay={2}
      />
    </div>
  );
}
