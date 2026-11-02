"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlist } = useStore();

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "SHOP ALL", href: "/shop" },
    { label: "RINGS", href: "/category/rings" },
    { label: "EARRINGS", href: "/category/earrings" },
    { label: "NECKLACES", href: "/category/necklaces" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT US", href: "/contact" },
    { label: "PRIVILEGE", href: "/privilege" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-vellum-cream border-b border-[rgba(113,0,1,0.1)] transition-colors shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between whitespace-nowrap">
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="xl:hidden text-charcoal-ink hover:text-garnet-deep p-1 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAvvY75mhoVMmBDTYsAIE8C87aUa5Zq8OU-Y8M1S66F3DS2qdwhQdhZK_3Kuqpbcn4NbyY9g85eow3bV5qETLrZ4xD_OcwyOPVVKRgQlgXXPuz_crwLg8B3uQwcnMMAEveiSXTI0uVeUMHCgygo8sNXvRIsfoIFPYrfZU0ZO9vNzD0R0la5h8zazyYfNhJvQJl1r4BnJIayYEIvNgg9S8dh9DvdNtHT6YzCOB6XUtmB8Z1LyZ_OQaFdA"
              alt="OLIVER Jewellery"
              width={140}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-uppercase text-[12px] font-medium tracking-[0.15em] text-charcoal-ink hover:text-garnet-deep transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Utility Buttons & Bag */}
        <div className="flex items-center gap-2 lg:gap-3 justify-end">
          <Link
            href="/search"
            aria-label="Search Collection"
            className="flex items-center justify-center h-9 w-9 text-charcoal-ink hover:text-garnet-deep transition-colors"
          >
            <Search className="w-[18px] h-[18px] stroke-[1.5]" />
          </Link>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex items-center justify-center h-9 w-9 text-charcoal-ink hover:text-garnet-deep transition-colors"
          >
            <Heart className="w-[18px] h-[18px] stroke-[1.5]" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 font-label-micro text-[10px] text-garnet-deep font-bold bg-white/80 px-1 rounded-full border border-garnet-deep/20">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            href="/account"
            aria-label="Account"
            className="flex items-center justify-center h-9 w-9 text-charcoal-ink hover:text-garnet-deep transition-colors"
          >
            <User className="w-[18px] h-[18px] stroke-[1.5]" />
          </Link>

          <Link
            href="/bag"
            className="flex items-center justify-center h-9 px-4 bg-garnet-deep hover:bg-garnet-wine text-vellum-cream font-label-uppercase text-[11px] font-semibold tracking-[0.16em] transition-colors shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
            <span className="truncate">BAG ({cartCount})</span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-linen-surface border-t border-border-hairline px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label-uppercase text-[12px] font-medium tracking-[0.15em] text-charcoal-ink hover:text-garnet-deep transition-colors uppercase py-2 border-b border-border-hairline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
