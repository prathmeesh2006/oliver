import Link from "next/link";
import { ShieldCheck, RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Returns & Refunds Policy — OLIVER Jewellery",
  description: "Official return, exchange, and refund terms for OLIVER Jewellery creations.",
};

export default function ReturnsPolicyPage() {
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
          <span className="text-primary font-bold">RETURNS &amp; REFUNDS</span>
        </nav>

        {/* Header */}
        <div className="bg-linen-surface p-8 md:p-12 border border-border-hairline shadow-xs mb-10">
          <span className="font-label-micro text-xs text-garnet-deep uppercase tracking-[0.25em] font-semibold block mb-2">
            CLIENT CARE &amp; ASSURANCE PROTOCOLS
          </span>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink font-normal uppercase tracking-tight mb-4">
            Returns &amp; Refunds Policy
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            At Oliver Stones, every piece is crafted with care, and we want you to love what you wear. This Refund &amp; Return Policy outlines the terms under which returns, exchanges, and refunds are accepted.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-linen-surface p-8 md:p-12 border border-border-hairline shadow-xs font-body-md text-xs sm:text-sm text-charcoal-ink leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              1. 7-Day Return Window
            </h2>
            <p className="text-on-surface-variant">
              Returns must be requested within <strong>7 days of physical delivery</strong> as confirmed by our armored courier. The piece must be unworn, in pristine condition, with all gemological certificates, guarantee cards, and security packaging intact.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              2. 6-Month Replacement Guarantee
            </h2>
            <p className="text-on-surface-variant">
              Every OLIVER piece is backed by our signature 6-Month Ironclad Replacement Pledge against setting looseness or metallurgical defects. Contact our concierge with your order number for immediate complimentary repair or replacement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              3. Custom &amp; Bespoke Orders
            </h2>
            <p className="text-on-surface-variant">
              Custom engraved pieces, specific bespoke ring resizings, and commissioned raw stones are final sale and cannot be returned unless verified defective upon delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline-sm text-lg uppercase text-charcoal-ink border-b border-border-hairline pb-2">
              4. How to Initiate a Return
            </h2>
            <p className="text-on-surface-variant">
              Email our client care team at <strong className="text-charcoal-ink">clientcare@oliverstones.com</strong> or message our WhatsApp Concierge at <strong>+91 98201 44521</strong> with your Order ID and photographic confirmation. We will dispatch an insured return pickup via BlueDart.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

