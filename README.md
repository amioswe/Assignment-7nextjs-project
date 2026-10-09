 

বাজার দর BazarDor হলো একটি আধুনিক, সাড়া জাগানো এবং রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন যা বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের প্রতিদিনের বাজার দর, মূল্যের ওঠানামা এবং ঢাকা ও প্রধান শহরের স্থানীয় বাজারের দরদাম ট্র্যাক করতে সাহায্য করে।



 Key Features মূল বৈশিষ্ট্যসমূহ

1.  লাইভ প্রাইজ ট্র্যাকার (Marquee Price Ticker) হেডার সেকশনে স্বয়ংক্রিয় স্ক্রলিং মার্কি স্ট্রিপের মাধ্যমে আজকের পণ্যের দাম এবং শতকরা ওঠানামা (বাড়ল / কমল) দেখার সুবিধা।

2. দাম বৃদ্ধি ও হ্রাসের ফিল্টার (Risers & Fallers): হোম পেজে স্বয়ংক্রিয়ভাবে আজকের সবচেয়ে বেশি দাম বাড়া ৬টি পণ্য (Section A) এবং দাম কমা ৬টি পণ্য (Section B) প্রদর্শন।


3.  BetterAuth সিকিউর অথেন্টিকেশন: ইমেইল/পাসওয়ার্ড এবং Google/GitHub সোশ্যাল লগইনের মাধ্যমে নিরাপদ সাইন ইন, সাইন আপ এবং সুরক্ষিত প্রোডাক্ট ডিটেইলস ও প্রোফাইল রাউট।


4. বাজারভিত্তিক বিস্তারিত বিবরণ (Bazar-wise Breakdown): সংরক্ষিত প্রোডাক্ট পাতায় কারওয়ান বাজার, নিউ মার্কেট, মিরপুর বাজারসহ বিভিন্ন কাঁচাবাজারের আলাদা দামের তুলনামূলক তালিকা ও সামারি বক্স (সর্বনিম্ন, সর্বোচ্চ ও গড় দাম)।

5.  নিখুঁত বাংলা সংখ্যা ও তারিখ সাপোর্ট (Bangla Numerals & Calendar): দাম, পার্সেন্টেজ এবং আজকের তারিখ বাংলায় স্বয়ংক্রিয়ভাবে রূপান্তর (toBanglaNumber এবং formatBanglaDate) এবং নিউমেরিক ভ্যালুভিত্তিক নির্ভুল বাংলা সর্টিং ("কম থেকে বেশি" ও "বেশি থেকে কম")।

6.  প্রোফাইল ও তথ্য আপডেট ফিচার Profile & Live UpdateBetterAuth-এর authClient.updateUser({ name })` মেথড ইন্টিগ্রেশনের মাধ্যমে ব্যবহারকারীর নাম পরিবর্তন ও রিয়েলটাইম আপডেট।

 (প্রযুক্তি ব্যবহার)

-Framework: Next.js 16 (App Router, TypeScript)
- Styling: Tailwind CSS v4, Lucide React Icons
- Authentication: BetterAuth (Email/Password, Google & GitHub OAuth, MongoDB Adapter)
- Database:MongoDB
- Notifications: Sonner Toast Notifications
- Deployment: Vercel Ready (Dynamic routes and fallback handling)



 Route Structure রাউট স্ট্রাকচার
 Route Description Protection 

|  | হোম পেজ (Hero, Top Risers, Top Fallers, All Products Grid) |Public 


| products  সকল পণ্যের তালিকা (খোঁজা, ফিল্টার ও সর্টিং)  Public 

 products slug নির্দিষ্ট পণ্যের বাজারভিত্তিক বিস্তারিত দরদাম Protected Auth Guard 
 categories সকল পণ্য ক্যাটাগরির তালিকা | Public 
 categories slug ক্যাটাগরিভিত্তিক পণ্যের তালিকা ও নিউমেরিক সর্টিং Public 
 signin ইউজার লগইন পাতা (Email + Google/GitHub OAuth)  Public 
 signup  নতুন ইউজার রেজিস্ট্রেশন পাতা  Public 
 profile ব্যবহারকারীর প্রোফাইল তথ্য | **Protected (Auth Guard)** |
profile/update প্রোফাইলের নাম ও তথ্য আপডেট পাতা (BetterAuth) | **Protected (Auth Guard)** |
404 / Not Found কাস্টম বাংলা ৪০৪ পেজ | Public |

-

 Setup & Installation Guide (ইনস্টলেশন গাইড)

১. রিপোজিটরি ক্লোন ও ডিপেন্ডেন্সি ইনস্টল
npm install


 ২. এনভায়রনমেন্ট ভেরিয়েবল তৈরি (.env)
প্রজেক্টের রুট ডিরেক্টরিতে .env ফাইল তৈরি করুন এবং নিচের ভ্যালুগুলো দিন:
env
BETTER_AUTH_SECRET=Ll6un2vHBpdIH7qsnDhuGSMc999Lcltb
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_DB_URL=mongodb+srv:username:password@cluster0.mongodb.net/?appName=Cluster0

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### ৩. ডেভেলপমেন্ট সার্ভার চালু
```bash
npm run dev
```
ব্রাউজারে যান: http://localhost:3000



 Production Build
``bash
npm run build
npm run start



© 2026 **বাজার দর (BazarDor)** — সর্বস্বত্ব সংরক্ষিত।
