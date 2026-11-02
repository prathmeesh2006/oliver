export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          is_privilege_member: boolean;
          privilege_expires_at: string | null;
          birthday: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          is_privilege_member?: boolean;
          privilege_expires_at?: string | null;
          birthday?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          is_privilege_member?: boolean;
          privilege_expires_at?: string | null;
          birthday?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      addresses: {
        Row: {
          id: string;
          user_id: string;
          recipient_name: string;
          phone: string;
          address_line1: string;
          address_line2: string | null;
          landmark: string | null;
          pincode: string;
          city: string;
          state: string;
          country: string;
          is_default: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          recipient_name: string;
          phone: string;
          address_line1: string;
          address_line2?: string | null;
          landmark?: string | null;
          pincode: string;
          city: string;
          state: string;
          country?: string;
          is_default?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          recipient_name?: string;
          phone?: string;
          address_line1?: string;
          address_line2?: string | null;
          landmark?: string | null;
          pincode?: string;
          city?: string;
          state?: string;
          country?: string;
          is_default?: boolean;
          created_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          slug: string;
          title: string;
          subtitle: string | null;
          description: string;
          category: string;
          gemstone: string;
          precious_metal: string;
          carat_weight: string | null;
          sku: string;
          retail_price: number;
          privilege_price: number;
          stock_count: number;
          images: string[];
          available_sizes: string[];
          is_solitaire: boolean;
          is_featured: boolean;
          gemological_specs: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          subtitle?: string | null;
          description: string;
          category: string;
          gemstone: string;
          precious_metal: string;
          carat_weight?: string | null;
          sku: string;
          retail_price: number;
          privilege_price: number;
          stock_count?: number;
          images: string[];
          available_sizes?: string[];
          is_solitaire?: boolean;
          is_featured?: boolean;
          gemological_specs?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          subtitle?: string | null;
          description?: string;
          category?: string;
          gemstone?: string;
          precious_metal?: string;
          carat_weight?: string | null;
          sku?: string;
          retail_price?: number;
          privilege_price?: number;
          stock_count?: number;
          images?: string[];
          available_sizes?: string[];
          is_solitaire?: boolean;
          is_featured?: boolean;
          gemological_specs?: Json;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          user_id: string | null;
          contact_name: string;
          contact_email: string;
          contact_phone: string;
          shipping_address: Json;
          delivery_method: string;
          delivery_cost: number;
          subtotal: number;
          privilege_discount: number;
          coupon_discount: number;
          coupon_code: string | null;
          tax_amount: number;
          total_amount: number;
          payment_status: "pending" | "processing" | "paid" | "failed" | "cancelled";
          fulfillment_status: "order_placed" | "atelier_prep" | "insured_dispatch" | "delivered";
          razorpay_order_id: string | null;
          razorpay_payment_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_number: string;
          user_id?: string | null;
          contact_name: string;
          contact_email: string;
          contact_phone: string;
          shipping_address: Json;
          delivery_method: string;
          delivery_cost?: number;
          subtotal: number;
          privilege_discount?: number;
          coupon_discount?: number;
          coupon_code?: string | null;
          tax_amount?: number;
          total_amount: number;
          payment_status?: "pending" | "processing" | "paid" | "failed" | "cancelled";
          fulfillment_status?: "order_placed" | "atelier_prep" | "insured_dispatch" | "delivered";
          razorpay_order_id?: string | null;
          razorpay_payment_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          order_number?: string;
          user_id?: string | null;
          contact_name?: string;
          contact_email?: string;
          contact_phone?: string;
          shipping_address?: Json;
          delivery_method?: string;
          delivery_cost?: number;
          subtotal?: number;
          privilege_discount?: number;
          coupon_discount?: number;
          coupon_code?: string | null;
          tax_amount?: number;
          total_amount?: number;
          payment_status?: "pending" | "processing" | "paid" | "failed" | "cancelled";
          fulfillment_status?: "order_placed" | "atelier_prep" | "insured_dispatch" | "delivered";
          razorpay_order_id?: string | null;
          razorpay_payment_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          product_title: string;
          product_image: string;
          unit_price: number;
          quantity: number;
          selected_size: string | null;
          sku: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          product_title: string;
          product_image: string;
          unit_price: number;
          quantity: number;
          selected_size?: string | null;
          sku: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          product_title?: string;
          product_image?: string;
          unit_price?: number;
          quantity?: number;
          selected_size?: string | null;
          sku?: string;
        };
      };
    };
  };
};

