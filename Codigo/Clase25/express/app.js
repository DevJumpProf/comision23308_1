import express from "express" // importo express

const app = express() // guardo en app sus metodos

const port = 3030 // defino el puerto

app.get ("/",(req,res)=>{
    res.send ("estas en el index")
})

app.get ("/contactos",(req,res)=>{
    res.send ("estas en contactos")
})

app.listen(port,()=>{
    console.log("servidor ok en el puerto " + port);
})