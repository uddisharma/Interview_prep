
// Question 1
// What is Next JS and why this is preferred over React JS?

// <--------------------------------------------------------->

// Question 2
// Rendering types in Next JS , which one is default one
// Tell me how can we serve different types of rendering in Next JS in production

// <--------------------------------------------------------->

// Question 3
// What is the difference between getStaticProps and getServerSideProps in Next JS

// In Next.js, getStaticProps and getServerSideProps are two data-fetching methods used to prepare props for a page component.
// The getStaticProps method is used to fetch data at build time and the getServerSideProps method is used to fetch data at request time.

// <--------------------------------------------------------->

// Question 4
// <Link href="/product/1" > Product 1 </Link>
// <Link href="/product/1" replace > Product 1 </Link> 

// Difference between both links

// 1 when we go back from product 1 page then  we will go to product list page 
// 2 This will remove the last page address from the stack , so we will to to last 2nd page instead of last page.

// <--------------------------------------------------------->

// Question 5
// Do you know about the parallel routes in next JS

// <--------------------------------------------------------->

// Question 6
// Write an API route in next js that can extract and set cookies and headers from the request and return it in json format

export async function GET2(request) {

    const cookie = request.cookies.get('theme')
    const cookie1 = cookies().get('theme1')
    console.log(cookie, cookie1)

    const reqHeaders = new Headers(request.headers)
    const reqHeaders1 = headers()
    const auth = reqHeaders.get('Authorization')
    const auth1 = reqHeaders1.get('Authorization')
    console.log(auth, auth1)

    cookies().set('theme1', 'dark', { maxAge: 60 * 60 * 24 * 30 })
    return new Response("Hello World", {
        headers: {
            'content-type': 'application/json',
            'Set-Cookie': 'theme=dark'
        },
        status: 200
    })
}

// <--------------------------------------------------------->

// Question 7
// Do you know about server only & client only code in next js

// <--------------------------------------------------------->

// Question 8
// Will data be cached here , which request is going to be cached
// 2nd request does not go to cache
import React from 'react'
const page = async () => {

    const response1 = await fetch('https://jsonplaceholder.typicode.com/todos', {
        cache: 'no-store'
    })
    const data1 = await response1.json()

    console.log(data1)
    
    const response2 = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data2 = await response2.json()

    console.log(data2)

    return (
        <div>
            {
                data1?.map((e) => (
                    <div key={e.id}>
                        {e.title}
                        {e.completed ? 'completed' : 'not completed'}
                    </div>
                ))
            }
        </div>
    )
}

export default page

// <--------------------------------------------------------->

// Question 9
// What is Request Memoziation , explain me with an example

// <--------------------------------------------------------->

// Question 10
// How much time page will take to load , how to optimize it
import React, { Suspense } from 'react'
const Products = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return (
        <div>Products fetched</div>
    )
}
const Reviews = async () => {
    await new Promise(resolve => setTimeout(resolve, 4000))
    return (
        <div>Reviews fetched</div>
    )
}
const page1 = () => {
    return (
        <div>
            <h1>Streaming</h1>
            <Products />
            <Reviews />
        </div>
    )
}

// Without suspense it will take 4 seconds but after using suspense it takes less time