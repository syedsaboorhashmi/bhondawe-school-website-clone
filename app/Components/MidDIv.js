/* eslint-disable react/no-unescaped-entities */
'use client'
function MidDiv() {
    return (
      <>
        <div className=" container mx-auto px-2 md:px-36 md:py-12 grid grid-cols-1 md:grid-cols-2 sm:py-0 py-2  ">
          <div className="flex justify-between">
            <img
              className="inline-block overflow-hidden"
              src="./images/home-welcome-1.webp"
            />
            <img
              className="inline-block overflow-clip"
              src="./images/home-welcome-2.webp"
            />
          </div>
          <div className="p-5 sm:p14 text-center">
            <h3 className=" font-bold text-red-700 text-4xl">
              Welcome to Bhondawe
            </h3>
            <h3 className=" font-bold text-blue-900 text-4xl">
              Patil Public School
            </h3>
            <br />
            <p className="font-medium text-gray-600">
              Welcome to the abode of intellect where the purpose of education is
              to equip the child with the most excellent technological
              proficiency; to empower him with the skills in order to realize his
              God gifted potential; to creole the light climate so that the child
              may develop fully as a complete human being at BHONDAWE PATIL PUBLIC
              SCHOOL, one's intellect is I transformed into an illuminated
              reflection of knowledge and broad outlook towards life.
            </p>
          </div>
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
        <div className="w-full h-full bg-[url('/images/bg-1.jpg')] bg-cover py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-2 md:px-56 ">
            <div>1</div>
            <div className="text-white bg-blue-900 p-10">
              <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
              <p className="text-justify">
                We seek to make our children confident and creative builders of
                their future. Our focus is on the child as a whole entity. We work
                towards an integrated curriculum that reaches across disciplines
                and age levels. The students will be encouraged to meet academics
                challenges with openness, enthusiasm and willingness to solve
                problems. We strive to inspire our students to achieve the highest
                standards of intellectual and personal development through a
                satisfactory and stimulating and comprehensive programme. We aim
                for an atmosphere of cooperation and endeavour to create
                compassionate, responsible and innovative global citizens,
                committed to the development of India and the world.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default MidDiv;
  