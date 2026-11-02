export type ProductCategory =
  | "rings"
  | "earrings"
  | "necklaces"
  | "pendants"
  | "sets";

export interface GemologicalSpecs {
  sku: string;
  metal: string;
  metalPurity: string;
  gemstone: string;
  origin: string;
  cut: string;
  carat: string;
  dimensions?: string;
  certification: string;
  settingType?: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ProductCategory;
  gemstone: string;
  preciousMetal: string;
  caratWeight?: string;
  sku: string;
  retailPrice: number;
  privilegePrice: number;
  stockCount: number;
  images: string[];
  availableSizes: string[];
  isSolitaire?: boolean;
  isFeatured?: boolean;
  description: string;
  specs: GemologicalSpecs;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  altPhone?: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
}

export type DeliveryMethod = "standard" | "express";

export interface OrderSummary {
  subtotal: number;
  privilegeDiscount: number;
  couponDiscount: number;
  couponCode?: string;
  deliveryCost: number;
  taxAmount: number;
  grandTotal: number;
}

