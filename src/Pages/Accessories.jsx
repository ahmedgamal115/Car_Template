import AccessoriesCard from "../Component/AccessoriesCard"
import Button from "../Component/Button"
import { carAccessiories } from "../Constant"
const Accessories = () => {
  return (
    <div className="w-full">
        <div className="w-full flex items-center lg:flex-row lg:justify-between
        sm:justify-center sm:flex-col sm:gap-5 max-sm:justify-center max-sm:flex-col max-sm:gap-5">
          <h2 className="lg:text-3xl sm:text-2xl font-textFont2 font-bold">EV ACCESSORIES</h2>
          <div className="w-[300px]">
            <Button label={'ONLINE SHOP'} shape={'rounded'} background={'light'}/>
          </div>
        </div>
        <div className=" w-full mt-14 flex items-center lg:flex-row 
        lg:justify-between 
        sm:flex-col sm:justify-center sm:gap-14
        max-sm:flex-col max-sm:justify-center max-sm:gap-14">
          {
            carAccessiories.map((accessorie)=>(
              <AccessoriesCard key={accessorie.title} accessorie={accessorie}/>
            ))
          }
        </div>
    </div>
  )
}

export default Accessories