/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `startDateTime` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('TEAM', 'ADMIN');

-- CreateEnum
CREATE TYPE "TournamentType" AS ENUM ('WARZONE', 'FIFA23', 'DOTA');

-- CreateEnum
CREATE TYPE "TournamentStatus" AS ENUM ('LOADING', 'ACTIVE', 'DONE');

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "result" TEXT[],
ADD COLUMN     "startDateTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "TournamentStatus" NOT NULL DEFAULT 'LOADING',
ADD COLUMN     "type" "TournamentType" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'TEAM';

-- DropEnum
DROP TYPE "Role";
