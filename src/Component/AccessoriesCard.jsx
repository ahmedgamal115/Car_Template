import { useState } from "react"
import Button from "./Button"


const AccessoriesCard = ({accessorie}) => {
  const [hoverCard,setHoverCart] = useState(false)
  return (
    <div className="w-full cursor-pointer"
    onMouseEnter={()=>{setHoverCart(true)}}
    onMouseLeave={()=>{setHoverCart(false)}}>
      <div className="relative lg:w-[400px] max-h-[200px] sm:w-full  
      overflow-hidden">
        <img 
        src={accessorie.img} 
        alt="accessories"
        className="object-contain" />
        {
          hoverCard ? 
          <div className="w-[40%] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Button label={"Add to cart"} shape={"rounded"} background={"light"}
            hoverEffect={true}/>
          </div>
          :""
        }
      </div>
      <div className="mt-5 text-center w-full">
        <h2 className="font-textFont2 font-bold text-3xl cursor-pointer
        hover:text-master-blue">{accessorie.title}</h2>
        <div className="w-full flex items-center justify-center gap-10 mt-3">
          {
            accessorie.lastPrice &&
            <p className="font-logoFont1 font-bold text-2xl 
            text-master-blue line-through">{accessorie.lastPrice}</p>
          }
          <p className="font-logoFont1 font-bold text-2xl 
            text-master-blue">{accessorie.price}</p>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesCard