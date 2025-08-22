import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fatna Hathout, Frontend Developer",
  description: "Showcasing my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lora.variable} dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
