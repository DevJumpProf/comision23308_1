import "./Buscador.css"
import { ImSearch } from "react-icons/im";
export const Buscador = ()=>{
    return(
        <form className="buscadorContainer">
            <div className="buscadorBox">
                <input 
                type="text" 
                className="buscadorInput" 
                />
                <button type="submit" className="buscadorButton"><ImSearch/></button>
            </div>
        </form>
        )
}