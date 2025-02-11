import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        const response = NextResponse.json(
            {
                message: "Logoiut success",
                success: true
            }
        )

        response.cookies.set("token","",
            {
                httpOnly:true,
                expires: new Date(0)
            })
        return response
        
    } catch (error: any) {
        return NextResponse.json({ error: "Logout failed" }, { status: 400 })
    }
}