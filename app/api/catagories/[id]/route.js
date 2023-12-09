import connectMongoDB from "@/libs/mangodb";
import Catagory from "@/models/catagory";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {id} = params;
        const {newName: name, newDescription: description} = await request.json();
        await connectMongoDB();
        await Catagory.findByIdAndUpdate(id, {name, description});
        return NextResponse.json({ message: "Catagory Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {id} = params;
        await connectMongoDB();
        const catagory = await Catagory.findOne({_id: id});
        return NextResponse.json({ catagory },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}
