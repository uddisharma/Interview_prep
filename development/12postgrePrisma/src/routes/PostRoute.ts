import express from "express";
import { AddPost } from "../controllers/PostController";
const router = express.Router()

router.post('/add-post', AddPost)

export default router;