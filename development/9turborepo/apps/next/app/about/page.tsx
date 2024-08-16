import { prisma } from "@repo/prisma";

export default async function IndexPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello Prisma</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
