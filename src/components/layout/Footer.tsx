"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-charcoal-ink text-linen-surface pt-16 pb-12 border-t border-border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-white mb-4">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAvvY75mhoVMmBDTYsAIE8C87aUa5Zq8OU-Y8M1S66F3DS2qdwhQdhZK_3Kuqpbcn4NbyY9g85eow3bV5qETLrZ4xD_OcwyOPVVKRgQlgXXPuz_crwLg8B3uQwcnMMAEveiSXTI0uVeUMHCgygo8sNXvRIsfoIFPYrfZU0ZO9vNzD0R0la5h8zazyYfNhJvQJl1r4BnJIayYEIvNgg9S8dh9DvdNtHT6YzCOB6XUtmB8Z1LyZ_OQaFdA"
                alt="OLIVER"
                width={130}
                height={32}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-body-sm text-linen-surface/70 text-sm max-w-sm leading-relaxed mb-6">
              Handcrafted in Jaipur with natural gemstones and architectural discipline. Built for everyday reverence. Real gemstone jewellery for the moments you want to keep.
            </p>
            <div className="text-[10px] font-label-uppercase text-bronze-accent tracking-[0.2em]">
              JAIPUR &bull; RAJASTHAN &bull; EST. 2021
            </div>
          </div>

          {/* Col 2: High Jewellery & Explore */}
          <div>
            <h4 className="font-label-uppercase text-white text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              EXPLORE &amp; COMPANY
            </h4>
            <ul className="space-y-2.5 font-body-sm text-xs text-linen-surface/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/category/rings" className="hover:text-white transition-colors">
                  Emerald Solitaires
                </Link>
              </li>
              <li>
                <Link href="/category/earrings" className="hover:text-white transition-colors">
                  Sapphire Drops
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Standards & Client Care */}
          <div>
            <h4 className="font-label-uppercase text-white text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              CLIENT CARE
            </h4>
            <ul className="space-y-2.5 font-body-sm text-xs text-linen-surface/70">
              <li>
                <Link href="/returns-policy" className="hover:text-white transition-colors">
                  Return &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-white transition-colors">
                  Insured Courier Track
                </Link>
              </li>
              <li>
                <Link href="/privilege" className="hover:text-white transition-colors">
                  Privilege Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Private Releases */}
          <div>
            <h4 className="font-label-uppercase text-white text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              VAULT DISPATCH
            </h4>
            <p className="font-body-sm text-linen-surface/70 text-xs mb-3">
              Receive private notifications of Jaipur batch gemstone acquisitions.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                className="bg-white/5 border border-white/20 text-white placeholder:text-white/40 text-xs px-3 py-2.5 focus:outline-none focus:border-bronze-accent"
                placeholder="Your email address"
                type="email"
                required
              />
              <button
                className="bg-garnet-deep hover:bg-garnet-wine text-white font-label-uppercase text-[10px] tracking-[0.2em] uppercase py-2.5 font-medium transition-colors"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Hairline Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-linen-surface/50 text-[10px] font-label-uppercase tracking-[0.16em] gap-4">
          <div>
            &copy; {new Date().getFullYear()} OLIVER STONES &bull; ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-6">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              TERMS OF SALE
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              GEMOLOGICAL DISCLOSURE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

