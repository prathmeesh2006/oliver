# OLIVER — High Jewellery & Natural Gemstones

Production-ready e-commerce platform for **OLIVER**, an ultra-luxury online jewellery maison handcrafted in Jaipur, India. Faithful implementation of the Google Stitch high-jewellery editorial design system.

---

## 🏛️ Brand & Visual Identity
- **Canvas Base:** Warm Vellum Cream (`#F4EFDF` / `#fef9e9`) replacing sterile digital whites
- **Brand Garnet:** Deep Garnet (`#710001`) and Garnet Wine (`#710014`)
- **Accents:** Archival Charcoal Ink (`#121212`) & Bronze Foil (`#C5A880`)
- **Geometry:** Razor Architecture (`0px` border-radius) mirroring cut-glass lookbooks
- **Typography:** Classical serif (`EB Garamond`) paired with architectural tracked sans-serif (`Montserrat`)
- **Currency:** Indian Rupee (`₹`) with high-contrast legibility

---

## 🛠️ Technology Stack
- **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS with custom design system tokens
- **Database & Auth:** [Supabase](https://supabase.com/) (PostgreSQL with Row-Level Security)
- **Payment Gateway:** [Razorpay](https://razorpay.com/) (UPI, Cards, NetBanking, Wallets)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Architecture

```
d:\oli\
├── src/
│   ├── app/                                 # Next.js App Router
│   │   ├── globals.css                      # Global styles, fonts & tokens
│   │   ├── layout.tsx                       # Root layout with fonts, AnnouncementBar, Navbar & Footer
│   │   └── page.tsx                         # Editorial Homepage
│   ├── components/                          # Reusable UI components
│   │   ├── layout/                          # Layout components
│   │   │   ├── AnnouncementBar.tsx          # Top ticker / notification ribbon
│   │   │   ├── Navbar.tsx                   # Main luxury navigation with responsive drawer
│   │   │   └── Footer.tsx                   # Atelier footer & newsletter subscription
│   │   ├── ui/                              # Atoms & micro-components
│   │   ├── product/                         # Product cards, gallery, specs & size picker
│   │   └── cart/                            # Valuation ledger, item row & price summary
│   ├── lib/                                 # Shared utilities & SDK clients
│   │   ├── supabase/                        # Supabase SSR client & server helpers
│   │   │   ├── client.ts                    # Browser client
│   │   │   ├── server.ts                    # Server client (cookies async)
│   │   │   └── middleware.ts                # Session refreshing
│   │   ├── razorpay.ts                      # Server-side Razorpay order creator
│   │   └── utils.ts                         # Formatting (INR) & class merger
│   ├── types/                               # TypeScript declarations
│   │   ├── database.types.ts                # Supabase schema definitions
│   │   └── store.types.ts                   # Products, cart, order & address interfaces
│   └── middleware.ts                        # Route protection & auth session handling
├── stitch_oliver_luxury_jewelry_storefront/ # Visual references from Google Stitch
├── .env.example                             # Environment variable template
├── .env.local                               # Local development environment overrides
├── tailwind.config.ts                       # Custom colors, fonts & spacing tokens
├── tsconfig.json                            # TypeScript configuration
└── package.json
```

---

## 📋 Comprehensive Page Inventory & Implementation Plan

Based on the 20 inspected Google Stitch screens:

| Route | Page Name | Stitch Source Directory |
|---|---|---|
| `/` | Editorial Homepage | `oliver_desktop_homepage` |
| `/shop` | Shop All & Filterable Catalog | `oliver_discover_shop_all_products` |
| `/category/[slug]` | Category Collections (Rings, Earrings, etc.) | `oliver_discover_shop_all_products` |
| `/products/[slug]` | Product Detail Page (PDP) | `oliver_the_jaipur_emerald_octagon_ring_product_details` |
| `/bag` | Shopping Bag & Valuation Ledger | `oliver_luxury_shopping_bag_valuation_ledger` |
| `/checkout` | Checkout with Razorpay | `oliver_simple_checkout_page_with_razorpay` |
| `/order-confirmation` | Order Confirmation & Receipt | `oliver_order_confirmation_page` |
| `/wishlist` | Curated Wishlist | `oliver_my_wishlist` |
| `/search` | Search Archive | `oliver_search_our_collection` |
| `/account/login` | Patron Login | `oliver_create_account` |
| `/account/register` | Create Maison Account | `oliver_create_account` |
| `/account/reset-password` | Password Recovery | `oliver_reset_password` |
| `/account` | Minimal Account Dashboard | `oliver_minimal_my_account_dashboard` |
| `/orders` | Order History | `oliver_my_orders` |
| `/orders/[id]` | Order Tracking & Details | `oliver_order_details` |
| `/about` | Our Story & Jaipur Atelier | `oliver_our_story_about_us` |
| `/contact` | Client Care & Concierge | `oliver_contact_us_online_client_care` |
| `/shipping-policy` | Insured Shipping Policy | `oliver_shipping_policy` |
| `/returns-policy` | Returns & Exchange Policy | `oliver_returns_refunds_policy` |
| `/terms-and-conditions` | Terms & Conditions | `oliver_terms_conditions` |
| `/privacy-policy` | Privacy Policy | `oliver_privacy_policy` |

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your keys:
```bash
cp .env.example .env.local
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production
```bash
npm run build
```

