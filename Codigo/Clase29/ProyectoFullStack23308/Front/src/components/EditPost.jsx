import axios from "axios"
import {useState, useEffect} from "react"
import {useNavigate,useParams} from "react-router-dom"

// llamamos al endpoint (nuestra API en el hots local puesto 8000)
const url = "http://localhost:8000/posts/";

const EditPost = () =>{

    const [titulo,setTitulo] = useState("")
    const [contenido,setContenido]=useState("")

    const navigate = useNavigate()

    const {id}= useParams()

    //utilizo useeFFect para traer el post cuandop se ingresa al componente
    useEffect(()=>{
        getPostById()
    },[])

    // procedimiento para traer un post por su id
    const getPostById = async()=>{
        const res = await axios.get(url+id)
       setTitulo( res.data.title)
       setContenido( res.data.content)
       
    }

    // procedimiento para actualizar un contenido
    const update = async(e)=>{
        e.preventDefault()
        await axios.put(url+id,{
            title: titulo,
            content: contenido
        })
        navigate("/")
    }


    return(
        <div>
        <h1>editar posts</h1>
        <form onSubmit={update}>
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

<button type="submit" className="btn btn-primary">editar</button>
        </form>
        
        </div>
    )

}

export default EditPost