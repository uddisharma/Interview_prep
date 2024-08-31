import prisma from "../src/prismaClient";


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

async function seedData() {
    try {
        for (const user of usersSeed) {
            await prisma.user.upsert({
                where: { email: user.email },
                update: {},
                create: user,
            });
        }

        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedData()
    .then(async () => {
        await prisma.$disconnect();
        console.log('first seed done');
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });