import powerHorse from '../assents/icons/icons8-power-100.png'
import highway from '../assents/icons/icons8-highway-100.png'
import Engine from '../assents/icons/icons8-engine-100.png'
import Torque from '../assents/icons/icons8-torque-wrench-100.png'
import Transmission from '../assents/icons/icons8-transmission-100.png'
import Button from './Button'

const CarOptionsCard = ({CarOptions}) => {
  return (
    <div className="relative w-full h-[30vh] p-7 lg:flex lg:justify-start lg:items-center 
    sm:grid-cols-4 sm:grid max-sm:grid-cols-2 max-sm:grid gap-6">
        <div className="relative flex lg:flex-1 flex-col items-center justify-center gap-3
        before:block before:absolute before:w-[1px] before:h-[20vh]  before:right-[0px]
        before:bg-slate-200 before:opacity-20">
            <div className=" flex-1 lg:w-[90px] lg:h-[90px] ">
                <img 
                src= {CarOptions.carLogo}
                alt="Car Logo"
                width={70}
                height={70}
                className="object-contain"/>
            </div>
            <p className="font-bold text-2xl text-slate-100 text-center font-textFont">{CarOptions.name}</p>
        </div>
        <div className="relative flex lg:flex-1 max-sm:hidden flex-col items-center justify-center gap-3
        before:block before:absolute before:w-[1px] before:h-[20vh]  before:right-[0px]
        before:bg-slate-200 before:opacity-20">
            <div className="flex justify-center flex-1 w-[90px] h-[90px]">
                <img 
                src= {powerHorse}
                alt="powerHorse"
                width={70}
                height={70}
                className="object-contain"/>
            </div>
            <div>
                <p className='font-textFont2 leading-9 text-slate-100'>Horsepower</p>
                <p className='font-bold text-sm text-slate-100 text-center font-textFont2'>{CarOptions.Horsepower}</p>
            </div>
        </div>
        <div className="relative flex lg:flex-1 max-sm:hidden flex-col items-center justify-center gap-3
        before:block before:absolute before:w-[1px] before:h-[20vh]  before:right-[0px]
        before:bg-slate-200 before:opacity-20">
            <div className="flex justify-center flex-1 w-[90px] h-[90px]">
                <img 
                src= {highway}
                alt="powerHorse"
                width={70}
                height={70}
                className="object-contain"/>
            </div>
            <div className='flex-1 w-full text-center '>
                <p className='font-textFont2 leading-9 text-slate-100'>Highway</p>
                <p className='font-bold text-sm text-slate-100 text-center font-textFont2'>{CarOptions.highway}</p>
            </div>
        </div>
        <div className="relative flex lg:flex-1 flex-col items-center justify-center gap-3
        before:block before:absolute before:w-[1px] before:h-[20vh]  before:right-[0px]
        before:bg-slate-200 before:opacity-20">
            <div className="flex justify-center flex-1 w-[90px] h-[90px]">
                <img 
                src= {Engine}
                alt="powerHorse"
                width={70}
                height={70}
                className="object-contain"/>
            </div>
            <div className='flex-1 w-full text-center'>
                <p className='font-textFont2 leading-9 text-slate-100'>Engine</p>
                <p className='font-bold text-sm text-slate-100 text-center font-textFont2'>{CarOptions.Engine_Type}</p>
            </div>
        </div>
        <div className="relative flex lg:flex-1 max-sm:hidden flex-col items-center justify-center gap-3
        before:block before:absolute before:w-[1px] before:h-[20vh]  before:right-[0px]
        before:bg-slate-200 before:opacity-20">
            <div className="flex justify-center flex-1 w-[90px] h-[90px]">
                <img 
                src= {Torque}
                alt="powerHorse"
                width={70}
                height={70}
                className="object-contain"/>
            </div>
            <div className='flex-1 w-full text-center'>
                <p className='font-textFont2 leading-9 text-slate-100'>Torque</p>
                <p className='font-bold text-sm text-slate-100 text-center font-textFont2'>{CarOptions.Torque}</p>
            </div>
        </div>
        <div className="relative flex lg:flex-1 flex-col items-center justify-center gap-3
        before:block before:absolute before:w-[1px] before:h-[20vh]  before:right-[0px]
        before:bg-slate-200 before:opacity-20">
            <div className="flex justify-center flex-1 w-[90px] h-[90px]">
                <img 
                src= {Transmission}
                alt="powerHorse"
                width={70}
                height={70}
                className="object-contain"/>
            </div>
            <div className='flex-1 w-full text-center'>
                <p className='font-textFont2 leading-9 text-slate-100'>Transmission</p>
                <p className='font-bold text-sm text-slate-100 text-center font-textFont2'>{CarOptions.Transmission}</p>
            </div>
        </div>
        <div className="relative flex lg:flex-1 flex-col items-center justify-center gap-3 sm:col-span-2">
            <div className="flex flex-col w-[80%] items-start justify-start flex-1">
                <p className='font-textFont2 text-slate-200 font-bold text-sm'>Our Price</p>
                <h2 className='font-bold font-textFont2 lg:text-3xl sm:text-2xl max-sm:text-2xl text-yellow-400'>
                    {CarOptions.Price}
                </h2>
            </div>
            <div className='flex justify-center items-center h-16 lg:w-[80%] sm:w-[80%] max-sm:w-[100%]'>
                <Button label={"View More"}/>
            </div>
        </div>
    </div>
  )
}

export default CarOptionsCard