"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, SlidersHorizontal, ChevronDown, Check, X, Grid, Columns } from "lucide-react";
import { Product } from "@/types/store.types";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/context/StoreContext";

interface ShopCatalogViewProps {
  initialCategory?: string;
  pageTitle?: string;
}

export function ShopCatalogView({
  initialCategory = "all",
  pageTitle = "Discover OLIVER",
}: ShopCatalogViewProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<string>("all");
  const [selectedGemstone, setSelectedGemstone] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("curated");
  const [gridColumns, setGridColumns] = useState<4 | 2>(4);
  const [showFiltersMobile, setShowFiltersMobile] = useState<boolean>(false);

  const categories = [
    { id: "all", label: "All Jewellery" },
    { id: "rings", label: "Rings" },
    { id: "earrings", label: "Earrings" },
    { id: "necklaces", label: "Pendants & Necklaces" },
    { id: "sets", label: "Sets & High Solitaires" },
  ];

  const gemstones = [
    { id: "all", label: "All Gemstones" },
    { id: "emerald", label: "Colombian Emerald" },
    { id: "sapphire", label: "Ceylon Sapphire" },
    { id: "ruby", label: "Burmese Ruby" },
    { id: "tourmaline", label: "Bi-Colour Tourmaline" },
    { id: "quartz", label: "Rose Quartz" },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedGemstone !== "all") {
      list = list.filter((p) =>
        p.gemstone.toLowerCase().includes(selectedGemstone.toLowerCase())
      );
    }

    if (selectedPriceFilter === "under-20k") {
      list = list.filter((p) => p.retailPrice < 20000);
    } else if (selectedPriceFilter === "20k-30k") {
      list = list.filter((p) => p.retailPrice >= 20000 && p.retailPrice <= 30000);
    } else if (selectedPriceFilter === "above-30k") {
      list = list.filter((p) => p.retailPrice > 30000);
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.retailPrice - b.retailPrice);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.retailPrice - a.retailPrice);
    }

    return list;
  }, [selectedCategory, selectedGemstone, selectedPriceFilter, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedPriceFilter("all");
    setSelectedGemstone("all");
  };

  return (
    <div className="w-full bg-background text-on-surface">
      {/* 1. BREADCRUMBS & TOP EDITORIAL BANNER */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-6">
        <div className="flex items-center gap-2 font-label-micro text-on-surface-variant uppercase tracking-[0.22em] text-[9px] mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          {selectedCategory !== "all" && (
            <>
              <span className="text-outline-variant">/</span>
              <span className="text-primary font-medium uppercase">
                {selectedCategory}
              </span>
            </>
          )}
        </div>

        {/* Editorial Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border-hairline">
          <div className="max-w-2xl">
            <span className="font-label-uppercase text-garnet-deep text-xs font-semibold tracking-[0.2em] block mb-2">
              ARCHIVAL REPERTORY
            </span>
            <h1 className="font-display-hero text-4xl lg:text-5xl text-charcoal-ink leading-tight tracking-[-0.01em]">
              {pageTitle}
            </h1>
            <p className="font-body-lg text-charcoal-ink/80 text-sm lg:text-base mt-4 leading-relaxed max-w-xl">
              Handcrafted in Jaipur with natural gemstones and architectural discipline. Built for everyday reverence. Real gemstone jewelry for the moments you want to keep.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-linen-surface p-4 border border-border-hairline self-start md:self-end">
            <div className="w-2 h-2 rounded-full bg-garnet-deep animate-pulse" />
            <div>
              <p className="font-label-uppercase text-[10px] tracking-[0.18em] text-charcoal-ink font-semibold uppercase">
                Jaipur Atelier Reserve
              </p>
              <p className="font-body-sm text-[11px] text-on-surface-variant">
                Batch 04/25 Dispatching This Week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION STRIP */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-3 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 font-label-uppercase text-[11px] tracking-[0.18em] uppercase transition-all ${
                selectedCategory === cat.id
                  ? "bg-garnet-deep text-linen-surface shadow-sm"
                  : "bg-linen-surface hover:bg-surface-container text-charcoal-ink border border-border-hairline"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CATALOG CONTROLS & FILTER BAR */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-5 border-y border-border-hairline bg-linen-surface/50">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Left: Active Pills and Count */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-charcoal-ink text-linen-surface font-label-uppercase text-[11px] tracking-[0.18em] uppercase"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Refine / Filter</span>
            </button>

            <span className="text-on-surface-variant font-label-micro uppercase text-[10px] tracking-[0.2em] hidden sm:inline">
              Showing {filteredProducts.length} Pieces
            </span>

            {/* Active Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container text-charcoal-ink text-[10px] font-label-uppercase tracking-[0.12em] border border-border-hairline">
                  Type: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="hover:text-garnet-deep ml-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedGemstone !== "all" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container text-charcoal-ink text-[10px] font-label-uppercase tracking-[0.12em] border border-border-hairline">
                  Stone: {selectedGemstone}
                  <button
                    onClick={() => setSelectedGemstone("all")}
                    className="hover:text-garnet-deep ml-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {(selectedCategory !== "all" || selectedGemstone !== "all" || selectedPriceFilter !== "all") && (
                <button
                  onClick={clearAllFilters}
                  className="text-[10px] font-label-uppercase tracking-[0.14em] text-garnet-deep hover:underline ml-2"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Right: Sort & Grid View Toggles */}
          <div className="flex items-center justify-between lg:justify-end gap-6">
            <div className="flex items-center gap-2">
              <label
                htmlFor="sortDropdown"
                className="font-label-uppercase text-[10px] text-on-surface-variant tracking-[0.18em] uppercase whitespace-nowrap"
              >
                Sort By:
              </label>
              <div className="relative">
                <select
                  id="sortDropdown"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-surface text-charcoal-ink font-label-uppercase text-[11px] tracking-[0.14em] py-2 pl-3 pr-8 border border-border-hairline focus:outline-none focus:border-garnet-deep appearance-none cursor-pointer"
                >
                  <option value="curated">Curated Highlights</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 pointer-events-none text-charcoal-ink" />
              </div>
            </div>

            <div className="flex items-center border border-border-hairline">
              <button
                onClick={() => setGridColumns(4)}
                className={`p-2 transition-colors ${
                  gridColumns === 4
                    ? "bg-charcoal-ink text-white"
                    : "bg-surface text-charcoal-ink hover:text-garnet-deep"
                }`}
                title="4-Column Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(2)}
                className={`p-2 transition-colors ${
                  gridColumns === 2
                    ? "bg-charcoal-ink text-white"
                    : "bg-surface text-charcoal-ink hover:text-garnet-deep"
                }`}
                title="2-Column Editorial View"
              >
                <Columns className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN CATALOG CONTENT (SIDEBAR + PRODUCTS) */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex gap-10 items-start">
          {/* DESKTOP FILTER SIDEBAR */}
          <aside
            className={`w-72 shrink-0 bg-linen-surface p-6 border border-border-hairline ${
              showFiltersMobile ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
              <h2 className="font-headline-sm text-lg text-charcoal-ink font-semibold">
                Refine Selection
              </h2>
              <button
                onClick={clearAllFilters}
                className="font-label-micro text-garnet-deep tracking-[0.2em] uppercase hover:underline"
              >
                RESET
              </button>
            </div>

            {/* Filter: Categories */}
            <div className="py-5 border-b border-border-hairline">
              <h3 className="font-label-uppercase text-xs tracking-[0.18em] text-charcoal-ink font-semibold mb-3">
                JEWELLERY TYPE
              </h3>
              <div className="space-y-2 font-body-sm text-xs text-charcoal-ink">
                {categories.map((c) => (
                  <label
                    key={c.id}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="cat-radio"
                        checked={selectedCategory === c.id}
                        onChange={() => setSelectedCategory(c.id)}
                        className="accent-garnet-deep rounded-none focus:ring-0"
                      />
                      <span className="group-hover:text-garnet-deep">
                        {c.label}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter: Gemstones */}
            <div className="py-5 border-b border-border-hairline">
              <h3 className="font-label-uppercase text-xs tracking-[0.18em] text-charcoal-ink font-semibold mb-3">
                NATURAL GEMSTONE
              </h3>
              <div className="space-y-2 font-body-sm text-xs text-charcoal-ink">
                {gemstones.map((g) => (
                  <label
                    key={g.id}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gem-radio"
                        checked={selectedGemstone === g.id}
                        onChange={() => setSelectedGemstone(g.id)}
                        className="accent-garnet-deep rounded-none focus:ring-0"
                      />
                      <span className="group-hover:text-garnet-deep">
                        {g.label}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter: Price Spectrum */}
            <div className="py-5">
              <h3 className="font-label-uppercase text-xs tracking-[0.18em] text-charcoal-ink font-semibold mb-3">
                PRICE SPECTRUM (INR)
              </h3>
              <div className="space-y-2 font-body-sm text-xs text-charcoal-ink">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="price-filter"
                    checked={selectedPriceFilter === "all"}
                    onChange={() => setSelectedPriceFilter("all")}
                    className="accent-garnet-deep"
                  />
                  <span className="group-hover:text-garnet-deep">All Prices</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="price-filter"
                    checked={selectedPriceFilter === "under-20k"}
                    onChange={() => setSelectedPriceFilter("under-20k")}
                    className="accent-garnet-deep"
                  />
                  <span className="group-hover:text-garnet-deep">Under ₹20,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="price-filter"
                    checked={selectedPriceFilter === "20k-30k"}
                    onChange={() => setSelectedPriceFilter("20k-30k")}
                    className="accent-garnet-deep"
                  />
                  <span className="group-hover:text-garnet-deep">₹20,000 — ₹30,000</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="price-filter"
                    checked={selectedPriceFilter === "above-30k"}
                    onChange={() => setSelectedPriceFilter("above-30k")}
                    className="accent-garnet-deep"
                  />
                  <span className="group-hover:text-garnet-deep">Above ₹30,000</span>
                </label>
              </div>
            </div>
          </aside>

          {/* PRODUCT TILES GRID */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="bg-linen-surface border border-border-hairline p-12 text-center">
                <p className="font-headline-sm text-xl text-charcoal-ink mb-2">
                  No pieces matched your filter criteria
                </p>
                <p className="font-body-sm text-on-surface-variant mb-6">
                  Try adjusting the gemstone, category, or price range.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-garnet-deep text-white font-label-uppercase text-xs tracking-[0.18em] uppercase"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  gridColumns === 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {filteredProducts.map((item) => {
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

                          {/* Wishlist Button */}
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
                            {item.subtitle?.split("·")[0] || "ATELIER EDITION"}
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
      </section>
    </div>
  );
}

