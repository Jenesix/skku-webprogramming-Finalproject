import connectMongoDB from "@/libs/mangodb";
import EP from "@/models/episode";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {id} = params;
        const {newName: name, new_course: ep_course, newDescription: description} = await request.json();
        await connectMongoDB();
        await EP.findByIdAndUpdate(id, {name, ep_course, description});
        return NextResponse.json({ message: "EP Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {id} = params;
        await connectMongoDB();
        const ep = await EP.findOne({_id: id});
        return NextResponse.json({ ep },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}