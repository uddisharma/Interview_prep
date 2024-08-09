import { notFound } from 'next/navigation'
import React from 'react'

const Page = ({ params }: { params: { slug: string[] } }) => {


    if (params?.slug[0] == "nf") {

        return notFound()

    }
    else {

        return (

            <div>
                <h1>Docs page</h1>
                {params.slug?.map((e, i) => <p key={i}>{e}</p>)}
            </div>

        )
    }
}

export default Page