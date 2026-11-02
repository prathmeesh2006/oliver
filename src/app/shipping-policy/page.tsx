import Link from "next/link";
import { ShieldCheck, Truck, Clock, PackageCheck } from "lucide-react";

export const metadata = {
  title: "Insured Shipping Policy — OLIVER Jewellery",
  description: "Official consignment & armored logistics protocols for OLIVER Jewellery orders.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 font-label-micro text-xs uppercase tracking-[0.22em] text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span>CLIENT CARE</span>
          <span>/</span>
          <span className="text-primary font-bold">SHIPPING POLICY</span>
        </nav>

        {/* Header */}
        <div className="bg-linen-surface p-8 md:p-12 border border-border-hairline shadow-xs mb-10">
          <span className="font-label-micro text-xs text-garnet-deep uppercase tracking-[0.25em] font-semibold block mb-2">
            CONSIGNMENT &amp; LOGISTICS PROTOCOLS
          </span>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink font-normal uppercase tracking-tight mb-4">
            Shipping Policy
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            This Shipping Policy explains how Oliver Stones processes, packages, and delivers orders placed through our website or official channels. By placing an order with us, you agree to the terms outlined below.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 bg-linen-surface p-8 md:p-12 border border-border-hairline shadow-xs font-body-md text-xs sm:text-sm text-charcoal-ink leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              1. Order Processing Time
            </h2>
            <p className="text-on-surface-variant">
              All orders are processed within 1–3 business days after payment confirmation. Orders placed on weekends or public holidays will begin processing on the next business day. During festive or launch seasons, processing may extend up to 5 business days with direct SMS updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              2. Shipping Timelines &amp; Coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container p-4 border border-border-hairline">
                <span className="font-label-micro text-garnet-deep uppercase tracking-widest font-semibold block mb-1">
                  DOMESTIC EXPRESS
                </span>
                <p className="font-headline-sm text-sm font-semibold text-charcoal-ink">
                  Jaipur &amp; Rajasthan: 2–4 Business Days
                </p>
              </div>
              <div className="bg-surface-container p-4 border border-border-hairline">
                <span className="font-label-micro text-garnet-deep uppercase tracking-widest font-semibold block mb-1">
                  PAN-INDIA ARMORED
                </span>
                <p className="font-headline-sm text-sm font-semibold text-charcoal-ink">
                  Rest of India: 4–7 Business Days
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              3. Shipping Charges &amp; Privilege Benefits
            </h2>
            <p className="text-on-surface-variant">
              Standard insured shipping is <strong>COMPLIMENTARY</strong> on all domestic orders across India. Priority express armored air dispatch is available at checkout for ₹500, or complimentary for all registered OLIVER Privilege patrons.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              4. Packaging &amp; Tamper-Evident Delivery
            </h2>
            <p className="text-on-surface-variant">
              Every parcel leaving our Jaipur workshop is encased in a discreet, unmarked outer carton containing a hermetically sealed, tamper-evident lock box with a security holograph. If the outer seal appears punctured or broken upon delivery, please refuse the delivery immediately and contact our concierge.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

