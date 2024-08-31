import express from "express";
import { createUserandPost, getUserPosts, LoginUser, registerUser, updateUser } from "../controllers/UserController";
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', LoginUser)
router.post('/update', updateUser)
router.post('/create-user-post', createUserandPost)
router.get("/user-posts/:userId", getUserPosts)

export default router;