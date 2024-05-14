'use client'
import { useState } from "react";
import CommonBanner from "../Components/CommonBanner";

function Page() {
  const [messageData, setMessageData] = useState({
    mName: "",
    mMobile: "",
    mEmail: "",
    mSubject: "",
    mMessage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData({ ...messageData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageData, "Message Data");
  };
  return (
    <>
      <div className=" sm:py-0 py-2">
        <CommonBanner title="Contact Us" />
      </div>
      <div className="container mx-auto grid grid-cols-1 items-center justify-center space-y-5 py-10 ">
        <div className="grid mx-auto items-center justify-center bg-white w-full border rounded-md pb-10">
          <div className="text-center text-lg text-gray-500 space-y-1">
            <h2 className="text-xl md:text-3xl text-blue-900 font-bold pt-6 pb-2 md:pt-12 ">
              School Address
            </h2>
            <p className="pt-2">
              {" "}
              Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad –
              431136. (MH).
            </p>
            <p className="pt-2">Contact: 6232616161/ 6232717171</p>
            <p className="pt-2">Email: info@bhondawepatilschool.in</p>
          </div>
        </div>
        <div className=" w- full space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:justify-between md:space-x-10 ">
          <div>
            <iframe
              className=' w-full h-1/2 content-start rounded-md  md:grid  col-span-5  style="border:0px;"'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8218581703577!2d75.23292387375973!3d19.847489127303323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1709538234604!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            />
          </div>
          <div className="bg-blue-900 rounded-md p-12">
            <div className="text-2xl md:w-xl text-gray-200">
              <span className="text-3xl text-gray-200 font-semibold mb-4">
                Send Us a Message
              </span>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 my-3">
                  <input
                    type="text"
                    placeholder="Name"
                    name="mName"
                    value={messageData.mName}
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mMobile"
                    value={messageData.mMobile}
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    name="mEmail"
                    value={messageData.mEmail}
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="mSubject"
                    value={messageData.mSubject}
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                  />
                  <textarea
                    rows={3}
                    placeholder="Message"
                    name="mMessage"
                    value={messageData.mMessage}
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-stone-300 outline-none px-4
                     py-2 sm:text-xl text-base bg-blue-900 col-span-2"
                  />
                  <button
                    className="bg-red-500 inline-block w-24 mt-4 px-6 py-2 rounded-md text-sm font-bold text-grey-200"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
