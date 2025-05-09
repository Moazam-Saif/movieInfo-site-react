import { useNavigate, useRouteError } from "react-router";

export const ErrorPage = () => {
    const error=useRouteError();
    const navigate=useNavigate();
    console.log(navigate);
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
    <>
        <h1>{error.data}</h1>
        <button className="btn" onClick={handleGoBack}>Go Back</button>
    </>
    )
}

export default ErrorPage;