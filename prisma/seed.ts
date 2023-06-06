import { hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

async function main() {
    const user = await db.user.upsert({
        where: { email: "wolf@email.com" },
        update: {},
        create: {
            email: "wolf@email.com",
            name: "wolf",
            password: await hashPassword("password"),
            description: "We are the best team",
            logo: "logoLink",
            role: UserRole.TEAM,
            tournaments: {
                create: new Array(5).fill(1).map((_, i) => ({
                    type: "WARZONE",
                    entryFee: 5,
                    prizePool: "[100,40,20]",
                    maxAllowedTeams: 16,
                    joinedTeams: 4,
                    startDateTime: new Date(2022, 11, 25),
                    status: "LOADING",
                    result: `["user@email.com", "user2"]`,
                })),
            },
        },
        include: {
            tournaments: true,
        },
    });

    const tasks = await Promise.all(
        user.projects.map((project) =>
            db.task.createMany({
                data: new Array(10).fill(1).map((_, i) => {
                    return {
                        name: `Task ${i}`,
                        ownerId: user.id,
                        projectId: project.id,
                        description: `Everything that describes Task ${i}`,
                        status: getRandomTaskStatus(),
                    };
                }),
            })
        )
    );

    console.log({ user, tasks });
}
main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
