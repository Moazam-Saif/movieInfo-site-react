import { Outlet,useNavigation } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const AppLayout = () => {
    const navigation=useNavigation();
    if(navigation.state==="loading"){
        return <p>Loading...</p>;
    }
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}