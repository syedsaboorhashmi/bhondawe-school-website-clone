import Link from "next/link";


const navData = [
  {
    id: 0,
    title: "Home",
    path:"/"
  },
  {
    id: 1,
    title: "About Us",
    path:"/about"
  },
  {
    id: 2,
    title: "Admissions",
    path:"/admissions"
  },
  { id: 3, title: "Mandatory Public Disclosure", path:"/mandatoryPublicDisclosure" },
  { id: 4, title: "Academics",
    path:"/academics"
  },
  { id: 5, title: "Achievements", path:"/achievements" },
  { id: 6, title: "Infrastructure",
    path:"/infrastructure"
  },
  { id: 7, title: "Gallery", path:"/gallery" },
  { id: 8, title: "Contact Us",path:"/contactUs" },
];
function Navbar() {
  return (
    <div className=" flex  bg-blue-900 w-full h-9">
      <ul className="  pl-2 py-2 lg:flex md:flex sm:flex lg:gap-6 md:gap-3 sm:gap-2 text-white text-sm font-semibold">
        

        {navData.map((item, i) => (<Link key={i} href={item.path}>
          <li  className="hidden md:block lg:block xl:block">
            {item.title}</li></Link>  
          
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
