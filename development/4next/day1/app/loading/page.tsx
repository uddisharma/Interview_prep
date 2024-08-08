import React from 'react'

const waitfunction = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

const Page = async () => {

    await waitfunction(2000)

    return (
        <div>Loading Page</div>
    )
}

export default Page