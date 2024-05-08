'use client'

import { useState } from "react";
import CommonBanner from "../Components/CommonBanner";

function page() {
  const [formData,setFormData]=useState({
    fname:"",
    grade:"",
    address:"",
    email:"",
    mobile:"",
    parentname:""
  })

  const handleChange=(e)=>{
    // console.log(e,"event")
    const {name, value}=e.target;
    setFormData({...formData,[name]:value});
    // console.log(e,"event");    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData,"Fom Data")
  }
  return (
    <>
      <div>
        <CommonBanner title="Admissions" />
      </div>
      <div className="container bg-slate-100 py-5 sm:py-10 ">
        <h2 className="text-center font-bold text-3xl text-blue-900">
          School Virtual Tour
        </h2>
        <div className="px-0 sm:p-14 flex justify-center">
          <iframe
            className=" mb-2 items-center justify-center w-[900px] h-[500px]"
            src="https://www.youtube.com/embed/cuIFuOVG9eA"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full sm:w-1/2 mx-auto">
        <div className="bg-blue-900 rounded-md p-6 sm:p-12 m-2 sm:m-5">
          <div className="text-2xl md:w-xl text-gray-200">
            <span className="text-3xl text-gray-200 font-semibold mb-4">
              Please fill the Form below to Place Admission Enquiry
            </span>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 my-3">
                <input
                  type="text"
                  placeholder="Name of Student"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                />
                <input
                  type="text"
                  placeholder="Admission Required For Which Grade?"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                />
                <input
                  type="text"
                  placeholder="Parent Name"
                  name="parentname"
                  value={formData.parentname}
                  onChange={handleChange}
                  className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                />
                <input
                  type="text"
                  placeholder="Email Id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                />
                <input
                  type="text"
                  placeholder="Residential Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                />
                <button
                  className="bg-red-500 inline-block w-24 mt-4 px-6 py-2 rounded-md text-sm font-bold text-grey-200"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
