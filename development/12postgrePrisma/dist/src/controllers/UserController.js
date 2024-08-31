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
exports.upsertUser = exports.updateManyUsers = exports.updateUser = exports.groupByUsers = exports.findUniqueUserOrThrow = exports.findUniqueUser = exports.findManyUsers = exports.findFirstUserOrThrow = exports.findFirstUser = exports.deleteManyUsers = exports.deleteUser = exports.createManyUsersAndReturn = exports.createManyUsers = exports.createUser = exports.aggregateUsers = exports.getUserPosts = exports.createUserandPost = exports.LoginUser = exports.registerUser = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const data = yield prismaClient_1.default.user.create({
            data: {
                name,
                email
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.registerUser = registerUser;
const LoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const data = yield prismaClient_1.default.user.findUnique({
            where: {
                email
            }
        });
        if (data) {
            res.send(data);
        }
        else {
            res.send('user not found');
        }
    }
    catch (error) {
        res.send(error);
    }
});
exports.LoginUser = LoginUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const data = yield prismaClient_1.default.user.update({
            where: {
                email
            },
            data: {
                name,
                email
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.updateUser = updateUser;
const createUserandPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, title, content } = req.body;
    try {
        const [user, post] = yield prismaClient_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield prisma.user.create({
                data: {
                    name,
                    email
                }
            });
            const post = yield prisma.post.create({
                data: {
                    title,
                    content,
                    authorId: user.id
                }
            });
            return [user, post];
        }));
        res.json({ user, post });
    }
    catch (error) {
        res.send(error);
    }
});
exports.createUserandPost = createUserandPost;
const getUserPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        const userPosts = yield prismaClient_1.default.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                posts: true,
            },
        });
        if (!userPosts) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(userPosts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching user posts' });
    }
});
exports.getUserPosts = getUserPosts;
const aggregateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.user.aggregate({
            _count: true,
            _avg: {
                id: true,
            },
            _sum: {
                id: true,
            },
            _min: {
                id: true,
            },
            _max: {
                id: true,
            },
        });
        res.send(result);
    }
    catch (error) {
        res.status(500).send({ error: 'An error occurred while aggregating users' });
    }
});
exports.aggregateUsers = aggregateUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const data = yield prismaClient_1.default.user.create({
            data: {
                name,
                email
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.createUser = createUser;
const createManyUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { users } = req.body;
    try {
        const data = yield prismaClient_1.default.user.createMany({
            data: users
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.createManyUsers = createManyUsers;
const createManyUsersAndReturn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { users } = req.body;
    try {
        const data = yield prismaClient_1.default.user.createManyAndReturn({
            data: users,
            skipDuplicates: true
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.createManyUsersAndReturn = createManyUsersAndReturn;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const data = yield prismaClient_1.default.user.delete({
            where: {
                email
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.deleteUser = deleteUser;
const deleteManyUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { emails } = req.body;
    try {
        const data = yield prismaClient_1.default.user.deleteMany({
            where: {
                email: {
                    in: emails
                }
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.deleteManyUsers = deleteManyUsers;
const findFirstUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaClient_1.default.user.findFirst();
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.findFirstUser = findFirstUser;
const findFirstUserOrThrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaClient_1.default.user.findFirstOrThrow();
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.findFirstUserOrThrow = findFirstUserOrThrow;
const findManyUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaClient_1.default.user.findMany();
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.findManyUsers = findManyUsers;
const findUniqueUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const data = yield prismaClient_1.default.user.findUnique({
            where: {
                email
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.findUniqueUser = findUniqueUser;
const findUniqueUserOrThrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const data = yield prismaClient_1.default.user.findUniqueOrThrow({
            where: {
                email
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.findUniqueUserOrThrow = findUniqueUserOrThrow;
const groupByUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prismaClient_1.default.user.groupBy({
            by: ['name'],
            _count: true,
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.groupByUsers = groupByUsers;
const updateManyUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const data = yield prismaClient_1.default.user.updateMany({
            where: {
                name
            },
            data: {
                name: 'Updated Name'
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.updateManyUsers = updateManyUsers;
const upsertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    try {
        const data = yield prismaClient_1.default.user.upsert({
            where: {
                email
            },
            create: {
                name,
                email
            },
            update: {
                name
            }
        });
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.upsertUser = upsertUser;
