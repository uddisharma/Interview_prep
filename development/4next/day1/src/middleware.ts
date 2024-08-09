import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    // redirect
    if (request.nextUrl.pathname === '/loading') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // cookies
    const response = NextResponse.next()
    const cookie = request.cookies.get('theme')
    if (!cookie) {
        response.cookies.set('theme', 'dark')
    }

    // headers
    response.headers.set('Authorization', '123')

    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',]
}