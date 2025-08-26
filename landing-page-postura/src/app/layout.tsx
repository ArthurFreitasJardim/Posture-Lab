// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posture Lab - Transforme sua postura, transforme sua vida.",
  description: "Treinos personalizados para corrigir sua postura e aliviar dores, criados por especialistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth"> 
      <body className={inter.className}>
        <Header /> 
        {children}
        <Footer /> 
      </body>
    </html>
  );
}