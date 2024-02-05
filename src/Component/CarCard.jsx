import { useState } from "react"
import Button from './Button'


const CarCard = ({ carData }) => {
    const [hoverPatches,setHoverPatches] = useState(false)
    const [imageIndex,setImageIndex] = useState(0)
    
  return (
    <div className="relative w-full h-[40vh] cursor-pointer">
        <div className="relative w-full h-[calc(100%-4px)]
        before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:bg-gradient-to-b before:from-[rgba(0,0,0,0.8677522034204307)]">
            <img 
            src={carData.images[imageIndex]} 
            alt="car shape"
            className="object-cover w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full">
            <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 0 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-black 
            before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
            onMouseEnter={()=>{
                setHoverPatches(true)
                setImageIndex(0)
            }}
            onMouseLeave={()=>{
                setHoverPatches(false)
                setImageIndex(0)
            }}></div>
            <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 1 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-black 
            before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
            onMouseEnter={()=>{
                setHoverPatches(true)
                setImageIndex(1)
            }}
            onMouseLeave={()=>{
                setHoverPatches(false)
                setImageIndex(0)
            }}></div>
            <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 2 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-black 
            before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
            onMouseEnter={()=>{
                setHoverPatches(true)
                setImageIndex(2)
            }}
            onMouseLeave={()=>{
                setHoverPatches(false)
                setImageIndex(0)
            }}></div>
            <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 3 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-black 
            before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
            onMouseEnter={()=>{
                setHoverPatches(true)
                setImageIndex(3)
            }}
            onMouseLeave={()=>{
                setHoverPatches(false)
                setImageIndex(0)
            }}></div>
            <div className={`relative flex-1  h-full hover:before:bg-master-blue before:border-x-2 ${imageIndex === 4 ? 'before:bg-master-blue' : 'before:bg-slate-200'} before:border-black 
            before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 `}
            onMouseEnter={()=>{
                setHoverPatches(true)
                setImageIndex(4)
            }}
            onMouseLeave={()=>{
                setHoverPatches(false)
                setImageIndex(0)
            }}></div>
        </div>
        <div className={`absolute w-full h-[30%] ${hoverPatches ? 'bg-master-blue' : 'bg-[rgba(0,0,0,0.58)] '} 
        top-[calc(70%-4px)] left-0 hover:bg-master-blue transition-all ease-linear delay-100 flex justify-evenly items-center p-5`}>
            <div className="flex flex-1 justify-center items-start flex-col">
                <p className="text-sm font-textFont2 font-bold text-slate-200 text-opacity-60">Model</p>
                <p className="text-lg font-textFont2 font-bold text-slate-200">{carData.carName}</p>
            </div>
            <div className="flex flex-1 justify-center items-end flex-col">
                <p className="text-sm font-textFont2 font-bold text-slate-200 text-opacity-60">price</p>
                <p className="text-lg font-textFont2 font-bold text-slate-200">{carData.price}</p>
            </div>
            <div className="flex flex-1 justify-end items-start">
                <div className="w-[80%]">
                    <Button label={"DETAILS"} shape={"rounded"} hoverEffect = {hoverPatches}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarCard