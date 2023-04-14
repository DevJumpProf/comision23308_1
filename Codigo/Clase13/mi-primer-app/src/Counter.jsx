import { useState, useEffect} from "react"
import Button from "react-bootstrap/Button"

export const Counter =()=>{

const [count,setCount]=useState(0)

useEffect (()=>{
console.log("cambio el contador");
},[count])

    return(
        <>
<Button onClick={()=>setCount(count+1)} variant="success">+</Button>
<p>Numero:{count}</p>
<Button onClick={()=>setCount(count-1)} variant="success">-</Button>
        </>
 
    )
}