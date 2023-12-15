import Image from "next/image";
import cat1 from "/public/images/cat1.jpg";
import Link from "next/link";


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

export default async function Page() {

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

    return (
        <>
            <h1 className="font-main text-center text-2xl font-medium mt-4">Course</h1>
            {Catagories.catagories.map((cata) => (
                <div key={cata.id} className="font-main">
                    <div className="flex items-center justify-between mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 my-4">
                        <h1 className="text-xl sm:text-2xl lg:text-2xl text-main font-medium  mt-5">
                            {cata.name}
                        </h1>
                        <Link href={`course/${cata.name}`} className="transition-all duration-300 transform hover:scale-105 border-2 border-main text-main rounded-full hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-4 py-1">
                            See More
                        </Link>
                    </div>

                    <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                        {Courses.courses
                            .filter((c) => c.course_cat === cata.name)
                            .slice(0, 3) // Display only the first three courses
                            .map((filteredCourse) => (
                                <Link href={`course/${cata.name}/${filteredCourse.name}`}>
                                    <div
                                        key={filteredCourse.id}
                                        className="w-full sm:w-96 md:w-96 lg:w-300 h-300  transform hover:scale-105 transition-all duration-300"
                                    >
                                        <Image
                                            src={filteredCourse.cover_img}
                                            width={500}
                                            height={500}
                                            alt="Cat Development Bootcamp"
                                            layout="responsive"
                                            objectFit="cover"
                                        />
                                        <div className="mt-2">
                                            <h1 className="text-lg md:text-xl mt-2">{filteredCourse.name}</h1>
                                            <p className="text-gray-400">{filteredCourse.description}</p>
                                        </div>
                                    </div>
                                </Link>

                            ))}
                    </div>

                </div>
            ))}
        </>
    )
}

