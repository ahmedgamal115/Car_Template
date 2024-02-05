import { useState } from "react";
import OctagonShape from "../Component/OctagonShape";
import Slider from "../Component/Slider"
import { CarCardData } from "../Constant";

const Feature = () => {
  const [swiperState,setSwiperState] = useState(null)
  const handelPrevBtn = ()=>{
    if (swiperState.current && swiperState.current.swiper) {
      swiperState.current.swiper.slidePrev(5000);
    }
  }
  const handelNextBtn = ()=>{
    if (swiperState.current && swiperState.current.swiper) {
      swiperState.current.swiper.slideNext(2000);
    }
  }
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex justify-between items-center px-16">
          <h2 className="font-bold font-textFont2 text-4xl text-slate-100">FEATURED ITEMS</h2>
          <div className="flex justify-center items-center gap-1">
            <div onClick={()=>{handelPrevBtn()}}>
              <OctagonShape dirction={'left'}/>
            </div>
            <div onClick={()=>{handelNextBtn()}}>
              <OctagonShape dirction={'right'}/>
            </div>
          </div>
        </div>
        <div className="w-[90%]  h-[55vh] mt-10
         overflow-hidden">
            <Slider carsData={CarCardData} setSwiperState={setSwiperState} />
        </div>
    </section>
  )
}

export default Feature