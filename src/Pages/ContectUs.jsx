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
    <div ref={contectPosition}  className="w-full flex lg:justify-center lg:items-center lg:flex-row sm:flex-col max-sm:flex-col">
        <div className="relative lg:w-[65%] sm:w-full max-sm:w-full h-screen bg-hero bg-cover">
          <EmailForm fouceInput={fouceInput}/>
        </div>
        <div className="lg:w-[35%] sm:w-full max-sm:w-full h-full flex flex-col">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292971.823407575!2d36.169214635161396!3d26.8074472785107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z2YXYtdix!5e0!3m2!1sar!2seg!4v1711151994737!5m2!1sar!2seg" 
        width="600" height="450" className="border-none" 
        allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
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