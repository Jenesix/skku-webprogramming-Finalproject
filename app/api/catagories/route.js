import connectMongoDB from "@/libs/mangodb";
import Catagory from "@/models/catagory";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {name, description} = await request.json();
        await connectMongoDB();
        await Catagory.create({name, description});
        return NextResponse.json({ message: "Catagory created!" },{ status: 201 });
    } catch (error){
        console.log('error',error);
    }
}

export async function GET() {
    try{
        await connectMongoDB();
        const catagories = await Catagory.find();
        return NextResponse.json({catagories});   
    } catch(error){
        console.log('error',error);
    }
}

export async function DELETE(request){
    try{
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Catagory.findByIdAndDelete(id);
        return NextResponse.json({ message: "Catagory Deleted!" },{ status: 201 });
    }catch(error){
        console.log('error',error)
    }
}