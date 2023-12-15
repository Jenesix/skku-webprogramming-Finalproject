import Image from "next/image";
import Link from "next/link";

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

async function getEP() {
    try {
        const res = await fetch("http://localhost:3000/api/episodes", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
              },  
        });
  
        if (!res.ok) {
            throw new Error("Failed to fetch Episode");
        }
        const data = await res.json()
        return data;
  
    } catch (error) {
        console.log("Error loading Courses: ", error);
    }
  };

export default async function Page({params}) {
    const Courses = await getCourses();
    const EPs = await getEP();

    return (
        <>
            {Courses.courses
            .filter((c) => c.name === params.course_name.replace('%20',' ')) // .replace -> replace %20 with space
            .map((this_course) => ( 

                <div className="font-main">
                    <div className="flex flex-col md:flex-row-reverse place-items-center justify-evenly bg-gradient-to-r from-main to-sub  text-white w-8 h-auto ">
                        <div className="my-8 md:ml-0 md:basics-1/2">
                            <Image src={this_course.cover_img} width={300} height={300} alt="Student study" />
                        </div>
                        <div className="my-8 md:basics-1/2 flex flex-col text-left justify-center">
                        <p className="text-3xl whitespace-nowrap">
                            {this_course.name}
                        </p>
                        <p className="text-md">
                            {this_course.description}
                        </p>

                        </div>
                    </div>

                    <div className="flex flex-row place-item-center w-8 h-auto mt-5 ">
                        <h1 className=" text-xl sm:text-2xl lg:text-3xl ml-12 sm:ml-18 md:ml-28 lg:ml-24 xl:ml-32 ">
                            Episodes
                        </h1>                   
                        
                        <Link href={`/course`} className="transition-all duration-300 transform hover:scale-105 border-2 border-main text-main rounded-full hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-4 py-1 ml-2 mr-1">
                            Add
                        </Link>
                        <Link href={`/course`} className="transition-all duration-300 transform hover:scale-105 border-2 border-main text-main rounded-full hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-4 py-1 ml-1 mr-1">
                            Edit
                        </Link>
                        <Link href={`/course`} className="transition-all duration-300 transform hover:scale-105 border-2 border-main text-main rounded-full hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-4 py-1 ml-1 mr-2">
                            Delete
                        </Link>
                    </div>                
                        
                    <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3  grid-flow-row gap-8">
                        {EPs.eps
                        .filter((ep) => ep.ep_course === this_course.name)
                        .map((filteredEP) =>(  
                            <div key={filteredEP.id} className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
                                <div className="mt-2">
                                    <Link href={`./${this_course.name}/${filteredEP.name}`} >
                                        <h1 className="text-lg md:text-xl mt-2">{filteredEP.name}</h1>
                                    </Link>
                                    <p className="text-gray-400">{filteredEP.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
