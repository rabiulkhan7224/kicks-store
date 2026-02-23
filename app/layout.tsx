import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import { Footer } from "@/components/home/Footer";
import { Providers } from "@/components/Providers";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "kicks store",
  description: "A simple e-commerce store built with Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${rubik.variable} ${openSans.variable} antialiased`}
      >
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
