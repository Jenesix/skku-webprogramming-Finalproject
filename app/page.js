import Image from "next/image";
import hero from "../public/images/hero.png";

export default function Home() {
  return (
    <div className="font-main text-center">
      <div className="flex flex-col md:flex-row-reverse justify-evenly bg-gradient-to-r from-main to-sub  text-white w-8 h-auto ">
           <div className="my-8 md:basics-1/2">
                <Image src={hero} width={300} height={300} />
           </div>
           <div className="my-8 md:basics-1/2 flex flex-col text-left justify-center">
              <p className="text-3xl">
                Don't stop learning to develop your skills
              </p>
              <p className="text-md">
                <br></br> 
                Learn from expert professionals. Mathematics,
                Programming, Business, <br></br> and Marketing 
                to find  
                your dream. Join Us!
                <br></br> 
                <br></br> 
              </p>
              <button className="text-xl py-1 mr-48 bg-white text-main border-2 border-sub rounded-2xl hover:drop-shadow-xl active:bg-sub active:text-white ">
                Create your free account
              </button>
           </div>
      </div>
      

    </div>
  )
}
