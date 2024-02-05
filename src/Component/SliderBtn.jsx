import { PiOctagonThin } from "react-icons/pi";
import { PiOctagonFill } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";


const SliderBtn = ({dirction,imageIndex,setImageIndex,imageNumber}) => {
  const [btnHover,setBtnHover] = useState(false)
  useEffect(()=>{
    const timer = setTimeout(() => {
        if(imageIndex >= imageNumber-1){
          setImageIndex(0)
        }else{
          let idx = imageIndex
          idx++
          setImageIndex(idx)
        }
    }, 10000);
    return ()=>{
      clearTimeout(timer)
    }
  },[imageIndex,imageNumber,setImageIndex])
  return (
    <div className={`absolute top-[50%] 
    ${dirction === 'left' ? 'left-[10%]' :'right-[10%]'} 
    translate-x-[-50%] translate-y-[-50%] z-20
    text-slate-100`}>
      <div className="relative w-fit h-fit cursor-pointer"
      onMouseEnter={()=>{setBtnHover(true);}}
      onMouseLeave={()=>{setBtnHover(false);}}>
        <PiOctagonThin  className="w-[60px] h-[60px]
        fill-slate-500 z-20"/>
        <PiOctagonFill className={`w-[60px] h-[60px] z-10
          absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
          ${btnHover ? 'fill-master-blue' : 'fill-transparent'}`}/>
        {
          dirction === 'left' 
          ? <FaAngleLeft className="w-[30px] h-[30px] z-10
          absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          onClick={()=>{
            let idx = imageIndex
            if(idx === 0){
              idx = imageNumber - 1
              setImageIndex(idx)
            }else{
              idx--
              setImageIndex(idx)
            }
          }} />
          : <FaAngleRight className="w-[30px] h-[30px] z-10
          absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          onClick={()=>{
            let idx = imageIndex
            if(idx >= imageNumber-1){
              setImageIndex(0)
            }else{
              idx++
              setImageIndex(idx)
            }
          }}/>
        }
      </div>
    </div>
  )
}

export default SliderBtn