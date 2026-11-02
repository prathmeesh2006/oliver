import { ShopCatalogView } from "@/components/shop/ShopCatalogView";

export const metadata = {
  title: "Shop All Collections — OLIVER Jewellery",
  description:
    "Explore our complete repertory of natural gemstones, architectural solitaires, and couture suites handcrafted in Jaipur.",
};

export default function ShopPage() {
  return <ShopCatalogView initialCategory="all" pageTitle="All Collections" />;
}

