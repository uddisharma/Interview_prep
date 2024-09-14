import { createHTTPServer } from "@trpc/server/adapters/standalone";
// Using this adapter we can can convert this code to other lanugages , there are a lot of adapters available

import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
    userList: publicProcedure
        .query(async (opts) => {
            const users = await db.user.findMany();
            return users;
        }),
    userById: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            const user = await db.user.findById(input);
            return user;
        }),
    userCreate: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(async (opts) => {
            const username = opts.ctx.username; // get the username from the context
            const { input } = opts;
            const user = await db.user.create(input);
            return { username, ...user };
        }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {  // this will run before every request to the server
        const authHeader = opts.req.headers['authorization'];
        console.log(authHeader)
        // implement jwt verification here
        const username = authHeader ? authHeader.split(' ')[1] : null;
        return {
            username: username
        }
    }
});

server.listen(3000);