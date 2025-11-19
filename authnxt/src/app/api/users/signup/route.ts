import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
connectDB();

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {name,email,password}=reqBody;
        console.log(reqBody);

        const user= await User.findOne({email})
        if(user){
            return NextResponse.json({message:"User already exists"},{status:400});
        }
        //hash password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const   newUser=new User({
            name,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save();
        console.log("User registered:",savedUser);
        return NextResponse.json({
            message:"User registered successfully",
            success:true,
            savedUser
        });
    
    }

    catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}