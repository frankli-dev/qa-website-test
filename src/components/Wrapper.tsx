
import Fallback from "components/Fallback";
import ErrorFallback from "components/ErrorFallback";
const Wrapper = ({isErrors, isLoading, isSuccess, children}: any) => {

    // if (isError) return <ErrorFallback />;
    if (isLoading || !isSuccess) return <Fallback />;

    return (<>
            {children}
            {isErrors ? <p>error</p> : null}
            </>)
}

export default Wrapper;