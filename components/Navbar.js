"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="border-b border-black pb-3">
      <header className="lg:ml-12">
        <div className="font-main mx-10 mt-4 flex xl:mx-20">
          <Link href="/" className="transition-all duration-300 transform hover:scale-105 font-medium text-3xl  whitespace-nowrap float "><span className="text-main">LEARN</span> ELITE</Link>
          <Link href="/course" className="transition-all duration-300 transform hover:scale-105 mt-2 ml-12 text-xl">Course</Link>
          <form className="ml-4 md:ml-8 lg:ml-12 h-10 flex items-center">
            <div className="relative flex items-center">
              <FaSearch className="absolute ml-5 text-gray-500 mr-2 hidden md:block" />
              <input
                className="bg-gray-100 rounded-full pl-10 md:pl-14 hidden md:block py-1 focus:outline-none border  w-60 md:w-96 xl:w-120"
                type="text"
                placeholder="Search for anything"
              />
            </div>
          </form>
          <div className="flex ml-auto items-center">
          {!session ? (
            <>
            <Link href="/login">
            <button className="transition-all duration-300 transform hover:scale-105 bg-white text-main border-2 ml-2 md:ml-4 xl:ml-6 border-main text-lg whitespace-nowrap rounded-3xl px-4 lg:px-8 h-10">
              Log In
            </button>
            </Link>
            <Link href="/signup">
            <button className="transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-main to-sub  text-white rounded-3xl ml-2 md:ml-4 xl:ml-6 px-4  lg:px-8 text-lg md:mr-12 whitespace-nowrap h-10">
              Sign Up
            </button>
            </Link>
            </>
            ) : (
              <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>d
              </li>
            </>
          )}

          </div>
        </div>
      </header>
    </div>
  )
}