import React from 'react'

const layout = ({ children, first, second, third, login }: { children: React.ReactNode, first: React.ReactNode, second: React.ReactNode, third: React.ReactNode, login: React.ReactNode }) => {

    const isLoggedIn = true;

    if (!isLoggedIn) {
        return login
    }
    return (
        <div>
            {children}
            <div className='flex justify-center align-middle gap-10 mt-10'>
                {first}
                {second}
                {third}
            </div>
        </div>
    )
}

export default layout