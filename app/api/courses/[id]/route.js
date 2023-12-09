import connectMongoDB from "@/libs/mangodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {id} = params;
        const {newName: name, new_cat: course_cat, newDescription: description} = await request.json();
        await connectMongoDB();
        await Course.findByIdAndUpdate(id, {name, course_cat, description});
        return NextResponse.json({ message: "Course Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {id} = params;
        await connectMongoDB();
        const course = await Course.findOne({_id: id});
        return NextResponse.json({ course },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}
