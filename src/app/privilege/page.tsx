"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Crown,
  Gift,
  Clock,
  Truck,
  CheckCircle2,
  ArrowRight,
  Gem,
  Award,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function PrivilegePage() {
  const { isPrivilegeMember, setIsPrivilegeMember } = useStore();
  const [successToast, setSuccessToast] = useState(false);

  const handleToggle = () => {
    setIsPrivilegeMember(!isPrivilegeMember);
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 3500);
  };

  return (
    <div className="min-h-screen bg-vellum-cream text-charcoal-ink">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#EDE8D8] to-vellum-cream border-b border-border-hairline overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-garnet-deep text-vellum-cream mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-bronze-accent" />
            <span className="font-label-micro text-[11px] tracking-[0.24em] font-semibold uppercase">
              THE OLIVER PRIVILEGE CIRCLE
            </span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl md:text-6xl text-charcoal-ink font-normal tracking-tight mb-6">
            An Archival Society for Discerning Patrons
          </h1>

          <p className="font-body-md text-charcoal-ink/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Experience bespoke high jewellery with privileged acquisitions, private vault unveilings, and direct Jaipur atelier stewardship for just <strong className="font-semibold text-garnet-deep">₹149 per month</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleToggle}
              className={`px-8 py-4 font-label-uppercase text-xs tracking-[0.2em] font-semibold transition-all shadow-md ${
                isPrivilegeMember
                  ? "bg-[#2A4D3E] text-white hover:bg-[#203a2f]"
                  : "bg-garnet-deep text-vellum-cream hover:bg-garnet-wine"
              }`}
            >
              {isPrivilegeMember ? "ACTIVE MEMBER • CLICK TO MANAGE" : "ENROLL NOW • ₹149 / MONTH"}
            </button>
            <Link
              href="/shop"
              className="px-8 py-4 border border-charcoal-ink/30 text-charcoal-ink hover:border-charcoal-ink font-label-uppercase text-xs tracking-[0.2em] font-medium transition-colors"
            >
              EXPLORE ARCHIVE
            </Link>
          </div>

          {successToast && (
            <div className="mt-6 inline-block bg-[#FAF7F0] border border-garnet-deep/40 px-6 py-2.5 shadow-lg text-xs font-label-uppercase tracking-wider text-garnet-deep">
              {isPrivilegeMember
                ? "✨ Welcome to the Privilege Circle! 5% deduction active across your bag."
                : "Privilege membership deactivated."}
            </div>
          )}
        </div>
      </section>

      {/* Privileges Matrix */}
      <section className="py-16 md:py-20 border-b border-border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-micro text-[10px] text-garnet-deep tracking-[0.22em] font-bold uppercase block mb-2">
              PATRON ADVANTAGES
            </span>
            <h2 className="font-display-hero text-3xl md:text-4xl text-charcoal-ink font-normal">
              Privileges of Membership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F0] p-8 border border-border-hairline shadow-sm hover:border-garnet-deep/30 transition-all">
              <div className="w-10 h-10 bg-[#F4EFDF] border border-border-hairline flex items-center justify-center text-garnet-deep mb-6">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                5% Dedicated Ledger Deduction
              </h3>
              <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                Enjoy an automatic 5% deduction on all high jewellery solitaires, emerald rings, diamond necklaces, and archival suites across every acquisition.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-8 border border-border-hairline shadow-sm hover:border-garnet-deep/30 transition-all">
              <div className="w-10 h-10 bg-[#F4EFDF] border border-border-hairline flex items-center justify-center text-garnet-deep mb-6">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                10% Birthday Anniversary Month
              </h3>
              <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                Celebrate your birth month with an elevated 10% deduction across all eligible pieces in commemoration of your personal milestone.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-8 border border-border-hairline shadow-sm hover:border-garnet-deep/30 transition-all">
              <div className="w-10 h-10 bg-[#F4EFDF] border border-border-hairline flex items-center justify-center text-garnet-deep mb-6">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                Vault Pre-Access &amp; Rare Gemstones
              </h3>
              <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                Receive private 48-hour advanced invitations to view newly unsealed Jaipur gemstone batches before they are released to the public archive.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-8 border border-border-hairline shadow-sm hover:border-garnet-deep/30 transition-all">
              <div className="w-10 h-10 bg-[#F4EFDF] border border-border-hairline flex items-center justify-center text-garnet-deep mb-6">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                Priority Armored Transit
              </h3>
              <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                Expedited atelier preparation and dedicated priority dispatch via specialized armored courier services (Sequel / BVC Logistics).
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-8 border border-border-hairline shadow-sm hover:border-garnet-deep/30 transition-all">
              <div className="w-10 h-10 bg-[#F4EFDF] border border-border-hairline flex items-center justify-center text-garnet-deep mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                Jaipur Master Lapidary Concierge
              </h3>
              <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                Direct phone and WhatsApp access to our senior gemologists for bespoke setting adaptations, sizing consultations, and provenance certification.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-8 border border-border-hairline shadow-sm hover:border-garnet-deep/30 transition-all">
              <div className="w-10 h-10 bg-[#F4EFDF] border border-border-hairline flex items-center justify-center text-garnet-deep mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                Effortless Flexibility
              </h3>
              <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                Cancel or pause anytime with a single click in your patron dashboard. Zero hidden commitments or exit penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Card Callout */}
      <section className="py-16 md:py-20 bg-[#FAF7F0]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-2 border-garnet-deep p-8 md:p-12 bg-vellum-cream text-center shadow-lg relative">
            <div className="inline-block bg-garnet-deep text-vellum-cream px-3 py-1 text-[10px] font-label-micro uppercase tracking-widest font-bold mb-4">
              PATRON PLAN SPECIFICATION
            </div>

            <h3 className="font-display-hero text-3xl md:text-4xl text-charcoal-ink mb-2">
              The Sovereign Patron Plan
            </h3>

            <div className="my-6">
              <span className="font-display-hero text-4xl md:text-5xl text-garnet-deep font-normal">
                ₹149
              </span>
              <span className="text-charcoal-ink/60 font-label-uppercase text-xs tracking-widest ml-2 uppercase">
                / Calendar Month
              </span>
            </div>

            <p className="font-body-sm text-xs text-charcoal-ink/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Billed monthly via secure Razorpay mandate. Cancel anytime from your account settings. Instant 5% savings applicable immediately on current items in your bag.
            </p>

            <button
              onClick={handleToggle}
              className={`w-full max-w-md mx-auto py-4 font-label-uppercase text-xs tracking-[0.2em] font-semibold transition-all shadow-md ${
                isPrivilegeMember
                  ? "bg-[#2A4D3E] text-white hover:bg-[#203a2f]"
                  : "bg-garnet-deep text-vellum-cream hover:bg-garnet-wine"
              }`}
            >
              {isPrivilegeMember ? "YOU ARE A PRIVILEGE MEMBER (CLICK TO CANCEL)" : "JOIN THE CIRCLE TODAY"}
            </button>

            <div className="mt-6 flex items-center justify-center gap-6 text-[11px] font-label-micro text-charcoal-ink/60 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-garnet-deep" /> BIS Hallmarked
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-garnet-deep" /> Fully Insured Transit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-garnet-deep" /> Razorpay Secured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Terms Reference */}
      <section className="py-12 border-t border-border-hairline text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-body-sm text-xs text-charcoal-ink/70 leading-relaxed">
            All privileges are subject to the terms detailed in our formal patron charter. Review{" "}
            <Link href="/terms-and-conditions#art-09" className="text-garnet-deep underline font-medium">
              Article 09 of the Terms &amp; Conditions
            </Link>{" "}
            for complete rules on non-stacking computations and subscription mandates.
          </p>
        </div>
      </section>
    </div>
  );
}

