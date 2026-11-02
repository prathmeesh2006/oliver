import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Diamond, ShieldCheck, Sparkles, Award } from "lucide-react";

export const metadata = {
  title: "Our Story & Jaipur Atelier — OLIVER Jewellery",
  description:
    "Handcrafted in Jaipur with natural gemstones and architectural discipline. Built for everyday reverence.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-surface text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 bg-charcoal-ink text-white overflow-hidden border-b border-border-hairline">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-bronze-accent" />
            <span className="font-label-micro text-vellum-cream text-[9px] uppercase tracking-[0.25em]">
              JAIPUR ATELIER &bull; FOUNDATION ARCHIVE
            </span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-[-0.02em] mb-6">
            The Jaipur Atelier &amp; Architectural Discipline
          </h1>

          <p className="font-body-lg text-vellum-cream/90 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed">
            Founded on quiet reverence for natural gemstones and uncompromising craftsmanship. Real gemstone jewellery for the moments you want to keep.
          </p>
        </div>
      </section>

      {/* 2. CRAFT TRIPTYCH */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-border-hairline">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-uppercase text-garnet-deep text-xs tracking-[0.22em] font-semibold uppercase block mb-2">
            THREE STAGES OF REVERENCE
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-charcoal-ink">
            Made with Care
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
            Every piece deserves attention to detail. From the design to the final finish, we aim to bring beauty, care, and quality into every part of the experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stage 1 */}
          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDoJY2KKWTuV4JhuIez-_Q9qSU20g043IeYSXgPWxU7TwudFDQJb2n5L1Evfhu138AolEK_a651xGdzYuZciBz-rYxtdUIPMErf4o04qbIL-GKOJV1Ct_vxfinsl2ijLbgxGTcdcPh4_8nI53Mev6Fq_lT8hCasRJ--hpxyfdRsDNSNXKltF3BlLqOb63VNOqqdbC1bJdrFZkHClFrNEIAHG0q4TY-Y0VYWfuU9gts"
                  alt="Archival Blueprinting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 font-label-micro text-[9px] bg-vellum-cream text-garnet-deep px-2.5 py-1 tracking-[0.2em] font-semibold">
                  STAGE 01
                </span>
              </div>
              <h3 className="font-headline-sm text-lg text-charcoal-ink uppercase">
                Archival Blueprinting
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Before casting, each silhouette is drafted by hand to balance structural tension, weight distribution, and pure negative space.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-border-hairline">
              <span className="font-label-micro text-[10px] uppercase text-bronze-accent tracking-[0.18em]">
                CALIBRATED BALANCE
              </span>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKo5Wg5H4v9mQ4z4OWqrOKWy2S77OofB04xdtSaz44974bTUx9c_mcncKFCaZ66zBCb8GCx10CNo9_uCb_fmQ5Hnwv0nJJmFhdJ1NE2OGZHfmjZh8YYl8Rj8Z0_SOOfkMlwrw1hoc91CNRZxTzwslBReqTQ5hHEvvJh2nDpO7aMf1g-Pd8jIRj9mwT0mgUVLDptt6MN9kBbK6KqZO7jzuHMESLEsoxt6x-Dx0aAoVO"
                  alt="Lapidary Setting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 font-label-micro text-[9px] bg-vellum-cream text-garnet-deep px-2.5 py-1 tracking-[0.2em] font-semibold">
                  STAGE 02
                </span>
              </div>
              <h3 className="font-headline-sm text-lg text-charcoal-ink uppercase">
                Lapidary &amp; Pavé Setting
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Gemstones are set under 40x magnification with hand-pushed beads, assuring maximum optical fire and generational longevity.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-border-hairline">
              <span className="font-label-micro text-[10px] uppercase text-bronze-accent tracking-[0.18em]">
                MICROSCOPIC PRECISION
              </span>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsAduQFXL7UUHPaw2jT1akBxIGDgOsT3CoIQ8_u9-bI7RbGj_zm_Yww4LDSzinRXHClnZNk8daueNRlwkfkKmRiG2RaTtUwRJck_CgcxCWjjtFHFuvfbFTGN-u89TCi5YaJC8CKDHPSDLlb4zdtrpYJDg9a-07LMrhd8zjdOfKucnmgYISINh1CWIStgCPUuEz2l8NUq2x6-47yifk-jBqjinJApV-pI6X8xtB4_58"
                  alt="Hand Polish & Hallmarking"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 font-label-micro text-[9px] bg-vellum-cream text-garnet-deep px-2.5 py-1 tracking-[0.2em] font-semibold">
                  STAGE 03
                </span>
              </div>
              <h3 className="font-headline-sm text-lg text-charcoal-ink uppercase">
                Hand Polish &amp; Hallmarking
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Three tiers of mirror polish conclude with the official BIS hallmark and OLIVER monogram laser inscribed inside each shank.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-border-hairline">
              <span className="font-label-micro text-[10px] uppercase text-bronze-accent tracking-[0.18em]">
                BIS 750 VERIFIED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ETHOS STATEMENT */}
      <section className="w-full bg-linen-surface py-24 border-b border-border-hairline">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="font-label-uppercase text-xs text-garnet-deep uppercase tracking-[0.25em] font-semibold block">
            OUR SOVEREIGN PLEDGE
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink leading-tight">
            &ldquo;We don&apos;t build jewellery for vaults. We build pieces to be touched, worn, and passed forward.&rdquo;
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Natural Jaipur gemstones, solid 18K hallmarked gold, zero fast-fashion alloy compromises.
          </p>
          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-xs tracking-[0.2em] font-semibold transition-colors shadow-xs"
            >
              <span>EXPLORE THE CURRENT ARCHIVE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

