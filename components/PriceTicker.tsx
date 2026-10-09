"use client";

import React from "react";

import Link from "next/link";

import productsData from "@/data/products.json";
import { Product } from "@/lib/types";

import { toBanglaNumber } from "@/lib/utils";
import { ItemIcon } from "./ItemIcon";




export function PriceTicker() {



  const products: Product[] = productsData as Product[];



  const prioritySlugs = [


    "dim",
    "dudh",
    "makhon",
    "ada",
    "rosun",
    "morich-gura",
    "batam-size-chal",
    "mosur-dal",
    "chola",
    "amon-dal",
    "sorishar-tel",
    "palm-tel",
    "ghani-bhanga-sorishar-tel",
    "kachamorich",
    "alu",
    "peyaj",
    "begun",
    "rui-mach",
  ];




  const tickerItems = products.filter((p) => prioritySlugs.includes(p.slug));



  const finalItems = tickerItems.length > 0 ? tickerItems : products;




  return (
    <div className="w-full bg-white border-y border-gray-200 text-[#334155] overflow-hidden py-2 select-none">
      <div className="flex w-max animate-marquee space-x-8 hover:[animation-play-state:paused]">



        {/* Double the list for infinite looping */}



        {[...finalItems, ...finalItems].map((item, idx) => {


          const isPositive = item.changePercentage > 0;


          const isNegative = item.changePercentage < 0;
          const pct = Math.abs(item.changePercentage).toFixed(1);




          return (



            <Link
              key={`${item.id}-${idx}`}
              href={`/products/${item.slug}`}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium whitespace-nowrap hover:text-[#008A45] transition-colors"
            >



              <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                <ItemIcon name={item.name} size={16} />
              </div>




              <span className="font-semibold text-[#1E293B]">{item.name}</span>
              <span className="text-[#475569]">



                {toBanglaNumber(item.currentPrice)} {item.unit.replace("প্রতি ", "টাকা/")}
              </span>

              {isPositive && (


                <span className="text-red-500 font-bold text-xs inline-flex items-center ml-1">
                  ▲ {toBanglaNumber(pct)}%
                </span>
              )}



              {isNegative && (
                <span className="text-emerald-600 font-bold text-xs inline-flex items-center ml-1">
                  ▼ {toBanglaNumber(pct)}%
                </span>
              )}




              {!isPositive && !isNegative && (
                <span className="text-gray-400 font-medium text-xs inline-flex items-center ml-1">
                  — ০.০%


                </span>
              )}



            </Link>
          );


        })}
      </div>


    </div>
    
  );
}
