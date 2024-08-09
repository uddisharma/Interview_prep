'use client'
import React from 'react'

const ErrorBoundary = ({ error, reset }: { error: Error, reset: () => void }) => {
    return (
        <div>
            <p>
                {error.message}
            </p>
            <button>
                <a onClick={reset}>Try again</a>
            </button>
        </div>
    )
}

export default ErrorBoundary