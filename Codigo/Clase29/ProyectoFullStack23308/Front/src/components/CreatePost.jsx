import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

// llamamos al endpoint (nuestra API en el hots local puesto 8000)
const url = "http://localhost:8000/posts/";

const CreatePost = () =>{

    const [titulo,setTitulo] = useState("")
    const [contenido,setContenido]=useState("")

    const navigate = useNavigate()

    //procedimiento para crear un registro
    const create = async(e)=>{
        e.preventDefault()
        await axios.post(url,{
            title: titulo,
            content: contenido
        })
        navigate("/")
    }

    return(
        <div>
            <h1>crear posts</h1>
            <form onSubmit={create}>
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input 
                value={titulo}
                onChange={(e)=>setTitulo(e.target.value)}
                className="form-control"
                type="text" 
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Contenido</label>
                <input 
                value={contenido}
                onChange={(e)=>setContenido(e.target.value)}
                className="form-control"
                type="text" 
                />
            </div>

<button type="submit" className="btn btn-primary">CREAR</button>
            </form>
            
            </div>
    )

}

export default CreatePost