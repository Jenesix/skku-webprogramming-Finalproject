import connectMongoDB from "@/libs/mangodb";
import Catagory from "@/models/catagory";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {name_param} = params.name;
        const {newName: name, newDescription: description} = await request.json();
        await connectMongoDB();
        await Catagory.findByIdAndUpdate(name_param, {name, description});
        return NextResponse.json({ message: "Catagory Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {name_param} = params.name;
        await connectMongoDB();
        const catagory = await Catagory.findOne({name: name_param});
        return NextResponse.json({ catagory },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}
