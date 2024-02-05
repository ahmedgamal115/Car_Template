import photo1 from "../assents/images/poster/pexels-megapixelstock-18296.jpg"
import photo2 from "../assents/images/poster/pexels-mike-bird-498703.jpg"
import photo3 from "../assents/images/poster/pexels-pixabay-533562.jpg"

import { advantagesSportCars } from "../Constant"

const Spots = () => {
  return (
    <section className="lg:flex lg:justify-center lg:items-center lg:flex-row
    sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-10">
        <div className="flex-1 lg:px-10 flex flex-col gap-y-10 sm:px-0">
          <h2 className="font-bold font-logoFont2 lg:text-4xl uppercase lg:w-[280px] sm:w-full sm:text-3xl">Why Sport VEHICLES?</h2>
          <div className="relative lg:flex justify-start items-start 
          gap-y-14 flex-col sm:hidden ">
            <img 
            src={photo1} 
            alt="Poster"
            width={300}
            height={300}
            className="object-cover w-[300px] h-[300px]" />
            <img 
            src={photo2} 
            alt="Poster"
            width={300}
            height={300}
            className="object-cover w-[300px] h-[300px]" />
            <div className="absolute 
            top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
            w-[300px] overflow-hidden h-[300px] border-[20px]
            border-slate-50">
              <img 
              src={photo3} 
              alt="Poster"
              width={300}
              height={300}
              className="object-cover w-[300px] h-[300px]" />
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col gap-10">
            { 
            advantagesSportCars.map((advantagesSportCar)=>(
              <div key={advantagesSportCar.title} className="flex justify-start items-center gap-5 ">
                <div className=" w-[90px] h-[90px]">
                  <img 
                  src={advantagesSportCar.Icon} 
                  alt=""
                  width={90}
                  height={90}
                  className="object-contain w-[90px] h-[90px]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold font-textFont2 text-xl leading-[70px]">{advantagesSportCar.title}</h2>
                  <p className="font-textFont2 text-sm w-[80%]">{advantagesSportCar.paragraph}</p>
                </div>
              </div>
            ))
            }
        </div>
    </section>
  )
}

export default Spots