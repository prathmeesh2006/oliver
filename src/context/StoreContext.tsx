"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem, DeliveryMethod } from "@/types/store.types";
import { PRODUCTS } from "@/lib/products";

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  isPrivilegeMember: boolean;
  setIsPrivilegeMember: (value: boolean) => void;
  couponCode: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (method: DeliveryMethod) => void;
  // Calculations
  cartCount: number;
  subtotal: number;
  privilegeDiscount: number;
  couponDiscount: number;
  deliveryCost: number;
  taxAmount: number;
  grandTotal: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  // Pre-seed with the 2 items shown in the Google Stitch Shopping Bag design
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "cart-item-1",
      product: PRODUCTS[0], // Jaipur Emerald Octagon Ring (₹18,900)
      quantity: 1,
      selectedSize: "14",
    },
    {
      id: "cart-item-2",
      product: PRODUCTS[1], // Royal Blue Sapphire Drop Earrings (₹24,500)
      quantity: 1,
      selectedSize: "Standard Drop",
    },
  ]);

  const [wishlist, setWishlist] = useState<Product[]>([PRODUCTS[2], PRODUCTS[3]]);
  const [isPrivilegeMember, setIsPrivilegeMember] = useState<boolean>(true);
  const [couponCode, setCouponCode] = useState<string | null>("WELCOME1000");
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("standard");

  // Load from localStorage if present
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("oliver_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem("oliver_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch {
      // Local storage disabled or SSR
    }
  }, []);

  // Save changes
  useEffect(() => {
    try {
      localStorage.setItem("oliver_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("oliver_wishlist", JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  const addToCart = (product: Product, size: string = "14", quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${product.id}`,
          product,
          quantity,
          selectedSize: size,
        },
      ];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const applyCoupon = (code: string) => {
    if (code.trim().toUpperCase() === "WELCOME1000") {
      setCouponCode("WELCOME1000");
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponCode(null);
  };

  // Calculations
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.retailPrice * item.quantity,
    0
  );

  // 5% privilege discount on subtotal if member
  const privilegeDiscount = isPrivilegeMember ? Math.round(subtotal * 0.05) : 0;

  // Coupon discount: ₹1,000 for WELCOME1000 (if cart has items)
  const couponDiscount =
    couponCode === "WELCOME1000" && subtotal > 0 ? 1000 : 0;

  // Delivery cost
  const deliveryCost = deliveryMethod === "express" ? 500 : 0;

  // 3% GST on jewellery (standard rate in India)
  const taxableBase = Math.max(0, subtotal - privilegeDiscount - couponDiscount);
  const taxAmount = Math.round(taxableBase * 0.03);

  const grandTotal = taxableBase + taxAmount + deliveryCost;

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isPrivilegeMember,
        setIsPrivilegeMember,
        couponCode,
        applyCoupon,
        removeCoupon,
        deliveryMethod,
        setDeliveryMethod,
        cartCount,
        subtotal,
        privilegeDiscount,
        couponDiscount,
        deliveryCost,
        taxAmount,
        grandTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

