import Products from '@/src/components/Products'
import Reviews from '@/src/components/Reviews'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <div>
            <h1>Stream Page</h1>

            <Suspense fallback={<div>Products loading...</div>}>
                <Products />
            </Suspense>
            
            <Suspense fallback={<div>Reviews loading...</div>}>
                <Reviews />
            </Suspense>
        </div>
    )
}

export default page