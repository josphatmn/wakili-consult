-- CreateTable
CREATE TABLE `Client` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `idNumber` VARCHAR(191) NULL,
    `kraPin` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `type` ENUM('INDIVIDUAL', 'CORPORATE') NOT NULL DEFAULT 'INDIVIDUAL',
    `notes` TEXT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Client_userId_idx`(`userId`),
    INDEX `Client_name_idx`(`name`),
    INDEX `Client_email_idx`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseSpace` (
    `id` VARCHAR(191) NOT NULL,
    `caseNumber` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `status` ENUM('ACTIVE', 'PENDING', 'CLOSED', 'ARCHIVED', 'ON_HOLD') NOT NULL DEFAULT 'ACTIVE',
    `caseType` VARCHAR(191) NULL,
    `court` VARCHAR(191) NULL,
    `judge` VARCHAR(191) NULL,
    `filedDate` DATETIME(3) NULL,
    `priority` ENUM('HIGH', 'MEDIUM', 'LOW') NOT NULL DEFAULT 'MEDIUM',
    `opponents` TEXT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `assignedTo` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CaseSpace_clientId_idx`(`clientId`),
    INDEX `CaseSpace_status_idx`(`status`),
    INDEX `CaseSpace_caseNumber_idx`(`caseNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseDocument` (
    `id` VARCHAR(191) NOT NULL,
    `caseSpaceId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `type` ENUM('PDF', 'DOCX', 'TXT', 'IMAGE', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `fileUrl` VARCHAR(191) NOT NULL,
    `fileSize` INTEGER NULL,
    `description` TEXT NULL,
    `uploadedBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CaseDocument_caseSpaceId_idx`(`caseSpaceId`),
    INDEX `CaseDocument_uploadedBy_idx`(`uploadedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(191) NOT NULL,
    `caseSpaceId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `status` ENUM('TODO', 'IN_PROGRESS', 'DONE', 'CANCELLED') NOT NULL DEFAULT 'TODO',
    `priority` ENUM('HIGH', 'MEDIUM', 'LOW') NOT NULL DEFAULT 'MEDIUM',
    `assignedTo` VARCHAR(191) NULL,
    `dueDate` DATETIME(3) NULL,
    `completedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Task_caseSpaceId_idx`(`caseSpaceId`),
    INDEX `Task_status_idx`(`status`),
    INDEX `Task_assignedTo_idx`(`assignedTo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TimelineEntry` (
    `id` VARCHAR(191) NOT NULL,
    `caseSpaceId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `type` ENUM('FILING', 'HEARING', 'MEETING', 'NOTE', 'DOCUMENT', 'TASK', 'MILESTONE') NOT NULL DEFAULT 'NOTE',
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `TimelineEntry_caseSpaceId_idx`(`caseSpaceId`),
    INDEX `TimelineEntry_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hearing` (
    `id` VARCHAR(191) NOT NULL,
    `caseSpaceId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `court` VARCHAR(191) NULL,
    `judge` VARCHAR(191) NULL,
    `notes` TEXT NULL,
    `outcome` TEXT NULL,
    `nextDate` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Hearing_caseSpaceId_idx`(`caseSpaceId`),
    INDEX `Hearing_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseSpace` ADD CONSTRAINT `CaseSpace_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseDocument` ADD CONSTRAINT `CaseDocument_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimelineEntry` ADD CONSTRAINT `TimelineEntry_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hearing` ADD CONSTRAINT `Hearing_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
