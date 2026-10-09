"use client";

import React, { useEffect } from "react";




import Link from "next/link";



import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";



import { User, Mail, Calendar, Edit3, LogOut, Shield, Lock } from "lucide-react";



import { toast } from "sonner";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();



  useEffect(() => {
    if (!isPending && !session?.user) {
      toast.error("অনুগ্রহ করে লগইন করুন");
      router.push("/signin?redirect=/profile");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="max-w-2xl mx-auto my-16 p-8 bg-white border border-gray-100 rounded-3xl space-y-6 animate-pulse">
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto" />


        <div className="w-48 h-6 bg-gray-200 rounded-lg mx-auto" />


        <div className="w-64 h-4 bg-gray-200 rounded-lg mx-auto" />


      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white border border-gray-100 rounded-3xl text-center space-y-4 shadow-xl">
        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />


        </div>
        <h2 className="text-xl font-bold text-gray-900">সুরক্ষিত প্রোফাইল</h2>


        <p className="text-sm text-gray-600">
          প্রোফাইল দেখতে আপনার অ্যাকাউন্টে লগইন করুন।


        </p>
        <Link
          href="/signin?redirect=/profile"


          className="inline-block w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md transition-all"
        >
          লগইন পাতায় যান
        </Link>
      </div>
    );
  }

  const user = session.user;

  const handleSignOut = async () => {


    try {
      await signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছে!");


      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("সাইন আউট করতে ব্যর্থ হয়েছে!");



    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">


      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl space-y-8">
        
        {/* Profile Avatar Header */}
        <div className="text-center space-y-3">



          <div className="relative inline-block">



            {user.image ? (
              <img
                src={user.image}
                alt={user.name || "User Avatar"}



                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-100 shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-emerald-100 border-4 border-emerald-50 text-emerald-800 flex items-center justify-center text-4xl font-bold mx-auto shadow-inner">
                {user.name ? user.name.charAt(0).toUpperCase() : "👤"}




              </div>
            )}
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" />
          </div>




          <div>
            <h1 className="text-2xl font-black text-gray-900">{user.name || "নাম পাওয়া যায়নি"}</h1>
            <p className="text-xs text-emerald-700 font-semibold bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-200 mt-1">
              বাজার দর নিবন্ধিত ব্যবহারকারী
            </p>



          </div>
        </div>



        {/* User Details Grid */}



        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">


          <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">


            <User className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs text-gray-500 font-semibold block">সম্পূর্ণ নাম</span>




              <span className="text-sm font-bold text-gray-800">{user.name || "N/A"}</span>


            </div>
          </div>

          <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">
            <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs text-gray-500 font-semibold block">ইমেইল ঠিকানা</span>



              <span className="text-sm font-bold text-gray-800">{user.email}</span>


            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs text-gray-500 font-semibold block">অ্যাকাউন্ট স্ট্যাটাস</span>




              <span className="text-sm font-bold text-emerald-700">সক্রিয় (Active)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons: Update Profile (C3 Challenge) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">



          <Link
            href="/profile/update"
            className="w-full sm:w-1/2 flex items-center justify-center space-x-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md shadow-emerald-600/20 transition-all text-sm"
          >
            <Edit3 className="w-4 h-4" />



            <span>তথ্য আপডেট করুন</span>



          </Link>

          <button
            onClick={handleSignOut}



            className="w-full sm:w-1/2 flex items-center justify-center space-x-2 py-3.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-bold rounded-2xl transition-all text-sm"
          >

            <LogOut className="w-4 h-4" />



            <span>সাইন আউট করুন</span>



          </button>



        </div>



      </div>



    </div>




  );


  
}
