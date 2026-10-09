import React from "react";




interface ItemIconProps {



  name: string;
  className?: string;
  size?: number;
}

export function ItemIcon({ name, className = "w-6 h-6", size = 24 }: ItemIconProps) {
  const norm = name.toLowerCase();




  
  if (norm.includes("পেঁয়াজ") || norm.includes("onion") || norm.includes("peyaj")) {



    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"


        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}
      >


        {/* Onion bulb */}
        <circle cx="16" cy="18" r="10" fill="#F8B84E" stroke="#874D00" strokeWidth="1.75" />
        {/* Inner onion rings/stripes */}


        <path d="M12 18C12 14.5 14 11 16 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 18C20 14.5 18 11 16 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 26C16 20 16 12 16 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        {/* Onion sprout tip */}



        <path d="M16 10C16 6 15 3 14 2" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 9C17 6 19 4 20 3" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
      </svg>


    );
  }


  if (norm.includes("আদা") || norm.includes("ginger") || norm.includes("ada")) {


    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}


      >
        <rect x="7" y="6" width="18" height="20" rx="4" fill="#E6D3B3" stroke="#8A6B47" strokeWidth="1.75" />
        <line x1="11" y1="11" x2="21" y2="11" stroke="#BA9B77" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="16" x2="21" y2="16" stroke="#BA9B77" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="21" x2="17" y2="21" stroke="#BA9B77" strokeWidth="1.5" strokeLinecap="round" />
      </svg>


    );
  }

  if (norm.includes("বেগুন") || norm.includes("eggplant") || norm.includes("begun")) {


    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"


        xmlns="http://www.w3.org/2000/svg"
        className={className}


        width={size}
        height={size}
      >
        <ellipse cx="15" cy="19" rx="8" ry="10" transform="rotate(-15 15 19)" fill="#7C3AED" stroke="#4C1D95" strokeWidth="1.75" />
        <path d="M12 9C13 11 16 11 17 9C17.5 7.5 17 6 16 5" stroke="#15803D" strokeWidth="2" strokeLinecap="round" fill="#22C55E" />
        <path d="M18 5C19 3 20 2 21 2" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
      </svg>


    );
  }


  if (norm.includes("মাছ") || norm.includes("fish") || norm.includes("mach")) {


    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"


        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}


        height={size}
      >
        <path
          d="M6 16C10 11 20 10 24 16C20 22 10 21 6 16Z"


          fill="#38BDF8"
          stroke="#0284C7"
          strokeWidth="1.75"


        />
        <path d="M24 16L29 11V21L24 16Z" fill="#0EA5E9" stroke="#0284C7" strokeWidth="1.5" />
        <circle cx="10" cy="15" r="1.5" fill="#0C4A6E" />



        <path d="M15 13C16 15 16 17 15 19" stroke="#0284C7" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    );
  }


  if (norm.includes("ডিম") || norm.includes("egg") || norm.includes("dim")) {



    return (
      <svg
        viewBox="0 0 32 32"


        fill="none"
        xmlns="http://www.w3.org/2000/svg"


        className={className}
        width={size}
        height={size}
      >
        <path
          d="M16 4C11 4 8 13 8 20C8 25.5 11.5 28 16 28C20.5 28 24 25.5 24 20C24 13 21 4 16 4Z"



          fill="#FFFBEB"
          stroke="#78350F"


          strokeWidth="1.75"
        />


      </svg>


    );
  }


  if (norm.includes("মাখন") || norm.includes("butter") || norm.includes("makhon")) {



    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"


        xmlns="http://www.w3.org/2000/svg"



        className={className}


        width={size}
        height={size}
      >
        <polygon points="5,18 13,11 27,11 19,18" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
        <polygon points="5,18 19,18 19,25 5,25" fill="#EAB308" stroke="#A16207" strokeWidth="1.5" />


        <polygon points="19,18 27,11 27,18 19,25" fill="#CA8A04" stroke="#854D0E" strokeWidth="1.5" />


      </svg>


    );
  }


  if (norm.includes("মরিচ") || norm.includes("chili") || norm.includes("morich")) {





    return (


      <svg



        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}


        width={size}
        height={size}
      >
        <path


          d="M19 7C14 8 9 14 10 20C11 25 15 28 17 27C19 26 21 21 21 16C21 12 21 9 19 7Z"
          fill="#EF4444"
          stroke="#991B1B"


          strokeWidth="1.75"


        />
        <path d="M19 7C20 4 23 3 25 2" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />


        <path d="M16 7C18 6 21 7 21 9" stroke="#15803D" strokeWidth="1.75" fill="#22C55E" />
      </svg>
    );
  }

  // Garlic (রসুন)
  if (norm.includes("রসুন") || norm.includes("garlic") || norm.includes("rosun")) {


    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"



        className={className}


        width={size}
        height={size}
      >
        <path
          d="M16 6C13 10 7 15 7 20C7 25 11 27 16 27C21 27 25 25 25 20C25 15 19 10 16 6Z"


          fill="#FAF5FF"


          stroke="#7E22CE"


          strokeWidth="1.75"
        />
        <path d="M13 26C12 21 13 14 16 7" stroke="#A855F7" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M19 26C20 21 19 14 16 7" stroke="#A855F7" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M16 6V3" stroke="#84CC16" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

 

  if (norm.includes("আলু") || norm.includes("potato") || norm.includes("alu")) {





    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

        className={className}
        width={size}
        height={size}
      >
        <ellipse cx="16" cy="16" rx="10" ry="8" transform="rotate(-10 16 16)" fill="#D4A373" stroke="#8C5828" strokeWidth="1.75" />
        <circle cx="12" cy="14" r="0.75" fill="#8C5828" />

        <circle cx="18" cy="17" r="0.75" fill="#8C5828" />

        <circle cx="15" cy="20" r="0.75" fill="#8C5828" />

      </svg>
    );
  }

  // Rice (চাল)
  if (norm.includes("চাল") || norm.includes("rice") || norm.includes("chal")) {


    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
        className={className}
        width={size}
        height={size}
      >
        <path d="M6 15C6 22 10 26 16 26C22 26 26 22 26 15H6Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.75" />
        <ellipse cx="16" cy="15" rx="10" ry="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        <circle cx="13" cy="14" r="1" fill="#CBD5E1" />

        <circle cx="16" cy="13.5" r="1" fill="#CBD5E1" />

        <circle cx="19" cy="14" r="1" fill="#CBD5E1" />

      </svg>
    );
  }

  if (norm.includes("ডাল") || norm.includes("dal") || norm.includes("ছোলা")) {



    return (
      <svg
        viewBox="0 0 32 32"


        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}
      >
        <rect x="7" y="7" width="18" height="18" rx="3" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.75" />
        <circle cx="12" cy="13" r="2" fill="#F59E0B" />

        <circle cx="18" cy="13" r="2" fill="#EF4444" />

        <circle cx="15" cy="19" r="2" fill="#10B981" />

      </svg>


    );


  }




  if (norm.includes("তেল") || norm.includes("oil") || norm.includes("tel")) {


    return (
      <svg
        viewBox="0 0 32 32"

        fill="none"
        xmlns="http://www.w3.org/2000/svg"

        className={className}
        width={size}
        height={size}
      >
        <rect x="9" y="11" width="14" height="16" rx="3" fill="#F97316" stroke="#C2410C" strokeWidth="1.75" />
        <rect x="13" y="5" width="6" height="6" rx="1.5" fill="#FDBA74" stroke="#C2410C" strokeWidth="1.5" />
        <line x1="13" y1="17" x2="19" y2="17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Milk (দুধ)
  if (norm.includes("দুধ") || norm.includes("milk") || norm.includes("dudh")) {


    return (
      <svg
        viewBox="0 0 32 32"

        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}
      >
        <rect x="10" y="10" width="12" height="17" rx="3" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.75" />
        <path d="M12 10L16 4L20 10H12Z" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />



        <line x1="13" y1="18" x2="19" y2="18" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }


  if (norm.includes("মাংস") || norm.includes("meat") || norm.includes("mangso") || norm.includes("মুরগি")) {
    return (
      <svg


        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}
      >
        <path
          d="M8 17C6 11 11 6 17 7C22 8 24 13 23 18C22 22 17 24 12 23C9 22 8 20 8 17Z"
          fill="#F87171"

          stroke="#B91C1C"
          strokeWidth="1.75"
        />
        <circle cx="14" cy="14" r="3" fill="#FFFFFF" stroke="#B91C1C" strokeWidth="1.5" />



      </svg>
    );
  }


  if (norm.includes("ঢেঁড়স") || norm.includes("সবজি") || norm.includes("sobji")) {


    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}
      >
        <path d="M10 6L14 26L18 26L22 6C20 8 12 8 10 6Z" fill="#4ADE80" stroke="#15803D" strokeWidth="1.75" />
        <path d="M14 6C14 4 16 3 17 2" stroke="#166534" strokeWidth="2" strokeLinecap="round" />


      </svg>
    );
  }


  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"

      
      xmlns="http://www.w3.org/2000/svg"



      className={className}
      width={size}
      height={size}
    >


      <rect x="6" y="6" width="20" height="20" rx="6" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="4" fill="#64748B" />


    </svg>


  );

}

