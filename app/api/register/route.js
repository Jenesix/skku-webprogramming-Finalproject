import User from "@/models/user";
import connectMongoDB from "@/libs/mangodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { email, password } = await request.json();

    await connectMongoDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new NextResponse("Email already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({ email, password: hashedPassword, isAdmin: false});


    try {
        await newUser.save();

        return new NextResponse("User is registered", { status: 200 });
    } catch (err) {
        
        return new NextResponse(err.message, { status: 500 });
    }
};
