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
const prismaClient_1 = __importDefault(require("../src/prismaClient"));
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
                yield prismaClient_1.default.user.upsert({
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
            yield prismaClient_1.default.$disconnect();
        }
    });
}
seedData()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.default.$disconnect();
    console.log('first seed done');
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prismaClient_1.default.$disconnect();
    process.exit(1);
}));
