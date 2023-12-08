import Image from "next/image";
import businessman from "../../public/images/hdbusiman.png";

export default function Login() {
  return (
    <div className="font-main text-center mx-64 my-28 border-2 rounded-3xl border-black border-l-0">
        <div className="grid grid-cols-5 grid-row-4 ">
            <div className="col-span-3 row-span-4 flex flex-col bg-gradient-to-br from-main to-sub border-0 rounded-2xl px-8 py-8 place-items-center">
                <Image src={businessman} width={300} height={300}/>
                <p className="text-3xl text-white">
                    <br/>
                    Welcome to our website
                </p>
            </div>
            

        </div>
    </div>
    
  )
}
