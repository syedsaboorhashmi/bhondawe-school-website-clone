'use client'
import CommonBanner from "../Components/CommonBanner";

const infraData = [
  {
    id: 1,
    imgSrc: "../images/activityRoom.webp",
    title: "PRE PRIMARY ACTIVITY ROOM",
    content:
      "BPPS is developing a unique activity room for the pre primary and primary kids. This room will be adequately equipped with modern toys, cycles and different types of slides and play houses. Kids can even watch movies, educational videos and power point presentation in this room. Preschool provides kids with a lifetime of knowledge.",
  },
  {
    id: 2,
    imgSrc: "../images/new science_lab.webp",
    title: "COMPOSITE SCIENCE LAB",
    content:
      "BPPS will also have composite science lab which will cater to the students Of middle school where they can unravel and explore the world Of science. At the initial level students are familiarized with the apparatus, equipments and specimens along with demonstrations of various experiments by teachers to develop skills and scientific temperament.",
  },
  {
    id: 3,
    imgSrc: "../images/library.webp",
    title: "LIBRARY",
    content:
      "The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills.",
  },
  {
    id: 4,
    imgSrc: "../images/computer.webp",
    title: "COMPUTER LAB",
    content:
      "The State Of the art computer centre provides plenty opportunities to the students to get an exposure of IT environment and learn to use various tools and software in their daily life and across the syllabus.Easy access to the internet means instant access to information, allowing students to conduct independent research right in the classroom. Technology allows students to become content creators themselves. They can create wiki pages collaboratively, write student blogs, create videos, webpages and other online content.",
  },
  {
    id: 5,
    imgSrc: "../images/danceRoom.webp",
    title: "DANCE ROOM",
    content:
      "There is a provision of spacious and well equipped dance studio at BPPS which will facilitate the creative, aesthetic and artistic talents of the school children. This room will be well equipped with musical and dance instruments and the technical equipment required bringing out the performing art skills of the students.",
  },
  {
    id: 6,
    imgSrc: "../images/new_ART & CRAFT ROOM.webp",
    title: "ART & CRAFT ROOM",
    content:
      "The splashes of colour reverberate with the diversity & vividity of human emotion in the art room at the junior level. Individual styles and techniques get honed and displayed at the middle and senior school level. BPPS will have a separate Art Room' where creativity of students is nurtured with necessary equipment to sensitize their aesthetic qualities.",
  },
  {
    id: 7,
    imgSrc: "../images/maths.webp",
    title: "MATHS LAB",
    content:
      "The Mathematics laboratory at BPPS is a place where the students can experiment and explore patterns ideas. Students can find a collection of games, puzzles, and other teaching and learning materials. The state of the art world class Math Lab will sharpen the skills of students. Mathematics laboratory serves to teach students about different methodologies and bridges the gap between the real and the abstract world. Their skills of reasoning, logical thinking and connecting ideas enhance with every lab session.",
  },
  {
    id: 8,
    imgSrc: "../images/new_AUDIO VISUAL ROOM.webp",
    title: "AUDIO VISUAL ROOM",
    content:
      "The use of audio visual aids is well integrated with the school curriculum and used by the staff and students alike. The Audio-Visual Room with its slide projector and screens is equipped both for teaching and presentations by students. A large collection of educational CDs and DVDs are used regularly as teaching aids for enhancement of the student's learning.",
  },
  {
    id: 9,
    vidSrc:"https://www.youtube.com/embed/hcFsDAwmO9A" ,
    title: "Music",
    content:
      "The use of audio visual aids is well integrated with the school curriculum and used by the staff and students alike. The Audio-Visual Room with its slide projector and screens is equipped both for teaching and presentations by students. A large collection of educational CDs and DVDs are used regularly as teaching aids for enhancement of the student's learning.",
  },
];

function page() {
  return (
    <>
      <div>
      <CommonBanner title="Our Infrastructure"/>
      </div>
      <div className="container mx-auto">
        <div className="grid content-start grid-cols-1 md:grid-cols-2 justify-start self-start items-start cards row-start-1 col-start-1">
          {infraData.map((item,i) => (
            <div key={i} className="m-5 bg-white border rounded-b-md">
              { item.imgSrc ?
                <img src={item.imgSrc} />:
                <iframe className="w-full h-[250px] sm:h-[400px] border rounded-t-md" src={item.vidSrc}/>}
              <div className="p-5">
                <h3 className="text-blue-900 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.content}</p>
              </div>
            </div>))}
        </div>
      </div>
    </>
  );
}

export default page;
