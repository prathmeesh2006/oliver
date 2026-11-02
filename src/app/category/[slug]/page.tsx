import { ShopCatalogView } from "@/components/shop/ShopCatalogView";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${title} Archive — OLIVER Jewellery`,
    description: `Curated ${title} collection handcrafted in Jaipur with certified natural gemstones.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryTitle =
    slug === "rings"
      ? "Architectural Solitaires & Rings"
      : slug === "earrings"
      ? "Sculptural Earrings & Drops"
      : slug === "necklaces"
      ? "Pendants & Heirloom Necklaces"
      : slug === "sets"
      ? "Couture Suites & Sets"
      : `${slug.toUpperCase()} Archive`;

  return (
    <ShopCatalogView
      initialCategory={slug}
      pageTitle={categoryTitle}
    />
  );
}

