import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    console.log(data)

    return (
        <div>
            {children}
        </div>
    )
}

export default layout


// we write 2 same API requests in this layout and page
// so next js will auto memoize the api and only fetch it once instead of 2 times