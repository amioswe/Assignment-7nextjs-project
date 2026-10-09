"use client";

import React from "react";


import { FruitBasketIllustration } from "./FruitBasketIllustration";



export function Hero() {
  const scrollToProducts = (e: React.MouseEvent) => {

    
    e.preventDefault();
    const element = document.getElementById("সব-পণ্য");







    if (element) {
      element.scrollIntoView({ behavior: "smooth" });









    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">






      <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 relative overflow-hidden">
        {/* Left Column Text Content */}
        <div className="flex-1 space-y-4 sm:space-y-5 text-center md:text-left z-10">



          {/* Date Pill Tag */}
          <div className="inline-flex items-center">
            <span className="bg-[#E8F5E9] text-[#008A45] text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full border border-[#D0EBD5]">
              শুক্রবার, ৯ অক্টোবর, ২০২৬


            </span>
          </div>

          {/* Heading */}



          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-snug">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}



          <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto md:mx-0">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Action Button */}



          <div className="pt-2">
            <a
              href="#সব-পণ্য"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center bg-[#008A45] hover:bg-[#00753b] active:scale-95 text-white font-bold px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm shadow-sm transition-all"
            >
              সব পণ্য দেখুন


            </a>


          </div>


        </div>



        {/* Right Column Illustration */}



        <div className="w-full md:w-[45%] flex items-center justify-center z-10">
          <FruitBasketIllustration className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px]" />
        </div>


      </div>

      
    </div>




  );
}
