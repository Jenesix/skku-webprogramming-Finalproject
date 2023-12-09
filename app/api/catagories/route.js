import connectMongoDB from "@/libs/mangodb";
import EP from "@/models/catagory";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {name, description} = await request.json();
        await connectMongoDB();
        await EP.create({name, description});
        return NextResponse.json({message: "EP created!"},{status: 201});
    } catch (error){
        console.log('error',error);
    }
    
}