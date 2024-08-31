"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPosts = exports.AddPost = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const AddPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, authorId } = req.body;
        const post = yield prismaClient_1.default.post.create({
            data: {
                title,
                content,
                authorId
            }
        });
        res.json(post);
    }
    catch (error) {
        res.send(error);
    }
});
exports.AddPost = AddPost;
const fetchPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 2, searchQuery = '' } = req.query;
        const where = searchQuery
            ? {
                OR: [
                    {
                        content: {
                            contains: searchQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        title: {
                            contains: searchQuery,
                            mode: 'insensitive',
                        },
                    },
                ],
            }
            : {};
        const posts = yield prismaClient_1.default.post.findMany({
            where,
            include: {
                author: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                id: 'desc',
            },
            skip: (page - 1) * limit,
            take: parseInt(limit, 10),
        });
        res.json(posts);
    }
    catch (error) {
        res.send(error);
    }
});
exports.fetchPosts = fetchPosts;
