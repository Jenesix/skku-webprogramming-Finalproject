import connectMongoDB from "@/libs/mangodb";
import Course from "@/models/course";
import EP from "@/models/episode";
import { NextResponse } from "next/server";

/* fetch ep from database */
const getEps = async ()=>{
    try{
        await fetch('http://localhost:3000/api/episodes')
    }catch(error){

    }
}

export async function POST(request){
    try{
        const {name, description, arrayOfEpisodes} = await request.json();

        const new_course = new Course({ name, description})
        await new_course.save()

        if (ep && ep.length>0) {
        const epDocuments = ep.map(ep => {
            return new EP({ ...ep })
        })

        await EP.insertMany(epDocuments)

        new_course.arrayOfEpisodes = epDocuments.map(ep => ep._id)
        await user.save()
        }

        await connectMongoDB();
        await Course.create({name, description, arrayOfEpisodes});
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