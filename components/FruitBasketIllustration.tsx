import React from "react";



export function FruitBasketIllustration({ className = "w-full max-w-[340px] sm:max-w-[420px] h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>


      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        <defs>
          {/* Subtle gradient for soft shadow */}


          <radialGradient id="basketShadow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">


            <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.85" />


            <stop offset="70%" stopColor="#E2E8F0" stopOpacity="0.5" />


            <stop offset="100%" stopColor="#F1F5F9" stopOpacity="0" />


          </radialGradient>
        </defs>

        {/* Ground Floor Shadow */}
        <ellipse cx="230" cy="345" rx="155" ry="18" fill="url(#basketShadow)" />




        {/* --- FRUITS & VEGETABLES (Behind Basket Front) --- */}



        {/* Purple Fruit / Plum (Leftmost) */}
        <g id="purple-fruit">
          <ellipse cx="140" cy="180" rx="30" ry="26" fill="#8B5CF6" />



          <path d="M142 155C146 150 152 147 156 148" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Red Apple / Tomato (Left-center) */}



        <g id="red-apple">
          <circle cx="178" cy="168" r="40" fill="#EF4444" />



          {/* Apple Stem & Green Leaf */}
          <path d="M180 128C182 120 188 114 195 110" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <path
            d="M182 122C194 116 205 118 208 126C200 132 188 130 182 122Z"

            fill="#22C55E"


          />
        </g>

        {/* Big Fresh Green Melon / Cabbage (Center) */}


        <g id="green-melon">
          <circle cx="240" cy="155" r="50" fill="#22C55E" />



          {/* Green Stem & Leaves */}
          <path d="M242 105C243 96 248 88 256 82" stroke="#166534" strokeWidth="4.5" strokeLinecap="round" />
          {/* Two Cute Green Leaves */}


          <path
            d="M242 102C256 94 270 98 274 108C262 114 248 112 242 102Z"
            fill="#15803D"
          />
          <path
            d="M239 104C226 97 214 100 210 110C222 115 234 113 239 104Z"
            fill="#16A34A"
          />
        </g>

        {/* Orange Citrus / Mandarin (Right-center) */}



        <g id="orange-fruit">
          <circle cx="295" cy="185" r="26" fill="#F97316" />



          {/* Stem & Leaf */}
          <path d="M295 160C298 154 304 150 310 151" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M298 157C308 152 316 154 318 160C312 164 304 163 298 157Z"
            fill="#22C55E"
          />
        </g>

        {/* Golden / Yellow Fruit or Squash (Far Right) */}



        <g id="yellow-fruit">
          <ellipse cx="328" cy="188" rx="28" ry="24" fill="#F59E0B" />



          <path d="M330 166C333 160 338 156 344 157" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M332 163C340 159 346 160 348 165C343 168 337 167 332 163Z"
            fill="#22C55E"
          />
        </g>

        {/* --- WOODEN BASKET --- */}



        <g id="wooden-basket">
          {/* Basket Body (Trapezoid) */}
          <path


            d="M125 198L145 330C146 336 151 340 157 340H303C309 340 314 336 315 330L335 198H125Z"
            fill="#8A4A1C"
          />

          {/* Vertical Wood Slats / Planks */}



          {/* Plank 1 */}



          <path
            d="M142 198L158 335H176L164 198H142Z"
            fill="#A75D28"
          />
          {/* Plank 2 */}
          <path
            d="M182 198L192 335H210L204 198H182Z"
            fill="#A75D28"
          />
          {/* Plank 3 */}
          <path
            d="M222 198L225 335H243L244 198H222Z"
            fill="#A75D28"
          />
          {/* Plank 4 */}
          <path
            d="M262 198L256 335H274L284 198H262Z"
            fill="#A75D28"
          />
          {/* Plank 5 */}
          <path
            d="M302 198L290 335H306L322 198H302Z"
            fill="#A75D28"
          />

          {/* Slat Dividers / Shadows */}

          <line x1="164" y1="198" x2="176" y2="335" stroke="#713B13" strokeWidth="4" />

          <line x1="204" y1="198" x2="210" y2="335" stroke="#713B13" strokeWidth="4" />

          <line x1="244" y1="198" x2="243" y2="335" stroke="#713B13" strokeWidth="4" />

          <line x1="284" y1="198" x2="274" y2="335" stroke="#713B13" strokeWidth="4" />


          {/* Top Wooden Rim / Lip of Basket */}



          <rect
            x="118"
            y="190"
            width="224"
            height="14"
            rx="5"
            fill="#9C5727"
            stroke="#713B13"
            strokeWidth="1.5"
          />

          {/* Bottom Rim of Basket */}




          <rect
            x="142"
            y="332"
            width="176"
            height="10"
            rx="4"
            fill="#713B13"
          />
        </g>


      </svg>



    </div>



  );
}
