import express from "express";
import { AddPost, fetchPosts } from "../controllers/PostController";
const router = express.Router()

router.post('/add-post', AddPost)
router.get("/posts", fetchPosts)

export default router;