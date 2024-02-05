import { NavLink } from "react-router-dom"


const Submenu = ({items}) => {
  return (
    <div className="absolute border-x-2 border-b-2 bg-slate-100 border-black top-[100%] left-[10%] translate-x-[-10%]  min-w-[200px] bg-slate">
        <div className="relative p-4 w-full before:block before:min-w-full
          before:h-1 before:absolute before:bg-master-blue
          before:left-0 before:top-0 ">
            <ul className="flex flex-col gap-3 font-textFont2 text-black">
                {items.map((titles)=>(
                    <li key={titles.item} className="hover:text-master-blue">
                        <NavLink to={titles.herf}>
                            {titles.item}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Submenu