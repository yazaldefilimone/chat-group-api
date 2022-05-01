/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Relationship` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roomId]` on the table `Relationship` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Relationship_userId_key" ON "Relationship"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Relationship_roomId_key" ON "Relationship"("roomId");
