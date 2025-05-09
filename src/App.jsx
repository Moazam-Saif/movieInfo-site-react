import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./components/errorPage";
import Home from "./components/home";
import About from "./components/about";
import Movies from "./components/movies";
import { AppLayout } from "./components/AppLayout";
import { GetMovieData } from "./components/movieData";
import { MovieDetails } from "./components/movieDetails";
import { GetMovieDetails } from "./components/getMovieDetails";
import { Contacts } from "./components/contact";
import { getContacts } from "./components/contact";

export const App = () => {
  const router=createBrowserRouter([
    {path:"/",element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children:[
        {path:"/",element: <Home />},
        {path:"/about",element:<About/>},
        {path:"/movies",element:<Movies/>,loader:GetMovieData,},
        {path:"/movies/:movieId",element:<MovieDetails/>,loader:GetMovieDetails,},
        {path:"/contact",element:<Contacts/>,action:getContacts,},
      ],
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App;
