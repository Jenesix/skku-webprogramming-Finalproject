"use client";
import { NextResponse } from 'next/server'
import { signOut, useSession } from "next-auth/react";


 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    try{
    const token = request.cookies.get('next-auth.session-token').value
    console.log(token)
    return NextResponse.next()

    } catch (error) {
        return NextResponse.next()

    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}