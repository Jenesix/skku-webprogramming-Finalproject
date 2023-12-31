"use client"
import Image from "next/image";
import businessman from "../../public/images/hdbusiman.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import { useSession, signIn } from "next-auth/react";




export default function Signup() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (password.length < 8) {
      setError("Password is too short (minimum is 8 characters)");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };




  return (
    sessionStatus !== "authenticated" && (
    <div className="font-main mx-20 sm:mx-28 md:mx-44 lg:mx-38 xl:mx-56 mb-4 mt-12 border rounded-3xl border-black flex flex-col xl:border-l-0 ">
      <div className=" lg:grid lg:grid-cols-5 ">
        <div className="col-span-5 lg:col-span-3 flex flex-col bg-gradient-to-br  from-main to-sub border-0 rounded-2xl px-8 py-8 place-items-center relative bottom-1 lg:bottom-0">
          <Image src={businessman} width={300} height={300} alt="business man" />
          <p className="text-3xl text-white ">
            <br />
            Welcome to our website
          </p>
        </div>

        <div className=" flex flex-col lg:col-span-2 pt-6 lg:pt-12 place-items-center ">
          <form onSubmit={handleSubmit}>
            <div className=" ">
              <p className="relative text-3xl lg:text-2xl font-bold">
                Sign up
              </p>
              <p className="relative md:text-base text-lg md:mt-0 mt-2 text-gray-400">
                and gain access for better content
              </p>
              <br />
              <div className=" relative mb-6" data-te-input-wrapper-init>
                  <div className="w-56 relative group mt-2">
                      <input type="e-mail" id="e-mail" required className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="e-mail" htmlFor="e-mail" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Email address</label>
                </div>
              </div>
              <div
                className=" relative mb-3 mt-10"
                data-te-input-wrapper-init
              >
                <div className="w-56 relative group">
                  <input
                    type="password"
                    id="password"
                    required
                    className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"
                  />
                  <label
                    htmlFor="password"
                    className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main "
                  >
                    Create a password
                  </label>
                </div>
              </div>
              <br />
            </div>
            <div className="flex flex-col  place-items-center text-center mt-4">
              <input
                type="submit"
                value="Sign up"
                className
                ="rounded-3xl border-2 border-main text-main px-8 py-1.5 hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main transition-all duration-300 transform hover:scale-105"
              />
              </div>
              </form>
              <p className="text-red-600 text-sm mb-4">{error && error}</p>
              <p className="text-gray-400 pb-2 pt-2"> OR</p>
              <button onClick={() => {
              signIn("google");
            }} className="flex flex-row items-center rounded-3xl border-2 border-gray-200 px-11 py-1.5  hover:text-white hover:bg-blue-500 hover:border-blue-500  transition-all duration-300 transform hover:scale-105">
                <FcGoogle  className="mr-2" /> Sign in with Google
              </button>
              <p className="text-gray-400 mt-6">
                Have an account?
                <Link href="/login" className="text-main">
                  {" "}
                  Log In
                </Link>
              </p>
              <br />
            

        </div>
      </div>
    </div>
  ));
}
