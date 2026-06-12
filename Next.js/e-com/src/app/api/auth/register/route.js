import { connectDB } from "@/config/db";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { username, name, email, password } = body;

    const finalUsername = username || name;

    if (!finalUsername || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const isExist = await userModel.findOne({ email });

    if (isExist) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 },
      );
    }

    // Hash the password securely using Node's native crypto
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto
      .scryptSync(password, salt, 64)
      .toString("hex");

    const newUser = await userModel.create({
      username: finalUsername,
      email,
      password: hashedPassword,
      salt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        data: {
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("error in user registration: " + error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong!!",
      },
      { status: 500 },
    );
  }
}
