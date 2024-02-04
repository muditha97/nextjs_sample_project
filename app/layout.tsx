import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/index";

export const metadata: Metadata = {
  title: "ABC Showroom",
  description: "Best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
