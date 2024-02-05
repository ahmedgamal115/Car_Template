import { useState } from "react";
import { PiOctagonThin } from "react-icons/pi";
import { PiOctagonFill } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function OctagonShape({ dirction }) {
    const [btnHover,setBtnHover] = useState(false)
  return (
    <div className={``}>
        <div className="relative w-fit h-fit cursor-pointer"
      onMouseEnter={()=>{setBtnHover(true);}}
      onMouseLeave={()=>{setBtnHover(false);}}>
        <PiOctagonThin  className="sm:w-[50px] max-sm:w-[50px] lg:w-[70px] sm:h-[50px] max-sm:h-[50px] lg:h-[70px]
        fill-slate-500 z-20"/>
        <PiOctagonFill className={`sm:w-[50px] max-sm:w-[50px] lg:w-[70px] sm:h-[50px] max-sm:h-[50px] lg:h-[70px] z-10
          absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
          ${btnHover ? 'fill-master-blue' : 'fill-transparent'}`}/>
        {
          dirction === 'left' 
          ? <FaAngleLeft className="sm:w-[25px] max-sm:h-[25px] lg:w-[35px] sm:h-[25px] max-sm:w-[25px] lg:h-[35px] z-10 text-slate-100
          absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
          : <FaAngleRight className="sm:w-[25px] max-sm:h-[25px] lg:w-[35px] sm:h-[25px] max-sm:w-[25px] lg:h-[35px] z-10 text-slate-100
          absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        }
      </div>
    </div>
  )
}

export default OctagonShape