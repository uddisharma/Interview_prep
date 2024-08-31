"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
router.post('/register', UserController_1.registerUser);
router.post('/login', UserController_1.LoginUser);
router.post('/update', UserController_1.updateUser);
router.post('/create-user-post', UserController_1.createUserandPost);
router.get("/user-posts/:userId", UserController_1.getUserPosts);
exports.default = router;
