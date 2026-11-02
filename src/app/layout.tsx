import type { Metadata } from "next";
import { EB_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoreProvider } from "@/context/StoreContext";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OLIVER — High Jewellery & Natural Gemstones",
  description:
    "Handcrafted in Jaipur with natural gemstones and architectural discipline. Built for everyday reverence. Real gemstone jewellery for the moments you want to keep.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${montserrat.variable}`}>
      <body className="bg-surface text-on-surface antialiased font-sans flex flex-col min-h-screen">
        <StoreProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
