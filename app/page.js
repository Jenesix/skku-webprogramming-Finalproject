import Image from "next/image";
import hero from "/public/images/hero.png";
import cat1 from "/public/images/cat1.jpg";
import cat2 from "/public/images/cat2.jpg";
import cat3 from "/public/images/cat3.jpg";

export default function Home() {
  return (
    <div className="font-main">
      <div className="flex flex-col md:flex-row-reverse place-items-center justify-evenly bg-gradient-to-r from-main to-sub  text-white w-8 h-auto ">
        <div className="my-8 md:ml-0 md:basics-1/2">
          <Image src={hero} width={300} height={300} alt="Student study" />
        </div>
        <div className="my-8 md:basics-1/2 flex flex-col text-left justify-center">
          <p className="text-3xl whitespace-nowrap">
            Don't stop learning to develop your skills
          </p>
          <p className="text-md">
            <br />
            Learn from expert professionals. Mathematics,
            Programming, Business, <br></br> and Marketing
            to find
            your dream. Join Us!
            <br />
            <br />
          </p>

          <button className="text-xl py-1 md:mr-48 bg-white text-main border-2 border-sub rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-sub">
            Create your free account
          </button>

        </div>
        {/* This is a video course for you section */}
      </div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl ml-12 sm:ml-18 md:ml-28 lg:ml-24 xl:ml-32 mt-5">
        Courses for you
      </h1>
        {/* This is a video section use grid  */}
      <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-8">
        <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
          <Image src={cat1} width={500} height={500} layout="responsive" alt="Cat Development Bootcamp" objectFit="cover" />
          <div className="mt-2">
            <h1 className="text-lg md:text-xl mt-2">The Complete 2023 Cat Development Bootcamp</h1>
            <p className="text-gray-400">Dr. Cat</p>
          </div>
        </div>
        <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
          <Image src={cat2} width={500} height={500} layout="responsive" alt="Cat Digital Marketing" objectFit="cover" />
          <div className="mt-2">
            <h1 className="text-lg md:text-xl mt-2">Digital Marketing Agency | Start a Social Media Business for cat</h1>
            <p className="text-gray-400">Meow</p>
          </div>
        </div>
        <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
          <Image src={cat3} width={500} height={500} layout="responsive" alt="Cat UX/UI Figma" objectFit="cover" />
          <div className="mt-2">
            <h1 className="text-lg md:text-xl mt-2">Complete Web & Mobile Designer in 2023: UI/UX, Figma for cat</h1>
            <p className="text-gray-400">Lion cat</p>
          </div>
        </div>
      </div>


    </div>
  )
}
