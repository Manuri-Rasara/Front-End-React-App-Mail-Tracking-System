import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS,DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/Const/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { RxAvatar } from "react-icons/rx";
import logo from '../../Assests/Logo.png';







const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 mb-2 rounded-md hover:bg-white hover:no-underline hover:text-[#611010] hover:rounded-md active:bg-white rounded-sm text-base'

export default function () {
  return (
    <div className='flex flex-col bg-[#611010] p-3 text-white w-60'>
        <div className='flex items-center  px-2 py-2'>
        <img src={logo} alt="Ruhuna_Logo" className="w-24 h-24 object-cover " />


            <span className='text-neutral-100 text-lg '><b className='text-[#F99C30] ' >GENERAL</b> ADMIN</span> 
            
        </div>
        <div className='flex-1 py-8 flex  flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item}></SidebarLink>
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-[#F99C30]'>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item}></SidebarLink>
            ))}

            <div className={classNames ( 'text-[#F99C30]',linkClass)}>
            <span className='text-xl'><HiOutlineLogout/></span>
            Logout
            
            </div>
        </div>
    </div>
  )
}



function SidebarLink({item}){
    const {pathname} = useLocation();
    return(
        <Link to= {item.path} className={classNames (pathname===item.path ? ' text-[#611010] bg-white' : '',linkClass)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
