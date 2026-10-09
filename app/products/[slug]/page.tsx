"use client";

import React, { useEffect, Suspense } from "react";



import { useParams, useRouter } from "next/navigation";








import { useSession } from "@/lib/auth-client";





import productsData from "@/data/products.json";



import { Product } from "@/lib/types";



import { toBanglaNumber } from "@/lib/utils";



import Link from "next/link";
import { ArrowLeft, Store, Lock } from "lucide-react";



import { toast } from "sonner";
import { ItemIcon } from "@/components/ItemIcon";




        function ProductDetailsContent() {




  const params = useParams();






  const router = useRouter();





  const slug = params?.slug as string;




  const { data: session, isPending } = useSession();



  const product: Product | undefined = (productsData as Product[]).find(
    (p) => p.slug === slug
  );

  useEffect(() => {
    if (!isPending && !session?.user) {





      toast.error("অনুগ্রহ করে লগইন করুন", {


        description: "পণ্যের বিস্তারিত বিবরণ দেখতে আপনার অ্যাকাউন্টে লগইন করতে হবে।",
      });
      router.push(`/signin?redirect=/products/${slug}`);





    }
  }, [session, isPending, router, slug]);





  if (isPending) {



    return (



      <div className="max-w-5xl mx-auto px-4 py-16 space-y-8 animate-pulse">



        <div className="w-32 h-6 bg-gray-200 rounded-lg" />


        <div className="bg-white p-8 rounded-3xl space-y-4">



          <div className="w-20 h-20 bg-gray-200 rounded-2xl" />


          <div className="w-64 h-8 bg-gray-200 rounded-lg" />


        </div>


      </div>


    );
  }

  if (!session?.user) {



    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white border border-gray-100 rounded-3xl text-center space-y-4 shadow-xs">


        <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
          <Lock className="w-6 h-6" />


        </div>
        <h2 className="text-xl font-bold text-[#1E293B]">সুরক্ষিত পাতা</h2>





        <p className="text-xs text-[#64748B]">


          এই পণ্যের বিস্তারিত বাজার তুলনা দেখতে অনুগ্রহ করে লগইন করুন।



        </p>
        <Link
          href={`/signin?redirect=/products/${slug}`}




          className="inline-block w-full py-2.5 bg-[#008A45] hover:bg-[#00753b] text-white font-bold rounded-xl shadow-xs transition-all text-xs"
        >
          লগইন পাতায় যান
        </Link>





      </div>



    );
  }

  if (!product) {




    return (
      <div className="max-w-xl mx-auto my-16 p-8 bg-white border border-gray-100 rounded-3xl text-center space-y-4 shadow-xs">
        <h2 className="text-xl font-bold text-[#1E293B]">পণ্যটি পাওয়া যায়নি</h2>






        <p className="text-xs text-[#64748B]">



          আপনার অনুরোধকৃত পণ্যের তথ্য ডাটাবেজে পাওয়া যায়নি।



        </p>
        <Link
          href="/products"
          className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#008A45] hover:bg-[#00753b] text-white font-bold rounded-xl text-xs transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />




          <span>সকল পণ্যের তালিকা</span>




        </Link>





      </div>


    );


  }

  const isPositive = product.changePercentage > 0;





  const isNegative = product.changePercentage < 0;





  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">






      {/* Back Button */}


      <div>
        <Link




          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1E293B] hover:text-[#008A45] bg-white border border-gray-200 px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />






          <span>হোম পেজে ফিরে যান</span>






        </Link>



      </div>

      {/* Product Main Card Header */}






      <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">


        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">


          <div className="flex items-center space-x-4">






            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shrink-0">
              <ItemIcon name={product.name} size={36} />






            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">






                <span className="text-xs font-semibold text-[#008A45] bg-[#E8F5E9] border border-[#D0EBD5] px-2.5 py-0.5 rounded-full">
                  {product.categoryName}


                </span>




                <span className="text-xs text-[#64748B]">





                  {product.unit}


                </span>



              </div>


              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">





                {product.name}



              </h1>


              <p className="text-xs text-[#64748B] mt-0.5">





                আজকের সর্বশেষ বাজার দর আপডেট সংক্রান্ত তথ্য

              </p>




            </div>


          </div>



          

          {/* Current Price Banner */}



          <div className="bg-[#008A45] text-white p-4 sm:p-5 rounded-2xl text-right w-full sm:w-auto shadow-xs">
            <span className="text-[11px] font-medium text-emerald-100 block">



              আজকের নির্ধারিত গড় দাম
            </span>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5">
              ৳{toBanglaNumber(product.currentPrice)}





            </div>
            <div className="mt-1">


              {isPositive && (

                <span className="inline-flex items-center text-xs font-bold text-red-200 bg-red-950/40 px-2 py-0.5 rounded-md">
                  ▲ {toBanglaNumber(product.changePercentage)}% বেড়েছে





                </span>
              )}
              {isNegative && (
                <span className="inline-flex items-center text-xs font-bold text-emerald-200 bg-emerald-900/60 px-2 py-0.5 rounded-md">
                  ▼ {toBanglaNumber(Math.abs(product.changePercentage))}% কমেছে


                </span>
              )}
              {!isPositive && !isNegative && (



                <span className="inline-flex items-center text-xs font-semibold text-gray-200 bg-black/20 px-2 py-0.5 rounded-md">
                  — অপরিবর্তিত
                </span>



              )}
            </div>


          </div>


        </div>



        {/* Price Summary Statistics Box */}





        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#1E293B] uppercase tracking-wider">
            সামগ্রিক বাজার পরিসংখ্যান (Price Summary)


          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">


            {/* Min Price */}
            <div className="bg-[#F8FAF7] border border-gray-100 rounded-2xl p-4 text-center space-y-1">
              <span className="text-xs font-semibold text-[#64748B] block">





                সর্বনিম্ন দাম (Minimum)

              </span>



              <p className="text-xl sm:text-2xl font-bold text-[#1E293B]">


                ৳{toBanglaNumber(product.minPrice)}
              </p>



              <p className="text-[11px] text-[#64748B]">{product.unit}</p>



            </div>

            {/* Max Price */}
            <div className="bg-[#F8FAF7] border border-gray-100 rounded-2xl p-4 text-center space-y-1">
              <span className="text-xs font-semibold text-[#64748B] block">



                সর্বোচ্চ দাম (Maximum)



              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#1E293B]">



                ৳{toBanglaNumber(product.maxPrice)}


              </p>
              <p className="text-[11px] text-[#64748B]">{product.unit}</p>




            </div>



            {/* Avg Price */}




            <div className="bg-[#F8FAF7] border border-gray-100 rounded-2xl p-4 text-center space-y-1">
              <span className="text-xs font-semibold text-[#64748B] block">



                গড় দাম (Average)
              </span>


              <p className="text-xl sm:text-2xl font-bold text-[#1E293B]">





                ৳{toBanglaNumber(product.avgPrice)}


              </p>
              <p className="text-[11px] text-[#64748B]">{product.unit}</p>



            </div>


          </div>


        </div>


      </div>



      {/* Market Prices Comparison */}



      <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">



        <div className="border-b border-gray-100 pb-3">





          <h2 className="text-lg font-bold text-[#1E293B]">


            বাজারভিত্তিক আজকের দাম
          </h2>
          <p className="text-xs text-[#64748B]">





            ঢাকা ও আশেপাশের প্রধান কাঁচাবাজারের সর্বশেষ খুচরা দর
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">






          {product.bazarPrices?.map((bazar, idx) => (


            <div
              key={idx}
              className="bg-[#F8FAF7] border border-gray-100 rounded-2xl p-3.5 flex flex-col justify-between hover:border-[#008A45] transition-colors"
            >
              <div className="flex items-center space-x-1.5 text-[#1E293B] mb-2">






                <Store className="w-3.5 h-3.5 text-[#008A45] shrink-0" />





                <span className="text-xs font-bold truncate">{bazar.name}</span>




              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-gray-200/60">






                <span className="text-[11px] text-[#64748B]">দর:</span>




                <span className="text-lg font-bold text-[#1E293B]">



                  ৳{toBanglaNumber(bazar.price)}



                </span>


              </div>


            </div>


          ))}
        </div>


      </div>



    </div>
  );
}

export default function ProductDetailsPage() {


  return (


    <Suspense fallback={<div className="text-center py-20 font-bold text-gray-400">লোড হচ্ছে...</div>}>
      <ProductDetailsContent />


    </Suspense>


  );


}

