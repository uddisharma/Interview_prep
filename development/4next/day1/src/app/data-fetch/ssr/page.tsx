
import React from 'react'

const page = async () => {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        cache: 'no-store',
        // next:{
        //     revalidate: 10
        // }
    })
    const data = await response.json()

    console.log(data)

    return (
        <div>
            {
                data?.map((e: any) => (
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