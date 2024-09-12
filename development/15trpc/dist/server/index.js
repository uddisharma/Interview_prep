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
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
// Using this adapter we can can convert this code to other lanugages , there are a lot of adapters available
const zod_1 = require("zod");
const db_1 = require("./db");
const trpc_1 = require("./trpc");
const appRouter = (0, trpc_1.router)({
    userList: trpc_1.publicProcedure
        .query((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield db_1.db.user.findMany();
        return users;
    })),
    userById: trpc_1.publicProcedure
        .input(zod_1.z.string())
        .query((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const { input } = opts;
        const user = yield db_1.db.user.findById(input);
        return user;
    })),
    userCreate: trpc_1.publicProcedure
        .input(zod_1.z.object({ name: zod_1.z.string() }))
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const username = opts.ctx.username; // get the username from the context
        const { input } = opts;
        const user = yield db_1.db.user.create(input);
        return Object.assign({ username }, user);
    })),
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(opts) {
        const authHeader = opts.req.headers['authorization'];
        console.log(authHeader);
        // implement jwt verification here
        const username = authHeader ? authHeader.split(' ')[1] : null;
        return {
            username: username
        };
    }
});
server.listen(3000);
