import express from "express"

import {getAllPost,getPost,createPost,updatePost,deletePost} from "../controllers/PostControllers.js"

const router = express.Router()

router.get ("/",getAllPost)
router.get ("/:id",getPost)
router.post ("/",createPost)
router.put ("/:id",updatePost)
router.delete ("/:id",deletePost)

export default router



