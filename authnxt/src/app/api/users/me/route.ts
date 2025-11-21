import {getDataFromToken} from "@/helpers/getDataFromToken";
import {NextRequest,NextResponse} from "next/server";
import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { get } from "http";
connectDB();
export async function GET(request:NextRequest){
try{
    const userID=await getDataFromToken(request);
    const user=await User.findById(userID).select('-password');
    return NextResponse.json({message:"User found",data:user},{status:200});

}
catch(error:any){
    return NextResponse.json({error:error.message},{status:400});
}}