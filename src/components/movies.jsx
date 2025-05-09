import { useLoaderData} from "react-router";
import { MovieCard } from "./movieCard";

export const Movies = () => {
    const movies=useLoaderData();
    return (
        <>
        <ul>
            {movies.Search.map((movie)=>{
                return <MovieCard key={movie.imdbID} movie={movie}/>
            })}
        </ul>
        </>
    )
}
export default Movies;