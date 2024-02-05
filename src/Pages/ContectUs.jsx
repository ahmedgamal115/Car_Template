import { useEffect, useRef, useState } from "react"
import EmailForm from "../Component/EmailForm"
import { contactData } from "../Constant"


const ContectUs = () => {
  const contectPosition = useRef(null)
  const [fouceInput,setFouceInput] = useState(false)
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      if(window.scrollY >= (contectPosition.current.offsetTop - 600)){
        setFouceInput(true)
      }else{
        setFouceInput(false)
      }
    })
  },[])
  return (
    <div ref={contectPosition}  className="w-full flex lg:justify-center lg:items-center lg:flex-row sm:flex-col">
        <div className="relative lg:w-[65%] sm:w-full h-screen bg-hero bg-cover">
          <EmailForm fouceInput={fouceInput}/>
        </div>
        <div className="lg:w-[35%] sm:w-full h-full flex flex-col">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.081573012896!2d31.30803412434068!3d29.890750075001385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837ab2995ff11%3A0x54b54d4523f60f78!2z2YjYrNmK2Ycg2KfYqNin2LjZh9iMINmF2YbYtNij2Kkg2YbYp9i12LHYjCDZgtiz2YUg2K3ZhNmI2KfZhtiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArCA0MDQyNzM4!5e0!3m2!1sar!2seg!4v1702839345602!5m2!1sar!2seg" 
          className="border-0 w-full h-[370px]"
          allowFullScreen="" 
          loading="lazy" 
          title="location"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex-1 flex flex-col items-center pt-14 pl-8
          justify-center gap-8">
            {
              contactData.map((data,index)=>(
                <div key={index} className="w-full h-full flex justify-start 
                items-center gap-10 p-5">
                  <div className="w-[50px] h-[50px]">
                    <img 
                    src={data.icon} 
                    alt="Contact data"
                    className="object-contain" />
                  </div>
                  <div className="w-[70%]">
                    <p className="font-logoFont1 font-bold text-lg uppercase text-slate-400 mb-2">{data.title}</p>
                    <p className="font-logoFont2 font-bold text-lg text-slate-50">{data.value}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ContectUs