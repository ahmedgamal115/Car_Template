import { useEffect, useRef } from "react"
import Button from "./Button"


const EmailForm = ({fouceInput}) => {
    const firstInput = useRef(null)
    useEffect(()=>{
        if(fouceInput){
            firstInput.current.focus()
        }
    },[fouceInput])
  return (
    <form className="w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] 
    translate-y-[-50%] p-10 bg-master-blue-opacity rounded-lg">
        <h2 className="lg:w-[50%] sm:w-[70%] font-logoFont2 font-bold text-3xl 
        text-slate-50">NEED A SPECIAL DEAL? CONTACT US</h2>
        <div className="flex flex-col mt-5 gap-2">
            <label className="font-logoFont1 text-slate-50 opacity-70">Your name</label>
            <input ref={firstInput} type="text" name="" id="" className={`w-full h-0 bg-transparent outline-none 
            text-slate-50  transition-[height]   border-b-2 
            border-slate-400 focus:h-[30px]`} /> 
        </div>
        <div className="flex flex-col mt-5 gap-2">
            <label className="font-logoFont1 text-slate-50 opacity-70">Email</label>
            <input type="text" name="" id="" className={`w-full h-0 bg-transparent outline-none 
            text-slate-50  transition-[height]   border-b-2 
            border-slate-400 focus:h-[30px]`} /> 
        </div>
        <div className="flex flex-col mt-5 gap-2">
            <label className="font-logoFont1 text-slate-50 opacity-70">Subject</label>
            <input type="text" name="" id="" className={`w-full h-0 bg-transparent outline-none 
            text-slate-50  transition-[height]   border-b-2 
            border-slate-400 focus:h-[30px]`} /> 
        </div>
        <div className="flex flex-col mt-5 gap-2">
            <label className="font-logoFont1 text-slate-50 opacity-70">Your Message</label>
            <textarea cols="30" rows="5" className={`w-full h-0 bg-transparent outline-none 
            text-slate-50 resize-none transition-[height]  border-b-2 
            border-slate-400 focus:h-[180px]`}></textarea>
        </div>
        <div className="mt-7 w-[40%]">
            <Button label={"Submit"} shape={"rounded"}/>
        </div>
    </form>
  )
}

export default EmailForm