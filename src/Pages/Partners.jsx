import { SiBmw } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";





const Partners = () => {
  return (
    <div className="relative w-full">
        <div className="w-full flex flex-wrap items-center justify-evenly max-lg:flex-row lg:flex-row sm:flex-col sm:gap-5">
          <div className="flex-1 text-slate-300 lg:max-w-sm sm:max-w-full">
            <h2 className="font-bold text-xl font-textFont leading-10 lg:mb-7 sm:mb-3">FINANCING MADE EASY</h2>
            <p className="font-textFont2 text-lg whitespace-pre-line leading-7">Distillery succulents twee leggings thundercats. Shabby chic ramps gochujang pickled.
               Etsy offal literally fingerstache pickled, pork belly mlkshk irony tumeric.</p>
          </div>
          <div className="flex-1 text-slate-300 lg:max-w-sm sm:max-w-full">
            <h2 className="font-bold text-xl font-textFont leading-10 lg:mb-7 sm:mb-3"> TRUSTED BY THOUSANDS</h2>
            <p className="font-textFont2 text-lg whitespace-pre-line leading-7">Distillery succulents twee leggings thundercats. Shabby chic ramps gochujang pickled.
               Etsy offal literally fingerstache pickled, pork belly mlkshk irony tumeric.</p>
          </div>
          <div className="flex-1 text-slate-300 lg:max-w-sm sm:max-w-full">
            <h2 className="font-bold text-xl font-textFont leading-10 lg:mb-7 sm:mb-3"> WIDE RANGE OF BRANDS</h2>
            <p className="font-textFont2 text-lg whitespace-pre-line leading-7">Distillery succulents twee leggings thundercats. Shabby chic ramps gochujang pickled.
               Etsy offal literally fingerstache pickled, pork belly mlkshk irony tumeric.</p>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-around p-5 mt-14">
          <a href="/" ><SiBmw className="lg:w-20 lg:h-20 sm:w-16 sm:h-16 text-slate-200 opacity-50 hover:opacity-100 transition-opacity" /></a>
          <a href="/" ><SiTesla className="lg:w-20 lg:h-20 sm:w-16 sm:h-16 text-slate-200 opacity-50 hover:opacity-100 transition-opacity" /></a>
          <a href="/" ><SiNissan className="lg:w-20 lg:h-20 sm:w-16 sm:h-16 text-slate-200 opacity-50 hover:opacity-100 transition-opacity" /></a>
          <a href="/" ><SiVolkswagen className="lg:w-20 lg:h-20 sm:w-16 sm:h-16 text-slate-200 opacity-50 hover:opacity-100 transition-opacity" /></a>
        </div>
    </div>
  )
}

export default Partners