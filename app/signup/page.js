import Image from "next/image";
import businessman from "../../public/images/hdbusiman.png";
import { FcGoogle } from "react-icons/fc";;

export default function Login() {

  return (
    <div className="font-main mx-64 my-24 border rounded-3xl border-black border-l-0  ">
        <div className="grid grid-cols-5 grid-row-4">
            <div className="col-span-3 row-span-4 flex flex-col bg-gradient-to-br  from-main to-sub border-0 rounded-2xl px-8 py-8 place-items-center ">
                <Image src={businessman} width={300} height={300}/>
                <p className="text-3xl text-white ">
                    <br/>
                    Welcome to our website
                </p>
            </div>
            
            <div className="col-span-2 row-span-4 px-16 pt-12">
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-bold">
                  Sign up
                </p>
                <p className="text-gray-400">
                  And gain acess for better content
                </p>
                <br/>

                <div className=" relative mb-6" data-te-input-wrapper-init>
                  <div className="w-56 relative group">
                      <input type="e-mail" id="e-mail" required size={25} className=" h-6 px-4 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="e-mail" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Email address</label>
                  </div>
                </div>
                <div className=" relative mb-0.25" data-te-input-wrapper-init>
                  <div className="w-56 relative group">
                      <input type="password" id="password" required size={25} className=" h-6 px-4 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                      <label for="password" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Create a password</label>
                  </div>
                </div>
                <a href="" className="text-gray-400 text-sm pb-2 ml-40 mt-1 whitespace-nowrap">Forget password?</a>
              </div>

              <div className="text-center">
                <button className="rounded-3xl border-2 border-main text-main px-6 py-1 hover:text-white hover:bg-main transition-all duration-300 transform hover:scale-105">
                  Sign up
                </button>
                  <p className="text-gray-400 pb-2 pt-2"> OR</p>
                <button className="flex flex-row place-items-center rounded-3xl border-2 border-gray-200 px-11 py-1 text-gray-400 hover:text-white hover:bg-main hover:border-main  transition-all duration-300 transform hover:scale-105">
                  <FcGoogle className="mr-2"/> Sign in with google
                </button>
                <p className="text-gray-400 mt-6">
                  Have an account? 
                  <a href="" className="text-main"> Log In</a>
                </p>
                <br/>
              </div>
          
            </div>

        </div>
    </div>
    
  )
}