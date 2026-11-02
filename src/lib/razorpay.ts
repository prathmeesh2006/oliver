import Razorpay from "razorpay";

export const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "rzp_secret_placeholder",
});

export interface CreateRazorpayOrderParams {
  amountInINR: number;
  receipt: string;
  notes?: Record<string, string>;
}

export async function createRazorpayOrder({
  amountInINR,
  receipt,
  notes = {},
}: CreateRazorpayOrderParams) {
  // Razorpay expects amounts in paise (1 INR = 100 paise)
  const amountInPaise = Math.round(amountInINR * 100);

  const order = await razorpay.orders.create({
    amount: amountInPaise,
    currency: "INR",
    receipt,
    notes,
  });

  return order;
}

