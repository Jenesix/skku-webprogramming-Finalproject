import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <header>
        <div className="font-main mx-10 md:mx-20 mt-4 flex xl:mx-40">
        <p className="font-medium md:text-3xl text-2xl whitespace-nowrap "><span className="text-main">Learn</span> Elite</p>
        <p className="mt-2 ml-6 md:text-xl text-md">Course</p>
        <form className="ml-4 md:ml-8 lg:ml-12 flex items-center">
          <div className="relative flex items-center">
            <FaSearch className="absolute ml-5 text-gray-500 mr-2" />
            <input
              className="bg-gray-100 rounded-full pl-10 md:pl-14 py-1 focus:outline-none border w-60 md:w-72 xl:w-80"
              type="text"
              placeholder="Search for anything"
            />
          </div>
        </form>
        <div className="ml-12">
            <button className="bg-main text-white rounded-full px-4 py-1">Log In</button>
            <button className="bg-white text-main rounded-full px-4 py-1 ml-4">Sign Up</button>
        </div>
    </div>
    </header>
    )
}