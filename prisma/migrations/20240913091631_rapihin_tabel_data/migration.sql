/*
  Warnings:

  - Added the required column `anime_title` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `anime_title` VARCHAR(191) NOT NULL,
    ADD COLUMN `comment` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;
