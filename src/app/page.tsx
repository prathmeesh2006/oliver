"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Diamond, Calendar, CheckCircle2, ShieldCheck, Gift, ArrowRight, Stars } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useStore } from "@/context/StoreContext";

export default function HomePage() {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const bestsellers = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full bg-background text-on-surface">
      {/* 1. CINEMATIC HERO SECTION */}
      <section
        className="relative w-full min-h-[900px] bg-charcoal-ink flex items-center justify-center overflow-hidden border-b border-border-hairline"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6V3BkbtZDkp6kzaN4EbmnMj0eFX45uUer2TEd2puXxLu3WsqF3dO6dnNSVP0d3uNx0lI5kQh01ZNZOvczMCgBs731F5i2lunfcMoG_maTHrsIuI_Z75Y6TBPJIAwHl2dZxaZQ82S7auHs2IrYbybt-2GtjCDtlOqRo9rmRvebyaRKP7M123ihSlRO4pA8L9gK1GqDc7otguIcEFyyrpzG2pdYH0ux_Y0IugUvx-NhAQaS6m6i-qwryo768pLHAPUf0Kr8Hnw1QfyYRPc")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal-ink/80 via-charcoal-ink/30 to-charcoal-ink/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-bronze-accent" />
            <span className="font-label-micro text-vellum-cream text-[9px] uppercase tracking-[0.25em]">
              JAIPUR ATELIER &bull; ARCHIVAL RELEASE
            </span>
          </div>

          <h1 className="font-display-hero text-white text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-[-0.02em] max-w-4xl mb-6">
            Real gemstone jewellery for the moments you want to keep.
          </h1>

          <p className="font-body-lg text-vellum-cream/90 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed mb-10">
            Handcrafted in Jaipur with natural gemstones and architectural discipline. Built for everyday reverence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-10 py-4 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-xs tracking-[0.2em] font-semibold text-center transition-all duration-300 border border-garnet-deep shadow-md"
            >
              EXPLORE COLLECTION
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/10 text-vellum-cream font-label-uppercase text-xs tracking-[0.2em] font-semibold text-center transition-all duration-300 border border-vellum-cream/40"
            >
              DISCOVER OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY (CURATED ARCHITECTURAL GRID) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-border-hairline" id="collection">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-hairline gap-4">
          <div>
            <span className="font-label-uppercase text-secondary text-[11px] uppercase tracking-[0.22em] font-semibold block mb-2">
              CURATED ARCHIVES
            </span>
            <h2 className="font-headline-lg text-primary text-3xl md:text-4xl">
              SHOP BY CATEGORY
            </h2>
          </div>
          <p className="font-body-sm text-on-surface-variant max-w-md tracking-wider">
            Precision-cut natural tourmalines, sapphires, emeralds, and unheated rubies encased in pure geometric settings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* RINGS */}
          <Link
            href="/category/rings"
            className="group block border border-border-hairline bg-linen-surface p-3 transition-all duration-300 hover:border-garnet-deep"
          >
            <div className="overflow-hidden aspect-[3/4] w-full bg-surface-container relative mb-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb_25tOxCAJFvEx6C_D4jfOa-YHoXshqS21mKhUauVSk4hn4nxp0mGz36I0w1a8GBJULFYuwDVGUM3YJH7PgaWcWQ6y_CCn0khzNADemLwBOLKJg0z8g8ZJxiEo2n61hkwp6mxU1F3b_TzL2T2QIhAZjLje8_2jugdN_5TRB-sfx2uQdWQRLEyZFx8gPA8741-DidssSLF3QunYVu4KaejMP4Nka2EN0MwN47jHDyQ"
                alt="Architectural Rings"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-charcoal-ink/80 text-vellum-cream text-[9px] font-label-uppercase tracking-[0.2em] px-2 py-1">
                ARCHITECTURAL
              </div>
            </div>
            <div className="p-2">
              <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.16em] uppercase mb-1.5 flex items-center justify-between">
                <span>RINGS</span>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="font-body-sm text-on-surface-variant text-[13px] leading-snug">
                Architectural solitaires &amp; natural emerald bands
              </p>
            </div>
          </Link>

          {/* EARRINGS */}
          <Link
            href="/category/earrings"
            className="group block border border-border-hairline bg-linen-surface p-3 transition-all duration-300 hover:border-garnet-deep"
          >
            <div className="overflow-hidden aspect-[3/4] w-full bg-surface-container relative mb-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOIo98_Jr7T8nVz4XNbaXYbE_IJwcYxAePfU5LSuwj6Yxv61FC0GAEzPB51rq_fcZYI1O7dmsaG8xN_aosDITxxWxlquirPCYazejiJ-jRc-A8ex7ukwBifj-GGrFz1yRQ_D8jTWsgfwT_4oenfzbedjn8o4d691GYvIQreom4AraHCu3pMzKDySjVfVmffjvDqtk97yXWmuOCh-JkiyQLpEM8wNitVHc-jXJtexLD"
                alt="Sculptural Earrings"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-charcoal-ink/80 text-vellum-cream text-[9px] font-label-uppercase tracking-[0.2em] px-2 py-1">
                SCULPTURAL
              </div>
            </div>
            <div className="p-2">
              <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.16em] uppercase mb-1.5 flex items-center justify-between">
                <span>EARRINGS</span>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="font-body-sm text-on-surface-variant text-[13px] leading-snug">
                Sculptural drops, studs &amp; tourmaline hoops
              </p>
            </div>
          </Link>

          {/* PENDANTS & NECKLACES */}
          <Link
            href="/category/necklaces"
            className="group block border border-border-hairline bg-linen-surface p-3 transition-all duration-300 hover:border-garnet-deep"
          >
            <div className="overflow-hidden aspect-[3/4] w-full bg-surface-container relative mb-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl0kNHzOJVNNAnSdBJoF75Wzg9_-y3Fuje8trDWuEnAeeRDCxJ13ONDSJw67IPEZIL29dfnlrhufYNY3MaI-6l3o_triOUpyFwNANg-sZhqsuc7u42I-qPzddRnSQaJucTmKbbxWSQHEOhMgtA5vMMPLY4ilcMDoVN9s97wFQsfn4yG9wTgCxfy-xq2dBHx_cFs02wvArBryzdcPrBS3zY-nWHYnVZhx4e7rfp0FT5"
                alt="Heirloom Pendants"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-charcoal-ink/80 text-vellum-cream text-[9px] font-label-uppercase tracking-[0.2em] px-2 py-1">
                HEIRLOOM
              </div>
            </div>
            <div className="p-2">
              <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.16em] uppercase mb-1.5 flex items-center justify-between">
                <span>PENDANTS &amp; NECKLACES</span>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="font-body-sm text-on-surface-variant text-[13px] leading-snug">
                Fine collets, sapphires &amp; heirloom chains
              </p>
            </div>
          </Link>

          {/* BRACELETS & SETS */}
          <Link
            href="/category/sets"
            className="group block border border-border-hairline bg-linen-surface p-3 transition-all duration-300 hover:border-garnet-deep"
          >
            <div className="overflow-hidden aspect-[3/4] w-full bg-surface-container relative mb-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFxi3GkuaHXetiwujM371wVX0Jhlsgj7xUwuv2fjK38v7W1i5ID3qfMoDEVQhxzLUhEcKI4e3LyNh-blvioUGJOOEu0UaVtLy3mEjfsWX2B74odByiEegk3mRCPtquKfVvYUmyraWLdjXUOZtGOd9u_D92bwbKsWY6NflFAcaELg38CpOo_9Rhlorsww8SSDIfVNGGAL8-cgtHOjSMEG4vvic8Ey2qX1lToC_VJNUl"
                alt="Couture Suites"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-charcoal-ink/80 text-vellum-cream text-[9px] font-label-uppercase tracking-[0.2em] px-2 py-1">
                COUTURE
              </div>
            </div>
            <div className="p-2">
              <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.16em] uppercase mb-1.5 flex items-center justify-between">
                <span>BRACELETS &amp; SETS</span>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="font-body-sm text-on-surface-variant text-[13px] leading-snug">
                Couture suites designed for lifetime continuity
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. "FIND YOUR PIECE" EDITORIAL CAMPAIGN BLOCK */}
      <section className="w-full bg-vellum-cream border-b border-border-hairline" id="about">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 7-Col Imagery */}
            <div className="lg:col-span-7 relative">
              <div className="border border-border-hairline bg-linen-surface p-4 shadow-sm">
                <div className="aspect-[16/11] w-full overflow-hidden bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGiaTOUZonJR0dXwTj8fJwzrpYS_obsxyxjV7NsSUMCAiDP84zFpthbTeSoC3S3yBnDNjZuORpUOot1Uq71SNhBGqwM2Zib-fCX-WOrWH71iB7kBVIIDRvyQf4ovPj7txi7s1FsBAWl3vbdCuo5T4cxiNYjtCeKR8NuQeZvYwTdPGpVHX5kfL4DnZC1hc7I4NMvvzF5y6zANsX44WqZiuW2C9sFn_zWFJ44KP_hkYk"
                    alt="Jaipur Goldsmith setting emerald"
                    fill
                    className="object-cover filter contrast-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border-hairline pt-3 text-[10px] font-label-uppercase tracking-[0.2em] text-on-surface-variant">
                  <span>JAIPUR ATELIER &bull; BENCH STUDY #04</span>
                  <span>ARCHITECTURAL PRONG CALIBRATION</span>
                </div>
              </div>
            </div>

            {/* 5-Col Editorial Prose */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-4">
                <span className="font-label-uppercase text-garnet-deep text-[10px] tracking-[0.24em] font-semibold uppercase block">
                  SIMPLICITY IN DESIGN &bull; FOR YOUR LOVED ONES &bull; DAILY WEAR
                </span>
              </div>
              <h2 className="font-headline-lg text-charcoal-ink text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] mb-6">
                Find Your Piece
              </h2>
              <div className="space-y-4 mb-8 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
                <p className="font-headline-sm text-charcoal-ink text-xl italic leading-relaxed border-l-2 border-garnet-deep pl-4">
                  &ldquo;Oliver Stones began with one idea: jewelry shouldn&apos;t be something you buy once and forget. It should hold a memory.&rdquo;
                </p>
                <p>
                  Hand-set natural gemstones, architectural cuts, and quiet permanence. We eliminate the artificial premiums of heritage houses to engineer solid, tangible heirlooms meant for daily wear—resilient against time, water, and shifting trends.
                </p>
              </div>
              <div>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-xs tracking-[0.2em] font-medium transition-colors"
                >
                  <span>EXPLORE NEW ARRIVALS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURATED BESTSELLERS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-border-hairline">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-hairline gap-4">
          <div>
            <span className="font-label-uppercase text-secondary text-[11px] uppercase tracking-[0.22em] font-semibold block mb-2">
              PERMANENT EDITIONS
            </span>
            <h2 className="font-headline-lg text-primary text-3xl md:text-4xl">
              CURATED BESTSELLERS
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-label-uppercase text-[11px] text-bronze-accent tracking-[0.16em]">
              CERTIFIED ATELIER ISSUE
            </span>
            <Link
              href="/shop"
              className="font-label-uppercase text-xs tracking-[0.18em] font-semibold text-garnet-deep hover:underline"
            >
              VIEW ALL PIECES &rarr;
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((item) => {
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
      </section>

      {/* 5. BRAND PILLARS ("MADE TO BE KEPT") */}
      <section className="w-full bg-linen-surface border-b border-border-hairline py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-uppercase text-garnet-deep text-[10px] tracking-[0.25em] font-semibold uppercase block mb-3">
              VERIFIABLE ATELIER STANDARDS
            </span>
            <h2 className="font-headline-lg text-charcoal-ink text-3xl md:text-4xl">
              Made to Be Kept
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="border border-border-hairline bg-surface p-8 relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-border-hairline flex items-center justify-center text-garnet-deep mb-6 bg-linen-surface">
                  <Diamond className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  REAL GEMSTONES
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  Genuine stones, chosen for colour, clarity and distinctive character. No synthetic simulants or treated glass.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline">
                <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em]">ORIGIN CERTIFIED</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="border border-border-hairline bg-surface p-8 relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-border-hairline flex items-center justify-center text-garnet-deep mb-6 bg-linen-surface">
                  <Calendar className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  MADE FOR EVERY DAY
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  Dark luxury that works on a Tuesday as well as at a wedding. Wear it daily, wear it often without precious fragility.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline">
                <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em]">RESILIENT SETTINGS</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="border border-border-hairline bg-surface p-8 relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-border-hairline flex items-center justify-center text-garnet-deep mb-6 bg-linen-surface">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  6-MONTH REPLACEMENT
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  Not happy with your piece? We&apos;ll replace it within six months. No questions asked, backed by lifetime repair continuity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline">
                <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em]">IRONCLAD PLEDGE</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="border border-border-hairline bg-surface p-8 relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-border-hairline flex items-center justify-center text-garnet-deep mb-6 bg-linen-surface">
                  <Gift className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-label-uppercase text-charcoal-ink text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  READY TO GIFT &amp; KEEP
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  A bespoke care kit and storage box accompany every piece, making archival preservation effortless and immediate.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline">
                <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em]">ARCHIVAL BOXING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OLIVER PRIVILEGE MEMBERSHIP FEATURE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-border-hairline" id="privilege">
        <div className="border border-garnet-deep/30 bg-vellum-cream p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-bronze-accent px-3 py-1 bg-surface mb-6">
                <Stars className="w-4 h-4 text-garnet-deep" />
                <span className="font-label-uppercase text-charcoal-ink text-[10px] tracking-[0.22em] font-semibold">
                  OLIVER PRIVILEGE &bull; ₹149 / MONTH
                </span>
              </div>
              <h2 className="font-headline-lg text-charcoal-ink text-3xl md:text-5xl font-normal leading-tight mb-4">
                Permanent Client Privileges
              </h2>
              <p className="font-body-md text-on-surface-variant text-base mb-8 max-w-xl">
                An intimate patron subscription created for ongoing collectors and seasonal gifting.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-garnet-deep mt-1 shrink-0" />
                  <span className="font-body-md text-charcoal-ink text-sm">
                    <strong>5% off every eligible purchase</strong>, automatically applied at checkout without voucher codes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-garnet-deep mt-1 shrink-0" />
                  <span className="font-body-md text-charcoal-ink text-sm">
                    <strong>10% birthday month celebratory privilege</strong> unlocked across all high jewellery collections.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-garnet-deep mt-1 shrink-0" />
                  <span className="font-body-md text-charcoal-ink text-sm">
                    <strong>Complimentary expedited insured courier</strong> across all Indian pin-codes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-garnet-deep mt-1 shrink-0" />
                  <span className="font-body-md text-charcoal-ink text-sm">
                    <strong>Immediate access to vault releases</strong> and private Jaipur bespoke stone commissions.
                  </span>
                </li>
              </ul>
              <p className="font-label-micro text-on-surface-variant text-[10px] tracking-[0.16em] uppercase">
                * Non-stacking birthday privilege replaces standard 5%. Cancel anytime with instant confirmation.
              </p>
            </div>

            {/* Subscription Action Card */}
            <div className="lg:col-span-5 border border-border-hairline bg-surface p-8 shadow-sm">
              <div className="flex justify-between items-baseline mb-6 border-b border-border-hairline pb-4">
                <div>
                  <span className="font-label-micro text-on-surface-variant uppercase tracking-[0.2em] block">
                    ANNUAL PASS OR MONTHLY
                  </span>
                  <h3 className="font-headline-sm text-charcoal-ink text-2xl font-normal">
                    Patron Access
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-price-headline text-2xl font-semibold text-garnet-deep">
                    ₹149
                  </span>
                  <span className="text-xs text-on-surface-variant">/month</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 font-body-sm text-xs text-on-surface-variant">
                <div className="flex justify-between py-1.5 border-b border-border-hairline">
                  <span>Immediate 5% Savings Today</span>
                  <span className="font-medium text-charcoal-ink">Active on signup</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border-hairline">
                  <span>Bespoke Concierge Booking</span>
                  <span className="font-medium text-charcoal-ink">Direct WhatsApp Priority</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Renewal Terms</span>
                  <span className="font-medium text-charcoal-ink">Zero Lock-in Contract</span>
                </div>
              </div>

              <Link
                href="/account/register"
                className="w-full py-4 bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-xs tracking-[0.22em] uppercase font-semibold transition-colors block text-center"
              >
                JOIN PRIVILEGE — ₹149/MO
              </Link>
              <p className="text-center font-label-micro text-outline text-[9px] uppercase tracking-[0.18em] mt-3">
                SECURE ENCRYPTED RAZORPAY BILLING
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "SPOTTED ON #OLIVER" EDITORIAL SOCIAL & PRESS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-b border-border-hairline">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-hairline gap-4">
          <div>
            <span className="font-label-uppercase text-secondary text-[11px] uppercase tracking-[0.22em] font-semibold block mb-2">
              @WORN.TO.OUTLAST
            </span>
            <h2 className="font-headline-lg text-primary text-3xl md:text-4xl">
              SPOTTED ON #OLIVER
            </h2>
          </div>
          <p className="font-headline-sm italic text-on-surface-variant text-lg">
            &ldquo;Jewellery that holds your happiest moments.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* VIGNETTE 1 */}
          <div className="group border border-border-hairline bg-linen-surface p-3">
            <div className="aspect-square overflow-hidden bg-surface-container mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXGZe0S8fGhurA1JNEr13zst04RDc-L6K0uB8DC4remUcLhgsF2WBGHH8IenXpVNBnHBWUrEePoWg4y8Gamvn1gqbJM2BnQ5wSnLx5GvVYihW_LnXnrfVKLnZHYp6oZz4R4EbMrWTAwEZP3oGyzvdMNb2KICP9DcQyM39i3kSAFkTrSAJ3GG28ZFib4__J64yngCZCMLi0aOyNNhqmTNpjxfHvKszRZxdlo6iur-H8"
                alt="Mumbai Wedding Sangeet Vignette"
                fill
                className="object-cover filter contrast-[1.05] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-2">
              <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em] block mb-1">
                MUMBAI &bull; WEDDING SANGEET
              </span>
              <p className="font-body-md text-charcoal-ink text-sm italic mb-2">
                &ldquo;Wore the octagon emerald straight from work to my sister&apos;s celebration. It hasn&apos;t left my hand in three months.&rdquo;
              </p>
              <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-[0.18em] uppercase">
                — ANANYA M.
              </span>
            </div>
          </div>

          {/* VIGNETTE 2 */}
          <div className="group border border-border-hairline bg-linen-surface p-3">
            <div className="aspect-square overflow-hidden bg-surface-container mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnmDDPgubb8WP58Jdg3ZFyKyrRAM1bsuz1OYIzn6-3tl7PrSpYu8YiPIMyqsEjOLpVjK1XGw4Ih-bOMX1MfYjoqcmaKQf_8RQ5AJWECTgkO_YR4tpTGxRRx66WV_sT7TwW6mb-EX1dZHd_lTohzKuHwE_Tb9gQgyRPSegUJ4IZyToUZVs7tnUQL3r7izZFyD6rB9jCWMCUaJdb4uqKc8Sf3SjF2L3Ww8KMSER002wo"
                alt="New Delhi Daily Writing Vignette"
                fill
                className="object-cover filter contrast-[1.05] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-2">
              <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em] block mb-1">
                NEW DELHI &bull; DAILY WRITING
              </span>
              <p className="font-body-md text-charcoal-ink text-sm italic mb-2">
                &ldquo;True architectural weight. You can immediately feel the cold density of genuine Jaipur stone.&rdquo;
              </p>
              <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-[0.18em] uppercase">
                — ROHAN V.
              </span>
            </div>
          </div>

          {/* VIGNETTE 3 */}
          <div className="group border border-border-hairline bg-linen-surface p-3">
            <div className="aspect-square overflow-hidden bg-surface-container mb-4 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn41ZF9bHTfUxXsI7_PQr6wHbNSbwgcN6f8dXaEKq-J9n1kDG-EoJC-UUgh-pJ9CQhgrQjHD9VJtPMlWjlmLI2JtVkaJYecQTfEALB5u445jwudDRUvMFbH1GL901qYBLR7k_wj9mg_JtJuoj4SQgQM6ThcVWgsi5-NksYfpiD2XDE3y2P32Zytpw91Mn_aX7cULGQMTw4n7pG7pHsp6gXOrtQLqZ_PjO40VRq7eXJ"
                alt="Bengaluru Anniversary Vignette"
                fill
                className="object-cover filter contrast-[1.05] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-2">
              <span className="font-label-micro text-bronze-accent uppercase tracking-[0.2em] block mb-1">
                BENGALURU &bull; ANNIVERSARY HEIRLOOM
              </span>
              <p className="font-body-md text-charcoal-ink text-sm italic mb-2">
                &ldquo;Gifted the sapphire drops to celebrate ten years together. Beautifully boxed, completely unpretentious.&rdquo;
              </p>
              <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-[0.18em] uppercase">
                — PRIYA &amp; DEV S.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
