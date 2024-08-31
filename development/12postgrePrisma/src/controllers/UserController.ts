import prisma from "../prismaClient"

const registerUser = async (req: any, res: any) => {
    try {

        const { name, email } = req.body

        const data = await prisma.user.create({
            data: {
                name,
                email
            }
        })

        res.send(data)

    } catch (error) {
        res.send(error)
    }
}

const LoginUser = async (req: any, res: any) => {
    try {
        const { email } = req.body
        const data = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (data) {
            res.send(data)
        } else {
            res.send('user not found')
        }
    } catch (error) {
        res.send(error)
    }
}

const updateUser = async (req: any, res: any) => {
    try {
        const { name, email } = req.body
        const data = await prisma.user.update({
            where: {
                email
            },
            data: {
                name,
                email
            }
        })
        res.send(data)

    } catch (error) {
        res.send(error)
    }
}

const createUserandPost = async (req: any, res: any) => {
    const { name, email, title, content } = req.body
    try {
        const [user, post] = await prisma.$transaction(async (prisma) => {
            const user = await prisma.user.create({
                data: {
                    name,
                    email
                }
            });

            const post = await prisma.post.create({
                data: {
                    title,
                    content,
                    authorId: user.id
                }
            });

            return [user, post];
        });

        res.json({ user, post });

    } catch (error) {
        res.send(error)
    }
}
const getUserPosts = async (req: any, res: any) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const userPosts = await prisma.user.findUnique({
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

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching user posts' });
    }
};

const aggregateUsers = async (req: any, res: any) => {
    try {
        const result = await prisma.user.aggregate({
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
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while aggregating users' });
    }
};

const createUser = async (req: any, res: any) => {
    const { name, email } = req.body;
    try {
        const data = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const createManyUsers = async (req: any, res: any) => {
    const { users } = req.body;
    try {
        const data = await prisma.user.createMany({
            data: users
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const createManyUsersAndReturn = async (req: any, res: any) => {
    const { users } = req.body;
    try {
        const data = await prisma.user.createManyAndReturn({
            data: users,
            skipDuplicates: true
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const deleteUser = async (req: any, res: any) => {
    const { email } = req.body;
    try {
        const data = await prisma.user.delete({
            where: {
                email
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const deleteManyUsers = async (req: any, res: any) => {
    const { emails } = req.body;
    try {
        const data = await prisma.user.deleteMany({
            where: {
                email: {
                    in: emails
                }
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const findFirstUser = async (req: any, res: any) => {
    try {
        const data = await prisma.user.findFirst();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const findFirstUserOrThrow = async (req: any, res: any) => {
    try {
        const data = await prisma.user.findFirstOrThrow();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const findManyUsers = async (req: any, res: any) => {
    try {
        const data = await prisma.user.findMany();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const findUniqueUser = async (req: any, res: any) => {
    const { email } = req.body;
    try {
        const data = await prisma.user.findUnique({
            where: {
                email
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const findUniqueUserOrThrow = async (req: any, res: any) => {
    const { email } = req.body;
    try {
        const data = await prisma.user.findUniqueOrThrow({
            where: {
                email
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const groupByUsers = async (req: any, res: any) => {
    try {
        const data = await prisma.user.groupBy({
            by: ['name'],
            _count: true,
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};



const updateManyUsers = async (req: any, res: any) => {
    const { name } = req.body;
    try {
        const data = await prisma.user.updateMany({
            where: {
                name
            },
            data: {
                name: 'Updated Name'
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const upsertUser = async (req: any, res: any) => {
    const { email, name } = req.body;
    try {
        const data = await prisma.user.upsert({
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
    } catch (error) {
        res.send(error);
    }
};

export {
    registerUser,
    LoginUser,
    createUserandPost,
    getUserPosts,
    aggregateUsers,
    createUser,
    createManyUsers,
    createManyUsersAndReturn,
    deleteUser,
    deleteManyUsers,
    findFirstUser,
    findFirstUserOrThrow,
    findManyUsers,
    findUniqueUser,
    findUniqueUserOrThrow,
    groupByUsers,
    updateUser,
    updateManyUsers,
    upsertUser
};