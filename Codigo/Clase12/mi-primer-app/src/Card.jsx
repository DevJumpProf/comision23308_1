
import "./Card.css"

function Card ({apellido,nacimiento,clubes,mundial,late}){
    let nombre = "leonel"
    return(
       
        <>
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <small style={{backgroundColor: "blue"}}>{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial?"Gano un mundial 🥇":"Sigue Participando👻"}</p>
        <small>{late?"Late ✅":"Nola ❌"}</small>
        </>
    )
}

export default Card
