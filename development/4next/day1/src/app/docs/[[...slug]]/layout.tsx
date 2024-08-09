import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>Docs Header</h1>
            <hr />
            {children}
            <hr />
            <h1>Docs Footer</h1>
        </div>
    )
}

export default layout