"use client";
import Image from "next/image";
import businessman from "../../public/images/hdbusiman.png";
import { FcGoogle } from "react-icons/fc";import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import { signIn, useSession } from "next-auth/react";



export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;


    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("");
    } else {
      setError("");
    }
  };


  return (
    <div className="font-main mx-20 sm:mx-28 md:mx-44 lg:mx-38 xl:mx-56 mb-4 mt-12 border rounded-3xl border-black flex flex-col xl:border-l-0  ">
        <div className=" lg:grid lg:grid-cols-5 ">
            <div className="col-span-5 lg:col-span-3 flex flex-col bg-gradient-to-br  from-main to-sub border-0 rounded-2xl px-8 py-8 place-items-center relative bottom-1 lg:bottom-0">
                <Image src={businessman} width={300} height={300}/>
                <p className="text-3xl text-white ">
                    <br/>
                    Welcome to our website
                </p>
            </div>
            
            <div className=" flex flex-col lg:col-span-2 pt-6 lg:pt-12 place-items-center ">
            <form onSubmit={handleSubmit}>
              <div className=" ">
                <p className="relative text-3xl lg:text-2xl font-bold">
                  Log In
                </p>
                <p className="relative md:text-base text-lg md:mt-0 mt-2 text-gray-400">
                  and learn like <span className="text-main">"Elite"</span>
                </p>
                <br/>

                <div className=" relative mb-6" data-te-input-wrapper-init>
                  <div className="w-56 relative group mt-2">
                      <input type="e-mail" id="e-mail" required className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="e-mail" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Email address</label>
                  </div>
                </div>
                <div className=" relative mb-3 mt-10" data-te-input-wrapper-init>
                  <div className="w-56 relative group">
                      <input type="password" id="password" required className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="password" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Create a password</label>
                  </div>
                </div>
                <br/>
              </div>

              <div className="flex flex-col  place-items-center text-center mt-4">
                <button className="transition-all duration-300 transform hover:scale-105 rounded-3xl border-2 border-main text-main hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-8 py-1.5">
                  Log In
                </button>
                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
                  <p className="text-gray-400 pb-2"> OR</p>
                
              </div>
            </form>
            <div className="">
            <button onClick={() => {
              signIn("google");
            }} className="flex flex-row items-center rounded-3xl border-2 border-gray-200 px-11 py-1.5  hover:text-white hover:bg-blue-500 hover:border-blue-500  transition-all duration-300 transform hover:scale-105">
                  <FcGoogle className="mr-2" /> Sign in with Google
                </button>
                <p className="text-gray-400 mt-6 pb-5 text-center">
                  Don't have an account?
                  <Link href="/signup" className="text-main"> Sign Up</Link>
                </p>
            </div>
            </div>

        </div>
    </div>
    
  )
}
