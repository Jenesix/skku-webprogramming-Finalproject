import Image from "next/image";
import businessman from "../../public/images/businessman.png";

export default function Login() {
  return (
    <div className="font-main text-center mx-56 my-28 border-2 rounded-xl border-black">
        <div className="grid grid-cols-5 grid-row-4 ">
            <div className="col-span-3 row-span-4 flex flex-col bg-gradient-to-r from-main to-sub border-0 rounded-xl px-8 py-8 text-center">
                <Image src={businessman} width={300} height={300}/>
                <p className>
                    Welcome to our website
                </p>
            </div>
            <div className="col-span-2 row-span-4">
                02
            </div>
            

        </div>
    </div>
    
  )
}
