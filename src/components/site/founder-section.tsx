"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Mail, ArrowRight } from "lucide-react";
import {
  Reveal,
  SectionShell,
  Eyebrow,
  SectionHeading,
  Lead,
} from "@/components/blocks/primitives";

/**
 * FounderSection — compact showcase of the founder with photo and brief bio.
 */
export function FounderSection() {
  return (
    <SectionShell className="border-t border-hl-border bg-hl-surface/30">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Photo Column - Much Larger */}
        <div>
          <Reveal>
            <div className="relative">
              {/* "Founder" label at top */}
              <div className="mb-4">
                <span className="inline-block rounded-full border border-hl-cyan/40 bg-hl-cyan/10 px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider text-hl-cyan">
                  Founder
                </span>
              </div>
              
              <div className="relative overflow-hidden rounded-3xl border-2 border-hl-border bg-hl-surface/60 p-8 hl-card-glow">
                {/* Photo Container - Even larger size */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-hl-border bg-hl-surface-2">
                  <Image
                    src="/jaafar-najafi-rad.jpg"
                    alt="Jaafar Najafi Rad - Founder of Haal Lab"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    priority
                  />
                </div>

                {/* Info Card - Name and title */}
                <div className="relative mt-6 rounded-2xl border-2 border-hl-border bg-hl-surface/80 p-6 backdrop-blur">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    Jaafar Najafi Rad
                  </h3>
                  <p className="mt-2 font-mono text-xl font-bold uppercase tracking-wider text-hl-cyan md:text-2xl">
                    Founder & Engineer
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Content Column */}
        <div>
          <Reveal delay={0.1}>
            <Eyebrow>About the Founder</Eyebrow>
            <SectionHeading className="mt-3">
              Engineering-first approach to AI
            </SectionHeading>
            <p className="mt-4 text-lg leading-relaxed text-hl-muted">
              Haal Lab was founded by Jaafar Najafi Rad, an AI engineer focused on making
              advanced AI systems accessible, private, and truly owned by organizations.
              Built on expertise in machine learning and production systems, with a
              commitment to data sovereignty and transparent architectures.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-base font-medium text-hl-cyan"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
