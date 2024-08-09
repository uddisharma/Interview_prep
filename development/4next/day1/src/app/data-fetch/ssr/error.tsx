'use client'

const error = ({ error }: { error: Error }) => {
    return (
        <div>Something went wrong: {error?.message}</div>
    )
}

export default error