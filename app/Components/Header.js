import Carousel from "./Carousel"
import Navbar from "./Navbar"

function Header() {
  return (
    <div>
    <div className="bg-red-700 w-full flex justify-between ">
        <p className="text-white text-sm py-1 hidden md:block lg:block xl:block">bhondwepatilschool@gmail.com</p>
        <a href="url" className="text-white text-sm py-1 hidden md:block lg:block xl:block">facebook</a>
    </div>
    <div className="flex py-2 pl-16 pr-16 md:flex md:pl-5 lg:flex lg:pl-0">
        <img src="../images/big-logo.webp"></img>
    </div>
    <Navbar/>
      
</div>
  )
}

export default Header