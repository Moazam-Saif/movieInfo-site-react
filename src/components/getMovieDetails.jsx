export const GetMovieDetails =async ({params}) => {
    try {

        const response=await fetch(`http://www.omdbapi.com/?i=${params.movieId}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data=await response.json();
        console.log(data);
        return data;
   } catch (error) {
         console.log(error);   
   }
}