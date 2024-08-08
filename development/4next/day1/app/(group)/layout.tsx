import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>Auth Header</h1>
            {children}
            <h1>Auth Footer</h1>
        </div>
    )
}

export default layout