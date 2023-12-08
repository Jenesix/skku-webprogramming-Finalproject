import Image from "next/image";
import cat1 from "/public/images/cat1.jpg";
import cat2 from "/public/images/cat2.jpg";
import cat3 from "/public/images/cat3.jpg";

export default function Course() {
    return (
        <div className="font-main">
            <h1 className="text-center text-2xl font-medium mt-4">Courses</h1>
            <div className="flex items-center justify-between mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32">
                <h1 className="text-xl sm:text-2xl lg:text-2xl text-main font-medium  mt-5">
                    Mathematics
                </h1>
                <button className="bg-white text-main transition-all duration-300 transform hover:scale-105 border-main border-2 px-4 py-1 mt-5 rounded-full">
                    See More
                </button>
            </div>

            <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">

                    <Image src={cat1} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />

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

            {/* End */}

            <div className="flex items-center justify-between mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32">
                <h1 className="text-xl sm:text-2xl lg:text-2xl text-main font-medium  mt-5">
                    Programming
                </h1>
                <button className="bg-white text-main border-main border-2 px-4 py-1 mt-5 rounded-full">
                    See More
                </button>
            </div>

            <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">

                    <Image src={cat1} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />

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

            {/* End */}

            <div className="flex items-center justify-between mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32">
                <h1 className="text-xl sm:text-2xl lg:text-2xl text-main font-medium  mt-5">
                    Business
                </h1>
                <button className="bg-white text-main border-main border-2 px-4 py-1 mt-5 rounded-full">
                    See More
                </button>
            </div>

            <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">

                    <Image src={cat1} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />

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

            {/* End */}
            <div className="flex items-center justify-between mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32">
                <h1 className="text-xl sm:text-2xl lg:text-2xl text-main font-medium  mt-5">
                    Marketing
                </h1>
                <button className="bg-white text-main border-main border-2 px-4 py-1 mt-5 rounded-full">
                    See More
                </button>
            </div>

            <div className="mt-4 mx-12 sm:mx-18 md:mx-28 lg:mx-24 xl:mx-32 grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                <div className="w-full sm:w-96 md:w-96 lg:w-300 h-300">

                    <Image src={cat1} width={500} height={500} alt="Cat Development Bootcamp" layout="responsive" objectFit="cover" />

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