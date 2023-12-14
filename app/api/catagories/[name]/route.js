import connectMongoDB from "@/libs/mangodb";
import Catagory from "@/models/catagory";
import { NextResponse } from "next/server";



export async function PUT(request,{params}) {
    try{
        const {name} = params;
        const {newName: _name, newDescription: description} = await request.json();
        await connectMongoDB();
        await Catagory.findOneAndUpdate(name, {_name, description});
        return NextResponse.json({ message: "Catagory Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {name} = params; // {this} need to be the same name as folder name ([this])
        await connectMongoDB();
        const catagory = await Catagory.findOne({"name":name});
        return NextResponse.json({ catagory },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}
