/* import peliculas from "./peliculas.json" */
import {get} from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import { Spinner } from "../components/Spinner";
import { useLocation } from "react-router-dom"; /* 10 importar  useLocation */

export const PeliculasGrid=()=>{
/* 12 utilizamos este hook para tomar lo que viene por params */
    const useQuery = () =>{
        return new URLSearchParams(useLocation().search)
    }
/* 13 guardamos en una variable lo que se busca en el input */

const query = useQuery ()
const search = query.get("search")

const [peliculas,setPeliculas] = useState([])
const [cargando, setCargando] = useState(true);   

/* 11 vemos como trabaja useLocation */
/* const location = useLocation() */
/* console.log(location); */
/* console.log(location.search) */

useEffect(()=>{
   /*  15 realizamos un ternario , si hay busqueda visita un endpoint, sino otro */
   const searchURL = search ? "/search/movie?query="+search : "/discover/movie "

    setCargando(true)
get(searchURL).then((data)=>{/*  16 agrego en como parametro searchURL */
    setPeliculas(data.results);
    setCargando(false)
})
},[search]) // 14 agrego search para que el efecto se ejecute con los cambios.

if(cargando){
    return < Spinner/>
  }

return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)
}