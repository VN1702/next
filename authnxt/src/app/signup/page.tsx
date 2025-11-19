"use client";
import Link from "next/link";
import React from "react";
import {userRouter} from "next/navigation";
import {axios} from "axios";





export default function SignupPage() {
    const router=userRouter();
    const [user,setUser]=React.useState({
        name:"",
        email:"",
        password:""
    });
    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const onSignup=async()=>{
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 >Signup</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={user.username}
                onChange={(e)=>setUser({...user,username:e.target.value})}
                placeholder="username"
                />
                <label htmlFor="email">email</label>
            <input
                type="text"
                id="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="email"
                />
                <label htmlFor="password">password</label>
            <input
                type="password"
                id="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder="password"
                />
                <button onClick={onSignup}
                className="p-2 border border-gray-300
                rounded-lg mb-4 focus:outline-none focus:border-gray-600 ">Sign up here</button>
                <Link href="/login">Already have an account? Login</Link>
        </div>
    );
}