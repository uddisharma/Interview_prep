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

export { AddPost }