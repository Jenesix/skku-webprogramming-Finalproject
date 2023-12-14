import connectMongoDB from "@/libs/mangodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {name} = params;
        const {newName: _name, new_cat: course_cat, newDescription: description, newCoverImage: cover_img} = await request.json();
        await connectMongoDB();
        await Course.findByIdAndUpdate(name, {_name, course_cat, description, cover_img});
        return NextResponse.json({ message: "Course Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {name} = params; // {this} need to be the same name as folder name ([this])
        await connectMongoDB();
        const course = await Course.findOne({name: name});
        return NextResponse.json({ course },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}
