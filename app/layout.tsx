import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "Aronson Law LLC",
  description:
    "Sophisticated legal representation for individuals, families, and businesses throughout Maryland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
  <Navbar />

  <main>{children}</main>

  <Footer />
</body>
    </html>
  );
}