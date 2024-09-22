import { useRouteError } from "react-router-dom"
import { Sidebar } from "../Components/Sidebar"
import '../Styles/ErrorPage.css';  

export const ErrorPage = () =>{
    const error = useRouteError()
    console.error(error)
    
    return(
        <div>
            <Sidebar/> 
            <h1>¿Quien es ese pokemon?</h1>
            <h3>Lo sentimos, aun no capturamos ese pokemon</h3>
            <img  className="imgEP" src="https://i.pinimg.com/originals/c0/10/bc/c010bc675a8ce64d9a541657a9171b6d.gif" alt="errorImage" />
        </div>
    )
}