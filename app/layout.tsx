import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], style: "italic", variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "JOTTANINE | Official Artist Page",
  description: "Artist, Composer and Producer. Carrera's Produções.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${outfit.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
