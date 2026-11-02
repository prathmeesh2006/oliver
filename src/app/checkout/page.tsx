"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Lock,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Sparkles,
  CreditCard,
  Building,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    deliveryMethod,
    setDeliveryMethod,
    isPrivilegeMember,
    couponCode,
    subtotal,
    privilegeDiscount,
    couponDiscount,
    deliveryCost,
    taxAmount,
    grandTotal,
    clearCart,
  } = useStore();

  const [formData, setFormData] = useState({
    fullName: "Aditi Kapoor",
    email: "aditi.kapoor@example.com",
    phone: "98201 44521",
    recipientName: "Aditi Kapoor",
    addressLine1: "Penthouse 14B, Malabar Hill Crest",
    addressLine2: "Ridge Road, Walkeshwar",
    landmark: "Opposite Hanging Gardens Gate 2",
    pincode: "400006",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  });

  const [pinStatus, setPinStatus] = useState<"VALID" | "CHECKING" | "INVALID">("VALID");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePincodeChange = (val: string) => {
    setFormData({ ...formData, pincode: val });
    if (val.length === 6) {
      setPinStatus("CHECKING");
      setTimeout(() => {
        setPinStatus("VALID");
      }, 300);
    } else {
      setPinStatus("INVALID");
    }
  };

  const handlePaymentSubmission = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || formData.pincode.length !== 6) {
      setErrorMessage("Please ensure all contact and address fields are properly filled.");
      return;
    }

    setErrorMessage("");
    setIsProcessing(true);

    // Save order data to sessionStorage for the confirmation page
    const orderData = {
      orderNumber: `OLV-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      customer: formData,
      items: cart,
      subtotal,
      privilegeDiscount,
      couponDiscount,
      deliveryCost,
      taxAmount,
      grandTotal,
      deliveryMethod,
    };

    try {
      sessionStorage.setItem("oliver_last_order", JSON.stringify(orderData));
    } catch {}

    // Simulate secure Razorpay Gateway handoff / verification
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 1800);
  };

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Stepper Navigation */}
        <nav aria-label="Checkout Progress" className="flex items-center gap-3 font-label-uppercase text-xs uppercase tracking-[0.2em] mb-8">
          <Link href="/bag" className="text-on-surface-variant hover:text-garnet-deep transition-colors">
            01. Cart
          </Link>
          <span className="text-bronze-accent text-xs">/</span>
          <span className="text-garnet-deep font-semibold underline underline-offset-4 decoration-garnet-deep">
            02. Delivery &amp; Payment
          </span>
          <span className="text-bronze-accent text-xs">/</span>
          <span className="text-on-surface-variant/60">03. Confirmation</span>
        </nav>

        {errorMessage && (
          <div className="mb-6 bg-error-container text-on-error-container p-4 border border-error/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-error shrink-0" />
            <p className="font-body-sm text-xs text-error">{errorMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-start">
          {/* LEFT: Checkout Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handlePaymentSubmission} className="space-y-8">
              {/* SECTION 1: CONTACT INFORMATION */}
              <div className="bg-linen-surface p-6 md:p-8 border border-border-hairline shadow-xs">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="font-label-micro text-garnet-deep uppercase tracking-[0.25em] block mb-1">
                      Step 1
                    </span>
                    <h2 className="font-headline-sm text-xl text-charcoal-ink">
                      Contact Information
                    </h2>
                  </div>
                  <span className="font-label-micro text-on-surface-variant uppercase tracking-widest hidden sm:inline">
                    Guest Checkout
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div>
                    <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 bg-surface-container text-charcoal-ink text-xs font-mono border border-r-0 border-border-hairline">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none focus:border-garnet-deep"
                        placeholder="98200 00000"
                      />
                    </div>
                    <p className="font-label-micro text-[10px] text-on-surface-variant uppercase tracking-wider mt-1.5">
                      Delivery tracking updates and valuation dossier will be sent via SMS &amp; WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: DELIVERY ADDRESS */}
              <div className="bg-linen-surface p-6 md:p-8 border border-border-hairline shadow-xs">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="font-label-micro text-garnet-deep uppercase tracking-[0.25em] block mb-1">
                      Step 2
                    </span>
                    <h2 className="font-headline-sm text-xl text-charcoal-ink">
                      Delivery Address
                    </h2>
                  </div>
                  <span className="font-label-micro text-garnet-deep uppercase tracking-widest hidden sm:inline">
                    Insured Delivery
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        Recipient Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.recipientName}
                        onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                        className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        PIN Code
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          maxLength={6}
                          required
                          value={formData.pincode}
                          onChange={(e) => handlePincodeChange(e.target.value)}
                          className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none font-mono"
                        />
                        <span className="absolute right-3 top-3 text-[10px] font-label-micro text-garnet-deep font-bold">
                          {pinStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                      Address Line 1 (Flat, House No., Building)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.addressLine1}
                      onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                      className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        Address Line 2 (Street, Area)
                      </label>
                      <input
                        type="text"
                        value={formData.addressLine2}
                        onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                        className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        Landmark
                      </label>
                      <input
                        type="text"
                        value={formData.landmark}
                        onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                        className="w-full bg-vellum-cream text-charcoal-ink px-4 py-3 text-xs border border-border-hairline focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        readOnly
                        className="w-full bg-surface-container text-charcoal-ink px-4 py-3 text-xs border border-border-hairline cursor-default"
                      />
                    </div>

                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        readOnly
                        className="w-full bg-surface-container text-charcoal-ink px-4 py-3 text-xs border border-border-hairline cursor-default"
                      />
                    </div>

                    <div>
                      <label className="font-label-uppercase text-[11px] uppercase text-charcoal-ink block mb-1.5 font-medium">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        readOnly
                        className="w-full bg-surface-container text-charcoal-ink px-4 py-3 text-xs border border-border-hairline cursor-default"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: DELIVERY OPTIONS */}
              <div className="bg-linen-surface p-6 md:p-8 border border-border-hairline shadow-xs">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="font-label-micro text-garnet-deep uppercase tracking-[0.25em] block mb-1">
                      Step 3
                    </span>
                    <h2 className="font-headline-sm text-xl text-charcoal-ink">
                      Delivery Options
                    </h2>
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between p-4 bg-vellum-cream border cursor-pointer transition-colors ${
                      deliveryMethod === "standard"
                        ? "border-garnet-deep shadow-xs"
                        : "border-border-hairline"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery-method"
                        checked={deliveryMethod === "standard"}
                        onChange={() => setDeliveryMethod("standard")}
                        className="accent-garnet-deep h-4 w-4"
                      />
                      <div>
                        <span className="font-body-md text-xs font-semibold text-charcoal-ink block">
                          Standard Armored Delivery
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant block mt-0.5">
                          Free insured transit across India (3–5 business days)
                        </span>
                      </div>
                    </div>
                    <span className="font-label-uppercase text-xs text-garnet-deep font-semibold">
                      Free
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-4 bg-vellum-cream border cursor-pointer transition-colors ${
                      deliveryMethod === "express"
                        ? "border-garnet-deep shadow-xs"
                        : "border-border-hairline"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery-method"
                        checked={deliveryMethod === "express"}
                        onChange={() => setDeliveryMethod("express")}
                        className="accent-garnet-deep h-4 w-4"
                      />
                      <div>
                        <span className="font-body-md text-xs font-semibold text-charcoal-ink block">
                          Priority Express Delivery
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant block mt-0.5">
                          Priority armored courier dispatch within 48–72 hours
                        </span>
                      </div>
                    </div>
                    <span className="font-body-md text-xs font-semibold text-charcoal-ink">
                      ₹500
                    </span>
                  </label>
                </div>
              </div>

              {/* SECTION 4: PAYMENT METHOD (RAZORPAY) */}
              <div className="bg-linen-surface p-6 md:p-8 border border-border-hairline shadow-xs">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="font-label-micro text-garnet-deep uppercase tracking-[0.25em] block mb-1">
                      Step 4
                    </span>
                    <h2 className="font-headline-sm text-xl text-charcoal-ink">
                      Payment Method
                    </h2>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                      Pay securely using Razorpay gateway.
                    </p>
                  </div>
                  <span className="font-label-micro text-on-surface-variant uppercase tracking-widest hidden sm:inline">
                    Secure 256-Bit SSL
                  </span>
                </div>

                <div className="bg-vellum-cream p-5 border border-border-hairline space-y-4">
                  <div className="flex items-start gap-3.5 pb-4 border-b border-border-hairline">
                    <Lock className="w-5 h-5 text-garnet-deep shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body-md text-xs text-charcoal-ink font-semibold leading-snug">
                        Razorpay Payment Gateway
                      </p>
                      <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                        Supports Instant UPI (Google Pay, PhonePe, Paytm), Debit &amp; Credit Cards (Visa, MasterCard, Rupay, Amex), and Net Banking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-label-micro text-on-surface-variant uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      Zero Transaction Fees
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      RBI Regulated Security
                    </span>
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full h-14 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 group shadow-sm disabled:opacity-70"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      CONNECTING TO RAZORPAY...
                    </span>
                  ) : (
                    <>
                      <span>
                        CONTINUE TO PAYMENT &mdash; ₹{grandTotal.toLocaleString("en-IN")}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center font-label-micro text-[10px] uppercase tracking-widest text-on-surface-variant mt-3">
                  Immediate invoice and dispatch tracking will be generated upon completion.
                </p>
              </div>
            </form>
          </div>

          {/* RIGHT: Order Summary (5 cols) */}
          <aside className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-linen-surface p-6 md:p-8 shadow-xs border border-border-hairline">
              <div className="flex items-center justify-between pb-3 bg-surface-container p-3 mb-5 border border-border-hairline">
                <h3 className="font-headline-sm text-lg text-charcoal-ink">
                  Order Summary
                </h3>
                <span className="font-label-micro text-[9px] uppercase bg-garnet-deep text-vellum-cream px-2 py-0.5 tracking-widest font-semibold">
                  {cart.length} {cart.length === 1 ? "ITEM" : "ITEMS"}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3.5 pb-4 bg-surface-container/60 p-3 border border-border-hairline"
                  >
                    <div className="w-16 h-20 bg-vellum-cream shrink-0 relative overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute bottom-1 right-1 bg-charcoal-ink/90 text-vellum-cream text-[9px] px-1 font-mono">
                        x{item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body-md text-xs text-charcoal-ink font-semibold truncate uppercase">
                        {item.product.title}
                      </h4>
                      <p className="font-label-micro text-[9px] text-on-surface-variant uppercase mt-0.5">
                        Size: {item.selectedSize} &bull; {item.product.caratWeight || "18K Gold"}
                      </p>
                      <p className="font-price-headline text-xs font-semibold text-garnet-deep mt-1">
                        ₹{(item.product.retailPrice * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="mt-6 pt-4 border-t border-border-hairline space-y-2.5 font-body-sm text-xs text-charcoal-ink">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-medium">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {isPrivilegeMember && (
                  <div className="flex justify-between items-center text-garnet-deep">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Sparkles className="w-3 h-3" />
                      Privilege Discount (5%)
                    </span>
                    <span className="font-medium">
                      -₹{privilegeDiscount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                {couponDiscount > 0 && (
                  <div className="flex justify-between items-center text-garnet-deep text-[11px]">
                    <span>Coupon ({couponCode})</span>
                    <span className="font-medium">
                      -₹{couponDiscount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Armored Delivery</span>
                  <span className="font-label-micro text-[10px] uppercase text-garnet-deep font-semibold">
                    {deliveryCost === 0 ? "Free" : `₹${deliveryCost}`}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Applicable GST (3%)</span>
                  <span className="font-medium">
                    ₹{taxAmount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="pt-4 bg-surface-container p-3 flex items-baseline justify-between border-t border-border-hairline">
                  <div>
                    <span className="font-headline-sm text-base text-charcoal-ink block leading-none">
                      Total Payable
                    </span>
                    <span className="font-label-micro text-[9px] uppercase text-on-surface-variant tracking-wider mt-1 block">
                      All Taxes Included
                    </span>
                  </div>
                  <span className="font-headline-md text-xl text-garnet-deep font-semibold block leading-none">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

