"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getBanglaErrorMessage = (msg?: string) => {
    if (!msg) return "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়!";
    const lower = msg.toLowerCase();
    if (
      lower.includes("invalid email or password") ||
      lower.includes("invalid credentials") ||
      lower.includes("credential")
    ) {
      return "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়! সঠিক তথ্য দিয়ে পুনরায় চেষ্টা করুন।";
    }
    if (lower.includes("user not found")) {
      return "এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট খুঁজে পাওয়া যায়নি। অনুগ্রহ করে সাইন আপ করুন।";
    }
    return msg;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await signIn.email({
        email,
        password,
      });

      if (res?.error) {
        const banglaMsg = getBanglaErrorMessage(res.error.message);
        setErrorMessage(banglaMsg);
        toast.error("সাইন ইন ব্যর্থ হয়েছে", {
          description: banglaMsg,
        });
      } else {
        toast.success("সফলভাবে লগইন হয়েছে!", {
          description: "বাজার দর অ্যাপ্লিকেশনে আপনাকে স্বাগতম।",
        });
        router.push(redirectUrl);
        router.refresh();
      }
    } catch {
      const fallbackMsg = "লগইন করতে সমস্যা হয়েছে! ইন্টারনেট সংযোগ বা তথ্য যাচাই করুন।";
      setErrorMessage(fallbackMsg);
      toast.error(fallbackMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "github") => {
    try {
      await signIn.social({
        provider,
        callbackURL: redirectUrl,
      });
    } catch {
      toast.error(`${provider} দিয়ে সাইন ইন করতে ব্যর্থ হয়েছে`);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4 space-y-6">
      {/* Center Heading & Subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
          সাইন ইন
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B]">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        
        {/* Error message in clean Bangla */}
        {errorMessage && (
          <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold leading-relaxed">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#1E293B] block">
              ইমেইল
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:border-[#008A45] focus:ring-1 focus:ring-[#008A45] font-normal text-[#1E293B]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#1E293B] block">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              required
              placeholder="কমপক্ষে ৮ অক্ষর"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-hidden focus:border-[#008A45] focus:ring-1 focus:ring-[#008A45] font-normal text-[#1E293B]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#008A45] hover:bg-[#00753b] active:scale-98 text-white font-bold rounded-lg shadow-2xs transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-1" />
                <span>অপেক্ষা করুন...</span>
              </>
            ) : (
              <span>সাইন ইন</span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2.5 text-[#94A3B8] font-normal">অথবা</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center space-x-1.5 py-2 px-2 border border-gray-200 rounded-lg text-xs font-semibold text-[#334155] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="truncate">Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin("github")}
            className="flex items-center justify-center space-x-1.5 py-2 px-2 border border-gray-200 rounded-lg text-xs font-semibold text-[#334155] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 text-gray-900 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="truncate">GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Account Link */}
        <div className="pt-2 text-center">
          <p className="text-xs text-[#64748B]">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="text-[#008A45] font-semibold hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>

      {/* Return Home Link */}
      <div className="text-center">
        <Link
          href="/"
          className="text-xs text-[#64748B] hover:text-[#008A45] transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-medium text-gray-400">লোড হচ্ছে...</div>}>
      <SignInContent />
    </Suspense>
  );
}
