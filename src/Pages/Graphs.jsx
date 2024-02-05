import { useEffect, useRef, useState } from "react"
import { statistics } from "../Constant"


const Graphs = () => {
  const [count,setCount] = useState(Array.from({length: statistics.length}, (x)=>{return 0}))
  const test = useRef(null)
  const timeIncress = useRef(null)
  const [arrivePosition, setArrivePosition] = useState(0)

  
  const counterFun = (num,index) =>{
    let cunterValue = num / 400
    const copeArray = [...count]
    copeArray[index] = Math.ceil(count[index] + cunterValue)
    if(copeArray[index] > num){
      copeArray[index] = num
    }
    setCount(copeArray)
  }
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      if(window.scrollY >= (test.current.offsetTop - 600)){
        setArrivePosition(1)
      }else{
        setArrivePosition(0)
      }
    })
  },[])
  useEffect(()=>{
    if(arrivePosition === 1){
      statistics.forEach((statistic,index)=>{
        if(count[index] < statistic.number){
          timeIncress.current = setTimeout(()=>{
            counterFun(statistic.number,index)
          },1/2)
        }else{
          clearTimeout(timeIncress)
        }
      })
    }
  },[count,arrivePosition])

  return (
    <div ref={test} className="w-full flex flex-col justify-center items-center gap-10" >
        <div className="w-full lg:block lg:text-start
        sm:flex sm:items-center sm:justify-center sm:text-center">
          <p className="lg:w-[50%] lg:text-4xl sm:text-3xl sm:w-[80%] font-textFont2 font-bold 
          text-slate-100">OVER 10 YEARS WE SELL ELECTRIC CARS</p>
        </div>
        <div className="w-[90%] flex justify-between items-center flex-wrap gap-10">
          {
            statistics.map((statistic,index)=>(
              <div key={statistic.title}>
                <div className="font-textFont2 font-bold text-4xl flex items-center gap-5 text-slate-100">
                  {
                    count[index].toString().length > 3 ?
                    <>
                      <div>
                        {
                          count[index].toString().split('').map((words,idx)=>(
                            idx <= count[index].toString().length - 4 &&
                            count[index].toString()[idx]
                          ))
                        }
                      </div>
                      <div>
                        {
                          count[index].toString().split('').map((words,idx)=>(
                            idx > count[index].toString().length - 4 &&
                            count[index].toString()[idx]
                          ))
                        }
                      </div>
                    </>
                    :
                    <div>
                        {
                          count[index].toString()
                        }
                      </div>
                  }
                </div>
                <p className="text-sm font-bold font-textFont2 text-slate-100">{statistic.title}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Graphs