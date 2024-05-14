import Link from "next/link";

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
  {
    id: 3,
    title: "Mandatory Public Disclosure",
    path: "/mandatoryPublicDisclosure",
  },
  { id: 4, title: "Academics", path: "/academics" },
  { id: 5, title: "Achievements", path: "/achievements" },
  { id: 6, title: "Infrastructure", path: "/infrastructure" },
  { id: 7, title: "Gallery", path: "/gallery" },
  { id: 8, title: "Contact Us", path: "/contactUs" },
];
function Navbar() {
  return (
    <div className=" flex  bg-blue-900 w-full h-9  sm:py-0 py-2 ">
      <div class="text-2xl text-white absolute right-8 top-20 cursor-pointer md:hidden">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
        </svg>
      </div>
      <div
        class="md:flex md:items-center md:pb-0 pb-5 absolute md:static z-10 bg-blue-900 md:z-auto  left-0 w-full
           md:w-auto md:pl-0 md:pr-0 pl-7 pr-7 "
      >
        <ul class="md:flex justify-between divide-y-2 md:divide-y-0 font-semibold text-sm">
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/">
              Home
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/about">
              About Us
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/admissions">
              Admission
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a
              class="text-gray-50 cursor-pointer px-5 "
              href="/mandatoryPublicDisclosure"
            >
              Mandatory Public Disclosure
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/academics">
              Academic
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/achievements">
              Achievement
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/infrastructure">
              Infrastructure
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/gallery">
              Gallery
            </a>
          </li>
          <li class="md:py-0 py-3">
            <a class="text-gray-50 cursor-pointer px-5 " href="/contactUs">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <ul className="  pl-2 py-2 lg:flex md:flex sm:flex lg:gap-6 md:gap-3 sm:gap-2 text-white text-sm font-semibold">
        {navData.map((item, i) => (
          <Link key={i} href={item.path}>
            <li className="hidden md:block lg:block xl:block">{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
