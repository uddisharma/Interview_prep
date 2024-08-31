import prisma from "../prismaClient";

const AddPost = async (req: any, res: any) => {
    try {
        const { title, content, authorId } = req.body;
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId
            }
        });
        res.json(post);

    } catch (error) {
        res.send(error);
    }
}

const fetchPosts = async (req: any, res: any) => {
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
            : {} as any;

        const posts = await prisma.post.findMany({
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
    } catch (error) {
        res.send(error);
    }
};


export { AddPost, fetchPosts }