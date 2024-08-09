import { Metadata } from 'next'
import React from 'react'

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

    const title: string = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Iphone ${params.productId}`)
        }, 1000)
    })

    return {
        title: title,
        description: 'Meta Data page description',
    }
}

const page = ({ params }: { params: { productId: string } }) => {
    return (
        <div>Product {params.productId}</div>
    )
}

export default page