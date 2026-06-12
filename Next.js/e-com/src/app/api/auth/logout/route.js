import { connectDB } from "@/config/db";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const sessionToken = req.cookies.get("sessionToken")?.value;

    if (sessionToken) {
      await connectDB();
      // Clear sessionToken from DB
      await userModel.findOneAndUpdate(
        { sessionToken },
        { $unset: { sessionToken: "" } },
      );
    }

    const response = NextResponse.json(
      {
        success: true,
        message: "Logged out successfully",
      },
      { status: 200 },
    );

    // Clear the cookie
    response.cookies.delete("sessionToken");

    return response;
  } catch (error) {
    console.error("error in user logout: " + error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong!!",
      },
      { status: 500 },
    );
  }
}
