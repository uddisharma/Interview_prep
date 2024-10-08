import { PrismaClient } from '@prisma/client';

class PrismaSingleton {
    private static instance: PrismaSingleton;
    private prisma: PrismaClient;

    private constructor() {
        this.prisma = new PrismaClient();
    }

    public static getInstance(): PrismaSingleton {
        if (!PrismaSingleton.instance) {
            PrismaSingleton.instance = new PrismaSingleton();
        }

        return PrismaSingleton.instance;
    }

    public getPrisma(): PrismaClient {
        return this.prisma;
    }
}

const prismaSingleton = PrismaSingleton.getInstance();
const prisma = prismaSingleton.getPrisma();

export default prisma;