"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck,
  Award,
  ChevronRight,
  Scale,
  Sparkles,
  Lock,
  Truck,
  RotateCcw,
  Crown,
  FileText,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  const [activeArticle, setActiveArticle] = useState("art-01");

  const charterArticles = [
    { id: "art-01", label: "01. Preamble & Scope", tag: "§ 01" },
    { id: "art-02", label: "02. Website Usage & Eligibility", tag: "§ 02" },
    { id: "art-03", label: "03. Credential Custody", tag: "§ 03" },
    { id: "art-04", label: "04. Gemological Accuracy", tag: "§ 04" },
    { id: "art-05", label: "05. Orders & Confirmation", tag: "§ 05" },
    { id: "art-06", label: "06. Payments & Razorpay", tag: "§ 06" },
    { id: "art-07", label: "07. Shipping & Insured Transit", tag: "§ 07" },
    { id: "art-08", label: "08. Returns & Audit Protocol", tag: "§ 08" },
    { id: "art-09", label: "09. Privilege Membership", tag: "§ 09" },
    { id: "art-10", label: "10. Intellectual Property", tag: "§ 10" },
    { id: "art-11", label: "11. Liability & Warranties", tag: "§ 11" },
    { id: "art-12", label: "12. Amendments to Terms", tag: "§ 12" },
    { id: "art-13", label: "13. Salon Notice & Concierge", tag: "§ 13" },
  ];

  return (
    <div className="min-h-screen bg-vellum-cream text-charcoal-ink">
      {/* Header Banner */}
      <section className="w-full bg-vellum-cream pt-10 pb-8 border-b border-[rgba(113,0,1,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Charter Breadcrumb" className="flex items-center gap-2 text-xs font-label-uppercase tracking-[0.2em] text-charcoal-ink/60 uppercase mb-4">
            <Link href="/" className="hover:text-garnet-deep transition-colors">
              HOME
            </Link>
            <span className="text-bronze-accent text-[8px]">&bull;</span>
            <span>CLIENT CARE</span>
            <span className="text-bronze-accent text-[8px]">&bull;</span>
            <span className="text-garnet-deep font-semibold">TERMS &amp; CONDITIONS</span>
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-garnet-deep" />
            <span className="font-label-micro text-[10px] text-garnet-deep tracking-[0.2em] font-bold uppercase">
              LEGAL CHARTER &amp; PATRON AGREEMENT
            </span>
          </div>

          <h1 className="font-display-hero text-3xl md:text-5xl text-charcoal-ink font-normal tracking-tight mb-3">
            Terms &amp; Conditions
          </h1>

          <p className="font-body-md text-charcoal-ink/75 max-w-3xl leading-relaxed text-sm md:text-base font-light mb-6">
            Please read these terms carefully before navigating the OLIVER salon or placing an acquisition order with our private digital atelier. This charter defines the mutual covenants, gemological assurances, and patron protections governing our haute joaillerie house.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(113,0,1,0.08)] text-xs">
            <div className="flex flex-wrap items-center gap-4 text-charcoal-ink/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-garnet-deep"></span>
                <span className="font-label-uppercase tracking-widest text-[10px]">LAST REVISION:</span>
                <span className="font-label-micro text-garnet-deep uppercase bg-[#FAF7F0] px-2 py-0.5 font-semibold text-[10px] border border-border-hairline">
                  OCTOBER 2026 &bull; CURRENT EDITION
                </span>
              </div>
              <div className="hidden sm:block text-bronze-accent">&bull;</div>
              <div className="flex items-center gap-2">
                <span className="font-label-uppercase tracking-widest text-[10px]">REGISTRY REF:</span>
                <span className="font-mono text-[10px] tracking-widest text-charcoal-ink font-bold">
                  OLV-LEGAL-TERMS-2026
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-label-micro uppercase text-bronze-accent">
              <Award className="w-4 h-4" />
              <span>100% BIS HALLMARKING &amp; IGI/GIA CERTIFIED COMPLIANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Sticky Charter Index & Concierge */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-[#FAF7F0] p-5 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 bg-[#F4EFDF] px-3 py-2 border border-border-hairline">
                  <span className="font-label-uppercase text-[11px] text-garnet-deep uppercase tracking-widest font-bold">
                    Charter Index
                  </span>
                  <span className="font-label-micro text-[9px] text-charcoal-ink/60 font-semibold tracking-wider">
                    13 ARTICLES
                  </span>
                </div>

                <nav className="space-y-1 font-body-sm text-xs">
                  {charterArticles.map((art) => {
                    const isActive = activeArticle === art.id;
                    return (
                      <a
                        key={art.id}
                        href={`#${art.id}`}
                        onClick={() => setActiveArticle(art.id)}
                        className={`flex items-baseline justify-between py-2 px-3 transition-colors ${
                          isActive
                            ? "bg-garnet-deep text-vellum-cream font-medium"
                            : "text-charcoal-ink hover:bg-[#F4EFDF] hover:text-garnet-deep"
                        }`}
                      >
                        <span className="truncate">{art.label}</span>
                        <span className={`font-mono text-[10px] shrink-0 ml-2 ${isActive ? "text-vellum-cream/80" : "text-charcoal-ink/50"}`}>
                          {art.tag}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Direct Concierge Box */}
              <div className="bg-[#FAF7F0] p-6 border border-border-hairline shadow-sm">
                <span className="font-label-micro text-[9px] text-garnet-deep uppercase tracking-widest block mb-1 font-bold">
                  DIRECT LIAISONS
                </span>
                <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                  Legal &amp; Concierge Desk
                </h3>
                <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed mb-4">
                  For formal charter inquiries, certified provenance records, or institutional acquisitions, direct your correspondence to our Jaipur executive desk.
                </p>

                <div className="space-y-2 text-xs border-t border-border-hairline pt-4 mb-4">
                  <div className="flex items-center gap-2 text-charcoal-ink/80">
                    <Mail className="w-3.5 h-3.5 text-garnet-deep" />
                    <a href="mailto:Oliverstones.co@gmail.com" className="hover:text-garnet-deep font-medium">
                      Oliverstones.co@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal-ink/80">
                    <Phone className="w-3.5 h-3.5 text-garnet-deep" />
                    <span>Direct: +91 9024665590 / +91 85028 17574</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal-ink/60 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-bronze-accent" />
                    <span>Mon &ndash; Fri 9:00 AM &ndash; 7:00 PM IST</span>
                  </div>
                </div>

                <div className="bg-[#F4EFDF] p-3 border border-border-hairline">
                  <p className="font-label-micro text-[10px] text-garnet-deep font-semibold uppercase tracking-wider mb-1">
                    BIS HALLMARK VERIFICATION
                  </p>
                  <p className="font-body-sm text-[11px] text-charcoal-ink/70 leading-normal">
                    Every piece is stamped with the official Bureau of Indian Standards 6-digit HUID code verifiable on the BIS Care Portal.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: 13 Comprehensive Articles */}
            <div className="lg:col-span-8 space-y-8">
              {/* Art 01 */}
              <article id="art-01" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 01 &bull; PREAMBLE
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 01</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  01. Introduction &amp; Preamble
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    Welcome to the digital maison of <strong>OLIVER</strong>. These Terms &amp; Conditions (the &ldquo;Terms&rdquo; or &ldquo;Charter&rdquo;) set forth the legally binding terms and conditions governing patron access to and use of our digital salon, mobile portals, concierge booking infrastructure, and any acquisitions made through our secure checkout system.
                  </p>
                  <p>
                    By accessing, browsing, creating a patron account, or completing a transaction on this digital atelier, you expressly acknowledge and agree to be bound by these Terms, together with our Privacy Policy and Shipping &amp; Returns Protocol.
                  </p>
                  <p>
                    If you do not accept these terms in their entirety, you must discontinue your use of our platform immediately.
                  </p>
                </div>
              </article>

              {/* Art 02 */}
              <article id="art-02" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 02 &bull; JURISDICTION
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 02</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  02. Website Usage &amp; Eligibility
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    The OLIVER digital salon is curated strictly for patrons who possess the full legal capacity to enter into binding legal agreements under the Indian Contract Act, 1872. By utilizing this site or executing a high jewellery acquisition, you affirm that you are at least eighteen (18) years of age.
                  </p>
                  <p>
                    You agree to use our digital salon exclusively for lawful, personal purposes. Any reproduction, automated scraping, frame injection, or malicious exploitation of our intellectual property or editorial content is strictly prohibited and subject to civil and criminal sanctions.
                  </p>
                </div>
              </article>

              {/* Art 03 */}
              <article id="art-03" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 03 &bull; SECURITY
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 03</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  03. Account Responsibilities &amp; Credential Custody
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    Patrons electing to register an archival profile or enroll in the OLIVER Privilege Circle assume sole custody over their account authentication tokens, passwords, and two-factor SMS credentials.
                  </p>
                  <p>
                    OLIVER disclaims any liability for unauthorized orders, address alterations, or privilege disbursements arising from compromised patron credentials. If you suspect any breach of your private profile, notify our concierge team immediately at <a href="mailto:Oliverstones.co@gmail.com" className="text-garnet-deep underline">Oliverstones.co@gmail.com</a>.
                  </p>
                </div>
              </article>

              {/* Art 04 */}
              <article id="art-04" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 04 &bull; AUTHENTICITY
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 04</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  04. Products, Pricing &amp; Gemological Accuracy
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    Every jewel curated by OLIVER is individually crafted within our Jaipur lapidary ateliers, featuring 100% BIS Hallmarked precious metals (14KT, 18KT, or 22KT Gold) accompanied by individual diamond and gemstone grading dossiers from globally recognized gemological authorities including IGI, GIA, or equivalent sovereign laboratories.
                  </p>
                  <p>
                    Because natural gemstones possess intrinsic geological variations in hue, saturation, and pleochroism, minor organic distinctions between editorial imagery and the delivered jewel reflect genuine natural origin.
                  </p>
                  <p>
                    Prices are quoted in Indian Rupees (INR) and are inclusive of standard 3% Goods and Services Tax (GST). OLIVER reserves the right to adjust pricing in response to significant bullion fluctuations before order confirmation.
                  </p>
                </div>
              </article>

              {/* Art 05 */}
              <article id="art-05" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 05 &bull; ORDER PROTOCOL
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 05</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  05. Orders, Acceptance &amp; Confirmation
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    The digital submission of an order and subsequent automated transmission of an electronic confirmation email constitutes an acknowledgment of receipt, rather than a definitive binding contract of consignment.
                  </p>
                  <p>
                    A definitive sale agreement between OLIVER and the patron is strictly concluded when the jewel completes lapidary inspection, receives sovereign BIS hallmarking verification, and is handed over to our insured armored transit carriers with a dispatched tracking dossier.
                  </p>
                </div>
              </article>

              {/* Art 06 */}
              <article id="art-06" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 06 &bull; GATEWAYS
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 06</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  06. Payments &amp; Razorpay Infrastructure
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    To safeguard the financial sanctity of every patron, OLIVER utilizes <strong>Razorpay</strong> &mdash; a Level 1 PCI-DSS compliant banking gateway &mdash; for processing all digital transactions. We accept major credit instruments (Visa, MasterCard, American Express, RuPay), Net Banking channels, and Unified Payments Interface (UPI).
                  </p>
                  <p>
                    OLIVER does not store or process complete credit card numbers or banking passwords on its servers. All payment flows adhere strictly to Reserve Bank of India tokenization directives.
                  </p>
                </div>
              </article>

              {/* Art 07 */}
              <article id="art-07" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 07 &bull; TRANSIT
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 07</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  07. Shipping &amp; Insured Transit
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    Because our creations embody irreplaceable lapidary heritage, every single package dispatched from our Jaipur atelier is fully protected under our Comprehensive In-Transit Marine Insurance policy until the moment of physical handoff.
                  </p>
                  <p>
                    Consignments are fulfilled exclusively via specialized secure carriers (Sequel Logistics, BVC Logistics, or insured express couriers). Delivery requires verification via OTP or physical signature by the registered consignee.
                  </p>
                </div>
              </article>

              {/* Art 08 */}
              <article id="art-08" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 08 &bull; AUDIT PROTOCOL
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 08</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  08. Returns, Replacements &amp; Refunds
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    OLIVER maintains uncompromising quality benchmarks. All requests for return, structural exchange, or financial restitution are governed entirely by our dedicated Returns &amp; Refunds Policy.
                  </p>
                  <p>
                    Every returned jewel must arrive with intact security tamper-tags, original royal presentation cases, and original gemological dossiers. Bespoke commissions, personalized engravings, and modified ring sizing cannot be returned once crafted.
                  </p>
                </div>
              </article>

              {/* Art 09: Privilege Membership Charter */}
              <article id="art-09" className="bg-[#FAF7F0] p-6 lg:p-8 border-2 border-garnet-deep/30 shadow-md">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-bronze-accent" />
                    <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                      SECTION 09 &bull; VERIFIED CHARTER
                    </span>
                  </div>
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase bg-[#FAF7F0] px-2 py-0.5 font-bold border border-garnet-deep/30">
                    PATRON COVENANT
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-2 font-normal">
                  09. OLIVER Privilege Membership Charter
                </h2>
                <p className="font-body-md text-sm text-charcoal-ink/80 font-light mb-6">
                  The OLIVER Privilege program is an exclusive private patron collective. Enrollment, tier perks, and automated discount computations are governed by the following binding mechanics:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <span className="font-label-micro text-[9px] text-bronze-accent uppercase tracking-widest block mb-1 font-bold">
                      MEMBERSHIP SPECIFICATION
                    </span>
                    <h3 className="font-display-hero text-lg text-charcoal-ink mb-1">
                      Monthly Retainer &bull; ₹149/mo
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      Membership is established at a flat subscription fee of <strong className="font-medium text-charcoal-ink">₹149 per calendar month</strong>, billed on a recurring automated cycle via authorized digital mandates.
                    </p>
                  </div>

                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <span className="font-label-micro text-[9px] text-bronze-accent uppercase tracking-widest block mb-1 font-bold">
                      STANDARD BENEFIT
                    </span>
                    <h3 className="font-display-hero text-lg text-charcoal-ink mb-1">
                      5% Dedicated Deduction
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      Active patrons receive an immediate <strong className="font-medium text-charcoal-ink">5% deduction</strong> applied across all eligible acquisitions throughout the active tenure of their subscription.
                    </p>
                  </div>

                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <span className="font-label-micro text-[9px] text-bronze-accent uppercase tracking-widest block mb-1 font-bold">
                      ANNIVERSARY RECOGNITION
                    </span>
                    <h3 className="font-display-hero text-lg text-charcoal-ink mb-1">
                      10% Birthday Month Privilege
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      During the patron’s verified birthday month, the standard deduction is elevated to an exclusive <strong className="font-medium text-charcoal-ink">10% deduction</strong> on all eligible orders placed during that month.
                    </p>
                  </div>

                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <span className="font-label-micro text-[9px] text-garnet-deep uppercase tracking-widest block mb-1 font-bold">
                      CALCULATION PROTOCOL
                    </span>
                    <h3 className="font-display-hero text-lg text-charcoal-ink mb-1">
                      Strict Non-Stacking Rule
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      Privilege percentage deductions cannot be combined or stacked with seasonal promotional vouchers, archive clearance coupons, or external discount codes.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F4EFDF] p-4 border border-garnet-deep/20 text-xs text-charcoal-ink/80 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-garnet-deep shrink-0 mt-0.5" />
                    <p>
                      <strong>Subscription Management &amp; Termination:</strong> Patrons may pause or terminate recurring membership through their account dashboard at any point. Cancellation halts upcoming billing cycles immediately.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-garnet-deep shrink-0 mt-0.5" />
                    <p>
                      <strong>Non-Refundability:</strong> Subscription fees accrued prior to cancellation are non-refundable. Privilege discounts apply only to acquisitions completed while membership remains in active standing.
                    </p>
                  </div>
                </div>
              </article>

              {/* Art 10 */}
              <article id="art-10" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 10 &bull; INTELLECTUAL PROPERTY
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 10</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  10. Intellectual Property &amp; Archival Rights
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    All elements of the OLIVER digital experience &mdash; including high jewellery silhouettes, CAD setting geometries, gem-facet cuts, editorial photography, brand logotypes, typography, iconography, and text compositions &mdash; are the exclusive proprietary assets of OLIVER and protected by Indian and international copyright and trademark conventions.
                  </p>
                  <p>
                    Nothing within this charter grants any patron or third party any license, title, or interest in or to our intellectual properties.
                  </p>
                </div>
              </article>

              {/* Art 11 */}
              <article id="art-11" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 11 &bull; LIABILITY
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 11</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  11. Limitation of Liability &amp; Warranties
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    While OLIVER takes exhaustive precautions to guarantee that all descriptions, karat purity tests, and stone credentials meet global archival standards, this site and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind beyond our express BIS hallmarking and gemological certifications.
                  </p>
                  <p>
                    In no event shall OLIVER, its master lapidaries, or its directors be liable for indirect, incidental, punitive, or consequential damages arising from the use of our services or transit delays caused by force majeure events.
                  </p>
                </div>
              </article>

              {/* Art 12 */}
              <article id="art-12" className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    SECTION 12 &bull; AMENDMENTS
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 12</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  12. Modifications &amp; Amendments to Terms
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    OLIVER reserves the sovereign prerogative to revise, refine, or update any section of these Terms &amp; Conditions at our sole discretion. Any amendments take effect immediately upon their publication within this digital document, denoted by an updated timestamp in our metadata index.
                  </p>
                  <p>
                    Continued patronage or order submission following modifications constitutes full acknowledgment and acceptance of the revised charter.
                  </p>
                </div>
              </article>

              {/* Art 13 */}
              <article id="art-13" className="bg-[#FAF7F0] p-6 lg:p-8 border-2 border-border-hairline shadow-md">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-garnet-deep" />
                    <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                      SECTION 13 &bull; MANDATORY DISCLOSURE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-charcoal-ink/50">A &bull; 13</span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-charcoal-ink mb-3 font-normal">
                  13. Client Concierge &amp; Salon Notice
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-4 leading-relaxed">
                  <div className="bg-[#F4EFDF] p-4 border-l-2 border-garnet-deep">
                    <p className="font-medium text-charcoal-ink mb-1">
                      Exclusive Digital Atelier Operating Notice:
                    </p>
                    <p className="text-xs text-charcoal-ink/80">
                      OLIVER operates exclusively as an online-only private digital salon. In preservation of client security, gemstone provenance, and vault discretion, <strong>no public walk-in showroom or physical boutique facilities exist</strong>.
                    </p>
                  </div>
                  <p>
                    All appointments, consultations, bespoke commissions, and acquisitions are conducted exclusively via our verified digital platform, direct concierge telephone lines, and scheduled private virtual sessions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                      <span className="font-label-micro text-[9px] uppercase tracking-widest text-garnet-deep block font-bold mb-1">
                        JAIPUR ATELIER CONCIERGE
                      </span>
                      <p className="font-medium text-charcoal-ink text-xs">
                        +91 9024665590<br />+91 85028 17574
                      </p>
                    </div>
                    <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                      <span className="font-label-micro text-[9px] uppercase tracking-widest text-garnet-deep block font-bold mb-1">
                        EXECUTIVE CORRESPONDENCE
                      </span>
                      <p className="font-medium text-charcoal-ink text-xs">
                        Oliverstones.co@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

