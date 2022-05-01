/*
  Warnings:

  - You are about to drop the `messange` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "messange" DROP CONSTRAINT "messange_roomId_fkey";

-- DropForeignKey
ALTER TABLE "messange" DROP CONSTRAINT "messange_userId_fkey";

-- DropTable
DROP TABLE "messange";

-- CreateTable
CREATE TABLE "mensagens" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "mensagens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensagens" ADD CONSTRAINT "mensagens_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
