"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Truck, Download, ArrowRight, MessageSquare } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("oliver_last_order");
      if (saved) {
        setOrder(JSON.parse(saved));
      } else {
        // Fallback default mock order to match Google Stitch reference screen
        setOrder({
          orderNumber: "OLV-8829",
          date: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          customer: {
            fullName: "Aditi Kapoor",
            email: "aditi.kapoor@example.com",
            phone: "+91 98201 44521",
            recipientName: "Aditi Kapoor",
            addressLine1: "Penthouse 14B, Malabar Hill Crest",
            addressLine2: "Ridge Road, Walkeshwar",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400006",
          },
          items: [
            {
              id: "item-1",
              product: PRODUCTS[0],
              quantity: 1,
              selectedSize: "14",
            },
            {
              id: "item-2",
              product: PRODUCTS[1],
              quantity: 1,
              selectedSize: "Standard Drop",
            },
          ],
          subtotal: 43400,
          privilegeDiscount: 2170,
          couponDiscount: 1000,
          deliveryCost: 0,
          taxAmount: 1207,
          grandTotal: 41437,
        });
      }
    } catch {}
  }, []);

  if (!order) return null;

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Top Status */}
        <div className="bg-linen-surface p-8 md:p-12 border border-border-hairline text-center shadow-xs">
          <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center text-garnet-deep mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
          </div>

          <span className="font-label-micro text-xs text-garnet-deep uppercase tracking-[0.25em] font-semibold block mb-2">
            ORDER ACQUIRED &bull; PAYMENT CONFIRMED
          </span>

          <h1 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink uppercase tracking-tight mb-4">
            Your Jaipur Heirloom is Reserved.
          </h1>

          <p className="font-body-md text-sm text-on-surface-variant max-w-lg mx-auto leading-relaxed mb-8">
            Thank you, {order.customer.fullName}. We have received your acquisition. Our Jaipur master goldsmiths are preparing your piece for insured armored transit.
          </p>

          <div className="inline-flex items-center gap-6 px-6 py-3 bg-surface-container border border-border-hairline text-xs font-mono text-charcoal-ink">
            <span>
              VALUATION RECORD: <strong className="text-garnet-deep">{order.orderNumber}</strong>
            </span>
            <span>&bull;</span>
            <span>{order.date}</span>
          </div>
        </div>

        {/* Order Details & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Dispatch & Address */}
          <div className="bg-linen-surface p-6 border border-border-hairline space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-hairline">
              <Truck className="w-4 h-4 text-garnet-deep" />
              <h2 className="font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink font-semibold">
                Dispatch &amp; Delivery Destination
              </h2>
            </div>
            <div className="font-body-sm text-xs text-on-surface-variant space-y-1">
              <p className="font-medium text-charcoal-ink">{order.customer.recipientName}</p>
              <p>{order.customer.addressLine1}</p>
              {order.customer.addressLine2 && <p>{order.customer.addressLine2}</p>}
              <p>
                {order.customer.city}, {order.customer.state} — {order.customer.pincode}
              </p>
              <p className="pt-2">Contact: {order.customer.phone}</p>
            </div>
            <div className="pt-3 border-t border-border-hairline">
              <span className="font-label-micro text-[10px] uppercase tracking-wider text-emerald-800 font-semibold bg-emerald-50 px-2 py-1">
                Estimated Dispatch: Within 48 Hours
              </span>
            </div>
          </div>

          {/* Concierge & Reassurances */}
          <div className="bg-linen-surface p-6 border border-border-hairline space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-hairline">
              <ShieldCheck className="w-4 h-4 text-garnet-deep" />
              <h2 className="font-label-uppercase text-xs tracking-wider uppercase text-charcoal-ink font-semibold">
                Atelier Dossier &amp; Concierge
              </h2>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Every package is sealed in a tamper-evident lock box with an assay guarantee card, IGI/GIA certificate, and a bespoke suede travel pouch.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-micro text-[10px] uppercase tracking-wider text-garnet-deep hover:text-garnet-wine font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Jaipur WhatsApp Concierge</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Line Items Acquired */}
        <div className="mt-8 bg-linen-surface p-6 md:p-8 border border-border-hairline">
          <h2 className="font-headline-sm text-lg text-charcoal-ink uppercase pb-4 border-b border-border-hairline mb-6">
            Acquisition Ledger
          </h2>

          <div className="space-y-4">
            {order.items.map((item: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 pb-4 border-b border-border-hairline last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-16 bg-surface-container relative overflow-hidden shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-xs sm:text-sm uppercase text-charcoal-ink font-semibold">
                      {item.product.title}
                    </h3>
                    <p className="font-label-micro text-[10px] text-on-surface-variant uppercase mt-0.5">
                      Size: {item.selectedSize} &bull; Qty {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="font-price-headline text-xs sm:text-sm font-semibold text-garnet-deep">
                  ₹{(item.product.retailPrice * item.quantity).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>

          {/* Financials */}
          <div className="mt-6 pt-4 border-t border-border-hairline space-y-2 text-xs font-body-sm max-w-sm ml-auto text-charcoal-ink">
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Subtotal:</span>
              <span>₹{order.subtotal?.toLocaleString("en-IN")}</span>
            </div>
            {order.privilegeDiscount > 0 && (
              <div className="flex justify-between text-garnet-deep">
                <span>Privilege Discount (5%):</span>
                <span>-₹{order.privilegeDiscount?.toLocaleString("en-IN")}</span>
              </div>
            )}
            {order.couponDiscount > 0 && (
              <div className="flex justify-between text-garnet-deep">
                <span>Coupon Code:</span>
                <span>-₹{order.couponDiscount?.toLocaleString("en-IN")}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-on-surface-variant">GST (3%):</span>
              <span>₹{order.taxAmount?.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border-hairline font-semibold text-sm text-garnet-deep">
              <span>Total Paid:</span>
              <span>₹{order.grandTotal?.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-3.5 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <span>DISCOVER MORE PIECES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => window.print()}
            className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-black/5 text-charcoal-ink border border-border-hairline font-label-uppercase text-xs tracking-[0.18em] uppercase transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>PRINT VALUATION INVOICE</span>
          </button>
        </div>
      </div>
    </div>
  );
}

