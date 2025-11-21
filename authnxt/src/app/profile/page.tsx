'use client';
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import React, { useState } from "react";
 

export default  function ProfilePage() {
    const router=useRouter();
    const [data ,setData]=React.useState(null);
    const  logout =async() =>{
        try {
          await axios.get('/api/users/logout');
            toast.success("Logged out successfully");
            router.push('/login');
        }
        catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }  ;  
    const getUserdetails=async()=>{
        const res =await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id);
    };
    
    
    
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 >Profile Page</h1>
            <hr/>
            <p>Welcome to your profile!</p>
            <h2 className="p-3 rounded bg-green-500">{data=== 'nothing' ? "nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            
            <button onClick={logout} className=" bg-blue-500 mt-4 hover:bg-blue-700 text-black font-bold py-2 rounded">Logout</button>
            <button onClick={getUserdetails} className=" bg-green-500 mt-4 hover:bg-green-700 text-black font-bold py-2 rounded">Get User Details</button>
        </div>
    );
}