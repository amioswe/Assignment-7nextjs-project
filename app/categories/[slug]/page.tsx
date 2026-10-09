"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";


import { useParams } from "next/navigation";




import Link from "next/link";



import categoriesData from "@/data/categories.json";



import productsData from "@/data/products.json";


import { Category, Product } from "@/lib/types";


import { ProductCard } from "@/components/ProductCard";


import { sortProducts, toBanglaNumber } from "@/lib/utils";


import { ArrowLeft, ArrowUpDown, Home } from "lucide-react";



import { ItemIcon } from "@/components/ItemIcon";

import { SortDropdown } from "@/components/SortDropdown";




function CategoryContent() {


  const params = useParams();


  const slug = params?.slug as string;




  const [isLoading, setIsLoading] = useState(true);



  const [sortOption, setSortOption] = useState<string>("default");




  const category: Category | undefined = (categoriesData as Category[]).find(



    (c) => c.slug === slug


  );

  const categoryProducts: Product[] = useMemo(() => {



    return (productsData as Product[]).filter((p) => p.category === slug);




  }, [slug]);

  const sortedProducts = useMemo(() => {



    return sortProducts(categoryProducts, sortOption);




  }, [categoryProducts, sortOption]);

  useEffect(() => {






    const timer = setTimeout(() => {




      setIsLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [slug]);




  if (!category) {
    return (

      <div className="max-w-xl mx-auto my-16 px-4 text-center">





        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs space-y-4">

          
          <h1 className="text-2xl font-bold text-[#1E293B]">



            ক্যাটাগরি পাওয়া যায়নি!
          </h1>
          <p className="text-[#64748B] text-xs">



            আপনি যে ক্যাটাগরিটি খুঁজছেন তা বিদ্যমান নয় অথবা সরানো হয়েছে।
          </p>
          <div className="pt-2">



            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-[#008A45] hover:bg-[#00753b] text-white font-bold px-5 py-2.5 rounded-xl shadow-xs text-xs"
            >
              <Home className="w-4 h-4" />



              <span>হোম পেজে ফিরে যান</span>


            </Link>



          </div>


          
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">


      {/* Back Button */}
      <div>
        <Link
          href="/categories"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1E293B] hover:text-[#008A45] bg-white border border-gray-200 px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>সব ক্যাটাগরি</span>
        </Link>
      </div>

      {/* Category Header Card */}



      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">



          <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0">
            <ItemIcon name={category.name} size={36} />



          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">


              <span className="bg-[#E8F5E9] text-[#008A45] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#D0EBD5]">
                {toBanglaNumber(categoryProducts.length)}টি পণ্য
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">



              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 max-w-xl">


              {category.description}
            </p>
          </div>
        </div>

        {/* Sort Control */}
        <div className="w-full sm:w-auto flex items-center justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
          <SortDropdown
            value={sortOption as any}
            onChange={(val) => setSortOption(val)}
          />
        </div>
      </div>

      {/* Product Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white border border-gray-100 rounded-2xl p-5 space-y-4 animate-pulse"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-xl" />
                <div className="space-y-1.5 flex-1">
                  <div className="w-2/3 h-4 bg-gray-200 rounded-md" />
                  <div className="w-1/3 h-3 bg-gray-200 rounded-md" />
                </div>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between">
                <div className="w-16 h-5 bg-gray-200 rounded-md" />
                <div className="w-12 h-5 bg-gray-200 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      ) : sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center space-y-3">
          <h3 className="text-lg font-bold text-[#1E293B]">


            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি!
          </h3>
          <p className="text-xs text-[#64748B]">
            সাময়িকভাবে এই ক্যাটাগরির অধীনে কোনো পণ্য নিবন্ধিত নেই।
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 bg-[#008A45] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#00753b] transition-colors text-xs"
            >
              <Home className="w-3.5 h-3.5" />



              <span>হোম পেজে ফিরে যান</span>



            </Link>



          </div>





        </div>



      )}

    </div>



  );
}

export default function CategoryDetailsPage() {



  return (
    <Suspense fallback={<div className="text-center py-20 font-bold text-gray-400">লোড হচ্ছে...</div>}>



      <CategoryContent />


    </Suspense>
  );
}
