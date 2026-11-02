"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon, X, Heart, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/context/StoreContext";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const suggestedQueries = [
    "Emerald",
    "Sapphire",
    "Ruby",
    "Solid Gold",
    "Solitaire",
    "Pendant",
    "Jaipur",
  ];

  const searchResults = useMemo(() => {
    if (!query.trim()) return PRODUCTS;
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.gemstone.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-label-uppercase text-xs text-garnet-deep uppercase tracking-[0.25em] font-semibold block mb-2">
            ATELIER ARCHIVE LOOKUP
          </span>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-charcoal-ink uppercase tracking-tight mb-6">
            Search Our Collection
          </h1>

          {/* Search Input Box */}
          <div className="relative max-w-xl mx-auto">
            <SearchIcon className="w-5 h-5 text-on-surface-variant absolute left-4 top-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by gemstone, cut, SKU, or category..."
              className="w-full bg-linen-surface text-charcoal-ink pl-12 pr-12 py-3.5 text-sm border border-border-hairline focus:outline-none focus:border-garnet-deep shadow-xs"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-4 top-4 text-on-surface-variant hover:text-charcoal-ink"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Suggested Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="font-label-micro text-[10px] text-on-surface-variant uppercase tracking-widest mr-1">
              Popular:
            </span>
            {suggestedQueries.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1 bg-surface-container hover:bg-surface-container-high text-charcoal-ink text-[11px] font-label-uppercase tracking-wider transition-colors border border-border-hairline"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between pb-4 border-b border-border-hairline mb-8">
          <p className="font-label-uppercase text-xs text-on-surface-variant tracking-wider uppercase">
            Showing {searchResults.length} {searchResults.length === 1 ? "Piece" : "Pieces"}
            {query ? ` for "${query}"` : ""}
          </p>

          <Link
            href="/shop"
            className="font-label-uppercase text-xs text-garnet-deep hover:underline tracking-wider"
          >
            VIEW ALL ARCHIVES &rarr;
          </Link>
        </div>

        {/* Results Grid */}
        {searchResults.length === 0 ? (
          <div className="bg-linen-surface border border-border-hairline p-12 text-center max-w-lg mx-auto">
            <p className="font-headline-sm text-xl text-charcoal-ink mb-2">
              No Gemstones Found
            </p>
            <p className="font-body-sm text-sm text-on-surface-variant mb-6">
              We couldn&apos;t find any pieces matching &ldquo;{query}&rdquo;. Check spelling or explore our catalog categories.
            </p>
            <button
              onClick={() => setQuery("")}
              className="px-6 py-2.5 bg-garnet-deep text-white font-label-uppercase text-xs tracking-[0.18em] uppercase"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((item) => {
              const inWishlist = isInWishlist(item.id);
              return (
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
                        aria-label="Add to wishlist"
                        onClick={() => toggleWishlist(item)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center text-charcoal-ink hover:text-garnet-deep transition-colors shadow-xs"
                      >
                        <Heart
                          className={`w-4 h-4 ${inWishlist ? "fill-garnet-deep text-garnet-deep" : ""}`}
                        />
                      </button>

                      <div className="absolute bottom-3 left-3 bg-garnet-deep/90 text-white font-label-micro uppercase tracking-[0.22em] px-2 py-1">
                        GENUINE NATURAL STONE
                      </div>
                    </div>

                    <div className="p-4 border-b border-border-hairline">
                      <span className="font-label-micro text-on-surface-variant uppercase tracking-[0.2em] block mb-1">
                        {item.subtitle?.split("·")[0] || "ARCHIVE"}
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
                      className="w-full py-2.5 bg-transparent hover:bg-garnet-deep hover:text-white text-charcoal-ink border border-border-hairline font-label-uppercase text-[10px] tracking-[0.18em] uppercase transition-colors font-medium text-center"
                    >
                      ACQUIRE PIECE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

