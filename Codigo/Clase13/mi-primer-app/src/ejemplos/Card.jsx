
import "./Card.css"

function Card ({apellido,nacimiento,clubes,mundial,late}){

    return(
       
        <>
{/*         <h1 style={{backgroundColor:mundial?"gold":"silver"}} > {apellido}</h1> */}
        <h1 className={mundial?"dorado":"plateado"}> {apellido}</h1>
        <small >{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial?"Gano un mundial 🥇":"Sigue Participando👻"}</p>
        <small>{late?"Late ✅":"Nola ❌"}</small>
        </>
    )
}

export default Card
