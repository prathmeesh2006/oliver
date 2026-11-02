"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  Package,
  Download,
  ArrowLeft,
  Clock,
  MapPin,
  CreditCard,
} from "lucide-react";
import { PRODUCTS } from "@/lib/products";

interface OrderDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { id } = use(params);

  const order = {
    id: id || "OLV-8829",
    date: "October 28, 2026 at 14:32 IST",
    status: "In Armored Transit",
    awb: "BLUEDART-SEC-77291044",
    estimatedDelivery: "November 02, 2026",
    paymentMethod: "Razorpay (UPI / ICICI Bank)",
    transactionId: "pay_Rzp99281726354",
    items: [
      {
        product: PRODUCTS[0],
        size: "14",
        qty: 1,
        price: 18900,
        certificate: "IGI-JPR-2026-EM089",
      },
      {
        product: PRODUCTS[1],
        size: "Standard Drop",
        qty: 1,
        price: 24500,
        certificate: "GIA-COL-2026-SP042",
      },
    ],
    subtotal: 43400,
    privilegeDiscount: 2170,
    couponDiscount: 1000,
    delivery: "Free (Armored Insured)",
    tax: 1207,
    total: 41437,
    shippingAddress: {
      name: "Aditi Kapoor",
      line1: "Penthouse 14B, Malabar Hill Crest",
      line2: "Ridge Road, Walkeshwar",
      landmark: "Opposite Hanging Gardens Gate 2",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400006",
      phone: "+91 98201 44521",
    },
  };

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 font-label-micro text-xs uppercase tracking-[0.22em] text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/orders" className="hover:text-primary transition-colors">
            My Orders
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-bold">{order.id}</span>
        </nav>

        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-hairline mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-headline-lg text-2xl md:text-3xl text-charcoal-ink uppercase">
                Order #{order.id}
              </h1>
              <span className="px-3 py-1 font-label-micro text-[10px] uppercase font-semibold bg-vellum-cream text-garnet-deep border border-garnet-deep/30">
                {order.status}
              </span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Placed on {order.date} &bull; Tamper-Evident Dossier Prepared
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-linen-surface hover:bg-surface-container text-charcoal-ink border border-border-hairline font-label-uppercase text-xs tracking-wider uppercase transition-colors flex items-center gap-2 self-start md:self-auto shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Print Tax Dossier</span>
          </button>
        </div>

        {/* Live Tracking Progress Timeline */}
        <div className="bg-linen-surface p-6 md:p-8 border border-border-hairline shadow-xs mb-8">
          <h2 className="font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink font-semibold mb-6">
            Armored Transit Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-garnet-deep text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] font-semibold text-charcoal-ink uppercase">
                  Order Confirmed
                </p>
                <p className="font-body-sm text-[10px] text-on-surface-variant">
                  Payment verified via Razorpay
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-garnet-deep text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] font-semibold text-charcoal-ink uppercase">
                  Atelier Calibrated
                </p>
                <p className="font-body-sm text-[10px] text-on-surface-variant">
                  Jaipur bench inspection passed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-garnet-deep text-white flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] font-semibold text-charcoal-ink uppercase">
                  Armored Transit
                </p>
                <p className="font-body-sm text-[10px] text-emerald-800 font-semibold">
                  AWB: {order.awb}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 opacity-60">
              <div className="w-8 h-8 rounded-full bg-surface-container text-charcoal-ink flex items-center justify-center shrink-0 border border-border-hairline">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-label-uppercase text-[11px] font-semibold text-charcoal-ink uppercase">
                  Hand-to-Hand Delivery
                </p>
                <p className="font-body-sm text-[10px] text-on-surface-variant">
                  Est. {order.estimatedDelivery}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column: Items List (Left) and Financial/Address (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Items (7 cols) */}
          <div className="lg:col-span-7 bg-linen-surface p-6 border border-border-hairline shadow-xs space-y-6">
            <h2 className="font-headline-sm text-lg text-charcoal-ink uppercase pb-3 border-b border-border-hairline">
              Acquired Pieces ({order.items.length})
            </h2>

            <div className="space-y-6">
              {order.items.map((it, idx) => (
                <div key={idx} className="flex gap-4 pb-6 border-b border-border-hairline last:border-b-0">
                  <div className="w-20 h-24 bg-surface-container relative overflow-hidden shrink-0">
                    <Image
                      src={it.product.images[0]}
                      alt={it.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-label-micro text-[9px] uppercase tracking-wider text-bronze-accent block">
                      {it.product.category.toUpperCase()}
                    </span>
                    <h3 className="font-headline-sm text-sm uppercase text-charcoal-ink font-semibold">
                      {it.product.title}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                      Size: {it.size} &bull; Qty: {it.qty} &bull; {it.product.gemstone}
                    </p>
                    <p className="font-label-micro text-[9px] text-emerald-800 uppercase mt-1">
                      Assay Certificate: {it.certificate}
                    </p>
                    <p className="font-price-headline text-sm font-semibold text-garnet-deep mt-2">
                      ₹{it.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Summary & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Delivery Destination */}
            <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-border-hairline mb-3">
                <MapPin className="w-4 h-4 text-garnet-deep" />
                <h3 className="font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink font-semibold">
                  Destination Address
                </h3>
              </div>
              <div className="font-body-sm text-xs text-on-surface-variant space-y-1">
                <p className="font-semibold text-charcoal-ink">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.line1}</p>
                <p>{order.shippingAddress.line2}</p>
                <p>{order.shippingAddress.landmark}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} — {order.shippingAddress.pincode}
                </p>
                <p className="pt-2 text-charcoal-ink font-medium">Contact: {order.shippingAddress.phone}</p>
              </div>
            </div>

            {/* Financial Ledger */}
            <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-border-hairline mb-3">
                <CreditCard className="w-4 h-4 text-garnet-deep" />
                <h3 className="font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink font-semibold">
                  Financial Settlement
                </h3>
              </div>
              <div className="space-y-2 text-xs font-body-sm text-charcoal-ink">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>₹{order.subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-garnet-deep">
                  <span>Privilege Member Saving</span>
                  <span>-₹{order.privilegeDiscount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-garnet-deep">
                  <span>Coupon WELCOME1000</span>
                  <span>-₹{order.couponDiscount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Insured Armored Transit</span>
                  <span className="text-garnet-deep uppercase font-label-micro text-[10px] font-semibold">
                    Free
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">GST (3%)</span>
                  <span>₹{order.tax.toLocaleString("en-IN")}</span>
                </div>
                <div className="pt-3 border-t border-border-hairline flex justify-between font-semibold text-sm text-garnet-deep">
                  <span>Total Paid</span>
                  <span>₹{order.total.toLocaleString("en-IN")}</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-border-hairline font-label-micro text-[9px] uppercase tracking-wider text-on-surface-variant">
                Gateway Ref: {order.transactionId}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-8">
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 font-label-uppercase text-xs text-garnet-deep hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Orders</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

