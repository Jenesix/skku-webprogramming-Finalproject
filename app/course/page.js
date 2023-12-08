import Image from "next/image";
import cat1 from "/public/images/cat1.jpg";
import cat2 from "/public/images/cat2.jpg";
import cat3 from "/public/images/cat3.jpg";

export default function Course() {
    return (
        <div className="font-main">
            <h1 className="text-center text-2xl font-medium mt-4">Courses</h1>
            <div className="flex">
            <h1 className="text-xl sm:text-2xl lg:text-2xl ml-12 sm:ml-18 md:ml-28 lg:ml-24 xl:ml-32 mt-5">
        Courses for you
      </h1>
      <button className="bg-sub text-white px-2 py-1 rounded-md">
          See More
        </button>
      </div>
            <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-8">
        <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
            
          <Image src={cat1} width={500} height={500} layout="responsive" objectFit="cover" />
          
          <div className="mt-2">
            <h1 className="text-lg md:text-xl mt-2">The Complete 2023 Cat Development Bootcamp</h1>
            <p className="text-gray-400">Dr. Cat</p>
            
          </div>
        </div>
        <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
          <Image src={cat2} width={500} height={500} layout="responsive" objectFit="cover" />
          <div className="mt-2">
            <h1 className="text-lg md:text-xl mt-2">Digital Marketing Agency | Start a Social Media Business for cat</h1>
            <p className="text-gray-400">Meow</p>
          </div>
        </div>
        <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
          <Image src={cat3} width={500} height={500} layout="responsive" objectFit="cover" />
          <div className="mt-2">
            <h1 className="text-lg md:text-xl mt-2">Complete Web & Mobile Designer in 2023: UI/UX, Figma for cat</h1>
            <p className="text-gray-400">Lion cat</p>
          </div>
        </div>
      </div>
        </div>
    )
}