"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import categoriesData from "@/data/categories.json";
import { Category } from "@/lib/types";
import { ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
import { toast } from "sonner";
import { ItemIcon } from "./ItemIcon";

// Generate today's date in Bangla
function getBanglaDate(): string {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const banglaDays = [
    "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার",
  ];
  const banglaMonths = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
  ];

  const toBanglaNum = (n: number) =>
    String(n)
      .split("")
      .map((d) => banglaDigits[parseInt(d)])
      .join("");

  const now = new Date();
  const day = banglaDays[now.getDay()];
  const date = toBanglaNum(now.getDate());
  const month = banglaMonths[now.getMonth()];
  const year = toBanglaNum(now.getFullYear());

  return `${day}, ${date} ${month}, ${year}`;
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: Category[] = categoriesData as Category[];
  const banglaDate = useMemo(() => getBanglaDate(), []);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছে!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সাইন আউট করতে সমস্যা হয়েছে!");
    }
  };

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    if (pathname === "/") {
      const event = new CustomEvent("filter-category", { detail: slug });
      window.dispatchEvent(event);
      const element = document.getElementById("সব-পণ্য");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/categories/${slug}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">

      {/* Top Navbar Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">

          {/* Logo & Subtext Date */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#008A45] rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-[#1E293B] tracking-tight leading-tight block">
                বাজার দর
              </span>
              <p className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
                {banglaDate}
              </p>
            </div>
          </Link>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {isPending ? (
              <div className="w-20 h-8 bg-gray-100 animate-pulse rounded-full" />
            ) : session?.user ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/profile"
                  className="flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#1E293B] hover:text-[#008A45] px-3 py-1.5 rounded-lg border border-gray-200"
                >
                  <User className="w-4 h-4 text-[#008A45]" />
                  <span className="max-w-[120px] truncate">
                    {session.user.name || "প্রোফাইল"}
                  </span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-xs sm:text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>সাইন আউট</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/signin"
                  className="text-xs sm:text-sm font-semibold text-[#1E293B] hover:text-[#008A45] px-3 py-1.5 transition-colors"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-[#008A45] hover:bg-[#00753b] active:scale-95 text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full shadow-xs transition-all"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#008A45] hover:bg-gray-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Category Bar with active highlight */}
      <div className="border-t border-gray-100/80 bg-white py-1.5 px-4 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center space-x-5 sm:space-x-7 min-w-max">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`inline-flex items-center space-x-1.5 text-xs sm:text-sm font-medium py-1 px-2.5 rounded-md transition-all cursor-pointer group ${
                  isActive
                    ? "bg-[#008A45]/10 text-[#008A45] font-semibold border border-[#008A45]/20"
                    : "text-[#475569] hover:text-[#008A45] hover:bg-gray-50"
                }`}
              >
                <div className={`w-4 h-4 flex items-center justify-center transition-transform ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                  <ItemIcon name={cat.name} size={16} />
                </div>
                <span className={isActive ? "font-semibold" : "group-hover:font-semibold"}>
                  {cat.name}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008A45] inline-block ml-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="text-xs text-gray-500 font-medium">{banglaDate}</span>
            <div className="flex space-x-2">
              {session?.user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-[#1E293B] px-3 py-1.5 rounded-lg border border-gray-200 flex items-center space-x-1"
                  >
                    <User className="w-3 h-3 text-[#008A45]" />
                    <span className="max-w-[80px] truncate">{session.user.name || "প্রোফাইল"}</span>
                  </Link>
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleSignOut(); }}
                    className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg"
                  >
                    সাইন আউট
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-[#1E293B] px-3 py-1.5 rounded-lg border border-gray-200"
                  >
                    সাইন ইন
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-white bg-[#008A45] px-3 py-1.5 rounded-full"
                  >
                    সাইন আপ
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCategoryClick(cat.slug);
                  }}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all ${
                    isActive
                      ? "bg-emerald-100 ring-1 ring-[#008A45]/30"
                      : "bg-gray-50 hover:bg-emerald-50"
                  }`}
                >
                  <ItemIcon name={cat.name} size={20} />
                  <span className={`text-[11px] font-semibold text-[#1E293B] mt-1 ${isActive ? "text-[#008A45]" : ""}`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
