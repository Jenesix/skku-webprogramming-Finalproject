import connectMongoDB from "@/libs/mangodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {name, course_cat, description,cover_img} = await request.json();
        await connectMongoDB();
        await Course.create({name, course_cat, description,cover_img});
        return NextResponse.json({ message: "Course created!" },{ status: 201 });
    } catch (error){
        console.log('error',error);
    }
}

export async function GET() {
    try{
        await connectMongoDB();
        const courses = await Course.find();
        return NextResponse.json({courses});   
    } catch(error){
        console.log('error',error);
    }
}

export async function DELETE(request){
    try{
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Course.findByIdAndDelete(id);
        return NextResponse.json({ message: "Course Deleted!" },{ status: 201 });
    }catch(error){
        console.log('error',error)
    }
}