"use client";




import React, { useState, useEffect, useMemo } from "react";



import { Hero } from "@/components/Hero";



import { ProductCard } from "@/components/ProductCard";
import { SortDropdown, SortValue } from "@/components/SortDropdown";



import productsData from "@/data/products.json";


import categoriesData from "@/data/categories.json";



import { Product, Category } from "@/lib/types";
import { ItemIcon } from "@/components/ItemIcon";



import { sortProducts, toBanglaNumber } from "@/lib/utils";


import { Search } from "lucide-react";

export default function HomePage() {
  const products: Product[] = productsData as Product[];



  const categories: Category[] = categoriesData as Category[];




  const [selectedCategory, setSelectedCategory] = useState<string>("all");


  const [searchQuery, setSearchQuery] = useState<string>("");



  const [sortOption, setSortOption] = useState<SortValue>("default");

  const riserSlugs = ["peyaj", "ada", "begun", "rui-mach", "dim", "makhon"];
  const risers = riserSlugs
    .map((slug) => products.find((p) => p.slug === slug))


    .filter(Boolean) as Product[];





  const fallerSlugs = ["kachamorich", "rosun", "alu"];




  const fallers = fallerSlugs
    .map((slug) => products.find((p) => p.slug === slug))



    .filter(Boolean) as Product[];



  useEffect(() => {
    const handleFilterCategory = (e: Event) => {


      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedCategory(customEvent.detail);



      }
    };

    window.addEventListener("filter-category", handleFilterCategory);


    return () => {
      window.removeEventListener("filter-category", handleFilterCategory);
    };
  }, []);


  const displayedProducts = useMemo(() => {


    let result = products.filter((p) => {



      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;


      const matchesSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;



    });

    return sortProducts(result, sortOption);



  }, [products, selectedCategory, searchQuery, sortOption]);




  return (
    <div className="space-y-10 sm:space-y-14 pb-20">



      {/* Hero Banner Card */}
      <Hero />

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">



        
        {/* Section 1: আজ দাম বেড়েছে (Price Increased) */}



        <section className="space-y-5">


          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg sm:text-xl">▲</span>


            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
              আজ দাম বেড়েছে
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">


            {risers.map((product) => (
              <ProductCard key={product.id} product={product} />


            ))}
          </div>
        </section>

        {/* Section 2: আজ দাম কমেছে (Price Decreased) */}



        <section className="space-y-5">
          <div className="flex items-center space-x-2">


            <span className="text-emerald-600 font-bold text-lg sm:text-xl">▼</span>


            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">


              আজ দাম কমেছে
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">


            {fallers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Section 3: সব পণ্য (All Products & Sorting Section - Exact match to Screenshot 2 & 3) */}



        <section id="সব-পণ্য" className="space-y-4 pt-2 scroll-mt-28">


          <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
            সব পণ্য
          </h2>

          {/* Subheader: Total Count & Sort Control Dropdown (matching reference screenshot 2) */}



          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
            <p className="text-xs sm:text-sm text-[#64748B] font-medium" aria-live="polite">




              মোট {toBanglaNumber(displayedProducts.length)}টি পণ্য দেখানো হচ্ছে



            </p>

            <div className="flex items-center space-x-3">
              {/* Quick Search */}
              <div className="relative w-40 sm:w-52">



                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}



                  className="w-full pl-8 pr-2.5 py-1 bg-white border border-gray-200 rounded-lg text-xs focus:outline-hidden focus:border-[#008A45] font-medium"
                />
              </div>

              {/* Exact Sort Dropdown matching user reference screenshot 2 */}







              <SortDropdown value={sortOption} onChange={setSortOption} />







            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-1">








            <button
              onClick={() => setSelectedCategory("all")}








              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#008A45] text-white shadow-xs"
                  : "bg-white text-[#475569] hover:bg-gray-50 border border-gray-200/80"







              }`}
            >

              সব পণ্য ({toBanglaNumber(products.length)})
            </button>
            {categories.map((cat) => (
              <button



                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-[#008A45] text-white shadow-xs"








                    : "bg-white text-[#475569] hover:bg-gray-50 border border-gray-200/80"
                }`}
              >
                <ItemIcon name={cat.name} size={14} />







                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
              {displayedProducts.map((product) => (



                <ProductCard key={product.id} product={product} />



              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 space-y-2">



              <p className="text-base font-bold text-gray-700">কোনো পণ্য পাওয়া যায়নি</p>




              <p className="text-xs text-gray-500">অন্য কোনো নাম বা ক্যাটাগরি দিয়ে অনুসন্ধান করুন।</p>
              <button


                onClick={() => {
                  setSelectedCategory("all");



                  setSearchQuery("");
                  setSortOption("default");


                  
                }}
                className="mt-2 text-xs font-bold text-[#008A45] hover:underline cursor-pointer"
              >
                ফিল্টার রিসেট করুন
              </button>



            </div>


          )}



        </section>



      </div>

      
    </div>
  );
}
