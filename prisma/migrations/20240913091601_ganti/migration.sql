/*
  Warnings:

  - You are about to drop the column `anime_title` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `user_email` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `anime_title`,
    DROP COLUMN `comment`,
    DROP COLUMN `user_email`,
    DROP COLUMN `username`;
