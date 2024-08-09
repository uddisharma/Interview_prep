// import { cookies, headers } from "next/headers"
// import { NextRequest } from "next/server"

// dynamic route
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    return new Response(JSON.stringify({ id }))
}

// // qurey route
// export async function POST(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams
//     const id = searchParams.get('id')
//     return new Response(JSON.stringify({ id }))
// }

// // header route
// export async function GET1(request: NextRequest) {
//     // access request headers
//     const reqHeaders = new Headers(request.headers)
//     const reqHeaders1 = headers()
//     const auth = reqHeaders.get('Authorization')
//     const auth1 = reqHeaders1.get('Authorization')
//     console.log(auth, auth1)
//     // send response with headers
//     return new Response("Hello World", {
//         headers: {
//             'content-type': 'application/json'
//         },
//         status: 200
//     })
// }

// // cookie route
// export async function GET2(request: NextRequest) {
//     const cookie = request.cookies.get('theme')
//     const cookie1 = cookies().get('theme1')

//     console.log(cookie, cookie1)

//     cookies().set('theme1', 'dark', { maxAge: 60 * 60 * 24 * 30 })

//     return new Response("Hello World", {
//         headers: {
//             'content-type': 'application/json',
//             'Set-Cookie': 'theme=dark'
//         },
//         status: 200
//     })
// }