/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from "react";
import CommonBanner from "../Components/CommonBanner";

const academicData = [
  {
    id: 1,
    title: "EARLY YEARS PROGRAMME",
    details: [
      {
        heading: "THE KINDERGARTEN",
        subHeading: "NUR TO HKG",
        para: `
          EARLY YEARS PROGRAMME (The Kindergarten) inculcates in children the
          qualities of curiosity, exploration and discovery in a fun-filled,
          safe and happy learning environment. An individualised approach helps
          nurture a love of learning; develop social skills, and instil moral
          values. The emphasis is on developing in students, self confidence and
          the ability to effectively communicate in English as well as in their
          mother tongue; teachers ensure this through effective use of language
          and by encouraging children to express themselves freely.A
          well-balanced curriculum and theme-based instruction help the young
          minds integrate their learning smoothly. The emphasis is on exploring,
          knowing, understanding and forming their own ideas. The principles of
          learning applied in Kindergarten include Holistic Development and
          Learning (Aesthetics and Creative Expression, Language and Literacy,
          Numeracy, Self and Social Awareness) Integrated Learning; Active
          Learning: Supportive Learning: Interactive Learning and Learning
          through Play. The curriculum prepares children for a smooth transition
          to a more formal Primary curriculum. The Kindergarten Programme makes
          use of a range of individual and group activities which create a
          lively and positive learning environment. Games, songs, creative
          projects, story-telling, role-playing, drawing and painting help
          develop children's foundational skills in literacy and numeracy. They
          are encouraged to play, explore and discover through dance, music, art
          and craft. Singing, rhyming and reciting are employed in the Language
          Arts, and the Phonics Programme. The use of manipulative, pictures and
          symbols helps them identify relationships between sets and groups of
          things to be sorted, counted, shared and represented. Sports and
          interactions with sports teachers help in strengthening coordination
          and motor skills, and instil enthusiasm for sports. Picnics and fields
          trips enhance students understanding of their surroundings.
          Celebration of festivals sensitises them to multiple traditions and
          cultures.`,
      },
    ],
  },
  {
    id: 2,
    title: "THE FOUNDATION YEARS PROGRAMME",
    details: [
      {
        heading: "THE PRIMARY SCHOOL",
        subHeading: "I TO IV",
        para: `THE FOUNDATION YEARS PROGRAMME (The Primary School) encourages inquiry and exploration, and develops children's competence in various skills reading, writing, listening, speaking, problem-solving, observation, measurement and use of information and communications technology.
        It offers an exciting and creative learning environment, with an inter disciplinary appreciation of Languages, Mathematics, Science and Social Studies, as individual and integrated subjects. Hindi is taught as a Second Language, while Marathi language offered as the Third Language, which helps build a strong foundation in Regional language. The ICT helps students understand Information and Communications Technology and its benefits. Equal emphasis is given to individual, small group and whole-group activities, to improve children's ability to work across all levels. Physical Education develops sports skills and creates health awareness. Exposure to team and individual sports encourage a sense of team spirit, and individual effort and accomplishment.
        The wide range of curricular and co-curricular opportunities offered helps instil in children confidence and discipline. The focus on developing communication skills helps them appreciate the value of education, as it reflects in their ability to express themselves, in addition to developing pragmatic skills.
        Field trips, excursions, activities, projects and presentations provide experiential learning opportunities. Dance, Fine Arts, Western and Indian Music, Yoga, Speech and Drama promote well-rounded development. Students are encouraged to participate in inter-house cultural and sports events. Active learning techniques like free play, dramatisation, and puppetry, songs, dancing and cooking enhance their interest in learning. Book, newspaper and magazine reading activities increase children's awareness of the world. Assemblies, concerts and drama productions help shape their confidence. Student's engagement in community service activities from Class III onwards sensitises them to the needs of their community and to the world around them; they visit old-age homes and orphanages to understand their situations and also to support underprivileged children.`,
      },
    ],
  },
  {
    id: 3,
    title: "GROWING YEARS PROGRAMME",
    details: [
      {
        heading: "THE MIDDLE SCHOOL",
        subHeading: "V TO VIII",
        para: `GROWING YEARS PROGRAMME (The Middle School) is structured to meet children's varied intellectual and developmental needs. The MSP builds on concepts and skills learnt in the Primary School and ensures progression and continuity across various stages of learning in the School, and incorporates continuous evaluation and review of children's performance.
        The main aims of the Programme are developing skills related to writing, reading, reflecting, critical thinking, public speaking, fostering initiative among students and a desire to acquire knowledge.
        Art, Drama, Computer studies, Music, Yoga and Dance are integrated into the mainstream curriculum and are further strengthened as optional co curricular activities.
        Personal, Social, Health Education helps students address their age-specific interests and concerns, builds awareness, and promotes compassionate and ethical conduct. Physical Education is offered in a more formal manner and sports skills are fine-tuned. This prepares students to pursue sports in a more structured and purposeful manner, including studying sports in the Secondary School as a formal subject.`,
      },
    ],
  },
];

function Page() {
  const [selectedProgramIndex, setSelectedProgramIndex] = useState(0);
  const [buttonColor, setButtonColor] = useState("EARLY YEARS PROGRAMME"); 
  function handleAcademicBtn(index) {
    setSelectedProgramIndex(index); 
  }

  return (
    <>
      <div className=" sm:py-0 py-2">
        <CommonBanner title="Academics" />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-5">
          {academicData.map((item, index) => (
            <button
              onClick={() =>{ handleAcademicBtn(index),setButtonColor(item.title)}}
              key={index}
              className={`border-2 p-4 text-[14px] md:text-lg font-bold border-blue-900 w-full focus:bg-blue-900 focus:text-white
               text-blue-900 focus:border-blue-900 md:border-r-0 ${buttonColor===item.title?"text-white bg-blue-900":"text-blue-900 "}`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center justify-center rounded-md mt-10 md:mx-40 mx-10">
          {academicData[selectedProgramIndex].details.map((detail, index) => (
            <div key={index} className="py-5">
              <h3 className="text-lg md:text-xl font-bold text-center text-blue-900">
                {detail.heading}
                <br />
                <span>{detail.subHeading}</span>
              </h3>
              <p className="text-gray-500 text-left text-lg mt-2 md:px-5">
                {detail.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
