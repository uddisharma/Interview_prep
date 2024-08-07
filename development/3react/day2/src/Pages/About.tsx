import { Suspense, lazy } from "react"
import { useNavigate } from "react-router-dom"
const Component = lazy(() => import('../Components/Subscription'))

const About = () => {
    const navigate = useNavigate();

    return (
        <div >
            <h1>
                About Page
            </h1>
            <button onClick={() => navigate('/')}>Go to Home</button>
            <br />
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        </div>
    )
}

export default About