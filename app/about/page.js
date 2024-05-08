
'use client'
import { useState } from "react";


const buttonData = [
  {
    id: 1,
    title: "Mission & Vision",
    content: (
      <div>
        <h2 className="text-blue-900 text-center text-xl md:text-3xl font-bold pt-6 pb-2 md:pt-12">
          Mission
        </h2>
        <p className="text-gray-500 px-5 text-lg">
          We seek to make our children confident and creative builders of their
          future. Our focus is on the child as a whole entity. We work towards
          an integrated curriculum that reaches across disciplines and age
          levels. The students will be encouraged to meet academics challenges
          with openness, enthusiasm and willingness to solve problems. We strive
          to inspire our students to achieve the highest standards of
          intellectual and personal development through a satisfactory and
          stimulating and comprehensive programme. We aim for an atmosphere of
          cooperation and endeavour to create compassionate, responsible and
          innovative global citizens, committed to the development of India and
          the world.
        </p>
        <h2 className="text-blue-900 text-center text-xl md:text-3xl font-bold pt-6 pb-2 md:pt-12">
          Vision
        </h2>
        <p className="text-gray-500 px-5 text-lg">
          To prepare dynamic and caring citizens of tomorrow, to meet the
          challenges of a global society, while retaining their traditional
          values.
          <br /> To develop our school into a vibrant and an exemplary
          educational institution where students are nurtured, encouraged and
          motivated to achieve their ultimate potential by exploring limitless
          possibilities with utmost confidence, dedication and excellence.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Philosophy",
    content: (
      <div>
        <h2 className="text-blue-900 text-center text-xl md:text-3xl font-bold pt-6 pb-2 md:pt-12">
          Philosophy
        </h2>
        <p className="text-gray-500 px-5 text-lg">
          The essense and philosophy of our school centres around ....
          <br />
          <br />
          <span className="text-red-700 font-semibold">
            Empowering knowledge & Excellence-Inspiring Values & Patriotism
          </span>
          <br />
          <br />
          Besides this, our school is committed to application-oriented
          learning. We believe that shaping the overall personality of the
          student is of paramount importance and will offer total personality
          development as part of the curriculum transaction. We provide
          individual attention to our students, thus enhancing their ability to
          acquire and synthesize knowledge in their chosen fields of study. The
          objective is to inculcate a self-sustaining innovative and self
          renewing system that always operates on a learning mode.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Chairman's Desk",
    content: (
      <div className="items-center justify-center mx-5 mt-5">
        <img src="../images/chairman.webp" />
        <h3 className="text-center font-semibold text-lg text-blue-900 pt-2">
          SHRI. HANUMAN BHONDWE PATIL
        </h3>
        <p className="text-gray-500 pt-1 text-center">Chairman</p>
        <h2 className="text-blue-900 text-center text-xl md:text-3xl font-bold pt-6 pb-2 md:pt-12">
          Words of our Chairman
        </h2>
        <h3 className="font-semibold text-center text-blue-900  ">
          "AFFORDABLE AND QUALITY EDUCATION FOR ONE AND ALL"
        </h3>
        <p className="px-5 text-gray-500 text-lg">
          Bhondawe Patil Public School is started with a focused mission to
          Inculcate a passion for lifelong learning among students and empower
          them to learn and excel, so that they can face the practical life
          situation with confidence and determination: standing true and tall to
          our vision of facilitating overall personality grooming, academic
          excellence as one of the primary objectives of our institution.
          <br />
          Our spacious, ventilated and smart classrooms, highly proficient
          faculty, professional & experienced management, balanced curriculum
          with ample space for co-curricular activities, social and value based
          education etc; make our schooling experience a distinct and unique
          one.
          <br />
          I wish every learner for an empowered learning and excellence In
          school and all facets of life.
          <br />
          Best Wishes & Warm Regards.
          <br />
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Our Aim",
    content: (
      <div>
        <h2 className="text-blue-900 text-center text-xl md:text-3xl font-bold pt-6 pb-2 md:pt-12">
          Our Aim
        </h2>
        <ul className="list-disc text-lg py-5 space-y-1 text-gray-500 px-5">
          <li>
            To accept and respect all individuals without any bias or prejudice
            irrespective of differences in origin, religion, ethnicity or
            otherwise and create an inclusive learning community.
          </li>
          <li>
            To help learners exploit their potential to the fullest and help
            them improve and grow both academically and personally.
          </li>
          <li>
            To provide a dynamic and broad spectrum learning environment that
            will faster critical thinking skills in a students and help them
            become life long learners.
          </li>
          <li>
            To create and awareness among the learners of the social
            responsibilities and equip them with the skills to adapt to the
            changing needs of a global environment.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: "Our Distinctions",
    content: (
      <div>
        <h2 className="text-blue-900 text-center text-xl md:text-3xl font-bold pt-6 pb-2 md:pt-12">
          Our Distinctions
        </h2>
        <ul className="list-disc text-lg py-5 space-y-1 text-gray-500 px-5">
          <li>
            Celebrate of culture of excellence in academics and the all round
            development of children.
          </li>
          <li>
            Individual attention to each child to cater to their diverse
            learning needs.
          </li>
          <li>
            Talented, experienced, and dedicated teachers with linguistic and
            cultural diversity.
          </li>
          <li>
            Inclusive education with a committed team of a student care
            professionals.
          </li>
          <li>
            Offers and integrated curriculum from LKJ to class VIII. drawing
            upon the best of national and international curriculum.
          </li>
          <li>
            Wide range and depth of community service for program starting from
            class III.
          </li>
          <li>
            Upholds Indian culture and values, whilst fostering global
            citizenship.
          </li>
          <li>
            High quality Student Leadership opportunities including exposure to
            leaders,Innovators and iconic personalities from all walks of life.
          </li>
        </ul>
      </div>
    ),
  },
];
function Page() {
  const [displayText, setDisplayText] = useState(buttonData[0].content);
  const [buttonColor, setButtonColor] = useState("Mission & Vision");

  const handleBtnClick = (content) => {
    setDisplayText(content);
  };
  return (
    <div>
      <div>
        <img src="../images/about-bg.webp" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-8 py-10 space-x-0 md:space-x-3">
          <div className="p-3 bg-white space-y-2 content-start grid md:col-span-2 border-2 rounded-md">
            {buttonData.map((item, i) => (
              <button
                onClick={() =>{ handleBtnClick(item.content),setButtonColor(item.title)}}
                className={`border-2 p-2 ${buttonColor===item.title?"text-white bg-blue-900":"text-blue-900 "}  font-bold border-gray-100
                 rounded-md w-full  focus:text-white focus:border-blue-900`}
                key={i}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="p-4 grid mx-auto md:col-span-6 md:row-span-2 border-2 rounded-md bg-white">
            <div>{displayText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
