
import React from 'react'

const page = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    console.log(data)

    return (
        <div>
            {data?.title}
        </div>
    )
}

export default page