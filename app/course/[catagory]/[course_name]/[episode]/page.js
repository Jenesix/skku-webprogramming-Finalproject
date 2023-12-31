import React from 'react';
import YouTubePlayer from "@/components/YTplayer";


async function getEP() {
    try {
        const res = await fetch("http://localhost:3000/api/episodes", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
              },  
        });
  
        if (!res.ok) {
            throw new Error("Failed to fetch Episode");
        }
        const data = await res.json()
        return data;
  
    } catch (error) {
        console.log("Error loading Courses: ", error);
    }
};

export default async function Page({params}) {
    const EPs = await getEP();

    return (
        <>
            {EPs.eps
            .filter((ep) => ep.name === params.episode.replace('%20',' ')) // .replace -> replace %20 with space
            .map((this_ep) => ( 
                <div className="font-main ">
                    <div className="flex mt-5 flex-col md:flex-row-reverse place-items-center text-center justify-evenly text-black w-8 h-auto ">
                        <div className="flex flex-col">
                            <h1 className="mb-4">{this_ep.name}</h1>
                            <YouTubePlayer videoId={this_ep.videoId} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
