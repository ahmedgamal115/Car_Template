import { BrowserRouter, NavLink } from "react-router-dom"
import { navLinks } from "../Constant"
import Submenu from "../Component/Submenu"
import speedIcon from '../assents/icons/icons8-car-speed-100.png'
import cartIcon from '../assents/icons/icons8-shopping-cart-100.png'
import { useEffect, useState } from "react"


const Navbar = () => {
  const [hoverMenu,setHoverMenu] = useState(null)
  const [scrollPage,setScrollPage] = useState(false)
  const [sidebarState,setSidebarState] =useState(false)
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setScrollPage(true) : setScrollPage(false)
    })
  })
  return (
    <header className={`fixed w-full p-5 flex
    justify-between items-center z-50 ${scrollPage && 'bg-primary'}`}>
      <div className="lg:w-[40%] sm:w-[30%] max-sm:w-[20%] flex-1 font-logoFont1 lg:text-4xl sm:text-2xl max-sm:text-2xl text-slate-100">
        Vehicles
      </div>
      <div className="flex-1 flex justify-between items-center lg:flex max-sm:hidden sm:hidden">
        <div className="flex-1 relative before:block before:w-1 
          before:h-7 before:absolute before:bg-slate-300
          before:right-3 before:top-[50%] before:translate-y-[-50%]">
          <ul className="flex items-center justify-evenly">
            {
              navLinks.map((navLink)=>(
                  <BrowserRouter key={navLink.headTitle}>
                    <li onMouseEnter={()=>{setHoverMenu(navLink.headTitle)}}
                    onMouseLeave={()=>{setHoverMenu(null)}}
                    className={`relative p-3`}>
                      <NavLink className={`font-headersFont font-bold  ${hoverMenu === navLink.headTitle ? 'text-master-blue' : 'text-slate-100'}`} to={navLink.herf}>
                        {navLink.headTitle}
                      </NavLink>
                      {navLink.haveSubitems && hoverMenu === navLink.headTitle && <Submenu items = {navLink.items}/>}
                    </li>
                  </BrowserRouter>
              ))
            }
          </ul>
        </div>
        <div className="flex relative items-center gap-5 before:block before:w-1 
          before:h-7 before:absolute before:bg-slate-300
          before:right-[-20px] before:top-[50%] before:translate-y-[-50%]">
          <div>
            <span className="text-xs font-headersFont text-slate-100">Call-centre:</span>
            <p className="font-bold leading-3 font-headersFont text-slate-100">(878) 967-4455</p>
          </div>
          <img 
          src={speedIcon}
          alt=""
          width={40}
          height={40}
          className="object-contain cursor-pointer" />
        </div>
        <div className="flex justify-end items-center w-[10%]">
          <img 
          src={cartIcon}
          alt=""
          width={40}
          height={40}
          className="object-contain cursor-pointer" />
        </div>
      </div>
      {
        !sidebarState ?
          <div className="flex flex-col gap-1 cursor-pointer select-none justify-end items-end 
          flex-1 h-auto 
          lg:hidden sm:flex max-sm:flex"
          onClick={()=>{
            setSidebarState(!sidebarState)
          }}>
            <span className="lg:w-11 h-2 sm:w-10 max-sm:w-10 max-sm:h-2 bg-slate-50"></span>
            <span className="lg:w-11 h-2 sm:w-10 max-sm:w-10 max-sm:h-2 bg-slate-50"></span>
            <span className="lg:w-11 h-2 sm:w-10 max-sm:w-10 max-sm:h-2 bg-slate-50"></span>
          </div>
        :
        <div className="relative flex flex-col gap-1 cursor-pointer select-none justify-end items-end 
          flex-1 h-auto 
          lg:hidden sm:flex max-sm:flex"
          onClick={()=>{
            setSidebarState(!sidebarState)
          }}>
            <span className="absolute transition-all lg:w-11 h-2 sm:w-10 max-sm:w-10 max-sm:h-2 bg-slate-50 rotate-[45deg] origin-center"></span>
            <span className="absolute transition-all lg:w-11 h-2 sm:w-10 max-sm:w-10 max-sm:h-2 bg-slate-50 rotate-[-45deg] origin-center"></span>
        </div>

      }
      {
        sidebarState &&
          <div className="fixed right-0 top-[70px] p-3 h-fit min-w-[250px] bg-primary">
            <div className="flex-1 relative before:block before:w-1 
              before:h-7 before:absolute before:bg-slate-300
              before:right-3 before:top-[50%] before:translate-y-[-50%]">
              <ul className="flex flex-col items-center justify-evenly">
                {
                  navLinks.map((navLink)=>(
                      <BrowserRouter key={navLink.headTitle}>
                        <li
                        onMouseEnter={()=>{setHoverMenu(navLink.headTitle)}}
                        onMouseLeave={()=>{setHoverMenu(null)}}
                        className={`relative p-3`}>
                          <NavLink className={`font-headersFont font-bold  ${hoverMenu === navLink.headTitle ? 'text-master-blue' : 'text-slate-100'}`} to={navLink.herf}>
                            {navLink.headTitle}
                          </NavLink>
                        </li>
                        {
                        navLink.haveSubitems && hoverMenu === navLink.headTitle &&
                          navLink.items.map((titles)=>(
                                <li key={titles.item} className="p-2">
                                    <NavLink className={`font-headersFont font-bold text-white`} to={titles.herf}>
                                        {titles.item}
                                    </NavLink>
                                </li>
                          ))
                        }
                      </BrowserRouter>
                  ))
                }
              </ul>
            </div>
          </div>
      }
    </header>
  )
}

export default Navbar