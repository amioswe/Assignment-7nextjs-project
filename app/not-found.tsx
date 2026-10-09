import React from "react";


import Link from "next/link";




import { Home, ArrowLeft } from "lucide-react";





export default function NotFound() {



  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">


      <div className="max-w-md w-full bg-white border border-gray-100 rounded-3xl p-8 text-center space-y-6 shadow-xl">
        {/* 404 Badge Illustration */}



        <div className="relative inline-block">



          <div className="w-24 h-24 bg-emerald-100/70 text-emerald-800 rounded-3xl flex items-center justify-center text-5xl mx-auto shadow-inner">
            🛒
          </div>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white font-black text-xs px-2.5 py-1 rounded-full border-2 border-white shadow-sm">
            ৪০৪
          </span>


        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900">পেজটি পাওয়া যায়নি!</h1>



          <p className="text-sm text-gray-600 leading-relaxed font-medium">


            দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা বিদ্যমান নেই অথবা সরানো হয়েছে।


          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">




          <Link


            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-2xl shadow-md shadow-emerald-600/20 transition-all text-sm"
          >
            <Home className="w-4 h-4" />



            <span>হোম পেজে ফিরে যান</span>



          </Link>



        </div>



      </div>



    </div>

    
  );




}
