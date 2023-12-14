import connectMongoDB from "@/libs/mangodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {name_param} = params;
        const {newName: name, new_cat: course_cat, newDescription: description, newCoverImage: cover_img} = await request.json();
        await connectMongoDB();
        await Course.findByIdAndUpdate(name_param, {name, course_cat, description, cover_img});
        return NextResponse.json({ message: "Course Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {name_param} = params;
        await connectMongoDB();
        const course = await Course.findOne({name: name_param});
        return NextResponse.json({ course },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}
