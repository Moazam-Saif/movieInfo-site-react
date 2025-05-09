import { NavLink } from "react-router"

export const MovieCard = ({movie}) => {
    return(
        <li>
            <NavLink to={`/movies/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            </NavLink>

        </li>
    )
}