"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="w-full bg-surface min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full bg-linen-surface p-10 border border-border-hairline text-center shadow-xs">
          <div className="w-16 h-16 mx-auto mb-6 bg-surface-container flex items-center justify-center text-garnet-deep">
            <Heart className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h1 className="font-headline-sm text-2xl text-charcoal-ink uppercase mb-2">
            Your Wishlist is Empty
          </h1>
          <p className="font-body-sm text-sm text-on-surface-variant mb-8 leading-relaxed">
            You haven&apos;t saved any Jaipur gemstones yet. Explore our collection and save your favorite archival pieces.
          </p>
          <Link
            href="/shop"
            className="w-full inline-block py-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] uppercase font-semibold transition-colors"
          >
            EXPLORE THE ATELIER
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
              CURATED WISHLIST
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2 border-b border-border-hairline pb-6">
            <div>
              <div className="flex items-baseline gap-3">
                <h1 className="font-headline-lg text-3xl md:text-4xl uppercase text-charcoal-ink tracking-tight">
                  CURATED WISHLIST
                </h1>
                <span className="font-label-uppercase text-xs text-on-surface-variant font-semibold tracking-widest">
                  ({wishlist.length} {wishlist.length === 1 ? "PIECE" : "PIECES"})
                </span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant pt-1">
                Your privately archived gemstones and heirloom designs.
              </p>
            </div>

            <Link
              href="/shop"
              className="font-label-uppercase text-xs tracking-wider text-garnet-deep hover:underline"
            >
              CONTINUE BROWSING &rarr;
            </Link>
          </div>
        </section>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="group border border-border-hairline bg-linen-surface flex flex-col justify-between transition-all duration-300 hover:border-garnet-deep"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <Link href={`/products/${item.slug}`}>
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(item)}
                    aria-label="Remove from wishlist"
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center text-garnet-deep transition-colors shadow-xs"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 bg-garnet-deep/90 text-white font-label-micro uppercase tracking-[0.22em] px-2 py-1">
                    GENUINE NATURAL STONE
                  </div>
                </div>

                <div className="p-4 border-b border-border-hairline">
                  <span className="font-label-micro text-on-surface-variant uppercase tracking-[0.2em] block mb-1">
                    {item.subtitle?.split("·")[0] || "ATELIER"}
                  </span>
                  <Link href={`/products/${item.slug}`}>
                    <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.12em] uppercase line-clamp-1 mb-2 hover:text-garnet-deep transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="font-price-headline text-charcoal-ink font-semibold text-base">
                      ₹{item.retailPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-label-uppercase text-[10px] text-bronze-accent font-semibold tracking-[0.12em]">
                      ₹{item.privilegePrice.toLocaleString("en-IN")} PRIVILEGE
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-vellum-cream">
                <button
                  type="button"
                  onClick={() => addToCart(item, item.availableSizes[0] || "14", 1)}
                  className="w-full py-2.5 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-[10px] tracking-[0.18em] uppercase transition-colors font-medium text-center shadow-xs"
                >
                  MOVE TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

