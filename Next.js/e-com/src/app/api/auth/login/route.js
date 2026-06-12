import { connectDB } from "@/config/db";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 },
      );
    }

    const user = await userModel.findOne({ email });

    if (!user || !user.salt) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 },
      );
    }

    // Hash the provided password with the stored salt
    const hashedInputPassword = crypto
      .scryptSync(password, user.salt, 64)
      .toString("hex");

    if (hashedInputPassword !== user.password) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 },
      );
    }

    // Generate a session token
    const sessionToken = crypto.randomBytes(32).toString("hex");

    // Save the session token to the user document
    user.sessionToken = sessionToken;
    await user.save();

    // Set HttpOnly cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "Logged in successfully",
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      { status: 200 },
    );

    response.cookies.set({
      name: "sessionToken",
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch (error) {
    console.error("error in user login: " + error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong!!",
      },
      { status: 500 },
    );
  }
}
