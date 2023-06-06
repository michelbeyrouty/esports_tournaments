-- CreateEnum
CREATE TYPE "Role" AS ENUM ('TEAM', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "logo" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'TEAM',
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Tournament" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "entryFee" INTEGER NOT NULL,
    "prizePool" TEXT NOT NULL,
    "maxAllowedTeams" INTEGER NOT NULL,
    "joinedTeams" INTEGER NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInTournaments" (
    "userId" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserInTournaments_pkey" PRIMARY KEY ("userId","tournamentId")
);

-- CreateTable
CREATE TABLE "_TournamentToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TournamentToUser_AB_unique" ON "_TournamentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TournamentToUser_B_index" ON "_TournamentToUser"("B");

-- AddForeignKey
ALTER TABLE "UserInTournaments" ADD CONSTRAINT "UserInTournaments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInTournaments" ADD CONSTRAINT "UserInTournaments_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TournamentToUser" ADD CONSTRAINT "_TournamentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TournamentToUser" ADD CONSTRAINT "_TournamentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
