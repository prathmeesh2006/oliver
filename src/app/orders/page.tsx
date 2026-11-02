"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, ShieldCheck, Diamond, Download } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<"all" | "processing" | "shipped" | "delivered">("all");

  const orders = [
    {
      id: "OLV-8829",
      date: "October 28, 2026",
      status: "In Armored Transit",
      statusKey: "shipped",
      expected: "Expected by: November 02, 2026",
      courier: "BlueDart Armored Secured · AWB #77291044",
      product: PRODUCTS[0],
      size: "14",
      specs: "18K Yellow Gold · Colombian Natural Emerald (1.42 ct)",
      amount: "₹18,900",
    },
    {
      id: "OLV-9104",
      date: "October 24, 2026",
      status: "Processing in Atelier",
      statusKey: "processing",
      expected: "Estimated Bench Completion: 48 Hours",
      courier: "Jaipur Vault Bench Setting #04",
      product: PRODUCTS[1],
      size: "Standard Drop",
      specs: "18K Yellow Gold · Unheated Ceylon Sapphires (2.10 ct)",
      amount: "₹24,500",
    },
    {
      id: "OLV-7412",
      date: "September 14, 2026",
      status: "Delivered",
      statusKey: "delivered",
      expected: "Delivered on September 18, 2026",
      courier: "Signed by Patron Aditi Kapoor",
      product: PRODUCTS[3],
      size: "16",
      specs: "18K Solid Brushed Gold · Natural Burmese Ruby",
      amount: "₹29,800",
    },
  ];

  const filteredOrders =
    activeTab === "all" ? orders : orders.filter((o) => o.statusKey === activeTab);

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 font-label-micro text-xs uppercase tracking-[0.22em] text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/account" className="hover:text-primary transition-colors">
            My Account
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-bold">My Orders</span>
        </nav>

        {/* Header */}
        <div className="pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-hairline mb-8">
          <div>
            <div className="flex items-center space-x-2 text-bronze-accent mb-2">
              <Diamond className="w-3.5 h-3.5" />
              <span className="font-label-micro text-[10px] uppercase tracking-[0.24em]">
                Client Folio &amp; Acquisition Ledger
              </span>
            </div>
            <h1 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink tracking-tight uppercase">
              My Orders
            </h1>
            <p className="font-body-md text-xs text-on-surface-variant max-w-lg mt-1">
              View and manage your recent purchases, tracked armored dispatches, and certified bespoke atelier commissions.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-linen-surface p-4 border border-border-hairline self-start md:self-auto">
            <ShieldCheck className="w-5 h-5 text-garnet-deep shrink-0" />
            <div>
              <p className="font-label-micro text-[10px] uppercase tracking-[0.2em] text-garnet-deep font-semibold">
                Jaipur Safe-Transit Protection
              </p>
              <p className="font-body-sm text-[11px] text-on-surface-variant">
                100% Insured Priority Transport
              </p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: "all", label: "All Orders", count: orders.length },
            { id: "processing", label: "Processing", count: 1 },
            { id: "shipped", label: "Shipped", count: 1 },
            { id: "delivered", label: "Delivered", count: 1 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 font-label-uppercase text-xs tracking-wider uppercase transition-colors ${
                activeTab === tab.id
                  ? "bg-garnet-deep text-white"
                  : "bg-linen-surface hover:bg-surface-container text-charcoal-ink border border-border-hairline"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-80">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Orders Stream */}
        <div className="space-y-6">
          {filteredOrders.map((ord) => (
            <article
              key={ord.id}
              className="bg-linen-surface p-6 border border-border-hairline shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-3 bg-surface-container p-3 mb-6 border border-border-hairline">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="font-label-micro text-[9px] uppercase tracking-widest text-on-surface-variant block">
                      Order Identifier
                    </span>
                    <span className="font-mono text-sm font-semibold text-garnet-deep">
                      {ord.id}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-micro text-[9px] uppercase tracking-widest text-on-surface-variant block">
                      Acquisition Date
                    </span>
                    <span className="font-body-sm text-xs text-charcoal-ink">
                      {ord.date}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="inline-block px-3 py-1 font-label-micro text-[10px] tracking-wider uppercase font-semibold bg-vellum-cream text-garnet-deep border border-garnet-deep/30">
                    {ord.status}
                  </span>
                </div>
              </div>

              {/* Product Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-24 bg-surface-container relative overflow-hidden shrink-0">
                    <Image
                      src={ord.product.images[0]}
                      alt={ord.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-label-micro text-[9px] uppercase tracking-wider text-bronze-accent block">
                      HIGH JEWELLERY ARCHIVE
                    </span>
                    <h3 className="font-headline-sm text-base uppercase text-charcoal-ink font-semibold">
                      {ord.product.title}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      {ord.specs}
                    </p>
                    <p className="font-label-micro text-[10px] text-on-surface-variant uppercase mt-1">
                      {ord.courier}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between gap-3">
                  <span className="font-price-headline text-lg font-semibold text-charcoal-ink">
                    {ord.amount}
                  </span>
                  <Link
                    href={`/orders/${ord.id}`}
                    className="px-5 py-2.5 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-[11px] tracking-wider uppercase transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border-hairline flex flex-wrap items-center justify-between text-xs text-on-surface-variant font-label-micro uppercase tracking-wider">
                <span>{ord.expected}</span>
                <Link href={`/orders/${ord.id}`} className="text-garnet-deep hover:underline">
                  Download Tax Invoice &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

