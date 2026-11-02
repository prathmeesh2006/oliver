"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  ZoomIn,
  X,
  Diamond,
} from "lucide-react";
import { getProductBySlug, PRODUCTS } from "@/lib/products";
import { useStore } from "@/context/StoreContext";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const product = getProductBySlug(slug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes[0] || "14"
  );
  const [quantity, setQuantity] = useState(1);
  const [showSizingModal, setShowSizingModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("pedigree");

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleInstantBuy = () => {
    addToCart(product, selectedSize, quantity);
    router.push("/checkout");
  };

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-4 md:right-6 z-50 max-w-md w-full bg-linen-surface shadow-2xl p-4 border border-border-hairline transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-14 bg-surface-container shrink-0 overflow-hidden relative">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-label-micro text-garnet-deep uppercase tracking-[0.22em] font-semibold">
                  VAULT BAG UPDATED
                </p>
                <button
                  onClick={() => setShowToast(false)}
                  className="text-on-surface-variant hover:text-charcoal-ink"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="font-headline-sm text-[16px] text-charcoal-ink mt-0.5 truncate uppercase">
                {product.title}
              </p>
              <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                Size {selectedSize} &bull; Qty {quantity}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <Link
                  href="/bag"
                  className="px-4 py-1.5 bg-garnet-deep text-vellum-cream font-label-uppercase text-[10px] tracking-[0.18em] uppercase hover:bg-garnet-wine transition-colors"
                >
                  View Bag
                </Link>
                <button
                  onClick={() => setShowToast(false)}
                  className="font-label-uppercase text-[10px] text-on-surface-variant hover:text-primary transition-colors tracking-wider"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sizing Guide Modal */}
      {showSizingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-ink/60 backdrop-blur-xs p-4">
          <div className="bg-linen-surface max-w-xl w-full p-6 md:p-8 relative shadow-2xl border border-border-hairline">
            <div className="flex items-center justify-between pb-2">
              <p className="font-label-micro uppercase tracking-[0.22em] text-garnet-deep font-semibold">
                ATELIER COMPENDIUM
              </p>
              <button
                onClick={() => setShowSizingModal(false)}
                className="text-on-surface-variant hover:text-charcoal-ink p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-headline-md text-2xl text-charcoal-ink uppercase tracking-tight mt-1">
              Indian Standard Sizing Scale
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Measured across internal circumference with gemological vernier calipers at 24°C standard room temperature.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left font-body-sm text-xs border border-border-hairline">
                <thead>
                  <tr className="bg-surface-container font-label-uppercase text-[10px] text-on-surface border-b border-border-hairline">
                    <th className="py-2 px-3">IN Size</th>
                    <th className="py-2 px-3">Diameter (mm)</th>
                    <th className="py-2 px-3">Circumference (mm)</th>
                    <th className="py-2 px-3">US Equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-hairline text-on-surface">
                  <tr>
                    <td className="py-2 px-3 font-medium">10</td>
                    <td className="py-2 px-3">15.9 mm</td>
                    <td className="py-2 px-3">50.0 mm</td>
                    <td className="py-2 px-3">US 5¼</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">12</td>
                    <td className="py-2 px-3">16.5 mm</td>
                    <td className="py-2 px-3">51.9 mm</td>
                    <td className="py-2 px-3">US 6</td>
                  </tr>
                  <tr className="bg-surface-container font-medium text-garnet-deep">
                    <td className="py-2 px-3">14 (Standard)</td>
                    <td className="py-2 px-3">17.2 mm</td>
                    <td className="py-2 px-3">54.0 mm</td>
                    <td className="py-2 px-3">US 6¾</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">16</td>
                    <td className="py-2 px-3">17.8 mm</td>
                    <td className="py-2 px-3">56.0 mm</td>
                    <td className="py-2 px-3">US 7½</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">18</td>
                    <td className="py-2 px-3">18.5 mm</td>
                    <td className="py-2 px-3">58.1 mm</td>
                    <td className="py-2 px-3">US 8¼</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-surface-container flex items-start gap-2">
              <Diamond className="w-4 h-4 text-garnet-deep shrink-0 mt-0.5" />
              <p className="font-body-sm text-[11px] text-on-surface-variant">
                Unsure of your gauge? Oliver provides complimentary bespoke resin ring sizing mandrels sent via express air prior to casting.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowSizingModal(false)}
                className="px-5 py-2.5 bg-garnet-deep text-vellum-cream font-label-uppercase text-xs uppercase tracking-[0.18em] hover:bg-garnet-wine transition-colors"
              >
                I Understand My Metric
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main PDP Content */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-8 pb-20 w-full">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-on-surface-variant">
          <Link href="/" className="font-label-uppercase text-[11px] hover:text-primary transition-colors uppercase">
            Home
          </Link>
          <span className="font-label-micro text-bronze-accent">/</span>
          <Link href={`/category/${product.category}`} className="font-label-uppercase text-[11px] hover:text-primary transition-colors uppercase">
            {product.category}
          </Link>
          <span className="font-label-micro text-bronze-accent">/</span>
          <span className="font-label-uppercase text-[11px] text-primary font-semibold uppercase tracking-[0.18em]">
            {product.title}
          </span>
        </nav>

        {/* Two-Column Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Gallery: 7 Columns */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 shrink-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 bg-surface-container overflow-hidden shrink-0 relative transition-all border ${
                    activeImageIndex === idx
                      ? "border-garnet-deep"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Stage */}
            <div className="flex-1 flex flex-col relative bg-linen-surface shadow-xs overflow-hidden border border-border-hairline group">
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5 items-center">
                <span className="font-label-micro text-[9px] bg-garnet-deep text-vellum-cream px-2.5 py-1 tracking-[0.22em] uppercase font-semibold">
                  BIS 750 HALLMARKED
                </span>
                <span className="font-label-micro text-[9px] bg-vellum-cream/95 text-charcoal-ink px-2.5 py-1 tracking-[0.22em] uppercase shadow-xs">
                  {product.gemstone}
                </span>
              </div>

              <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
                <Image
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-charcoal-ink/80 backdrop-blur-sm text-vellum-cream px-3 py-1.5 flex items-center space-x-2 pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5 text-bronze-accent" />
                  <span className="font-label-micro text-[9px] tracking-[0.2em] uppercase">
                    INSPECT 4X FACET CLARITY
                  </span>
                </div>
              </div>

              <div className="p-3 bg-surface-container flex items-center justify-between border-t border-border-hairline">
                <div className="flex items-center space-x-2 text-on-surface-variant">
                  <ShieldCheck className="w-4 h-4 text-bronze-accent" />
                  <span className="font-body-sm text-xs text-on-surface font-medium">
                    Laboratory Certificate #{product.specs.sku} Included
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details: 5 Columns */}
          <div className="lg:col-span-5 flex flex-col bg-linen-surface p-6 md:p-8 shadow-xs border border-border-hairline">
            {/* Atelier Lot Subtitle & Wishlist */}
            <div className="flex items-center justify-between pb-1">
              <p className="font-label-micro text-[9px] text-garnet-deep tracking-[0.22em] uppercase font-semibold">
                ATELIER EDITIONS &bull; LOT #JA-2024-EM09
              </p>
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="p-1 text-on-surface-variant hover:text-garnet-deep transition-colors flex items-center space-x-1"
              >
                <Heart
                  className={`w-4 h-4 ${inWishlist ? "fill-garnet-deep text-garnet-deep" : ""}`}
                />
                <span className="font-label-micro text-[9px] tracking-[0.18em] uppercase">
                  {inWishlist ? "Saved" : "Save"}
                </span>
              </button>
            </div>

            <h1 className="font-headline-lg text-2xl md:text-3xl text-charcoal-ink tracking-tight font-normal uppercase leading-tight mt-1">
              {product.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-2 text-on-surface-variant text-xs">
              <span className="font-label-micro uppercase tracking-[0.18em]">
                SKU: {product.sku}
              </span>
              <span className="w-1 h-1 rounded-full bg-bronze-accent" />
              <span className="text-emerald-800 font-medium">
                In Stock &bull; Ready for Armored Dispatch in 48 Hours
              </span>
            </div>

            {/* Price Showcase */}
            <div className="mt-6 p-4 bg-surface-container space-y-2 border border-border-hairline">
              <div className="flex items-baseline space-x-3">
                <span className="font-price-headline text-2xl text-charcoal-ink font-semibold">
                  ₹{product.retailPrice.toLocaleString("en-IN")}
                </span>
                <span className="font-body-md text-xs text-outline line-through">
                  ₹{Math.round(product.retailPrice * 1.1).toLocaleString("en-IN")}
                </span>
                <span className="font-label-micro text-[9px] text-garnet-deep uppercase tracking-widest bg-error-container px-2 py-0.5">
                  10% CONCESSION
                </span>
              </div>

              {/* Privilege Card */}
              <div className="p-3 bg-vellum-cream mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-border-hairline">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-garnet-deep" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-price-headline text-sm text-garnet-deep font-semibold">
                        ₹{product.privilegePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="font-label-micro text-[9px] text-garnet-deep font-bold tracking-[0.18em] uppercase">
                        PRIVILEGE PRICE
                      </span>
                    </div>
                    <p className="font-body-sm text-[10px] text-on-surface-variant">
                      5% additional deduction for registered patrons
                    </p>
                  </div>
                </div>
                <Link
                  href="/account/register"
                  className="font-label-uppercase text-[10px] text-garnet-deep hover:text-garnet-wine underline underline-offset-4 tracking-[0.18em] whitespace-nowrap"
                >
                  Join for ₹149/mo
                </Link>
              </div>
            </div>

            {/* Ring Size Selector */}
            {product.availableSizes.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-label-uppercase text-xs tracking-[0.18em] uppercase font-semibold text-charcoal-ink">
                    SELECT SIZE (INDIAN SCALE)
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowSizingModal(true)}
                    className="font-label-micro text-[10px] text-garnet-deep uppercase tracking-wider underline hover:text-garnet-wine"
                  >
                    View Sizing Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2 font-label-uppercase text-xs tracking-wider border transition-colors ${
                        selectedSize === sz
                          ? "bg-garnet-deep text-white border-garnet-deep"
                          : "bg-surface-container text-charcoal-ink border-border-hairline hover:border-garnet-deep"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center gap-4">
              <span className="font-label-uppercase text-xs tracking-[0.18em] uppercase font-semibold text-charcoal-ink">
                QTY:
              </span>
              <div className="flex items-center border border-border-hairline bg-surface-container">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 hover:bg-black/5 text-charcoal-ink"
                >
                  -
                </button>
                <span className="px-4 py-1.5 font-sans font-medium text-xs">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 hover:bg-black/5 text-charcoal-ink"
                >
                  +
                </button>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors shadow-sm"
              >
                ADD TO BAG — ₹{(product.retailPrice * quantity).toLocaleString("en-IN")}
              </button>

              <button
                type="button"
                onClick={handleInstantBuy}
                className="w-full py-3.5 bg-transparent hover:bg-charcoal-ink hover:text-white text-charcoal-ink border border-charcoal-ink font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors"
              >
                BUY WITH RAZORPAY
              </button>
            </div>

            {/* Guarantees Strip */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-border-hairline font-body-sm text-xs text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-garnet-deep shrink-0" />
                <span>Complimentary Insured Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-garnet-deep shrink-0" />
                <span>6-Month Replacement Guarantee</span>
              </div>
            </div>

            {/* Gemological Specs Dossier */}
            <div className="mt-8 pt-6 border-t border-border-hairline">
              <h3 className="font-label-uppercase text-xs tracking-[0.2em] uppercase text-charcoal-ink font-semibold mb-4">
                GEMOLOGICAL SPECIFICATIONS
              </h3>
              <div className="grid grid-cols-2 gap-y-2 text-xs font-body-sm">
                <span className="text-on-surface-variant">Precious Metal</span>
                <span className="font-medium text-charcoal-ink">{product.specs.metal}</span>

                <span className="text-on-surface-variant">Gemstone</span>
                <span className="font-medium text-charcoal-ink">{product.specs.gemstone}</span>

                <span className="text-on-surface-variant">Origin</span>
                <span className="font-medium text-charcoal-ink">{product.specs.origin}</span>

                <span className="text-on-surface-variant">Cut Style</span>
                <span className="font-medium text-charcoal-ink">{product.specs.cut}</span>

                <span className="text-on-surface-variant">Certification</span>
                <span className="font-medium text-charcoal-ink">{product.specs.certification}</span>
              </div>
            </div>

            {/* Expandable Accordions */}
            <div className="mt-6 border-t border-border-hairline divide-y divide-border-hairline">
              <div className="py-3">
                <button
                  type="button"
                  onClick={() =>
                    setOpenAccordion(openAccordion === "pedigree" ? null : "pedigree")
                  }
                  className="w-full flex items-center justify-between text-left font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink"
                >
                  <span>Gemstone Pedigree &amp; Sourcing</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openAccordion === "pedigree" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === "pedigree" && (
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Mined ethically and hand-selected by our gemologists in Jaipur. Every gemstone carries its original crystal character without fracture-filling, high-heat enhancement, or synthetic irradiation.
                  </p>
                )}
              </div>

              <div className="py-3">
                <button
                  type="button"
                  onClick={() =>
                    setOpenAccordion(openAccordion === "care" ? null : "care")
                  }
                  className="w-full flex items-center justify-between text-left font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink"
                >
                  <span>Archival Care &amp; Maintenance</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openAccordion === "care" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === "care" && (
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Clean gently with warm water, mild soap, and the included sable bristle brush. Store individually in your bespoke OLIVER suede case to avoid quartz abrasion.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

