import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aronsonlaw.com"),
  title: {
    default: "Aronson Law | Maryland Attorneys",
    template: "%s | Aronson Law",
  },
  description:
    "Sophisticated legal representation for individuals, families, and businesses throughout Maryland.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aronson Law",
    title: "Aronson Law | Maryland Attorneys",
    description:
      "Sophisticated legal representation for individuals, families, and businesses throughout Maryland.",
    url: "/",
    images: [
      {
        url: "/photography/annapolis-evening.png",
        width: 1536,
        height: 1024,
        alt: "Annapolis, Maryland at sunset",
      },
    ],
  },
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
