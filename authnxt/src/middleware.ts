import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path=== '/login' || path === '/signup' || path.startsWith('/api/users/login') || path.startsWith('/api/users/signup');

    const token=request.cookies.get('token')?.value||"";
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/',request.url));
    
}
if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login',request.url));
}}

export const config = {
    matcher: ['/','/profile', '/app/api/users/profile', '/app/api/users/logout', '/app/api/users/login/route.ts', '/app/api/users/signup/route.ts'],
};