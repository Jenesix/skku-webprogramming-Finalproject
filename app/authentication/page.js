import Image from "next/image";
import businessman from "../../public/images/hdbusiman.png";
import google_logo from "../../public/images/google_logo.png";

export default function Login() {
  return (
    <div className="font-main mx-64 my-24 border-2 rounded-3xl border-black border-l-0 drop-shadow-lg">
        <div className="grid grid-cols-5 grid-row-4 ">
            <div className="col-span-3 row-span-4 flex flex-col bg-gradient-to-br from-main to-sub border-0 rounded-2xl px-8 py-8 place-items-center ">
                <Image src={businessman} width={300} height={300}/>
                <p className="text-3xl text-white">
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
                <p className="pb-2 text-main text-md">
                  Email address
                </p>   
                <div className="w-fit border-b-2">
                  <input type="email" className=" underline underline-offset-2 border-none outline-none drop-shadow-none bg-transparent"></input>
                </div>
                <br/>
                <div className="border-b-2">
                  <input type="password" className="border-none  border-b-2 border-main outline-none shadow-none bg-transparent" placeholder="Create a password"></input>
                </div>
                <a href="" className="text-gray-400 text-sm pb-2">Forget password?</a>
              </div>

              <div className="text-center">
                <button className="rounded-3xl border-2 border-main text-main px-6 py-1">
                  Sign up
                </button>
                <br/>
                <p className="text-gray-400 pb-2 pt-2"> ─────────── OR ─────────── </p>
    
                <button className="flex flex-row place-items-center rounded-3xl border-2 border-gray-200 px-6 py-1 text-gray-400">
                  <Image src={google_logo} width={20} height={20} className="mx-1"/> Sign in with google
                </button>

                <br/>
                <br/>

                <p className="text-gray-400">
                  Have an account? 
                  <a href="" className="text-main"> Log In</a>
                </p>
              </div>
          
            </div>

        </div>
    </div>
    
  )
}
