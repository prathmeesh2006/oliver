"use client";

import Link from "next/link";
import {
  Package,
  Heart,
  MapPin,
  Sparkles,
  ArrowRight,
  LogOut,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function AccountDashboardPage() {
  const { wishlist } = useStore();

  const user = {
    name: "Aditi Kapoor",
    email: "aditi.kapoor@example.com",
    phone: "+91 98201 44521",
    memberSince: "November 2024",
    privilegeActive: true,
  };

  const recentOrders = [
    {
      id: "OLV-8829",
      date: "28 Oct 2026",
      items: "The Jaipur Emerald Octagon Ring + 1 more",
      amount: "₹41,437",
      status: "In Atelier Transit",
      statusClass: "text-emerald-800 bg-emerald-50",
    },
    {
      id: "OLV-7412",
      date: "14 Sep 2026",
      items: "Ruby Solitaire Band in Solid Gold",
      amount: "₹28,310",
      status: "Delivered",
      statusClass: "text-charcoal-ink bg-surface-container",
    },
  ];

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Patron Banner */}
        <div className="bg-linen-surface p-8 md:p-10 border border-border-hairline shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-container border border-border-hairline mb-3">
              <Sparkles className="w-3.5 h-3.5 text-garnet-deep" />
              <span className="font-label-micro text-[9px] uppercase tracking-[0.2em] text-garnet-deep font-semibold">
                ACTIVE PRIVILEGE PATRON &bull; 5% UNLOCKED
              </span>
            </div>
            <h1 className="font-headline-lg text-3xl md:text-4xl text-charcoal-ink uppercase tracking-tight">
              Welcome Back, {user.name}
            </h1>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              {user.email} &bull; Member since {user.memberSince}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/orders"
              className="px-5 py-2.5 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-xs tracking-wider uppercase transition-colors"
            >
              View Orders
            </Link>
            <Link
              href="/account/login"
              className="px-4 py-2.5 bg-transparent hover:bg-black/5 text-charcoal-ink border border-border-hairline font-label-uppercase text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </Link>
          </div>
        </div>

        {/* 4 Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Link
            href="/orders"
            className="group bg-linen-surface p-6 border border-border-hairline hover:border-garnet-deep transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
                <Package className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
                Orders &amp; Receipts
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Track live armored courier transit and download gemological dossiers.
              </p>
            </div>
            <span className="mt-4 font-label-micro text-[10px] text-garnet-deep font-semibold uppercase flex items-center gap-1">
              View History &rarr;
            </span>
          </Link>

          <Link
            href="/wishlist"
            className="group bg-linen-surface p-6 border border-border-hairline hover:border-garnet-deep transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
                <Heart className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
                Curated Wishlist
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                {wishlist.length} saved gemstones waiting in your holding archive.
              </p>
            </div>
            <span className="mt-4 font-label-micro text-[10px] text-garnet-deep font-semibold uppercase flex items-center gap-1">
              View Wishlist ({wishlist.length}) &rarr;
            </span>
          </Link>

          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
                Delivery Address
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant line-clamp-2">
                Penthouse 14B, Malabar Hill Crest, Mumbai 400006
              </p>
            </div>
            <span className="mt-4 font-label-micro text-[10px] text-on-surface-variant uppercase font-semibold">
              Default Insured Address
            </span>
          </div>

          <div className="bg-linen-surface p-6 border border-border-hairline shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-garnet-deep mb-4">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-label-uppercase text-xs font-semibold tracking-wider uppercase text-charcoal-ink mb-1">
                Privilege Plan
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                ₹149/month &bull; Renews 28 Nov &bull; 10% birthday discount unlocked in July.
              </p>
            </div>
            <span className="mt-4 font-label-micro text-[10px] text-emerald-800 font-semibold uppercase">
              Active Member
            </span>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-linen-surface p-6 md:p-8 border border-border-hairline shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-border-hairline mb-6">
            <h2 className="font-headline-sm text-xl text-charcoal-ink uppercase">
              Recent Acquisitions
            </h2>
            <Link
              href="/orders"
              className="font-label-uppercase text-xs text-garnet-deep hover:underline tracking-wider uppercase"
            >
              See All Orders &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm text-xs border border-border-hairline">
              <thead>
                <tr className="bg-surface-container font-label-uppercase text-[10px] text-on-surface border-b border-border-hairline">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Pieces</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-hairline">
                {recentOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-surface-container/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-garnet-deep">
                      {ord.id}
                    </td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{ord.date}</td>
                    <td className="py-3.5 px-4 font-medium text-charcoal-ink">{ord.items}</td>
                    <td className="py-3.5 px-4 font-price-headline font-semibold">{ord.amount}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-0.5 font-label-micro text-[9px] uppercase tracking-wider font-semibold border border-border-hairline ${ord.statusClass}`}>
                        {ord.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/orders/${ord.id}`}
                        className="font-label-uppercase text-[10px] text-garnet-deep hover:underline font-semibold uppercase tracking-wider inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

