import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Components/ErrorBoundry";

function BuggyComponent() {
    throw new Error('Simulated error!');
    return <div>This will not render</div>;
}


export default function ErrorPage() {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                alert("refreshed")
            }}
        >
            <BuggyComponent />
        </ErrorBoundary>
    );
}