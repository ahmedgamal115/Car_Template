import Button from "../Component/Button"
import ProductCard from "../Component/ProductCard"
import { CarCardData } from "../Constant"


const Products = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
        <header className="w-full flex justify-between items-center ">
          <h2 className="font-textFont2 font-bold lg:text-[35px] sm:text-3xl max-sm:text-3xl">RECENTLY ADDED</h2>
          <div className="lg:w-[20%] sm:w-[30%]">
            <Button label={"View all inventory"} shape={"rounded"} background={'light'}/>
          </div>
        </header>
        <div className="lg:w-[85%] max-sm:w-full sm:w-full grid max-lg:grid-cols-5 lg:grid-cols-4 sm:grid-cols-1 max-sm:grid-cols-1 justify-evenly items-center gap-10">
          {
            CarCardData.map((carData,idx)=>(
              <ProductCard key={idx} carData={carData}/>
            ))
          }
        </div>
    </div>
  )
}

export default Products