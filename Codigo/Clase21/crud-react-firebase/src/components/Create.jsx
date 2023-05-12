import { useState } from "react";
import {useNavigate}from "react-router-dom"
import {collection,addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

export const Create =()=>{
    const [name, setName] = useState ("")
    const [age, setAge] = useState (0)
    const [realName, setRealName] = useState ("")

    const navigate = useNavigate()

    const heroesCollection= collection(db,"heroes")

    const createHeroe= async(e)=>{
        e.preventDefault()
        await addDoc(heroesCollection,{
            age:Number(age),
            name:name,
            realName:realName
        })
        navigate("/")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Create Heroe</h1>
                    <form onSubmit={createHeroe}>
<div className="mb-3">
    <label className="form-label">Nombre</label>
    <input 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="form-control"
    type="text" />
</div>

<div className="mb-3">
    <label className="form-label">Nombre Real</label>
    <input 
    value={realName}
    onChange={(e)=>setRealName(e.target.value)}
    className="form-control"
    type="text" />
</div>

<div className="mb-3">
    <label className="form-label">Edad</label>
    <input 
    value={age}
    onChange={(e)=>setAge(e.target.value)}
    className="form-control"
    type="number" />
</div>
<button type="submit" className="btn btn-primary">Create Heroe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}