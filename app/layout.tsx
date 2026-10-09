import type { Metadata } from "next";



import { Hind_Siliguri } from "next/font/google";



import { Suspense } from "react";


import "./globals.css";
import { Navbar } from "@/components/Navbar";



import { PriceTicker } from "@/components/PriceTicker";


import { Footer } from "@/components/Footer";
import { ToasterProvider } from "@/components/ToasterProvider";



const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],



  subsets: ["bengali", "latin"],


  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {

  title: "বাজার দর (Bazar Dor) — আজকের নিত্যপ্রয়োজনীয় পণ্যের সঠিক দাম",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার বাজার দর — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({


  children,
}: {
  children: React.ReactNode;


}) {


  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} h-full antialiased`}



    >


      <body className="min-h-full flex flex-col bg-[#F4F6F1] text-[#1E293B] font-sans">



        <ToasterProvider />
        <Suspense fallback={<div className="h-20 bg-white" />}>



          <Navbar />



        </Suspense>
        <PriceTicker />


        <main className="flex-1">{children}</main>



        <Footer />



      </body>


    </html>


  );

  
}
