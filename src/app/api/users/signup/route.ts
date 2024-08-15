// import { connect } from "@/dbConfig/dbConfig";
import { connect } from "@/dbConfig/dbConifg";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log(reqBody)

        // Check if user already exist
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        // Hash Passoword
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser);


        return NextResponse.json({
            message: "USerf created Successfully",
            success: true,
            savedUser
        }, { status: 200 })


    } catch (error: any) {
        console.log("Signup nahi hua");

        return NextResponse.json({ error: error.message },{ status: 500 })
            
    }
}