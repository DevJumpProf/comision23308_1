// importamos el modelo
import PostModel from "../models/PostModel.js"


//metodos para el crud  

// MOSTRAR TODOS LOS REGISTROS

export const getAllPost = async(req,res)=>{
    try {
       const post =  await PostModel.findAll()
       res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }
}

// mostrar un registro

// ejercicio: utilizar el metodo correspondiente para traer UN registro
export const getPost= async (req, res)=>{
    try {
        const post = await PostModel.findAll({
            where:{id:req.params.id}
        })
        res.json(post[0])
    } catch (error) {
        res.json({message:error.message}) 
    }
}

//crear un registro

export const createPost= async (req,res)=>{
try {
   await PostModel.create(req.body) 
   res.json({
    "message": "registro creado correectamente"
   })
} catch (error) {
    res.json({message:error.message})   
}
}

//actualizar
export const updatePost = async (req,res)=>{
    try {
        await PostModel.update(req.body,{
            where:{id:req.params.id}   
            
        })
        res.json({
            "message": "registro editado correectamente"
           })
    } catch (error) {
        res.json({message:error.message})    
    }
}

/* borrar un registro */
export const deletePost = async (req,res)=>{
    try {
       await PostModel.destroy({
        where:{id:req.params.id}   
       }) 
       res.json({
        "message": "registro eliminado correctamente"
       })
    } catch (error) {
        res.json({message:error.message})   
    }
}
