"use client";

import React, { useState, useRef, useEffect } from "react";



import { Check } from "lucide-react";



export type SortValue = "default" | "price-asc" | "price-desc";



interface SortOption {


  label: string;


  value: SortValue;
}

const OPTIONS: SortOption[] = [


  { label: "ডিফল্ট", value: "default" },


  { label: "দাম: কম থেকে বেশি", value: "price-asc" },


  { label: "দাম: বেশি থেকে কম", value: "price-desc" },
];

interface SortDropdownProps {
  value: SortValue;


  onChange: (val: SortValue) => void;


}

export function SortDropdown({ value, onChange }: SortDropdownProps) {


  const [isOpen, setIsOpen] = useState(false);



  const dropdownRef = useRef<HTMLDivElement>(null);




  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {


      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)



      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);


    };
  }, []);

  const currentOption = OPTIONS.find((o) => o.value === value) || OPTIONS[0];



  return (
    <div className="flex items-center space-x-2" ref={dropdownRef}>


      <label

        htmlFor="sort-products"
        className="text-sm text-[#475569] font-medium select-none cursor-pointer"


        onClick={() => setIsOpen(!isOpen)}


      >
        সাজান
      </label>

      {/* Hidden standard select for form / test accessibility */}
      <select
        id="sort-products"
        value={value}


        onChange={(e) => onChange(e.target.value as SortValue)}


        className="sr-only"
        aria-label="সাজান"
      >
        {OPTIONS.map((opt) => (


          <option key={opt.value} value={opt.value}>


            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom Dropdown Trigger matching Image 2 */}
      <div className="relative">
        <button


          type="button"
          onClick={() => setIsOpen(!isOpen)}


          className={`inline-flex items-center justify-between space-x-1.5 px-3 py-1 bg-white border border-[#1E293B] rounded-lg text-sm font-semibold text-[#1E293B] transition-all cursor-pointer shadow-2xs ${
            isOpen ? "ring-2 ring-[#1E293B] ring-offset-1" : "hover:bg-gray-50"


          }`}
          aria-haspopup="listbox"


          aria-expanded={isOpen}
        >
          <span>{currentOption.label}</span>


          <span className="text-[10px] ml-1 select-none">
            {isOpen ? "▴" : "▾"}
          </span>
        </button>

        {/* Dropdown Menu popover matching Image 2 */}



        {isOpen && (
          <div className="absolute right-0 sm:left-0 top-full mt-1.5 min-w-[190px] bg-white rounded-2xl p-2 shadow-xl border border-gray-100 z-50 animate-in fade-in zoom-in-95 duration-100">
            <div className="space-y-0.5">


              {OPTIONS.map((opt) => {

                const isSelected = opt.value === value;
                return (
                  <button

                    key={opt.value}
                    type="button"


                    onClick={() => {


                      onChange(opt.value);


                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-xl text-left transition-colors cursor-pointer ${
                      isSelected

                        ? "text-[#1E293B] font-semibold bg-gray-50/80"


                        : "text-[#475569] hover:bg-gray-50 hover:text-[#1E293B]"


                    }`}
                  >
                    <span className="w-5 flex items-center justify-start text-[#1E293B]">



                      {isSelected ? (
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      ) : null}


                    </span>
                    <span className="flex-1">{opt.label}</span>


                  </button>
                );
              })}


            </div>



          </div>
        )}


      </div>


    </div>



  );
}
