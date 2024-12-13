/*
  Warnings:

  - Added the required column `productId` to the `AddTOCART` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddTOCART" ADD COLUMN     "productId" TEXT NOT NULL;
