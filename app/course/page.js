import Image from "next/image";
import cat1 from "/public/images/cat1.jpg";
import cat2 from "/public/images/cat2.jpg";
import cat3 from "/public/images/cat3.jpg";


async function getCatagories() {
    try {
        const res = await fetch("http://localhost:3000/api/catagories", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
              },  
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Catagories");
        }
        const data = await res.json()
        return data;

    } catch (error) {
        console.log("Error loading Catagories: ", error);
    }
};

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

export default async function Course() {

    const Catagories = await getCatagories();
        // console.log(Catagories);
        // console.log("====================");
        // console.log(typeof Catagories);
        // console.log("====================");

    const Courses = await getCourses();

        // console.log(Courses);
        // console.log("====================");
        // console.log(typeof Courses);
        // console.log("====================");

    return(
        <>
            {Catagories.catagories.map((cata) => (
                    <div className="font-main">
                        <div className="flex items-center justify-between mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 my-4">
                            <h1 className="text-xl sm:text-2xl lg:text-2xl text-main font-medium  mt-5">
                            {cata.name}
                            </h1>
                            <button className="bg-white text-main transition-all duration-300 transform hover:scale-105 border-main border-2 px-4 py-1 mt-5 rounded-full">
                                See More
                            </button>
                        </div>

                        <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                            {Courses.courses.map((c) => (
                                <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">
                                    <Image src={cat1} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />
                                    <div className="mt-2">
                                        <h1 className="text-lg md:text-xl mt-2">{c.name}</h1>
                                        <p className="text-gray-400">{c.description}Dr. Cat</p>
                                    </div>
                                </div>
                            ))}
                        </div>            
                </div> 
                
            ))}
        </>)
}
         