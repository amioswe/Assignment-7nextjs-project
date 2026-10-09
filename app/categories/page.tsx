import React from "react";



import Link from "next/link";




import categoriesData from "@/data/categories.json";


import productsData from "@/data/products.json";





import { Category, Product } from "@/lib/types";


import { toBanglaNumber } from "@/lib/utils";


import { ArrowRight } from "lucide-react";


import { ItemIcon } from "@/components/ItemIcon";




export default function CategoriesPage() {



  
  const categories: Category[] = categoriesData as Category[];


  const products: Product[] = productsData as Product[];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">



      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">


        <div className="inline-flex items-center mb-2">
          <span className="bg-[#E8F5E9] text-[#008A45] text-xs font-semibold px-3 py-1 rounded-full border border-[#D0EBD5]">
            বিভাগভিত্তিক বাজার
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">


          পণ্য ক্যাটাগরি সমূহ
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">


          আপনার প্রয়োজনীয় ক্যাটাগরি বেছে নিয়ে সংশ্লিষ্ট পণ্যের বর্তমান বাজার দর যাচাই করুন।
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">


        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.slug).length;



          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}



              className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">


                <div className="flex items-center justify-between">


                  
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ItemIcon name={cat.name} size={32} />



                  </div>
                  <span className="text-xs font-semibold text-[#008A45] bg-[#E8F5E9] border border-[#D0EBD5] px-2.5 py-0.5 rounded-full">
                    {toBanglaNumber(count)}টি পণ্য
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#008A45] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5 line-clamp-2">



                    {cat.description}


                  </p>


                </div>


              </div>



              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#008A45] group-hover:underline">
                <span>দরদাম দেখুন</span>






                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>




            </Link>


          );


        })}


      </div>


    </div>


  );


}
