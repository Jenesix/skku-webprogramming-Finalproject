import connectMongoDB from "@/libs/mangodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {email} = params;
        const {newEmail: _email, newPassword: password, newAdminStatus: isAdmin} = await request.json();
        await connectMongoDB();
        await User.findByIdAndUpdate(email, {_email, password, isAdmin});
        return NextResponse.json({ message: "User Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {email} = params;
        await connectMongoDB();
        const user = await User.findOne({email: email});
        return NextResponse.json({ user },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}