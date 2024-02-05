import { useState } from "react"
import { sliderImages } from "../Constant"
import SliderBtn from "../Component/SliderBtn"
import CarOptionsCard from "../Component/CarOptionsCard"

const Hero = () => {
  const [imageIndex,setImageIndex] = useState(3)
  
  return (
    <section className="h-[140vh] w-full">
        <div className="h-[140vh] w-full sm:h-full max-sm:h-full">
          <div className="relative w-full h-full overflow-hidden before:block before:w-full 
                  before:h-full before:absolute before:bg-gradient-to-b before:from-[rgba(0,0,0,0.8677522034204307)]
                  before:left-0 before:top-0 before:z-20">
          {
            sliderImages.map((img,idx)=>(
              <div key={idx}>
                <img
                src= {img.image}
                alt="Car Images"
                className={`lg:object-contain sm:object-cover max-sm:object-cover min-h-full
                absolute top-0 left-0 z-10 opacity-0 
                ${idx === imageIndex && 'opacity-100'}
                transition-opacity`}
                />
                {
                  idx === imageIndex && 
                  <div className="absolute top-[30%] left-[50%]  
                  translate-x-[-50%] translate-y-[-50%] lg:w-[60%] sm:w-[50%] max-sm:w-[80%]  z-30">
                    <div className="relative before:block lg:before:w-[60px] 
                  before:h-[10px] before:absolute before:bg-master-blue
                  lg:before:left-[-80px] lg:before:top-[40px] before:z-20
                  sm:before:w-[30px] sm:before:left-[-60px] sm:before:top-[20px]
                  max-sm:before:w-[30px] max-sm:before:left-[-60px] max-sm:before:top-[20px]">
                      <p className="font-textFont2 lg:font-bold
                      lg:text-4xl text-slate-100
                      sm:text-2xl max-sm:text-2xl">{img.slug}</p>
                      <br/>
                      <p className="font-textFont2 lg:font-bold
                      lg:text-4xl text-slate-100
                      sm:text-2xl max-sm:text-2xl ">{img.slug2}</p>
                    </div>
                  </div>
                }
                {
                  idx === imageIndex && 
                  <div className="absolute left-[50%] translate-x-[-50%] z-30 lg:w-[85%] sm:w-[85%] max-sm:w-[90%]  
                  lg:h-[30vh] lg:top-[110vh] sm:h-[60vh] sm:top-[90vh] max-sm:h-[100vh] max-sm:top-[85vh] bg-master-blue">
                    <CarOptionsCard CarOptions = {img.options}/>
                  </div>
                }
              </div>
            ))
          }
          <SliderBtn dirction={"left"} imageNumber = {sliderImages.length} imageIndex = {imageIndex} setImageIndex = {setImageIndex}/>
          <SliderBtn dirction={"right"} imageNumber = {sliderImages.length} imageIndex = {imageIndex} setImageIndex = {setImageIndex}/>
          </div>
        </div>
    </section>
  )
}

export default Hero