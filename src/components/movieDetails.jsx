import { useLoaderData} from "react-router";
export const MovieDetails = () => {
    const movieDetails=useLoaderData();
    const {Title,Year,Poster,Plot,Actors,Director,Genre,imdbRating}=movieDetails;
    return(
    <>
        <img src={Poster} alt={Title}/>
        <h1>{Title}</h1>
        <p>{Year}</p>
        <p>{Genre}</p>
    </>
    )
}