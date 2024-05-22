

function Footer() {
    return (
    <>
      <div className=" container pl-3 mx-auto grid grid-cols-1 md:grid-cols-3 justify-between items-start pt-8 pb-5 ">
        <div>
        <h3 className="text-left text-red-700 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5"> School Address</h3>
        <p className="text-left text-blue-900">
          <span className="text-2xl">Bhondawe Patil Public School </span>
           <br/>Gut No. 49, Bajaj Nagar,MIDC, 
           <br/> Waluj, Aurangabad – 431136. (MH).
        </p>
        <p className="text-left text-blue-900">Contact: 6232616161/ 6232717171</p>
        <p className="text-left text-blue-900">Email: bhondawepatilschool@gmail.com</p>
        </div>
        <div>
          <h3 className="text-left text-red-700 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5">
           Quick Links</h3>
          <div className="grid grid-cols-1">
            <a className="text-blue-900"  href="/">Home</a>
            <a className="text-blue-900"href="/about">About Us</a>
            <a className="text-blue-900"href="/admisions">Admissions</a>
            <a className="text-blue-900">Mandatory Public Disclosure</a>
            <a className="text-blue-900" >Academics</a>  
            <a className="text-blue-900">Achievement</a>
            <a className="text-blue-900">Infrastrcture</a>
            <a className="text-blue-900"href="/gallery">Gallery</a>
            <a className="text-blue-900"href="/contact">Contact Us</a>
          </div> 
        </div>
        <div>
          <h3 className="text-left text-red-700 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5">
           Follow Us On</h3>
           <div className="flex flex-row space-x-2 justify-start">
            <img src="../images/facebook.webp"/>
            <img src="../images/instagram.webp"/>
            <img src="../images/youtube.webp"/>
           </div>
        </div>
      </div>
      <div className="bg-red-700">
        <div className="container flex justify-center items-center py-1 text-sm text-white">
          <div className="hidden md:block">All Rights Reserved With Bhondawe Patil Public School</div>
        </div>
      </div>
    </>
    )
  }
  
  export default Footer