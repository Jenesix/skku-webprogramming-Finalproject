import connectMongoDB from "@/libs/mangodb";
import EP from "@/models/episode";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {name} = params;
        const {newName: _name, new_course: ep_course, newDescription: description, newVidId: videoId} = await request.json();
        await connectMongoDB();
        await EP.findByIdAndUpdate(name, {_name, ep_course, description, videoId});
        return NextResponse.json({ message: "EP Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {name} = params;
        await connectMongoDB();
        const ep = await EP.findOne({name: name});
        return NextResponse.json({ ep },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}