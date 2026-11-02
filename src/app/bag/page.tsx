"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  Heart,
  ShieldCheck,
  Truck,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Tag,
  Check,
  ShoppingBag,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function BagPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
    isPrivilegeMember,
    setIsPrivilegeMember,
    couponCode,
    applyCoupon,
    removeCoupon,
    subtotal,
    privilegeDiscount,
    couponDiscount,
    taxAmount,
    grandTotal,
  } = useStore();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponError, setCouponError] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyCoupon(inputCoupon);
    if (!success) {
      setCouponError(true);
    } else {
      setCouponError(false);
      setInputCoupon("");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="w-full bg-surface min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full bg-linen-surface p-10 border border-border-hairline text-center shadow-xs">
          <div className="w-16 h-16 mx-auto mb-6 bg-surface-container flex items-center justify-center text-garnet-deep">
            <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h1 className="font-headline-sm text-2xl text-charcoal-ink uppercase mb-2">
            Your Bag is Empty
          </h1>
          <p className="font-body-sm text-sm text-on-surface-variant mb-8 leading-relaxed">
            Your archival holding contains no pieces. Explore our natural gemstone repertory to add timeless heirlooms.
          </p>
          <Link
            href="/shop"
            className="w-full inline-block py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors"
          >
            DISCOVER PIECES
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb & Header */}
        <section className="pb-8">
          <nav aria-label="Breadcrumb" className="pb-3 flex items-center gap-2">
            <Link
              href="/"
              className="font-label-micro text-on-surface-variant hover:text-garnet-deep uppercase tracking-widest transition-colors"
            >
              MAISON HOME
            </Link>
            <span className="text-on-surface-variant/40 font-label-micro">/</span>
            <span className="font-label-micro text-garnet-deep uppercase tracking-widest font-semibold">
              SHOPPING BAG
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
            <div>
              <div className="flex items-baseline gap-3">
                <h1 className="font-headline-lg text-3xl md:text-4xl uppercase text-charcoal-ink tracking-tight">
                  YOUR SHOPPING BAG
                </h1>
                <span className="font-label-uppercase text-xs text-on-surface-variant font-semibold tracking-widest">
                  ({cart.length} {cart.length === 1 ? "PIECE" : "PIECES"})
                </span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant pt-1">
                Your chosen pieces, thoughtfully brought together for insured dispatch.
              </p>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="font-label-uppercase text-[11px] text-on-surface-variant hover:text-garnet-deep uppercase tracking-widest transition-colors flex items-center gap-1.5 self-start md:self-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              CLEAR ENTIRE BAG
            </button>
          </div>
        </section>

        {/* Two-Column Editorial Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Cart Items (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Urgency Alert */}
            <div className="bg-surface-container p-4 flex items-center justify-between gap-4 border border-border-hairline">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-garnet-deep shrink-0" />
                <p className="font-body-sm text-xs text-charcoal-ink">
                  <span className="font-semibold text-garnet-deep">
                    High Demand Atelier:
                  </span>{" "}
                  Your pieces are reserved for the next 15 minutes.
                </p>
              </div>
              <span className="font-label-micro text-[10px] uppercase tracking-widest text-on-surface-variant shrink-0">
                RESERVED
              </span>
            </div>

            {/* Cart Items List */}
            {cart.map((item) => (
              <article
                key={item.id}
                className="bg-linen-surface p-6 sm:p-8 transition-all border border-border-hairline shadow-xs"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="relative w-full sm:w-44 h-56 sm:h-56 shrink-0 bg-surface-container overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-garnet-deep text-vellum-cream font-label-micro text-[9px] px-2 py-0.5 uppercase tracking-widest">
                      {item.product.isSolitaire ? "SOLITAIRE" : "ATELIER"}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-label-micro text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                            {item.product.category.toUpperCase()}
                          </span>
                          <Link href={`/products/${item.product.slug}`}>
                            <h2 className="font-headline-sm text-lg text-charcoal-ink uppercase tracking-normal pt-1 hover:text-garnet-deep transition-colors">
                              {item.product.title}
                            </h2>
                          </Link>
                        </div>
                        <div className="text-right">
                          <span className="font-price-headline text-lg text-garnet-deep font-semibold">
                            ₹{(item.product.retailPrice * item.quantity).toLocaleString("en-IN")}
                          </span>
                          <span className="block font-label-micro text-[9px] text-bronze-accent uppercase tracking-wider pt-0.5">
                            PRIVILEGE ELIGIBLE
                          </span>
                        </div>
                      </div>

                      {/* Specs Box */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 py-3 my-3 bg-surface-container px-3 text-xs font-body-sm">
                        <p className="text-on-surface-variant">
                          <span className="font-medium text-charcoal-ink">SKU:</span>{" "}
                          {item.product.sku}
                        </p>
                        <p className="text-on-surface-variant">
                          <span className="font-medium text-charcoal-ink">Size:</span>{" "}
                          {item.selectedSize}
                        </p>
                        <p className="text-on-surface-variant col-span-2">
                          <span className="font-medium text-charcoal-ink">Gemstone:</span>{" "}
                          {item.product.gemstone}
                        </p>
                      </div>
                    </div>

                    {/* Stepper & Action Controls */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-border-hairline">
                      <div className="flex items-center">
                        <span className="font-label-micro text-[10px] uppercase tracking-wider text-on-surface-variant mr-3">
                          QTY:
                        </span>
                        <div className="inline-flex items-center bg-surface-container border border-border-hairline">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal-ink hover:text-garnet-deep"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-body-sm text-xs font-semibold text-charcoal-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal-ink hover:text-garnet-deep"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs">
                        <button
                          type="button"
                          onClick={() => toggleWishlist(item.product)}
                          className="font-label-micro text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-garnet-deep flex items-center gap-1"
                        >
                          <Heart className="w-3.5 h-3.5" />
                          SAVE TO WISHLIST
                        </button>
                        <span className="text-on-surface-variant/30">|</span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-label-micro text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-error flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Shipping Progress Info */}
            <div className="p-4 bg-linen-surface border border-border-hairline flex items-center gap-3">
              <Truck className="w-5 h-5 text-garnet-deep shrink-0" />
              <div>
                <p className="font-label-micro text-[10px] uppercase tracking-wider text-charcoal-ink font-semibold">
                  COMPLIMENTARY INSURED ARMORED TRANSIT
                </p>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Every order includes tamper-evident lock boxes and door-to-door transit insurance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Valuation Ledger (5 cols) */}
          <aside className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-linen-surface p-6 md:p-8 shadow-xs border border-border-hairline">
              <div className="flex items-center justify-between pb-3 border-b border-border-hairline mb-5">
                <h3 className="font-headline-sm text-xl text-charcoal-ink">
                  Valuation Ledger
                </h3>
                <span className="font-label-micro text-[9px] uppercase bg-garnet-deep text-vellum-cream px-2 py-0.5 tracking-widest font-semibold">
                  SUMMARY
                </span>
              </div>

              {/* Coupon Code Section */}
              <div className="py-3 bg-surface-container p-3 mb-5 border border-border-hairline">
                <span className="font-label-uppercase text-[10px] uppercase text-charcoal-ink block mb-2 font-medium">
                  Coupon Code
                </span>
                {couponCode ? (
                  <div className="flex items-center justify-between bg-vellum-cream p-2.5 border border-garnet-deep/30">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-garnet-deep" />
                      <span className="font-mono text-xs font-semibold text-garnet-deep">
                        {couponCode}
                      </span>
                      <span className="font-label-micro text-[9px] text-on-surface-variant">
                        (-₹1,000)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="font-label-micro text-[10px] text-on-surface-variant hover:text-error uppercase underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      placeholder="ENTER PROMO (e.g. WELCOME1000)"
                      className="w-full bg-vellum-cream text-charcoal-ink px-3 py-2 text-xs uppercase tracking-wider border border-border-hairline focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-charcoal-ink text-vellum-cream text-[10px] font-label-uppercase tracking-wider uppercase hover:bg-garnet-deep transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-error font-body-sm text-[11px] mt-1.5">
                    Invalid coupon. Use WELCOME1000 for ₹1,000 discount.
                  </p>
                )}
              </div>

              {/* Privilege Toggle */}
              <div className="bg-surface-container border border-border-hairline p-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="font-label-uppercase text-xs uppercase text-garnet-deep font-semibold">
                    OLIVER Privilege
                  </span>
                  <span className="font-label-micro text-[10px] text-charcoal-ink font-medium">
                    ₹149/mo
                  </span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Active members receive an instant 5% off this order.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isPrivilegeMember}
                      onChange={(e) => setIsPrivilegeMember(e.target.checked)}
                      className="accent-garnet-deep h-4 w-4"
                    />
                    <span className="font-label-micro text-[10px] uppercase text-charcoal-ink font-semibold">
                      Apply 5% Privilege Saving
                    </span>
                  </label>
                  {isPrivilegeMember && (
                    <span className="text-garnet-deep font-label-micro text-[10px] font-semibold">
                      -₹{privilegeDiscount.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 font-body-sm text-xs text-charcoal-ink">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-medium">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {isPrivilegeMember && (
                  <div className="flex justify-between items-center text-garnet-deep">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Privilege Member Saving (5%)
                    </span>
                    <span className="font-medium">
                      -₹{privilegeDiscount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                {couponDiscount > 0 && (
                  <div className="flex justify-between items-center text-garnet-deep">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      Promo Code ({couponCode})
                    </span>
                    <span className="font-medium">
                      -₹{couponDiscount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Insured Delivery</span>
                  <span className="font-label-micro text-[10px] uppercase text-garnet-deep font-semibold">
                    Free
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Applicable Taxes (GST 3%)</span>
                  <span className="font-medium">
                    ₹{taxAmount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="pt-4 bg-surface-container p-4 flex items-baseline justify-between border-t border-border-hairline">
                  <div>
                    <span className="font-headline-sm text-lg text-charcoal-ink block leading-none">
                      Total Valuation
                    </span>
                    <span className="font-label-micro text-[9px] uppercase text-on-surface-variant tracking-wider mt-1 block">
                      All Taxes Included
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-md text-2xl text-garnet-deep font-semibold block leading-none">
                      ₹{grandTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
                >
                  <span>PROCEED TO SECURE CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-border-hairline text-center space-y-1">
                <p className="font-label-micro text-[9px] uppercase tracking-widest text-on-surface-variant">
                  &bull; 256-Bit Encrypted Razorpay Checkout &bull;
                </p>
                <p className="font-label-micro text-[9px] uppercase tracking-widest text-on-surface-variant">
                  &bull; BIS Hallmarked &bull; 6-Month Replacement &bull;
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

