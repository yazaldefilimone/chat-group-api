/*
  Warnings:

  - Added the required column `userId` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rooms" ADD COLUMN     "userId" TEXT NOT NULL;
