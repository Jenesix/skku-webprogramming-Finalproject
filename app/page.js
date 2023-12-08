import Image from "next/image";
import hero from "../public/images/hero.png";

export default function Home() {
  return (
    <div className="font-main text-center">
      <div className="flex flex-col md:flex-row-reverse justify-evenly bg-gradient-to-r from-main to-sub  text-white w-8 h-auto ">
           <div className="my-8 md:basics-1/2">
                <Image src={hero} width={500} height={500} />
           </div>
           <div className="my-8 md:basics-1/2 flex flex-col text-left justify-items-start">
              <p>
                Don't stop learning to develop your skills
              </p>
              <p>
                Learn from expert professionals. Mathematics, Programming, 
                
              </p>
              <p>
                Business, and Marketing to find your dream. Join Us!
              </p>
              <button className="rounded-lg bg-white text-main border-2">
                Create your free account
              </button>
           </div>
      </div>
      <h1 className="text-xl">Home</h1>
    </div>
  )
}
