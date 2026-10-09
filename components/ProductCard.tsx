"use client";

import React from "react";

import Link from "next/link";

import { Product } from "@/lib/types";

import { toBanglaNumber } from "@/lib/utils";

import { ItemIcon } from "./ItemIcon";


interface ProductCardProps {


  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {



  const isPositive = product.changePercentage > 0;



  const isNegative = product.changePercentage < 0;

  // Format percentage nicely to 1 decimal place if needed
  const formattedPercentage = Math.abs(product.changePercentage).toFixed(1);




  return (


    <Link
      href={`/products/${product.slug}`}


      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
    >
      {/* Top Section: Icon + Title & Subtitle */}



      <div className="flex items-start space-x-3.5">



        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <ItemIcon name={product.name} size={28} />



        </div>

        {/* Title & Unit */}



        <div className="min-w-0 flex-1">

          <h3 className="text-base sm:text-lg font-bold text-[#1E293B] group-hover:text-[#008A45] transition-colors truncate">
            {product.name}



          </h3>
          <p className="text-xs text-[#64748B] mt-0.5 font-normal">



            {product.unit}
          </p>



        </div>
      </div>

      {/* Bottom Section: Current Price + Change Indicator */}



      <div className="mt-5 pt-3 flex items-end justify-between">

        
        <div>
          <span className="text-[11px] sm:text-xs text-[#94A3B8] block font-normal">
            আজকের দাম
          </span>


          <p className="text-lg sm:text-xl font-bold text-[#1E293B] leading-tight">
            {toBanglaNumber(product.currentPrice)} টাকা
          </p>
        </div>



        {/* Change Indicator / Badge */}



        <div>
          {isPositive && (
            <span className="inline-flex items-center text-xs font-semibold text-red-500 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
              ▲ {toBanglaNumber(formattedPercentage)}%
            </span>



          )}

          {isNegative && (



            <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
              ▼ {toBanglaNumber(formattedPercentage)}%


            </span>


          )}

          {!isPositive && !isNegative && (


            <span className="inline-flex items-center text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
              — ০.০%
            </span>


          )}


        </div>


      </div>



    </Link>



  );
}
