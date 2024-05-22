"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const navData = [
  {
    id: 0,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "About Us",
    path: "/about",
  },
  {
    id: 2,
    title: "Admissions",
    path: "/admissions",
  },
  { id: 3, title: "Academics", path: "/academics" },
  { id: 4, title: "Infrastructure", path: "/infrastructure" },
  { id: 5, title: "Contact Us", path: "/contactUs" },
];
function Navbar() {
  const [open, setOpen]=useState(false);
  return (
    <div className=" flex  bg-blue-900 w-full h-9  sm:py-0 py-2 ">
      <div onClick={()=>setOpen(!open)} className="text-2xl text-white ml-auto cursor-pointer md:hidden">
     {open?<IoMdClose />:  <FaBars /> }
       
      </div>

      <ul className=  {`pl-2 py-2  sm:static w-full z-50 bg-blue-900 transition delay-150 duration-500 ease-in-out lg:gap-6 md:gap-3 sm:gap-2 text-white text-sm font-semibold 
      ${open? "absolute top-20 sm:flex ":"absolute -top-[28rem] sm:flex"}
      `}>
        {navData.map((item, i) => (
          <Link key={i} href={item.path}>
            <li onClick={()=>setOpen(!open)} className=" py-3 font-bold pl-2 border-b-2 rounded-sm sm:border-0 sm:flex sm:py-0">{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
