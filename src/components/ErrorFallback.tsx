const ErrorFallback = () => {
    return (
        <div className="text-white text-center">
            <h1 className="text-2xl mb-4">
                Woops! <br />
                Something went wrong :(
            </h1>
            <h2 className="text-xl">
                Try to wait for the api limit or set env variable for github
                token to overcome limit
            </h2>
        </div>
    );
};
export default ErrorFallback;