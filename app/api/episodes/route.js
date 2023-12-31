import connectMongoDB from "@/libs/mangodb";
import EP from "@/models/episode";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {name, ep_course, description, videoId} = await request.json();
        await connectMongoDB();
        await EP.create({name, ep_course, description, videoId});
        return NextResponse.json({ message: "EP created!" },{ status: 201 });
    } catch (error){
        console.log('error',error);
    }
}

export async function GET() {
    try{
        await connectMongoDB();
        const eps = await EP.find();
        return NextResponse.json({eps});   
    } catch(error){
        console.log('error',error);
    }
}

export async function DELETE(request){
    try{
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await EP.findByIdAndDelete(id);
        return NextResponse.json({ message: "EP Deleted!" },{ status: 201 });
    }catch(error){
        console.log('error',error)
    }
}