import express from "express"
import db from "./database/db.js"
import cors from "cors"

const app = express()

const port = 8000

app.use (cors())
app.use(express.json)

// conexion a la base de datos
try {
    await db.authenticate()
    console.log("conectado ok a la DB");
} catch (error) {
    console.log(`error de conexion ${error}`);  
}

app.listen(port,()=>{
    console.log(`ok el servidor en el puerto ${port}`);
})