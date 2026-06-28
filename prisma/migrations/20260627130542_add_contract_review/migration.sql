-- AlterTable
ALTER TABLE `Document` ADD COLUMN `contractReviewId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ContractReview` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'IN_PROGRESS',
    `risks` TEXT NULL,
    `missingClauses` TEXT NULL,
    `recommendations` TEXT NULL,
    `summary` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ContractReview_userId_idx`(`userId`),
    INDEX `ContractReview_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Document_contractReviewId_idx` ON `Document`(`contractReviewId`);

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_contractReviewId_fkey` FOREIGN KEY (`contractReviewId`) REFERENCES `ContractReview`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContractReview` ADD CONSTRAINT `ContractReview_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
