"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Truck,
  Eye,
  FileText,
  Key,
  Users,
  Cookie,
  UserCheck,
  ExternalLink,
  Baby,
  RefreshCw,
  Phone,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-vellum-cream text-charcoal-ink">
      {/* Header Banner */}
      <section className="w-full bg-vellum-cream pt-10 pb-8 border-b border-[rgba(113,0,1,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-label-uppercase tracking-[0.2em] text-charcoal-ink/60 uppercase mb-4">
            <Link href="/" className="hover:text-garnet-deep transition-colors">
              HOME
            </Link>
            <span className="text-bronze-accent text-[8px]">&bull;</span>
            <span>CLIENT CARE</span>
            <span className="text-bronze-accent text-[8px]">&bull;</span>
            <span className="text-garnet-deep font-semibold">PRIVACY POLICY</span>
          </nav>

          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-garnet-deep" />
            <span className="font-label-micro text-[10px] text-garnet-deep tracking-[0.22em] font-bold uppercase">
              CLIENT DATA &amp; PRIVACY STEWARDSHIP
            </span>
          </div>

          <h1 className="font-display-hero text-3xl md:text-5xl text-garnet-deep font-normal tracking-tight mb-3">
            Privacy Policy
          </h1>

          <p className="font-body-md text-charcoal-ink/75 max-w-3xl leading-relaxed text-sm md:text-base font-light mb-6">
            Your privacy matters to us. Learn how OLIVER handles your personal information with absolute editorial discretion and sovereign care.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(113,0,1,0.08)] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bronze-accent"></span>
              <span className="font-label-uppercase text-[10px] text-charcoal-ink/70 tracking-widest uppercase">
                LAST UPDATED: <span className="text-garnet-deep font-semibold">OCTOBER 2026 &bull; CURRENT EDITION</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-charcoal-ink/60 uppercase tracking-widest">
              ARCHIVAL REF: OLI-LEGAL-2026-v04
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Summary Badges & Concierge */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="bg-[#FAF7F0] p-6 border border-border-hairline shadow-sm">
                <span className="font-label-micro text-[9px] text-garnet-deep uppercase tracking-widest block mb-2 font-bold">
                  CORE TENETS
                </span>
                <h3 className="font-display-hero text-xl text-charcoal-ink mb-4">
                  Discretion &amp; Protection
                </h3>
                <div className="space-y-4 text-xs font-body-sm text-charcoal-ink/80">
                  <div className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-garnet-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-ink mb-0.5">End-to-End Encryption</strong>
                      <span>All transactions and patron credentials use 256-bit SSL/TLS encryption.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-4 h-4 text-garnet-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-ink mb-0.5">PCI-DSS Level 1 Compliance</strong>
                      <span>Zero raw credit card numbers stored on OLIVER servers.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-4 h-4 text-garnet-deep shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-ink mb-0.5">Confidential Dispatch</strong>
                      <span>Discreet, tamper-evident unmarked packaging with insured logistics.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Concierge Box */}
              <div className="bg-[#FAF7F0] p-6 border border-border-hairline shadow-sm">
                <span className="font-label-micro text-[9px] text-garnet-deep uppercase tracking-widest block mb-1 font-bold">
                  DATA STEWARDSHIP DESK
                </span>
                <h3 className="font-display-hero text-xl text-charcoal-ink mb-2">
                  Client Privacy Liaison
                </h3>
                <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed mb-4">
                  For data erasure requests, consent revocations, or formal privacy inquiries, contact our dedicated officer directly.
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
                    <span>Jaipur Direct: +91 9024665590</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal-ink/80">
                    <Phone className="w-3.5 h-3.5 text-garnet-deep" />
                    <span>Atelier Line: +91 85028 17574</span>
                  </div>
                </div>

                <div className="bg-[#F4EFDF] p-3 border border-border-hairline">
                  <p className="font-label-micro text-[10px] text-garnet-deep font-semibold uppercase tracking-wider mb-1">
                    DIGITAL ATELIER DISCLOSURE
                  </p>
                  <p className="font-body-sm text-[11px] text-charcoal-ink/70 leading-normal">
                    OLIVER operates exclusively as an online-only private digital salon. We maintain no public walk-in showroom.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Complete Privacy Policy Sections */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Introduction */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 01 &bull; INTRODUCTION
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Introduction
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    <strong>Oliver Stones</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and protect your information when you visit or make an acquisition from our digital salon (the &ldquo;Website&rdquo;) or communicate with our Jaipur atelier.
                  </p>
                  <p>
                    By engaging with our platform, you acknowledge the terms set forth herein. If you disagree with our practices, we invite you to discontinue navigating our salon.
                  </p>
                </div>
              </div>

              {/* 2. Information We Collect */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 02 &bull; DATA INGESTION
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Information We Collect
                </h2>
                <p className="font-body-sm text-sm text-charcoal-ink/80 mb-6 leading-relaxed">
                  We collect information necessary to deliver white-glove curation, process your acquisitions, and elevate your client experience. Our information collection includes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <h3 className="font-display-hero text-lg text-garnet-deep mb-1">
                      Personal Details
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      Name, residential delivery address, state, PIN code, telephone number, email address, and optional birth date for Privilege Circle anniversary recognition.
                    </p>
                  </div>

                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <h3 className="font-display-hero text-lg text-garnet-deep mb-1">
                      Order &amp; Payment Data
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      Jewel acquisitions, custom ring sizes, billing addresses, invoice transaction identifiers, and Razorpay gateway tokenized authorizations.
                    </p>
                  </div>

                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <h3 className="font-display-hero text-lg text-garnet-deep mb-1">
                      Communication Data
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      Transcripts of direct correspondence with our Jaipur concierge, inquiries, return consultations, and custom gemstone commission requests.
                    </p>
                  </div>

                  <div className="bg-[#F4EFDF] p-4 border border-border-hairline">
                    <h3 className="font-display-hero text-lg text-garnet-deep mb-1">
                      Technical Telemetry
                    </h3>
                    <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                      IP address, browser specification, device operating system, referring pages, and session analytics gathered to optimize navigation speed and layout fidelity.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. How We Use Your Information */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 03 &bull; PURPOSE
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  How We Use Your Information
                </h2>
                <div className="space-y-3 font-body-sm text-sm text-charcoal-ink/80">
                  <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                    <h4 className="font-label-uppercase text-xs text-garnet-deep font-semibold tracking-wider mb-1">
                      Order Fulfillment &amp; Delivery
                    </h4>
                    <p className="text-xs text-charcoal-ink/75">
                      To craft, inspect, package, and dispatch your pieces with armored insured logistics carriers directly to your doorstep.
                    </p>
                  </div>

                  <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                    <h4 className="font-label-uppercase text-xs text-garnet-deep font-semibold tracking-wider mb-1">
                      Client Communication &amp; Support
                    </h4>
                    <p className="text-xs text-charcoal-ink/75">
                      To transmit real-time courier tracking numbers, gemological certificate verifications, and answer inquiries promptly.
                    </p>
                  </div>

                  <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                    <h4 className="font-label-uppercase text-xs text-garnet-deep font-semibold tracking-wider mb-1">
                      Marketing &amp; Gazette Communications
                    </h4>
                    <p className="text-xs text-charcoal-ink/75">
                      To deliver private invitations to archival vault unveilings and rare batch acquisitions, solely with your explicit opt-in consent.
                    </p>
                  </div>

                  <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                    <h4 className="font-label-uppercase text-xs text-garnet-deep font-semibold tracking-wider mb-1">
                      Legal &amp; Regulatory Compliance
                    </h4>
                    <p className="text-xs text-charcoal-ink/75">
                      To adhere to statutory tax obligations, Bureau of Indian Standards (BIS) hallmarking registry records, and anti-money laundering regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Payment Information & Gateways */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 04 &bull; FINANCIAL SANCTITY
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Payment Information &amp; Payment Gateways
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    Order and payment transactions are processed securely through certified third-party payment gateways. <strong>We do not store full card details.</strong>
                  </p>
                  <p>
                    All sensitive payment credentials are encrypted and processed directly by our Level 1 PCI-DSS compliant partner &mdash; <strong>Razorpay</strong>. Your billing data is transmitted directly through encrypted SSL channels, fully protected under Reserve Bank of India tokenization mandates.
                  </p>
                </div>
              </div>

              {/* 5. Sharing of Information */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 05 &bull; DISCLOSURE PROTOCOL
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Sharing of Information
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
                  </p>
                  <p>
                    We share necessary details strictly with authorized partners essential to executing your order:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-[#F4EFDF] p-3 border border-border-hairline">
                      <h4 className="font-label-uppercase text-xs text-charcoal-ink font-semibold mb-1">
                        Courier Partners
                      </h4>
                      <p className="text-[11px] text-charcoal-ink/75">
                        Sequel Logistics &amp; insured couriers receive consignee name, destination address, and phone number for secure delivery.
                      </p>
                    </div>

                    <div className="bg-[#F4EFDF] p-3 border border-border-hairline">
                      <h4 className="font-label-uppercase text-xs text-charcoal-ink font-semibold mb-1">
                        Payment Gateways
                      </h4>
                      <p className="text-[11px] text-charcoal-ink/75">
                        Razorpay processes tokenized payment authorizations, fraud prevention screenings, and instant refunds.
                      </p>
                    </div>

                    <div className="bg-[#F4EFDF] p-3 border border-border-hairline">
                      <h4 className="font-label-uppercase text-xs text-charcoal-ink font-semibold mb-1">
                        Hosting Providers
                      </h4>
                      <p className="text-[11px] text-charcoal-ink/75">
                        Secure cloud database providers (Supabase) host encrypted patron accounts under strict ISO/SOC-2 certifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Cookies */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 06 &bull; TELEMETRY
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Cookies
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    Our digital salon uses lightweight cookies to preserve your shopping bag items, remember privilege credentials, and observe aggregate traffic patterns.
                  </p>
                  <p>
                    You may choose to disable cookies through your browser settings; however, certain interactive functionalities (such as retaining items in your shopping bag across browser restarts) may be impaired.
                  </p>
                </div>
              </div>

              {/* 7. Data Security */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 07 &bull; INFRASTRUCTURE
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Data Security
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    We implement rigorous technical and organizational measures to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="bg-[#F4EFDF] p-4 border border-garnet-deep/20 text-xs text-charcoal-ink/80">
                    <p className="font-label-uppercase text-[10px] text-garnet-deep font-semibold tracking-wider mb-1">
                      SECURITY AWARENESS
                    </p>
                    <p>
                      While we exercise utmost institutional vigilance, no transmission over the internet is completely infallible. Patrons are urged to protect their passwords and avoid sharing confidential order confirmation links.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Your Rights */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between pb-2 mb-4 bg-[#F4EFDF] px-4 py-2 border border-border-hairline">
                  <span className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-widest font-bold">
                    CLAUSE 08 &bull; PATRON RIGHTS
                  </span>
                </div>
                <h2 className="font-display-hero text-2xl lg:text-3xl text-garnet-deep mb-3 font-normal">
                  Your Rights
                </h2>
                <div className="font-body-sm text-sm text-charcoal-ink/80 space-y-3 leading-relaxed">
                  <p>
                    You possess the unqualified right to inspect, correct, update, or petition the deletion of your personal records from our custody. You may also withdraw marketing consent at any moment by utilizing the unsubscribe mechanism in our dispatches or notifying our concierge desk.
                  </p>
                </div>
              </div>

              {/* 9-11. General Provisions */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border border-border-hairline shadow-sm space-y-6">
                <div>
                  <h2 className="font-display-hero text-xl text-garnet-deep mb-2 font-normal">
                    Third-Party Links
                  </h2>
                  <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                    Our platform may contain references or links to external partner platforms (e.g., courier tracking portals, gemological registries). We do not assume responsibility for the independent privacy practices of such external entities.
                  </p>
                </div>

                <div className="border-t border-border-hairline pt-4">
                  <h2 className="font-display-hero text-xl text-garnet-deep mb-2 font-normal">
                    Children&apos;s Privacy
                  </h2>
                  <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                    Our salon is curated exclusively for adult patrons aged 18 years and above. We do not knowingly collect personal data from minors.
                  </p>
                </div>

                <div className="border-t border-border-hairline pt-4">
                  <h2 className="font-display-hero text-xl text-garnet-deep mb-2 font-normal">
                    Changes to This Policy
                  </h2>
                  <p className="font-body-sm text-xs text-charcoal-ink/75 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect revisions in statutory frameworks or atelier operations. Any amendments will be reflected on this page with an updated timestamp.
                  </p>
                </div>
              </div>

              {/* 12. Contact Concierge */}
              <div className="bg-[#FAF7F0] p-6 lg:p-8 border-2 border-border-hairline shadow-md">
                <h2 className="font-display-hero text-2xl text-garnet-deep mb-3 font-normal">
                  Contact Us
                </h2>
                <p className="font-body-sm text-xs text-charcoal-ink/80 leading-relaxed mb-4">
                  For questions regarding this charter, data rights, or custom privacy arrangements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body-sm">
                  <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                    <span className="font-label-micro text-[9px] uppercase tracking-widest text-garnet-deep block font-bold mb-1">
                      JAIPUR DIRECT LIAISON
                    </span>
                    <p className="font-medium text-charcoal-ink">
                      +91 9024665590<br />+91 85028 17574
                    </p>
                  </div>
                  <div className="p-3 bg-[#F4EFDF] border border-border-hairline">
                    <span className="font-label-micro text-[9px] uppercase tracking-widest text-garnet-deep block font-bold mb-1">
                      ELECTRONIC INQUIRIES
                    </span>
                    <p className="font-medium text-charcoal-ink">
                      Oliverstones.co@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

