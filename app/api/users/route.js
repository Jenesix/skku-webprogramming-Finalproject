import connectMongoDB from "@/libs/mangodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {email, password, isAdmin} = await request.json();
        await connectMongoDB();
        await User.create({email, password, isAdmin});
        return NextResponse.json({ message: "User created!" },{ status: 201 });
    } catch (error){
        console.log('error',error);
    }
}

export async function GET() {
    try{
        await connectMongoDB();
        const users = await User.find();
        return NextResponse.json({users});   
    } catch(error){
        console.log('error',error);
    }
}
