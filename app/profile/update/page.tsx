"use client";

import React, { useState, useEffect } from "react";


import Link from "next/link";



import { useRouter } from "next/navigation";
import { useSession, updateUser } from "@/lib/auth-client";



import { toast } from "sonner";
import { User, ArrowLeft, Save, Loader2, Lock } from "lucide-react";

export default function UpdateProfilePage() {



  const router = useRouter();
  const { data: session, isPending } = useSession();



  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {




      toast.error("অনুগ্রহ করে লগইন করুন");



      router.push("/signin?redirect=/profile/update");


      
    } else if (session?.user) {
      setName(session.user.name || "");



    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white border border-gray-100 rounded-3xl space-y-6 animate-pulse">
        <div className="w-32 h-6 bg-gray-200 rounded-lg" />



        <div className="w-full h-12 bg-gray-200 rounded-2xl" />



      </div>
    );
  }

  if (!session?.user) {




    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white border border-gray-100 rounded-3xl text-center space-y-4 shadow-xl">


        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">


          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">সুরক্ষিত পাতা</h2>



        <p className="text-sm text-gray-600">
          তথ্য আপডেট করতে অ্যাকাউন্টে লগইন করুন।
        </p>
        <Link
          href="/signin?redirect=/profile/update"
          className="inline-block w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md transition-all"
        >
          লগইন পাতায় যান
        </Link>
      </div>
    );
  }





  const handleSubmit = async (e: React.FormEvent) => {



    e.preventDefault();

    if (!name.trim()) {
      toast.error("অনুগ্রহ করে একটি বৈধ নাম লিখুন!");



      return;
    }

    setLoading(true);

    try {

      const res = await updateUser({



        name: name.trim(),
      });

      if (res?.error) {
        toast.error("তথ্য আপডেট ব্যর্থ হয়েছে", {
          description: res.error.message || "অনুগ্রহ করে আবার চেষ্টা করুন।",
        });
      } else {
        toast.success("প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!", {



          description: "আপনার নতুন নাম সফলভাবে সংরক্ষিত হয়েছে।",
        });
        router.push("/profile");
        router.refresh();
      }
    } catch (err: any) {
      toast.error("তথ্য আপডেট করতে সমস্যা হয়েছে!");





    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl space-y-6">



        
        {/* Back Link */}
        <Link
          href="/profile"
          className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />




          <span>প্রোফাইলে ফিরে যান</span>




        </Link>

        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-gray-900">তথ্য আপডেট করুন</h1>




          <p className="text-xs text-gray-500">
            আপনার অ্যাকাউন্টের প্রদর্শন নাম (Name) পরিবর্তন করুন
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">




          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">আপনার নাম (Name)</label>



            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />



              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="নতুন নাম লিখুন..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center space-x-3">



            <Link
              href="/profile"
              className="w-1/2 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl text-center text-sm transition-colors"
            >
              বাতিল করুন
            </Link>



            <button
              type="submit"
              disabled={loading}
              className="w-1/2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />



                  <span>সেভ হচ্ছে...</span>



                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />




                  <span>তথ্য সেভ করুন</span>
                </>



              )}


            </button>



          </div>



        </form>



      </div>


    </div>


  );
}
