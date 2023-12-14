import Image from "next/image";
import hero from "/public/images/hero.png";

async function getCourses() {
  try {
      const res = await fetch("http://localhost:3000/api/courses", {
          method: "GET",
          cache: "no-store",
          headers: {
              "Content-Type": "application/json",
            },  
      });

      if (!res.ok) {
          throw new Error("Failed to fetch Course");
      }
      const data = await res.json()
      return data;

  } catch (error) {
      console.log("Error loading Courses: ", error);
  }
};

export default async function Home() {
  const Courses = await getCourses();

  return (
    <>
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
      
      <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3  grid-flow-row gap-8">
        {Courses.courses
        .filter((c) => c.course_cat === "Mathematics")
        .slice(0, 1) // Display only the first course1
        .map((filteredCourse) =>(  
            <div key={filteredCourse.id} className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
                <Image src={filteredCourse.cover_img} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />
                <div className="mt-2">
                    <h1 className="text-lg md:text-xl mt-2">{filteredCourse.name}</h1>
                    <p className="text-gray-400">{filteredCourse.description}</p>
                </div>
            </div>
        ))}

        {Courses.courses
        .filter((c) => c.course_cat === "Programming")
        .slice(0, 1) // Display only the first course1
        .map((filteredCourse) =>(  
            <div key={filteredCourse.id} className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
                <Image src={filteredCourse.cover_img} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />
                <div className="mt-2">
                    <h1 className="text-lg md:text-xl mt-2">{filteredCourse.name}</h1>
                    <p className="text-gray-400">{filteredCourse.description}</p>
                </div>
            </div>
        ))}

        {Courses.courses
        .filter((c) => c.course_cat === "Marketing")
        .slice(0, 1) // Display only the first course1
        .map((filteredCourse) =>(  
            <div key={filteredCourse.id} className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
                <Image src={filteredCourse.cover_img} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />
                <div className="mt-2">
                    <h1 className="text-lg md:text-xl mt-2">{filteredCourse.name}</h1>
                    <p className="text-gray-400">{filteredCourse.description}</p>
                </div>
            </div>
        ))}
      </div>

    </div>
    </>
  )
}
