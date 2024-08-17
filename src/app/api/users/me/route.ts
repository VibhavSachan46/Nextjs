import { getDataFromToken } from "@/helper/getDataFromToken";

import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConifg";

connect()

export async function GET(request:NextRequest) {
    try {
        const id = await getDataFromToken(request)
        const user = await User.findOne({_id: id}).select("-password")

        console.log("User is ", user);
        return NextResponse.json(
            {
                message: "User fpund",
                data: user
            })
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:400})
    }
}