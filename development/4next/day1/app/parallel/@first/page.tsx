import Link from 'next/link'
import React from 'react'

const First = () => {
    return (
        <div style={{ border: '1px solid white', height: "200px", width: "200px" }}>
            <div>
                <h1>Default Page</h1>
                <Link className='text-red-500' href={'/parallel/archieved'}>Archieved view</Link>
            </div>
        </div>
    )
}

export default First