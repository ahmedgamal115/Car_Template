import { useState } from "react"

import { PiEngineFill } from "react-icons/pi";
import { FaSuperpowers } from "react-icons/fa";
import { SiAlwaysdata } from "react-icons/si";
import { GiCarWheel } from "react-icons/gi";

import speed from '../assents/icons/icons8-car-speed-100.png'

const ProductCard = ({ carData }) => {
    const [hoverPatches,setHoverPatches] = useState(false)
    const [imageIndex,setImageIndex] = useState(0)
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="relative w-full h-[25vh] bg-red-800">
            <div className="relative w-full h-full
            before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full
            before:bg-gradient-to-b before:from-[rgba(0,0,0,0.8677522034204307)]">
                <img 
                src={carData.images[imageIndex]} 
                alt="car shape"
                className="object-cover w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full">
                <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 0 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-slate-200
                before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
                onMouseOver={()=>{
                    setHoverPatches(true)
                    setImageIndex(0)
                }}
                onMouseLeave={()=>{
                    setHoverPatches(false)
                    setImageIndex(0)
                }}></div>
                <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 1 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-slate-200
                before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
                onMouseOver={()=>{
                    setHoverPatches(true)
                    setImageIndex(1)
                }}
                onMouseLeave={()=>{
                    setHoverPatches(false)
                    setImageIndex(0)
                }}></div>
                <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 2 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-slate-200
                before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
                onMouseOver={()=>{
                    setHoverPatches(true)
                    setImageIndex(2)
                }}
                onMouseLeave={()=>{
                    setHoverPatches(false)
                    setImageIndex(0)
                }}></div>
                <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 3 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-slate-200
                before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
                onMouseOver={()=>{
                    setHoverPatches(true)
                    setImageIndex(3)
                }}
                onMouseLeave={()=>{
                    setHoverPatches(false)
                    setImageIndex(0)
                }}></div>
                <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 4 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-slate-200
                before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
                onMouseOver={()=>{
                    setHoverPatches(true)
                    setImageIndex(4)
                }}
                onMouseLeave={()=>{
                    setHoverPatches(false)
                    setImageIndex(0)
                }}></div>
            </div>
            <div className="absolute bottom-[10px] left-[10px]">
                {
                    hoverPatches ?
                    <img 
                    src={speed} 
                    alt="speed"
                    width={20}
                    height={20}
                    className="object-contain cursor-pointer hover:bg-black" />
                    :''
                    
                }
            </div>
        </div>
        <div className={`w-full h-full p-5 border-[1px] border-slate-400
        ${hoverPatches ? 'bg-slate-200' : 'bg-transparent'}`}>
            <div className="w-full flex flex-col justify-center
            items-start">
                <p className="text-sm font-bold text-master-blue">{carData.carName}</p>
                <p className="text-sm font-bold">{carData.price}</p>
            </div>
            <div className="w-full  grid grid-cols-2 justify-center items-center mt-5 gap-x-5">
                <div className="w-full flex justify-start items-center gap-2">
                    <FaSuperpowers  className="w-[20px] h-[20px] text-slate-400"/>
                    <p className="text-sm font-textFont2">{carData.options.Horsepower}</p>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                    <SiAlwaysdata className="w-[20px] h-[20px] text-slate-400" />
                    <p className="text-sm font-textFont2">{carData.options.highSpeed}</p>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                    <PiEngineFill className="w-[20px] h-[20px] text-slate-400" />
                    <p className="text-sm font-textFont2">{carData.options.Displacement}</p>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                    <GiCarWheel className="w-[20px] h-[20px] text-slate-400"/>
                    <p className="text-sm font-textFont2">{carData.options.Torque}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard