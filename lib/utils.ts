import { clsx, type ClassValue } from "clsx";


import { twMerge } from "tailwind-merge";


import { Product } from "./types";

export function cn(...inputs: ClassValue[]) {


  return twMerge(clsx(inputs));


}



export function toBanglaNumber(num: number | string | undefined | null): string {


  if (num === undefined || num === null) return "";


  const str = num.toString();
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];



  return str.replace(/[0-9]/g, (digit) => banglaDigits[parseInt(digit, 10)]);
}



export function parseBanglaNumber(str: string): number {


  if (!str) return 0;
  const banglaDigitsMap: Record<string, string> = {


    "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4",


    "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9"
  };
  const engStr = str.replace(/[০-৯]/g, (digit) => banglaDigitsMap[digit] || digit);





  const parsed = parseFloat(engStr.replace(/[^0-9.-]/g, ""));


  return isNaN(parsed) ? 0 : parsed;
}


export function formatBanglaDate(date: Date = new Date()): string {



  const gregorianMonths = [



    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",



    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
  ];
  
  const banglaMonths = [
    "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন",


    "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"
  ];

  const day = date.getDate();


  const monthIndex = date.getMonth();



  const year = date.getFullYear();


  let banglaYear = year - 593;


  let banglaMonthIndex = monthIndex - 3; 



  let banglaDay = day - 14;


  if (banglaDay <= 0) {


    banglaDay += 30;


    banglaMonthIndex -= 1;
  }
  if (banglaMonthIndex < 0) {




    banglaMonthIndex += 12;


    banglaYear -= 1;
  }

  const banglaMonthName = banglaMonths[banglaMonthIndex % 12];


  const gregMonthName = gregorianMonths[monthIndex];



  const banglaDateStr = `${toBanglaNumber(banglaDay)} ${banglaMonthName}, ${toBanglaNumber(banglaYear)}`;
  const gregDateStr = `${toBanglaNumber(day)} ${gregMonthName}, ${toBanglaNumber(year)}`;




  return `${banglaDateStr} / ${gregDateStr}`;
}







export function sortProducts(
  products: Product[],



  sortType: "default" | "asc" | "desc" | "price-asc" | "price-desc" | string



): Product[] {



  const cloned = [...products];


  if (
    sortType === "asc" ||

    sortType === "price-asc" ||

    sortType === "low-to-high"
  ) {
    return cloned.sort((a, b) => a.currentPrice - b.currentPrice);



  }

  if (
    sortType === "desc" ||
    sortType === "price-desc" ||
    sortType === "high-to-low"
  ) {
    return cloned.sort((a, b) => b.currentPrice - a.currentPrice);



  }

  return cloned; 
}
