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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const usersSeed = [
    {
        email: 'one@example.com',
        name: 'User one',
        posts: {
            create: [
                {
                    title: 'Hello World',
                    content: 'This is my first post',
                },
            ],
        },
    },
    {
        email: 'two@example.com',
        name: 'User two',
        posts: {
            create: [
                {
                    title: 'Hello World 2',
                    content: 'This is my second post',
                },
            ],
        },
    },
];
function seedData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const user of usersSeed) {
                yield prisma.user.upsert({
                    where: { email: user.email },
                    update: {},
                    create: user,
                });
            }
            console.log('Data seeded successfully');
        }
        catch (error) {
            console.error('Error seeding data:', error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
seedData()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    console.log('first seed done');
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
