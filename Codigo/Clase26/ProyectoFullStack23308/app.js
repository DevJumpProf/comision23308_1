import express from "express"

const app = express()

const port = 8000

app.get("/",(req,res)=>{
    res.send("estas en el index")
})

app.listen(port,()=>{
    console.log(`ok el servidor en el puerto ${port}`);
})