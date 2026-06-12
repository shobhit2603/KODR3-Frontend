import { connectDB } from "@/config/db";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()
        const { username, email, password} = body
        if(!username || !email || !password)
            return NextResponse.json({
                success: false,
                message: "All fields are required"
            }, {status:400})

            const isExist = await userModel.findOne({email})

            if(isExist)
                return NextResponse.json({
                    success: false,
                    message: "User already exists",
                }, {status: 409})


            const newUser = await userModel.create({username, email, password})

            return NextResponse.json({
                success: true,
                message: "User registered successfully",
                data: newUser
            }, {status: 201})

    } catch (error) {
        console.error(" error in user registration" + error);
        return NextResponse.json({
            success: false,
            message: "something went wrong!!"
        }, { status: 500 })
    }
}