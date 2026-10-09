"use client";

import React, { useState, useMemo } from "react";




import productsData from "@/data/products.json";



import categoriesData from "@/data/categories.json";

import { Product, Category } from "@/lib/types";


import { ProductCard } from "@/components/ProductCard";

import { sortProducts } from "@/lib/utils";
import { Search, Filter, ArrowUpDown } from "lucide-react";

import { ItemIcon } from "@/components/ItemIcon";
import { SortDropdown } from "@/components/SortDropdown";



export default function ProductsPage() {



  const products: Product[] = productsData as Product[];
  const categories: Category[] = categoriesData as Category[];

  const [searchQuery, setSearchQuery] = useState("");


  const [selectedCategory, setSelectedCategory] = useState<string>("all");


  const [sortOption, setSortOption] = useState<string>("default");

  const filteredProducts = useMemo(() => {



    let result = [...products];


    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q)
      );
    }

  
    if (selectedCategory !== "all") {


      
      result = result.filter((p) => p.category === selectedCategory);



    }

  
    result = sortProducts(result, sortOption);

    return result;
  }, [products, searchQuery, selectedCategory, sortOption]);




  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">



      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center mb-2">



            <span className="bg-[#E8F5E9] text-[#008A45] text-xs font-semibold px-3 py-1 rounded-full border border-[#D0EBD5]">
              নিত্যপ্রয়োজনীয় বাজার
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">



            সকল পণ্যের বাজার দর
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
            বাজারভিত্তিক বিস্তারিত, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায় দেখুন।
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-3">



        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Box */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />



            <input
              type="text"
              placeholder="পণ্যের নাম দিয়ে খুঁজুন (যেমন: পেঁয়াজ, চাল, তেল)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}



              className="w-full pl-9 pr-3 py-2 bg-[#F8FAF7] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-[#008A45] focus:ring-1 focus:ring-[#008A45] font-normal"
            />
          </div>

          {/* Category Dropdown Filter */}
          <div className="md:col-span-3 relative">


            <div className="flex items-center space-x-2">


              <Filter className="w-4 h-4 text-[#008A45] hidden sm:block" />



              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}




                className="w-full py-2 px-3 bg-[#F8FAF7] border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-[#1E293B] focus:outline-hidden focus:border-[#008A45] cursor-pointer"
              >
                <option value="all">সব ক্যাটাগরি</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}


              </select>



            </div>



          </div>

          {/* Sort Control */}
          <div className="md:col-span-3 flex items-center justify-end">


            <SortDropdown
              value={sortOption as any}
              onChange={(val) => setSortOption(val)}



            />
          </div>

        </div>

        {/* Quick Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pt-1">



          <button
            onClick={() => setSelectedCategory("all")}



            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#008A45] text-white shadow-xs"
                : "bg-gray-50 text-[#475569] hover:bg-gray-100 border border-gray-200/80"


            }`}
          >
            সব ({products.length})


          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}



              className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.slug
                  ? "bg-[#008A45] text-white shadow-xs"
                  : "bg-gray-50 text-[#475569] hover:bg-gray-100 border border-gray-200/80"
              }`}
            >
              <ItemIcon name={cat.name} size={14} />



              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product List Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">



          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-14 bg-white border border-gray-100 rounded-2xl space-y-3">



          <h3 className="text-base font-bold text-[#1E293B]">কোনো পণ্য পাওয়া যায়নি!</h3>
          <p className="text-xs text-[#64748B]">
            আপনার অনুসন্ধানের সাথে মিলে এমন কোনো পণ্য তালিকায় নেই।
          </p>
          <button
            onClick={() => {


              setSearchQuery("");


              setSelectedCategory("all");


              setSortOption("default");


            }}
            className="inline-flex items-center bg-[#008A45] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#00753b] transition-colors cursor-pointer"
          >
            ফিল্টার রিসেট করুন
          </button>


        </div>



      )}



    </div>



  );


}
