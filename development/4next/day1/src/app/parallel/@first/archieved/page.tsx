import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div style={{ border: '1px solid white', height: "200px", width: "200px" }}>
            <div>
                <h1>Archieved Page</h1>
                <Link className='text-red-500' href={'/parallel'}>Default view</Link>
            </div>
        </div>
    )
}

export default page