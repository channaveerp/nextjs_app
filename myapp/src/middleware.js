import { NextResponse } from 'next/server';

export function middleware(req) {
  debugger;
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/about/:path*' ,'/studentList/:path*'],
};
