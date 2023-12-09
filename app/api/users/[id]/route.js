import connectMongoDB from "@/libs/mangodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    try{
        const {id} = params;
        const {newEmail: email, newPassword: password, newAdminStatus: isAdmin} = await request.json();
        await connectMongoDB();
        await User.findByIdAndUpdate(id, {email, password, isAdmin});
        return NextResponse.json({ message: "User Updated!" },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}

export async function GET(request,{params}) {
    try{
        const {id} = params;
        await connectMongoDB();
        const user = await User.findOne({_id: id});
        return NextResponse.json({ user },{ status: 200 }); 

    }catch(error){
        console.log("error",error)
    }
}