import { connectDB } from "@/config/db";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB()
        const body = await req.json()
        const {email, password} = body
        if(!email || !password)
            return NextResponse.json({
                success: false,
                message: "All fields are required"
            }, {status:400})

            const isExist = await userModel.findOne({email})

            if(isExist)
                return NextResponse.json({
                    success: false,
                    message: "User not exists",
                }, {status: 404})

                if(!password === isExist.password)
                    return NextResponse.json({
                        success:false,
                        message: "invalid creds",
                    },{status:401})

             

            return NextResponse.json({
                success: true,
                message: "User registered successfully",
                data: isExist
            }, {status: 201})

    } catch (error) {
        console.error(" error in user login" + error);
        return NextResponse.json({
            success: false,
            message: "something went wrong!!"
        }, { status: 500 })
    }
}