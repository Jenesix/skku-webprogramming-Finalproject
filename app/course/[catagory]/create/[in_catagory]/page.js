"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function convertToBase64(file){
    return new Promise ((resolve,reject) =>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);  // convert file to base 64

        fileReader.onload = ()=>{
            resolve(fileReader.result)  // return
        };

        fileReader.onerror = (error) =>{
            reject(error)
        }
    })
}

export default function CreateCourse({params}) {
    
    const [name,setName] = useState("");
    const course_cat = params.in_catagory;
    const [description,setDescription] = useState("");
    const [cover_img,setCover_img] = useState("");

    const [error, setError] = useState("");

    const router = useRouter();

    const handleFileUpload = async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setCover_img(base64);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !description ){
            alert("Name and description are required!")
            return;
        }
        try{
            const res = await fetch('http://localhost:3000/api/courses',{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name,course_cat,description,cover_img })
            })
            if (res.ok) {
                setError("");
                router.push("/");
            } else{
                throw new Error("Failed to create course")
            }
        }catch(error){
            setError("Error, try again");
            console.log(error)
        }
    }
    

    return(
        <div className="font-main flex flex-col text-center">
            <h1 className="my-5 text-2xl">Create Course</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className=" relative mb-6 mx-12" data-te-input-wrapper-init>
                    <div className="w-56 relative group mt-2">
                        <input onChange={(e) => setName(e.target.value)} 
                        value={name}
                        type="text" id="name" required className=" h-6 px-4 py-2 text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"/>
                        
                        <label for="text" className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main ">Name</label>
                    </div>
                </div>

                <div className="relative mb-6 mx-12" data-te-input-wrapper-init>
                    <div className="w-56 relative group mt-20">
                        <textarea
                            onChange={(e) => setDescription(e.target.value)} 
                            value={description}
                            id="description"
                            name="description"
                            required
                            className="h-32 px-4  text-md peer bg-white outline-none border-b-2 group-focus-within:border-main peer-valid:border-main"
                        ></textarea>
                        <label
                            htmlFor="description"
                            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:test-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-gray-400 peer-focus:text-main "
                        >
                            Description
                        </label>
                    </div>
                </div>

                <div className="mb-6">
                    <label class="block mb-2 text-sm font-medium" for="file_input">Upload file</label>
                    <input onChange={(e) => handleFileUpload(e)} 
                    class=" w-full text-sm  border bg-gradient-to-r  border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_input" type="file"/>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                    <button
                    type="submit"
                    className="transition-all duration-300 transform hover:scale-105 rounded-3xl border-2 border-main text-main hover:text-white hover:bg-gradient-to-r from-main to-sub hover:border-main px-8 py-1.5"
                    >
                    Create Course
                    </button>
                </div>
            </form>
        </div>
    ) 
  }
  