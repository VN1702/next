import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB();

export async function POST(request:NextRequest){
    try {
        const reqBody=request.json();
        const {email,password}=await reqBody;
        console.log(reqBody);

        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User not found"},{status:404});
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return NextResponse.json({error:"Invalid credentials"},{status:401});
        }
        //create token data
        const tokenData={
            id :user._id,
            email:user.email,
            username:user.username
        };
        //create jwt token
        const token= await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'7d'});
        const response= NextResponse.json({
            message:"Login successful",
            success:true,
        })
        response.cookies.set("token",token,{
            httpOnly:true,
        })
        return response;
       
    }catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}