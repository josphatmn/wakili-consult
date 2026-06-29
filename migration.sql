

CREATE TABLE `Account` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `accountId` varchar(191) NOT NULL,
  `providerId` varchar(191) NOT NULL,
  `accessToken` varchar(191) DEFAULT NULL,
  `refreshToken` varchar(191) DEFAULT NULL,
  `accessTokenExpiresAt` timestamp NULL DEFAULT NULL,
  `refreshTokenExpiresAt` timestamp NULL DEFAULT NULL,
  `scope` varchar(191) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Account`
--

INSERT INTO `Account` (`id`, `userId`, `accountId`, `providerId`, `accessToken`, `refreshToken`, `accessTokenExpiresAt`, `refreshTokenExpiresAt`, `scope`, `password`, `createdAt`, `updatedAt`) VALUES
('cmqw7f8nf0001spubkzo4m274', 'cmqw7f8nf0000spubux8whzqz', 'josphatmn@gmail.com', 'email', NULL, NULL, NULL, NULL, NULL, '$2b$12$phQ9G69rNJHHXz.d9n68h.DYm4RzLTzHAyi67MeVlsJW/OrCBxIni', '2026-06-27 10:15:36.843', '2026-06-27 10:15:36.843'),
('cmqwc4mwl0001spcol0q1lw7r', 'cmqwc4mwk0000spcovxncaff6', 'josphatmn@live.com', 'email', NULL, NULL, NULL, NULL, NULL, '$2b$12$N3yFZ2JseTgd7jGKribOyOBxDQ6N3e4mnNWtyyZIJlXsmAnylDJyS', '2026-06-27 12:27:20.181', '2026-06-27 12:27:20.181');

-- --------------------------------------------------------

--
-- Table structure for table `AIAgent`
--

CREATE TABLE `AIAgent` (
  `id` varchar(191) NOT NULL,
  `type` enum('RESEARCH','DRAFTING','CONTRACT_REVIEW','CASE_LAW','LITIGATION','FAMILY_LAW','EMPLOYMENT_LAW','LAND_LAW','IMMIGRATION','CORPORATE','TAX','COMPLIANCE','CRIMINAL_LAW','SUCCESSION','CONSTITUTION','BUSINESS_REGISTRATION') NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `systemPrompt` varchar(191) DEFAULT NULL,
  `model` varchar(191) NOT NULL DEFAULT 'gpt-5.5',
  `temperature` double NOT NULL DEFAULT '0.7',
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `AIAgent`
--

INSERT INTO `AIAgent` (`id`, `type`, `name`, `description`, `systemPrompt`, `model`, `temperature`, `enabled`, `createdAt`, `updatedAt`) VALUES
('cmqw799ng0000spylo3wcf2lt', 'RESEARCH', 'AI Research Agent', 'Deep legal research across Kenyan Acts, Constitution, case law, and regulations', NULL, 'gpt-5.5', 0.5, 1, '2026-06-27 10:10:58.204', '2026-06-27 10:10:58.204'),
('cmqw799oj0001spyl3ew63fyj', 'DRAFTING', 'Legal Drafting Agent', 'Draft contracts, demand letters, court pleadings, and other legal documents', NULL, 'gpt-5.5', 0.7, 1, '2026-06-27 10:10:58.242', '2026-06-27 10:10:58.242'),
('cmqw799p60002spyl1yfx4su9', 'CONTRACT_REVIEW', 'Contract Review Agent', 'Review contracts for risks, missing clauses, and compliance issues', NULL, 'gpt-5.5', 0.3, 1, '2026-06-27 10:10:58.266', '2026-06-27 10:10:58.266'),
('cmqw799pr0003spylygvbn47g', 'CASE_LAW', 'Case Law Research Agent', 'Find relevant precedents and analyze court decisions', NULL, 'gpt-5.5', 0.4, 1, '2026-06-27 10:10:58.288', '2026-06-27 10:10:58.288'),
('cmqw799qf0004spylnj3nzd6d', 'LITIGATION', 'Litigation Assistant', 'Prepare submissions, organize evidence, and generate timelines', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.311', '2026-06-27 10:10:58.311'),
('cmqw799qx0005spyl7n706s0h', 'FAMILY_LAW', 'Family Law Agent', 'Expert in Marriage Act, Children Act, succession, and divorce', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.328', '2026-06-27 10:10:58.328'),
('cmqw799rk0006spyltam6bp7v', 'EMPLOYMENT_LAW', 'Employment Law Agent', 'Expert in Employment Act, labour relations, and workplace rights', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.352', '2026-06-27 10:10:58.352'),
('cmqw799s50007spyl17h8av3h', 'LAND_LAW', 'Land Law Agent', 'Expert in Land Act, Land Registration Act, and land disputes', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.373', '2026-06-27 10:10:58.373'),
('cmqw799sp0008spylfdoyxod9', 'IMMIGRATION', 'Immigration Agent', 'Expert in Kenya Citizenship and Immigration Act', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.393', '2026-06-27 10:10:58.393'),
('cmqw799th0009spyleztqpspk', 'CORPORATE', 'Corporate Law Agent', 'Expert in Companies Act and corporate governance', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.421', '2026-06-27 10:10:58.421'),
('cmqw799u2000aspyl8a6k7qro', 'TAX', 'Tax Agent', 'Expert in Tax Procedures Act, Income Tax Act, and VAT Act', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.441', '2026-06-27 10:10:58.441'),
('cmqw799uj000bspyljdwrh3jb', 'COMPLIANCE', 'Compliance Agent', 'Advise on KRA, NSSF, SHA, Data Protection Act compliance', NULL, 'gpt-5.5', 0.5, 1, '2026-06-27 10:10:58.460', '2026-06-27 10:10:58.460'),
('cmqw799va000cspylcnmxvkgv', 'CRIMINAL_LAW', 'Criminal Law Agent', 'Expert in Penal Code and Criminal Procedure Code', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.487', '2026-06-27 10:10:58.487'),
('cmqw799vw000dspyllw68ituj', 'SUCCESSION', 'Succession Agent', 'Expert in Law of Succession Act and estate planning', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.508', '2026-06-27 10:10:58.508'),
('cmqw799wh000espyl2d8ttrjk', 'CONSTITUTION', 'Constitution Agent', 'Expert in the Constitution of Kenya 2010', NULL, 'gpt-5.5', 0.5, 1, '2026-06-27 10:10:58.530', '2026-06-27 10:10:58.530'),
('cmqw799x7000fspyl8cmm0hav', 'BUSINESS_REGISTRATION', 'Business Registration Agent', 'Expert in company registration, NGOs, and business names', NULL, 'gpt-5.5', 0.6, 1, '2026-06-27 10:10:58.555', '2026-06-27 10:10:58.555');

-- --------------------------------------------------------

--
-- Table structure for table `APIKey`
--

CREATE TABLE `APIKey` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `key` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `organizationId` varchar(191) DEFAULT NULL,
  `lastUsedAt` timestamp NULL DEFAULT NULL,
  `expiresAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `AuditLog`
--

CREATE TABLE `AuditLog` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) DEFAULT NULL,
  `action` varchar(191) NOT NULL,
  `resource` varchar(191) NOT NULL,
  `resourceId` varchar(191) DEFAULT NULL,
  `metadata` varchar(191) DEFAULT NULL,
  `ipAddress` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CaseDocument`
--

CREATE TABLE `CaseDocument` (
  `id` varchar(191) NOT NULL,
  `caseSpaceId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `type` enum('PDF','DOCX','TXT','IMAGE','OTHER') NOT NULL DEFAULT 'OTHER',
  `fileUrl` varchar(191) NOT NULL,
  `fileSize` int DEFAULT NULL,
  `description` text,
  `uploadedBy` varchar(191) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `CaseDocument`
--

INSERT INTO `CaseDocument` (`id`, `caseSpaceId`, `title`, `type`, `fileUrl`, `fileSize`, `description`, `uploadedBy`, `createdAt`, `updatedAt`) VALUES
('cmqw896bn0007spbyw0btij8h', 'cmqw88oco0003spbytfn7q0jk', 'REPORT OF PUBLIC PARTICIPATION - IMPEACHMENT_2.pdf', 'OTHER', '', 50942589, '', 'cmqw7f8nf0000spubux8whzqz', '2026-06-27 10:38:53.507', '2026-06-27 10:38:53.507');

-- --------------------------------------------------------

--
-- Table structure for table `CaseLaw`
--

CREATE TABLE `CaseLaw` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `caseNumber` varchar(191) DEFAULT NULL,
  `court` varchar(191) NOT NULL,
  `judge` varchar(191) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `parties` varchar(191) DEFAULT NULL,
  `summary` varchar(191) DEFAULT NULL,
  `ruling` varchar(191) DEFAULT NULL,
  `citations` varchar(191) DEFAULT NULL,
  `relevanceScore` double DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CaseSpace`
--

CREATE TABLE `CaseSpace` (
  `id` varchar(191) NOT NULL,
  `caseNumber` varchar(191) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `description` text,
  `status` enum('ACTIVE','PENDING','CLOSED','ARCHIVED','ON_HOLD') NOT NULL DEFAULT 'ACTIVE',
  `caseType` varchar(191) DEFAULT NULL,
  `court` varchar(191) DEFAULT NULL,
  `judge` varchar(191) DEFAULT NULL,
  `filedDate` timestamp NULL DEFAULT NULL,
  `priority` enum('HIGH','MEDIUM','LOW') NOT NULL DEFAULT 'MEDIUM',
  `opponents` text,
  `clientId` varchar(191) NOT NULL,
  `assignedTo` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `CaseSpace`
--

INSERT INTO `CaseSpace` (`id`, `caseNumber`, `title`, `description`, `status`, `caseType`, `court`, `judge`, `filedDate`, `priority`, `opponents`, `clientId`, `assignedTo`, `createdAt`, `updatedAt`) VALUES
('cmqw88oco0003spbytfn7q0jk', 'efwefw', 'comm', 'dsfgsdfgdfgdfg', 'ACTIVE', NULL, 'dfdf', 'dfsgdfg', '2026-06-27 00:00:00.000', 'HIGH', 'fsdfgd', 'cmqw87kze0001spby26rvhdkr', 'cmqw7f8nf0000spubux8whzqz', '2026-06-27 10:38:30.217', '2026-06-27 12:12:50.392'),
('cmqw9md1r0007spw78ca12kk9', 'LAND-0028', 'Land dispute', NULL, 'CLOSED', 'LAND', NULL, NULL, NULL, 'MEDIUM', NULL, 'cmqw87kze0001spby26rvhdkr', 'cmqw7f8nf0000spubux8whzqz', '2026-06-27 11:17:08.367', '2026-06-27 11:33:30.669'),
('cmqwd6x340003spzuut10gzr6', 'CMC0083', 'This is a test case', 'This is a test', 'ACTIVE', 'LAND', 'Milimani COurt', NULL, '2026-06-28 00:00:00.000', 'LOW', 'Joe Enterprices', 'cmqwcelzl0001spzume68fhtp', 'cmqwc4mwk0000spcovxncaff6', '2026-06-27 12:57:06.304', '2026-06-27 12:57:36.960');

-- --------------------------------------------------------

--
-- Table structure for table `Citation`
--

CREATE TABLE `Citation` (
  `id` varchar(191) NOT NULL,
  `researchId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `source` varchar(191) NOT NULL,
  `section` varchar(191) DEFAULT NULL,
  `relevance` double DEFAULT NULL,
  `url` varchar(191) DEFAULT NULL,
  `text` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Client`
--

CREATE TABLE `Client` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `idNumber` varchar(191) DEFAULT NULL,
  `kraPin` varchar(191) DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `type` enum('INDIVIDUAL','CORPORATE') NOT NULL DEFAULT 'INDIVIDUAL',
  `notes` text,
  `userId` varchar(191) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Client`
--

INSERT INTO `Client` (`id`, `name`, `email`, `phone`, `idNumber`, `kraPin`, `address`, `type`, `notes`, `userId`, `createdAt`, `updatedAt`) VALUES
('cmqw87kze0001spby26rvhdkr', 'Kenny Waboshe', 'josphatmn@gmail.com', '+254726599429', '123123', 'AH123331', 'Marmanet, Laikipia', 'INDIVIDUAL', 'good client always very good', 'cmqw7f8nf0000spubux8whzqz', '2026-06-27 10:37:39.195', '2026-06-27 12:12:19.404'),
('cmqwcelzl0001spzume68fhtp', 'Joe Nyutu', 'joe@gmail.com', '+254726599429', '123123123', 'Ah123123', 'Marmanet, Laikipia', 'INDIVIDUAL', 'this is a note', 'cmqwc4mwk0000spcovxncaff6', '2026-06-27 12:35:05.553', '2026-06-27 12:56:14.937');

-- --------------------------------------------------------

--
-- Table structure for table `ContractReview`
--

CREATE TABLE `ContractReview` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'IN_PROGRESS',
  `risks` text,
  `missingClauses` text,
  `recommendations` text,
  `summary` text,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Conversation`
--

CREATE TABLE `Conversation` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `agentType` enum('RESEARCH','DRAFTING','CONTRACT_REVIEW','CASE_LAW','LITIGATION','FAMILY_LAW','EMPLOYMENT_LAW','LAND_LAW','IMMIGRATION','CORPORATE','TAX','COMPLIANCE','CRIMINAL_LAW','SUCCESSION','CONSTITUTION','BUSINESS_REGISTRATION') NOT NULL DEFAULT 'RESEARCH',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Document`
--

CREATE TABLE `Document` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `type` enum('PDF','DOCX','TXT','IMAGE','OTHER') NOT NULL,
  `fileUrl` varchar(191) NOT NULL,
  `fileSize` int DEFAULT NULL,
  `content` longtext,
  `summary` text,
  `metadata` text,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `contractReviewId` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Document`
--

INSERT INTO `Document` (`id`, `userId`, `title`, `type`, `fileUrl`, `fileSize`, `content`, `summary`, `metadata`, `createdAt`, `updatedAt`, `contractReviewId`) VALUES
('cmqw7rgft0001spjdi76nfjys', 'cmqw7f8nf0000spubux8whzqz', 'Third Party quote options.pdf', 'OTHER', '', 188962, '%PDF-1.7\r\n%����\r\n1 0 obj\r\n<</Type/Catalog/Pages 2 0 R/Lang(en) /StructTreeRoot 37 0 R/MarkInfo<</Marked true>>/Metadata 592 0 R/ViewerPreferences 593 0 R>>\r\nendobj\r\n2 0 obj\r\n<</Type/Pages/Count 2/Kids[ 4 0 R 35 0 R] >>\r\nendobj\r\n3 0 obj\r\n<</Author(Microsoft Corporation) /CreationDate(D:20250922093341+03\'00\') /ModDate(D:20250922093341+03\'00\') /Producer(��\0M\0i\0c\0r\0o\0s\0o\0f\0t\0�\0 \0E\0x\0c\0e\0l\0�\0 \0L\0T\0S\0C) /Creator(��\0M\0i\0c\0r\0o\0s\0o\0f\0t\0�\0 \0E\0x\0c\0e\0l\0�\0 \0L\0T\0S\0C) >>\r\nendobj\r\n4 0 obj\r\n<</Type/Page/Parent 2 0 R/Resources<</ExtGState<</GS6 6 0 R/GS9 9 0 R>>/Font<</F1 7 0 R/F2 10 0 R/F3 12 0 R/F4 16 0 R>>/XObject<</Image18 18 0 R/Image20 20 0 R/Image22 22 0 R/Image24 24 0 R/Image26 26 0 R/Image28 28 0 R/Image30 30 0 R/Image31 31 0 R/Image33 33 0 R/Image34 34 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI] >>/Annots[ 14 0 R 15 0 R] /MediaBox[ 0 0 792 612] /Contents 5 0 R/Group<</Type/Group/S/Transparency/CS/DeviceRGB>>/Tabs/S/StructParents 0>>\r\nendobj\r\n5 0 obj\r\n<</Filter/FlateDecode/Length 5286>>\r\nstream\r\nx��][s�6�~w���a��,���gg��׬6�dm\'���yPd�VV�������ow�6A��P��LR��!\0��Ƈ�<��������GWɃg���^�ɻ˻wD�Zd�It�gZ&Jf:�Y-���w����<3�L�0�r�%تҙ,-��.2m�j��\\U�Y]�U�UVLWH:9������5���ef椋�d��_�rQd]qٕ\'�����7��������$�ӟ��&�m�L�I!T�4�\'3)�W���]��������N�~����H�Δ�������n�.����䫻w��Q��\\�{Bl����I�WmN�ٜ����^_�{Zm�çc���t�T��ꔛ���6x�{�ߓ��u��c��\'�vJn���LJf�3��9i����$\'�Շt��$_?N��<�>ݓzs?��\\GQ)�0>E_�������ЋT����[���æ��9s�6��S/���q��W�ۛW��\nۼ�u�T�\r9�^��`�`1�r�o������ʲu�.�d�MD���؁/O��Woޡ�/ϝ��h+�k��S�琢�ֻآY(�vjcK�#A�Y�\"Vy�x�\n!Ym�����{P��Jɬ2]|\Z��{!�r�O�Y6�k��J�ܯ1<��+?���Ϋ]�\Z2;$��6g�f6��>��ޠ��O�?̆����^�uGṌ����8��R��kd��h\"G���d=��zAzR櫏�Z��ջW�jU��3�M�ݷ�����n��C�An0.9b\0�#�~ǒ?���|ts�e[��F����>t��#ʞ8\ZΆ��Z `d9��y&g �`\0�Ɖ���q]_>�dh��\"�r�`���C��75��l+9rSZnq�MԻ���fs6�~�9�S������)q�7\n��i�%}[Garz����2��8���m2���\'��\"�����\rg.�&�E�Hf��B����%��A\n0�;�v?-1�fn!�����T�������i��i��}��E�\n��f�Ԟ���l]:����S]g6����{d1t�H��R��@�<�8|R���QJ6�=��A�s�S�YH)>��(%���Rv��$:�>:��٫�f|\n�Ҭ*�;�����ⷔ��ds��n5�Q���?t|�w!$M:$�pr�K@}K��d���^t��3e)z�g��Rh\\�iH\\	������7.\'��iA��\Z�3k�\n5<AkN8}\n�)m�y��=M�SQs���ODL��O�Q��ReU���PP�i������Cz�y8N/	k+����s���o#辫o`4�i�%*�����[U1t�2>�$�.b�a�~Nã��\0�sԢ$��&����\'���Ox�������\rK� �q�MO\0ϳ�:I�)�c�T�`�\")��� !�}����������q5|����>���|��ր��-��?��J��J0T����Xa��P��\ng��X|��5�*��=����2��&\"�,F�>�H�=Ǽƙ��>�L}C�A�q+��\n�}F���伏���S��[�\\	R�n��u��x2���x�z5Ov�lP��m?u��*�k(Z��Ӑ����D�<t���\0؄���ͧa1S(Y�)1�:@���ޮ�0�`��\r%����,��U	����	��;$ j�pŜܧ$������?P�E��$���\"��\\cBT\r�顡��w��-==N��n��1��\\q`e�����-裣�AG\Z?�!���-J;)��ؿ�`-+�&��\r�8�XD4��-\n��Hwh��Ƣ-4�)�X��g�S�)���pd�9x��M�S�Ș<��*O�����t�ׁ=A�GtB+�ꨳ*r|�O�A-��̀�>����v��C��c�3�#Z�Zv�Y����(Eۑ1Tt82�k�(���I\\}dĹÎ�q�G\'���g�S �\\,��A[���.�2�D�jud(�,/W��TJ��M�\Z�xh��)?|�o�N&I(��\"�m�]Q��v�ժyޞj{�˥��4lw�4�ֿ�N�sݴJ����`ut��o�xW#�	Ũ��A��o��T�Mb�A��g8�F�tҗ�o!2%���\'sM��U�B&��=����)FH����H���Mx:\\QtD)\'��4_D�S�d���Vlt�e�W\'Qf7.3[�����m�x��F�W�m�]��-sI0�%����)�e��V\r���i������V1�.�z�Ƞ;���R�5�n��˗�-Z��=�nSZ53|�=�k�ͪ��Y͋Xң��wt��)�~9���^(c ��qg�Mo��nM��|�Xx�Y1�xՠ���O{�6�O��UUEdPKªʌ(�6��N�!�Cz�9̃�c�b�y؜�7�=����CT?�������t.f\r:]3xד͸`]y-t]����`�SU2b�st���P��/������=������s,�ؿ��4ޑ�B�L��,c�;�e����ua�3�D���YƂ���d\":�@�!�Z��/�S��#E�q�q\"ݨK\\{TF��F%��d\0t���Q��iT�Ca�ιX�sV��nfg�<.�X�KV��T}m\\r��rQ�ec�d����q�%wԲ�DHw\\�X��\\r�#J9�P6-9����9r�MVV7�K.�: �l��xg��]54r���$��}$8bj_U+�?�qȗ>af�L�_�Hv6���s�__�|����#����� �K��z���b�\"�\\�HV��ĺ]Dr�:��`V�~Y\"y��K�K��T,5ޒ^¥���p�L�\Z\\j�y尒3�(y�\\�2-[eԐq�]��ˢ�X�{LW��]+3�,hx�΂5x׊��(�\Z�g��ã�/t�ba�X��O�;��a�ǂa�3��D���y�*�\'��[�p�!yx�0�_�W��Y�8�p*��7�r-z���p��m�*����$���ՓG�;l�w[0ypz8,.y�����M�����a�sN�v�ͣ�����\\g����G�H�n͊�Y1�k�2���W/.��0�#���a.]��Tjh���79#޿�����Z��tO�;sÆ���vT(7{j8J����r�c���F0�b ,�Op��/�&�;���&�e���4\"�o㣼�5��V�O�`_���k��	W�6-�_.��p��#C��V�X�������7���^>2�/���9_Gw��,Lf�9�ޒ��j� �L�eZ^�S�(FT>N����,T&c�vl\\���I�\Z��,p�jς5՚#�(�\'2��2B5�!=�%�̉ĺ9m!UsD�?��\'��֠����:���޷�H]d����݊�l�����!��\0�L�cj�E��q�l&Y�T]F��\nu�b,s�t�J��	�q��5`jUI]fL���6	f���;�̋�zyط-\rH�=��B��ۆ����C�y�$��IL{��yo]>�y��pt�ˎ�|�t��\Z����GU{	��5v1	�JC�:6���}]�d�P��U��x9��6�d�`�N���N��`��^���o������ѓ5G�Qv�� p��5r�k�Ļ�s$}�� ĻD�	��bQ�|��`f��4��4�2+z�J�C���b�]�(!G�-Iv!4E���Ǖ�������W\'�s��ů������D] ���KA\0�jeFR䌶u��[+i�ע�\Z��{K-�	���{�NT�������=�m*�	*�P���\0�k~�$��Ѝ3�� �gA�d�\"g�o�bb�3(%�-Aa���D��4&E��+ܡ����\Z!a�� �\r��kp-�\Z�3|��I5a��d��&�.X��N5#d��`��ƪ͌�)�+��]�����]p���4X�:�\"л2/\"w��n�U_��U��K���hY�𨧈�.m��U1�7��ۓœn���M��fۑ\"e��uQ��oӆsѱ�j���a{1��@-$����\Z^�#�1�c��R��YhM-��k�d����Ԉ��8Rl<�n$G*��wq�������8�$[~t,x��8W�G8�\Z!���\Z�i�1��V����R����iQo�:��wbH���;���D��!��j��m���gH����Ek`��e�w]�!�o�!?C\'��~�KU=�ZU\"���bH��M\n���@����=��Y��z���J�������#�1ek���X�j~��~�E��������_ck�a�^?��7ދ3�������|o���PF#�(#Y���(�\ra4%r-R5�fjP�#�Cذ3��ipM���ղU���W���!w%_�bs-�+��oW�u��!_�����]p4�\rw�AL�[���&_�N��zWVٿ�ׅ�+�Eqg����k�us�|��]�W�7�]�{��#\n���hǉ��hGK~2e˖v-�Si�W\Z�ܰ�bb3�y���ִ?<�p��U�V�zя�݂�J�_�p��A��ɩ���j�>����z?����XDo����<?~��;<�-�ug�:�L�i��H��O8nv(Amȴ(;��:¯�[�?�����41~2~D\0N\r���W\'o���Ϭ�`�N�\0����~��d=�A�u�ї[t������G���\n-�9�����+�|�/V���)� �U�\"�W��%\n���&�k4F��pf�k8C�\ZS�\Zd˨�5F%��1�3��2�`���2S�r/��U���˝]�cXǙ�+|���5\Z3���rg�����+nLh��HY�\r-��`�YT�jf�Lk�����_���*��:�Q�m�K5*�K*�5.w��rי:�����\ZBS��Q�5�����@%�D5�y9[�yk��&of,��9S��s��shWæ�a%0���j$+$�Dw�y��J��1��#�,f�a��)j���bsE\'�U�!/NW�T)�\n^	n�%(��\\��tB�:}!��q��C��.�}K-���]�a^4�P����Oc��ŻT\n���x�J6�J��;�z��x�\nZ!����/�\0!�>�p�o��a�#@�g�I�\'�x�G=a0���n�d��}��<�[6l׉��Wl�W�\Z�n �[03da�\'L޿��Γ��lЬ\'T���h)HC�)�q�-I� d���Γ��lЬ\'T����Y!���x�\r���=�t�$RɠIO`��_0�1����,0}�ҝ\'��lЬ\'�F��8�<��a��\0��iDd��/؞\'��lخ�f¨`be�㊦[ez�}��lخ\'V�Ŗ�蕰J��6	������E�=�R]٠YO����L ��5ޮ, @!�@�O��o�Y\Z1X2l�9�����w�\r\nendstream\r\nendobj\r\n6 0 obj\r\n<</Type/ExtGState/BM/Normal/ca 1>>\r\nendobj\r\n7 0 obj\r\n<</Type/Font/Subtype/TrueType/Name/F1/BaseFont/BCDEEE+ArialMT/Encoding/WinAnsiEncoding/FontDescriptor 8 0 R/FirstChar 32/LastChar 122/Widths 584 0 R>>\r\nendobj\r\n8 0 obj\r\n<</Type/FontDescriptor/FontName/BCDEEE+ArialMT/Flags 32/ItalicAngle 0/Ascent 905/Descent -210/CapHeight 728/AvgWidth 441/MaxWidth 2665/FontWeight 400/XHeight 250/Leading 33/StemV 44/FontBBox[ -665 -210 2000 728] /FontFile2 585 0 R>>\r\nendobj\r\n9 0 obj\r\n<</Type/ExtGState/BM/Normal/CA 1>>\r\nendobj\r\n10 0 obj\r\n<</Type/Font/Subtype/TrueType/Name/F2/BaseFont/BCDFEE+Arial-BoldMT/Encoding/WinAnsiEncoding/FontDescriptor 11 0 R/FirstChar 32/LastChar 122/Widths 586 0 R>>\r\nendobj\r\n11 0 obj\r\n<</Type/FontDescriptor/FontName/BCDFEE+Arial-BoldMT/Flags 32/ItalicAngle 0/Ascent 905/Descent -210/CapHeight 728/AvgWidth 479/MaxWidth 2628/FontWeight 700/XHeight 250/Leading 33/StemV 47/FontBBox[ -628 -210 2000 728] /FontFile2 587 0 R>>\r\nendobj\r\n12 0 obj\r\n<</Type/Font/Subtype/TrueType/Name/F3/BaseFont/BCDGEE+Ubuntu,Bold/Encoding/WinAnsiEncoding/FontDescriptor 13 0 R/FirstChar 32/LastChar 121/Widths 588 0 R>>\r\nendobj\r\n13 0 obj\r\n<</Type/FontDescriptor/FontName/BCDGEE+Ubuntu,Bold/Flags 32/ItalicAngle 0/Ascent 932/Descent -185/CapHeight 776/AvgWidth 643/MaxWidth 3645/FontWeight 700/XHeight 250/Leading 28/StemV 64/FontBBox[ -170 -185 3475 776] /FontFile2 589 0 R>>\r\nendobj\r\n14 0 obj\r\n<</Subtype/Link/Rect[ 84.384 491.5 135.02 495.34] /BS<</W 0>>/F 4/A<</Type/Action/S/URI/URI(mailto:customercare@pesabazaar.com) >>/StructParent 1>>\r\nendobj\r\n15 0 obj\r\n<</Subtype/Link/Rect[ 84.384 484.78 118.7 488.62] /BS<</W 0>>/F 4/A<</Type/Action/S/URI/URI(http://www.pesabazaar.com/) >>/StructParent 2>>\r\nendobj\r\n16 0 obj\r\n<</Type/Font/Subtype/TrueType/Name/F4/BaseFont/BCDHEE+Ubuntu/Encoding/WinAnsiEncoding/FontDescriptor 17 0 R/FirstChar 32/LastChar 121/Widths 590 0 R>>\r\nendobj\r\n17 0 obj\r\n<</Type/FontDescriptor/FontName/BCDHEE+Ubuntu/Flags 32/ItalicAngle 0/Ascent 932/Descent -185/CapHeight 776/AvgWidth 602/MaxWidth 3647/FontWeight 400/XHeight 250/Leading 28/StemV 60/FontBBox[ -167 -185 3480 776] /FontFile2 591 0 R>>\r\nendobj\r\n18 0 obj\r\n<</Type/XObject/Subtype/Image/Width 327/Height 60/ColorSpace/DeviceRGB/BitsPerComponent 8/Interpolate false/SMask 19 0 R/Filter/FlateDecode/Length 4852>>\r\nstream\r\nx��]tT��#$��6�Bx�\0�֖��Z�ڞ�ZmU�@!$�AyCDE�7\"�b�XZCim��hZQ��\"r����n��ٽ�;�5{�\r��|gΞ��sg����?f�&-�7e�\Zڥ����Q%cܗQڭuQ���0004\"��Ϻ���[�O���_��������-��_�-��-*�rK�����y��5,cHq�TK���@�4�f�WsO����ݓ���M/�f\Z�8J��ܲ|�|��<TA�\'�^pcf��+R=�����{o(\nM��*������-�����D���\Z]W�-\":���r�����+r��FW���������f`H\r\n۵�6�(��>��e�����^13=�$�x��7�H��u^�����섲2�n���yO�P؁����gG����E��(CfzJ/�0���48��Dq�Ҩ�ƌ^��N��N�\Z(�	���\"��s󪆴K�(�h�2m�׊B��Cw�����\'��֢i�L/)Dq4x�\Z�WG��JG~}G�	Õ�:^C��n�؆Yl��D~z�C�w��?4�<46Jj�\'|��x43�(�F^7f��\0��,~c���pem����C�\rw--xaBv~&#6C��<���Me��\ZH��	�wq�鸙��yU�FcF?ށ�/�7�5|uVƍ5ܻ����`y�e�|���v��<4b���j��\r����13\r����\'��ۣO���b�\Z���.�ZX����΃[�z.�f�=�㾡�H�e�\ZH��J�0��5��b ]T��%<�\rqyK&�5}b^�����#ujg^��՝{�0{����[\"�mO�i����zC>�FXs}��!@6��|$��?�[���2���8����e(�n 5,�Vu�m���``h��uMq�Ѷ��ߢq6\"������4K-��\n�uB�S]����������T�C�FU��F�N�����Gd!����z�_��ߏ�G�ϵo���[��cjDj��!Z����AS=+��������Ա�w��������W*��/ʯ��g�Q}.&u1��ܔ��LvJ���\r���h\\��NܧQc$�	�/���L�O�v��_�v�k���%\\u�\'o�zn����0a4&����\'ʦ��ϼ�Hj���(O�5��р\Z�U�^�έM�yU^z�g����a�7��I=BGj��oGc-�����7�{c3��{��\Zm�����yC�T�P�hٲe�D�Z\"�/J�ښ3:Fj��:~RT�]#�[,��I�����/�~�@:4Ozq�t��[����r��\nP4�7�q��2��X\ZhC?�@ tBnnnVVVz:��ܫGFF��٩S\'��p���\0Ռ���H/6�lL+;J���҂�iRXvUgkR��	e�7O	��������>��e��6�}���)��S�=��8$�e�>5��Fk���t���������kIlo%E̜���BjhǊ΄V� �}_^�4�ڻ��:��/��tpE���cVe��^Y*~�&Q&�u��\'� :G��:Fc�[�����f�z<9��J9�d5X�-�I\r-@;�7�joe5@ULo-�kȸ5��������҂�i���k�\"�{��ZX{��e��m���J�Q)��R�9I�E��{���	�	��;�o�!���6��Q��BG�F�w<���i����C�i߹v�ᚂ�&u�7v���J~���.+r1䠭�JVI�b|i���4�', NULL, NULL, '2026-06-27 10:25:06.810', '2026-06-27 10:25:06.810', NULL),
('cmqw8k3j2000lspbyjdrg8vzp', 'cmqw7f8nf0000spubux8whzqz', 'Admin Portal User Guide.docx', 'OTHER', '', 16608, 'PK\n\0\0\0\0\0�N�@\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0docProps/PK\0\0\0\0�N�@����\\\0\0q\0\0\0\0\0docProps/app.xml��Qo�0�ߗ�?ޡ�������l&�|4M�@3h��\Z��+�({��=禧_���K�:gP�	����p*J����[o�:�^�VpH�+hw�>?��a��u�6��%B�6���5��J��+U�DU1\nAOp�� �!��%����C��l�Z\n����*-p��dK�=N��t�]�#5�4�h�A�R�FÀ��(B��So�~gܾ��0�$EjEds3G\n�`��<�)i!��iEZ\r=�>�[�e!6=����9b;0����A9��ZʖQbl��a�;��N�a����0�G��6|�D��̋f/�7�ĥ����,�� ��5F�$lḰ�3��ci�z�6�PK\0\0\0\0�N�@�\0Q�J\0\0{\0\0\0\0\0docProps/core.xml��AO� ��&���{tn3��5;���\Z�7߶jp����ۺ\ZM<~}^\n�b�������M�@	-+���K��oQ�<W��ZA��Т��ʄaB[x�ڀ��(��c��h�a;����$*�km��h7�p��7�SBf��%�w��FtRJ1(͗�{�jh@y�iB��`��>�M�&��Tw����Uضm�N�\Z�?�o�����q��%\0��vLX�d��9y��?�KT�$��dӴ��M��������Nxti[|hg��w�𭻐�;�\nw��@�.��h�ל��Mc2/��KoF�΂�+`aWu/�������PK\0\0\0\0�N�@\ZrY��\0\0\0�\0\0\0\0\0docProps/custom.xml���n�0D������DH6]�R��1	~�6����(m���j���L���#��u�V��@(��A��v<�-η�kG�D�஼��_�6��A8����0v�\"d������ևӞ�����F�I\n�1#���y-����������N��Ν��	�e�_@/���I�IH��>�%�Bi�n��*V���f}f�V��O���M�W�0v\'az��hޝ�%%q�(����/��C��U�:]�\rPK\n\0\0\0\0\0�N�@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0word/PK\0\0\0\0�N�@#4�1\0\0Zn\0\0\0\0\0word/styles.xml�]�r��ݧ*���*YH%��Y�oɒ�\")J(宇�P�5�A�%}z\Z|`L4ЋT�S�szz��y|��-�W�������������<?z���n�>�4�\'���]��߾��O�W�4{d�\0@�NBw:XfY<Sw)C��XF��B%���k�2E�#��\\�\"��~�g��ӓ������ O���8\n}7Q�Zd���Z,|W�������k�桌2d&2\0T�.�8-�B*\ZqY���\n�\Z�y�C�V*��D�2M�N 0>~T���w�*���E�\Z\n.��_5;F\'6�����%e\Z�0�����y\"���!\0jv��U�f*����V���*N��Ș]����~Z_4pBw��%R�������D���k�y���k򘘯�~ܨ(K��D���OO~�� WοT(�����2J��\"E�]�>X=��Y�g��.����!�5;�ʪ�-�!8!TgE��&�ʣl:8C�B��7�W�Ay�9Z���})��Tz���ę�[���os���c��o:����S���2 ֨�IA�}{se��h�Sr\"N�E����\Z�5z<�����\0��ɲ�B+�3:�h�����;�Yw����C��C\\t�����^�N��G�|k����a������!���@�xx�\0�?�{\0ޟ\n=\03$H�\\��аɡaRC�2$��eH\rː\Z�!%4,CBhX�t(\ZB�w�mDY����RY�2�d�^D\0��QL��%�p���h�k�V#z������I�3��䨅��_�����;1��U�4��N�Df�[���I�B&�\"��e#K�G҉�p��x������蜒�G\Z�Ly����>G��z����L	�&b���OnE\Z�����`�#���트�W�=�?������Edp<\"�Ṽm��r����}�8l�7�\\�7�\\�7��}��X�����gC;�*P��D�j0�_\"��.6]����y�xID�tt��U޻���UA�=(��]�_�(�����\rx6%(����,�\ZT%د��]��4������=��,�g<�3A^t:����.�!���{�\'�L�����Ñn�OI������,^�3���Es�~����\rf��ݾ�2������\n�����O�������[/E��;�ڌ�q�E�?�c\0�=����&	�>��\rm�5������������ι�ޛ�=�B��Eۯ|�[e�<��0B�ÀAg�b�7F�����0V���u��Q��I.��c�GE��	����H�o���%G�ׇ(9O�\Zĥ�����?���@���B���x羁��R��gh��W����,�6	�<T���EO��E*P�\"����dૅ���\ZT��Q��$$�����3R��3E*�-�=�\ZFt��Et��Et��Et�ZeCU���T5t�U:����ݩ�����h;[�#:[�#:[�#:[�#:[�#:[��];r���>�}����5��oCd������\\�#X���\"8^���Z�[*j��҃��W-�Ox>[(A_�G��Z��_tcÔ+���E`��WN=�PbL1��!c���e�̖^;�q�_�?�3�S=��\nNw���~/=?K�P�i|~81��~M�7`b�ps���x	��_�\Z%��Ä�_ُ�T�q�gC�\Z� >Q�.l�>�a��CO�[�V<����E�\"ؒ��� 6�o�\'�{ra�	Y*luQa�ud�UG���ڑ�V)����om$�+��Zە�`��Jt��v%:X������$6U���(tW.�6T\\=�ЅM*�>t��xS�j�o*���vś�b��&�rQě��Z��D�śJ�Z��D�śJ�Z��D�ěJbS�J�ě�eӆ��.�T\"�<TDu�&�qQ���OX�`te�UЮxS�b��&�rQě��Z��D�śJ�Z��D�śJ�Z��D�ěJBo*�M*M��7��&Q]��D�ś�^��xSYl�+�T[�4�7��\"�T���M%j-�T���M%j-�T���M$j\'�T�xS�l�Pij]��D6y����M$j/��a/-ś�b��]��j�I��\\�r�o*Qk��o*Qk��o\"Q;�Pě�eӆJS��M%��CETo\"Q{�&�*l)�T[�7��V;M�M墈7���xS�Z�7���xS�Z�7���x�ډ7��\"�T.�6T�Zo*�M*��x#,U__u^/͎{<�x�fmNq����k���͢�x�w\\v^_�gP�9�6\n�/�n������R��\'Ũ;X�_c$+���� �#�����\r�B��_���?~3���+�4�c\r�W��͈?���et�<�\'�`�����Ճ>4�+���.���U����]�S\\f��-��^9d5��J{̈��ح�Bᡃ�����p��P$=�����\\�J�L=���5���[� �nir ���ۮܥ��5(=�]k6dX�`�aX(���~���6̋��R��!��ƣ���gy�̤Y��Jo�\'�ǂ���%�\Z���j�?�M9؂��L+�Cy�\'�%Ȫ�\'�C�5�j��I]\'l��m+D��pݘ�Y\rZ���fk>��Y*G����`ů�b�̓B���+�e)S1��98$���xo��֪R�::�f���s���2��\'8����c��_���۸3V�>��^Y�\\�`.`��T�dԽ�QF?�npS���V�a�E��\n6�9}0zQ;��O�x[.A���4��6��N �k)�iS��)�J[^��P�!��|E޼���\rݨb�㎿��B�\n;���v�~����e������\"��^�Xu�Z՟vL�]���N�����Ԣc��I���v@�l6ew���^6�ZM�\r�SS���,��so+�;��_PK\0\0\0\0�N�@�y��b\0\0�\n\0\0\0\0\0word/settings.xml�V�R�8�ߙ}���C�@H�:�Z����l+�<��~IV�N(�i�,���\']~ze���R�gAx2z��$|=����4�)�x���x�\n>]���e)�5����*b�,�h]E��*6�!u\"*́��!\r�r=`H��U��B�������5#fA-yԚ�3RH��J�H�V����k�_��4����zHL!�ՆT�[c�k\rR�x#ۏ��2��p��d�n#d������B%E���1��e�����о�\'P��=0�@=�S��G��t�u��I�f��(*��J�@\Z��5Ms�T��m]O�ꔂ+��5�Ƴ	ς+��7!X��*,h7�h���Ni�R������X�{��ZJQ��\Z#���-�T[��S!��`�ڃfa�,a�P`3�{�%^���\'�gZT��ć[J�@?KR���&�Y�\n y�p|�2+��(�]I� 3D��6|���Aޛ�i.j^��.�W,�a�`�AP�6����z���n{/a,[\r��-\n�©�Ϸ�!V��-�Q�(R���ˬ�D��������6d�������p|��z�o8T��}��z¯�;��a��Y�%Rz����屦�\r���^B3�꾆��P���ֈø̡$T�#�-�݉��%ُ�ϟ��Q�C	���#=���6�L�(ԗ댼�9/�@U`�m�D�Q\0��R�;�iW�#�\n����G�lGRJ�;�+]c��٠�\\�̈�Y*x���mX&i:J��f1ϙ���2N\\�?p�8�/���\\���E8Y�ċI<��c��#H\'�x<��qA\Z/�I2>����b<L.�ᤋx�N���i+�\"s�=ȫKw2c�cnD�rIP��\\��Ţ\\�Ą{~��!\'�s���C1Di\n���Ydo�W�,�Cr��m%�T��/{[�~��3`~�5�n|���쬵G8`	�tU���p��������+Oix�5�E�c���Z�mf�ۦ��m@*3��w�����pPg�Q��W³����Q�Y���A�I�ۃpG�j���N;\Z<\Z��YG{ڸ��{\Z<�h�/)�/�q�h�+A�hpy퉳���`����.1ܮ�g\Z����S��?PK\0\0\0\0�N�@�����\0\0^	\0\0\0\0\0word/header1.xml�VMO�0������M�\"R�ʂЮ�=���X�?�qj�ׯ����T-�v/u5�y��͌ۋ�^����Hp41�\"��O�n?0CDF\n)h�_)����o6�3�\\��ت4��1*Hs�	9K�97�T�@��,���:N�(��)-S\n�RM�X�\r�IE��5��C�\'zY��CWİ+�yu��y#\\j7�!ׄ���н*v�#�eZr*L�1дp����u�Es%�-�վ\"V�h���F�|]ɇ��Z�Z����#��xQ������6b�+�鈇�8B�}Ζ	\'Lt0��fC���d��\'�|o\0(�M_Y�[-K�գ����Ĳ��K}��W\Z���ǜ(��Q0)�H~M�p��C�`���!�ؾ�4pW� �x\Z�-��dV��l4B6:C~A��=[��x���h^�l�\"E�Op��KJ�=}1�9\\�3Aa�nY&�D\n�eQ�C��v�w�/��=�[!�ήo\\��˙0	�蜔���ͶBf�mxk]F�:��N�� b��Q1�>z���w���/|7-J�\\#��H{r��3��ύ��J���-�G�)�]����hq�4qS���mc3��B��#�ҫajM*>V�m�?.����S��ǠH���G���c4@�k��������<z�ڐM�*�d}\'�_�j�ܿ��_PK\n\0\0\0\0\0�N�@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0word/theme/PK\0\0\0\0�N�@Ѯ���\0\0$\0\0\0\0\0word/theme/theme1.xml�YMo7��X콱d�#2\"�>��vDJ�)-�ˈ�\\��݊�X�@Ѵȡ�^z(�H�h�k��HS �C�jEJT�>E��}3|��!WW�ޏ�w�� ,i��K%��ɐ$	���~��˾\'$JDY�����և\\A�2�1��>���GR��kkb�H\\b)N�و�I��õ��#�ӵ�R��#��^�bp{c4\"C������?��f�;�H�PC�{�7�L46�BLE�r�Ѧ쨏�KߣHHx��K��_ۺ��6s#*W�\Zv]�����x]���A1i�R�Զ�\Z@�2�S��:���V�q1}Vw\Z;�j�5@�G��v��Q�����%��U�o�5(�_Y�w�-���נ_]�W*��V��kP��-���v�n�5(�$/�K��Fk��2bt�	oT+��z�|��j(�KM1b�\\Uk1��x\0\nH�$�\'�)�!�qQ2���\'a$�4h#�y64KCjFO9Ie��$E�1�^߾���g����~=~����/�#�j%�i��/�y������<�ڍ&�ϟ?��Wn l�9�W�<����W��x��#|���	��:>�n���b3��n��b;	J����##}}�(r�v��;D��6�g�E|\"���^[�����(쩹�0�\'I螜OL�-�]s�Pb�3IA=��e+�͛%�8��S��c���b���9l$����A��>X�47�%1�e�\"��bsp��aԵ�6>���+u��cj��\Z�H�\\�QL̀�#�H��|h�:BB�CL��	�.��k$}ĝ�:�m$�d��3�m6nE(N]�I\"��C�\"�&�.��w��y@��t�!�J��jp�Ӥ4/�d�����U��)!����R�$\'�w6��	7H�o�8x_T���Ĺgv�znQ�[���sM��6�r�z/�����ߋ��|��<Wahu̎����<{��=9�x_�㷀�taP��\'.�bi�N�	,\\ȑ��8���\"��ѽ�+\'��]��K��+�v�Vx:�X�]9�eu���C 9/U�q�.�]�ϯQ�{�6���e�.$��l�٠\n��\\C�$��΅E���r?K��VdG��~�&`w&Dq��z�]������`ZP�y�3�P\\W.O�.+�Sd�\"a��MBGF�0�\0�թFOC�]sݘ�Ԣ�B�� Q��_,Κk�[���JA���6�P2C�6�\\��c�B�u�E4�`Cɳ\reI��m$�,�Zt25���ܣ$n�j�E\Zh�5Ds+�� \\Xr\r���F�n\'�Fx(ʹ#*��WP�L+�O����ʒM ݽ(8�t�o!(�j���w�Y4�$!���Bc�e�|\'�k(G4�P�QL1��Z�:�[�[�f���B�`͠Zݴ�\Z��]�d#9C4�=�R�5�*f�0k�<[�7X�B����t/Jnc�u焢K@���9��)\Z�Am>�EM1^�a�����;f<��i������ۅ�=�9����b���hv�ԑ�?^�?/��=�6�ȝP)2�Р�PK\0\0\0\0�N�@��pн\0\0��\0\0\0\0\0word/document.xml�]�r�F}ߪ��)>d�*��|��XJ)�%��YŒ7���!0$\'0�̀4�ؗ��|ɞ�H�M3�m�@UbI \0�2�s���G߼I1V�i�w�������:w^_>����,����qg�\\盓���Ѥ��HU�N���$��;#������F*�����\Zg����:Rc�;�G��[nM������l,]�<]z�l&W�k`l*��\Z;<H��*�}�=�^�u���>|P��w\n���ڟ]�T��������\rG>.�\0�U	��dn���m�ٳ�G�%��u�4����G��}����<�r�W1?����0�pP���@�w�V�>����~�꼩�����܍.<���w=�rdЅ̿���k糽��{�+s��&�̚\"�]N�7;���jv.��5�����[sk����_�d�f�����y�>�^��;�L���u��t$�wt�\0��4�=f��~�{�������s��7�~��Ϲ�~�(1�er���s@���Po|��p���Δ{k�D�frf2oM�ǻ\"�-���C���i�:Ćo�Oq}6ҙ?�(���Ӳ�-�EZ_£�NR��z����4sK?�β�����N����B�7�~;�]|�v0����g^�=�]��I�\'���e��N/Qٱ�\\���B�J�ˍ��	)b�NT,�V�+�L����2�;��[Lc/c����Ij�w��<��\'�/����-}�3��(�{|����vR��ǰMw�ְ��CG��z�t�k���1�f�Qd1�a-12�-����T\"�M#�\'+)\"�c����w`M*\\�w��9A����S�FcC:�+\"Z�\":M���#��\0X�����!�f����>��z��;�#I|6�3E���4���!�\Z�Vx��l[g��	�\\��w?�?y���ߋ�~-���p�CLT\\�����3�i!�!�1�N��m�8q*��Cj�P�A��{m5R�9�]#��+8pK��zv�d�,����S��0ZX~ܹs�E\r��6�4f�q�cgK`��[\"�9��ҍ�Fڸf/��Oխ�c�o��T�BsD�<\r7#\n��|vj�Y�8�G��8���_[����)�pS�UZ��U���#PC��\ZKј�D�]�ȩ����~�\r\0��{�*�2����S�#&���@L��@��nc�ȭ��ZJ�-�d�sD��\"\n��-P�S��HG��\Z�D��ZM�Y�Ѩ��YAc��p� �x����\Z�h�w$�覨��R{1�x��ՠ1\0�~F�5ot3�N���0Y=53�&��Y��b�$6�hHl&Cf��z 萹�)�Jr2�dV�����<O4�Z߼a$���<����7�O���w~�0���s,SH~Q��6R*��G�s���\0%�+\0�)���fᰑJr���R��^��PP[E��)��4��	9�-���Niٸ9�����>:e�-w�+j��\'^���g2Ϳ��v/9�Iz����z����|��䷶o������n\r��Ty u���& g0Q,X�?~��E�R]�Io�����1�4�6[~���kꒉ��*��x.����@O�o� �!�!$>�*HDw$�`�E��~��k4�->��d����E�LQ3\"FZ:�\n\\��J�6��� |���q5�I[�?����\\�#�1�Gpz�#:�S�nc�#��������&>В���)B`�񵎍��\0�s�J�iO�>�x,���\r���\r�\\��W�T ��Uś_�G*(��\Z�V���˥��*�(��Z�i�ʩ\n+����D[��	C�	{�Z��D	�O����@?���wm\01w+�������D�ݮx\n��?�!&J\ru+\\W|�I���b��jc�c��h�ʜ����-��;O���\0�\0Q��7H`hT�!���P�VV��ص��#��[n�Ɉd��J9ZE� �I	}8S\r�8���TŘP�	�M���6�)�C�Y���SW|;�L=R�%���i���\0�����2r��\"�-H���9l��/�;\\P����4d�\"Q\Z�z�>��xHq�}�@	�.��Yxל1�|�x�S�t�����aj�X�##�3\Z&�(��uP����?�k	�%b{K�8̫&��5���w(UnpOě�qޢ�g.�D���\\�Dj�܏0�9WԾg�2|�ш�#S¾&���w��$2A&[s��GV�țq=G���n�mx�[Z��>��P<]I�b5�z�jQ/`L(8\0VN��[����G0#yH��ˤ1E�\n��8@fJ�a��{{C8��L�\0e�h�~�*J�P(��/�ߙ�Yhq:/�W󈍈)J�6�g��r3��)�?,ۚCCJ��k���(^2�E)Y��>��H����Ԡd3˽�h�	3En`2B���c����՜:�p���\r�fx���ls��Pܧ-�`�Fk2�R�\\1E2�P1Ԟ!\rq�U`\"�.��1q������m�S5=\n���t�!�i�l]�:agb��\Z���4}�9s�,�Ǩ���dQ�Q�sj���G�A�--�A\\\n�H���l�}��/�:��]�(7ӂ���p!4��V�:�o�(��\r�wշ�Rཬȩo�5���:a0�x3I�����|��=0!վO88{��Am�I���ʝ����jV	6Lk@��\"c\0�*�^���s�1$��S�\"�[|�H	�B��8�T΅7n���;3~7�Lɵ6�Ib*-�s�<Zr�#AN�j�Y�\\�9cM�?��n��l��zhj4�M7��[_�_/���Н��hu����E_���t⧘ƪԌ���#���[��$kґl��E���T�PtTJ�r(�u�NrؙfÛ���s@�� ��5������b�L�L��JD$�]u��#{���#gsDJ3�~!������DN�ee��ʣ,��\r�(!H���_�,\n�=3���<�M����', NULL, NULL, '2026-06-27 10:47:23.102', '2026-06-27 10:47:23.102', NULL),
('cmqwddqew0007spzuc8zahhf5', 'cmqwc4mwk0000spcovxncaff6', 'Admin Portal User Guide.docx', 'OTHER', '', 16608, 'PK\n\0\0\0\0\0�N�@\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0docProps/PK\0\0\0\0�N�@����\\\0\0q\0\0\0\0\0docProps/app.xml��Qo�0�ߗ�?ޡ�������l&�|4M�@3h��\Z��+�({��=禧_���K�:gP�	����p*J����[o�:�^�VpH�+hw�>?��a��u�6��%B�6���5��J��+U�DU1\nAOp�� �!��%����C��l�Z\n����*-p��dK�=N��t�]�#5�4�h�A�R�FÀ��(B��So�~gܾ��0�$EjEds3G\n�`��<�)i!��iEZ\r=�>�[�e!6=����9b;0����A9��ZʖQbl��a�;��N�a����0�G��6|�D��̋f/�7�ĥ����,�� ��5F�$lḰ�3��ci�z�6�PK\0\0\0\0�N�@�\0Q�J\0\0{\0\0\0\0\0docProps/core.xml��AO� ��&���{tn3��5;���\Z�7߶jp����ۺ\ZM<~}^\n�b�������M�@	-+���K��oQ�<W��ZA��Т��ʄaB[x�ڀ��(��c��h�a;����$*�km��h7�p��7�SBf��%�w��FtRJ1(͗�{�jh@y�iB��`��>�M�&��Tw����Uضm�N�\Z�?�o�����q��%\0��vLX�d��9y��?�KT�$��dӴ��M��������Nxti[|hg��w�𭻐�;�\nw��@�.��h�ל��Mc2/��KoF�΂�+`aWu/�������PK\0\0\0\0�N�@\ZrY��\0\0\0�\0\0\0\0\0docProps/custom.xml���n�0D������DH6]�R��1	~�6����(m���j���L���#��u�V��@(��A��v<�-η�kG�D�஼��_�6��A8����0v�\"d������ևӞ�����F�I\n�1#���y-����������N��Ν��	�e�_@/���I�IH��>�%�Bi�n��*V���f}f�V��O���M�W�0v\'az��hޝ�%%q�(����/��C��U�:]�\rPK\n\0\0\0\0\0�N�@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0word/PK\0\0\0\0�N�@#4�1\0\0Zn\0\0\0\0\0word/styles.xml�]�r��ݧ*���*YH%��Y�oɒ�\")J(宇�P�5�A�%}z\Z|`L4ЋT�S�szz��y|��-�W�������������<?z���n�>�4�\'���]��߾��O�W�4{d�\0@�NBw:XfY<Sw)C��XF��B%���k�2E�#��\\�\"��~�g��ӓ������ O���8\n}7Q�Zd���Z,|W�������k�桌2d&2\0T�.�8-�B*\ZqY���\n�\Z�y�C�V*��D�2M�N 0>~T���w�*���E�\Z\n.��_5;F\'6�����%e\Z�0�����y\"���!\0jv��U�f*����V���*N��Ș]����~Z_4pBw��%R�������D���k�y���k򘘯�~ܨ(K��D���OO~�� WοT(�����2J��\"E�]�>X=��Y�g��.����!�5;�ʪ�-�!8!TgE��&�ʣl:8C�B��7�W�Ay�9Z���})��Tz���ę�[���os���c��o:����S���2 ֨�IA�}{se��h�Sr\"N�E����\Z�5z<�����\0��ɲ�B+�3:�h�����;�Yw����C��C\\t�����^�N��G�|k����a������!���@�xx�\0�?�{\0ޟ\n=\03$H�\\��аɡaRC�2$��eH\rː\Z�!%4,CBhX�t(\ZB�w�mDY����RY�2�d�^D\0��QL��%�p���h�k�V#z������I�3��䨅��_�����;1��U�4��N�Df�[���I�B&�\"��e#K�G҉�p��x������蜒�G\Z�Ly����>G��z����L	�&b���OnE\Z�����`�#���트�W�=�?������Edp<\"�Ṽm��r����}�8l�7�\\�7�\\�7��}��X�����gC;�*P��D�j0�_\"��.6]����y�xID�tt��U޻���UA�=(��]�_�(�����\rx6%(����,�\ZT%د��]��4������=��,�g<�3A^t:����.�!���{�\'�L�����Ñn�OI������,^�3���Es�~����\rf��ݾ�2������\n�����O�������[/E��;�ڌ�q�E�?�c\0�=����&	�>��\rm�5������������ι�ޛ�=�B��Eۯ|�[e�<��0B�ÀAg�b�7F�����0V���u��Q��I.��c�GE��	����H�o���%G�ׇ(9O�\Zĥ�����?���@���B���x羁��R��gh��W����,�6	�<T���EO��E*P�\"����dૅ���\ZT��Q��$$�����3R��3E*�-�=�\ZFt��Et��Et��Et�ZeCU���T5t�U:����ݩ�����h;[�#:[�#:[�#:[�#:[�#:[��];r���>�}����5��oCd������\\�#X���\"8^���Z�[*j��҃��W-�Ox>[(A_�G��Z��_tcÔ+���E`��WN=�PbL1��!c���e�̖^;�q�_�?�3�S=��\nNw���~/=?K�P�i|~81��~M�7`b�ps���x	��_�\Z%��Ä�_ُ�T�q�gC�\Z� >Q�.l�>�a��CO�[�V<����E�\"ؒ��� 6�o�\'�{ra�	Y*luQa�ud�UG���ڑ�V)����om$�+��Zە�`��Jt��v%:X������$6U���(tW.�6T\\=�ЅM*�>t��xS�j�o*���vś�b��&�rQě��Z��D�śJ�Z��D�śJ�Z��D�ěJbS�J�ě�eӆ��.�T\"�<TDu�&�qQ���OX�`te�UЮxS�b��&�rQě��Z��D�śJ�Z��D�śJ�Z��D�ěJBo*�M*M��7��&Q]��D�ś�^��xSYl�+�T[�4�7��\"�T���M%j-�T���M%j-�T���M$j\'�T�xS�l�Pij]��D6y����M$j/��a/-ś�b��]��j�I��\\�r�o*Qk��o*Qk��o\"Q;�Pě�eӆJS��M%��CETo\"Q{�&�*l)�T[�7��V;M�M墈7���xS�Z�7���xS�Z�7���x�ډ7��\"�T.�6T�Zo*�M*��x#,U__u^/͎{<�x�fmNq����k���͢�x�w\\v^_�gP�9�6\n�/�n������R��\'Ũ;X�_c$+���� �#�����\r�B��_���?~3���+�4�c\r�W��͈?���et�<�\'�`�����Ճ>4�+���.���U����]�S\\f��-��^9d5��J{̈��ح�Bᡃ�����p��P$=�����\\�J�L=���5���[� �nir ���ۮܥ��5(=�]k6dX�`�aX(���~���6̋��R��!��ƣ���gy�̤Y��Jo�\'�ǂ���%�\Z���j�?�M9؂��L+�Cy�\'�%Ȫ�\'�C�5�j��I]\'l��m+D��pݘ�Y\rZ���fk>��Y*G����`ů�b�̓B���+�e)S1��98$���xo��֪R�::�f���s���2��\'8����c��_���۸3V�>��^Y�\\�`.`��T�dԽ�QF?�npS���V�a�E��\n6�9}0zQ;��O�x[.A���4��6��N �k)�iS��)�J[^��P�!��|E޼���\rݨb�㎿��B�\n;���v�~����e������\"��^�Xu�Z՟vL�]���N�����Ԣc��I���v@�l6ew���^6�ZM�\r�SS���,��so+�;��_PK\0\0\0\0�N�@�y��b\0\0�\n\0\0\0\0\0word/settings.xml�V�R�8�ߙ}���C�@H�:�Z����l+�<��~IV�N(�i�,���\']~ze���R�gAx2z��$|=����4�)�x���x�\n>]���e)�5����*b�,�h]E��*6�!u\"*́��!\r�r=`H��U��B�������5#fA-yԚ�3RH��J�H�V����k�_��4����zHL!�ՆT�[c�k\rR�x#ۏ��2��p��d�n#d������B%E���1��e�����о�\'P��=0�@=�S��G��t�u��I�f��(*��J�@\Z��5Ms�T��m]O�ꔂ+��5�Ƴ	ς+��7!X��*,h7�h���Ni�R������X�{��ZJQ��\Z#���-�T[��S!��`�ڃfa�,a�P`3�{�%^���\'�gZT��ć[J�@?KR���&�Y�\n y�p|�2+��(�]I� 3D��6|���Aޛ�i.j^��.�W,�a�`�AP�6����z���n{/a,[\r��-\n�©�Ϸ�!V��-�Q�(R���ˬ�D��������6d�������p|��z�o8T��}��z¯�;��a��Y�%Rz����屦�\r���^B3�꾆��P���ֈø̡$T�#�-�݉��%ُ�ϟ��Q�C	���#=���6�L�(ԗ댼�9/�@U`�m�D�Q\0��R�;�iW�#�\n����G�lGRJ�;�+]c��٠�\\�̈�Y*x���mX&i:J��f1ϙ���2N\\�?p�8�/���\\���E8Y�ċI<��c��#H\'�x<��qA\Z/�I2>����b<L.�ᤋx�N���i+�\"s�=ȫKw2c�cnD�rIP��\\��Ţ\\�Ą{~��!\'�s���C1Di\n���Ydo�W�,�Cr��m%�T��/{[�~��3`~�5�n|���쬵G8`	�tU���p��������+Oix�5�E�c���Z�mf�ۦ��m@*3��w�����pPg�Q��W³����Q�Y���A�I�ۃpG�j���N;\Z<\Z��YG{ڸ��{\Z<�h�/)�/�q�h�+A�hpy퉳���`����.1ܮ�g\Z����S��?PK\0\0\0\0�N�@�����\0\0^	\0\0\0\0\0word/header1.xml�VMO�0������M�\"R�ʂЮ�=���X�?�qj�ׯ����T-�v/u5�y��͌ۋ�^����Hp41�\"��O�n?0CDF\n)h�_)����o6�3�\\��ت4��1*Hs�	9K�97�T�@��,���:N�(��)-S\n�RM�X�\r�IE��5��C�\'zY��CWİ+�yu��y#\\j7�!ׄ���н*v�#�eZr*L�1дp����u�Es%�-�վ\"V�h���F�|]ɇ��Z�Z����#��xQ������6b�+�鈇�8B�}Ζ	\'Lt0��fC���d��\'�|o\0(�M_Y�[-K�գ����Ĳ��K}��W\Z���ǜ(��Q0)�H~M�p��C�`���!�ؾ�4pW� �x\Z�-��dV��l4B6:C~A��=[��x���h^�l�\"E�Op��KJ�=}1�9\\�3Aa�nY&�D\n�eQ�C��v�w�/��=�[!�ήo\\��˙0	�蜔���ͶBf�mxk]F�:��N�� b��Q1�>z���w���/|7-J�\\#��H{r��3��ύ��J���-�G�)�]����hq�4qS���mc3��B��#�ҫajM*>V�m�?.����S��ǠH���G���c4@�k��������<z�ڐM�*�d}\'�_�j�ܿ��_PK\n\0\0\0\0\0�N�@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0word/theme/PK\0\0\0\0�N�@Ѯ���\0\0$\0\0\0\0\0word/theme/theme1.xml�YMo7��X콱d�#2\"�>��vDJ�)-�ˈ�\\��݊�X�@Ѵȡ�^z(�H�h�k��HS �C�jEJT�>E��}3|��!WW�ޏ�w�� ,i��K%��ɐ$	���~��˾\'$JDY�����և\\A�2�1��>���GR��kkb�H\\b)N�و�I��õ��#�ӵ�R��#��^�bp{c4\"C������?��f�;�H�PC�{�7�L46�BLE�r�Ѧ쨏�KߣHHx��K��_ۺ��6s#*W�\Zv]�����x]���A1i�R�Զ�\Z@�2�S��:���V�q1}Vw\Z;�j�5@�G��v��Q�����%��U�o�5(�_Y�w�-���נ_]�W*��V��kP��-���v�n�5(�$/�K��Fk��2bt�	oT+��z�|��j(�KM1b�\\Uk1��x\0\nH�$�\'�)�!�qQ2���\'a$�4h#�y64KCjFO9Ie��$E�1�^߾���g����~=~����/�#�j%�i��/�y������<�ڍ&�ϟ?��Wn l�9�W�<����W��x��#|���	��:>�n���b3��n��b;	J����##}}�(r�v��;D��6�g�E|\"���^[�����(쩹�0�\'I螜OL�-�]s�Pb�3IA=��e+�͛%�8��S��c���b���9l$����A��>X�47�%1�e�\"��bsp��aԵ�6>���+u��cj��\Z�H�\\�QL̀�#�H��|h�:BB�CL��	�.��k$}ĝ�:�m$�d��3�m6nE(N]�I\"��C�\"�&�.��w��y@��t�!�J��jp�Ӥ4/�d�����U��)!����R�$\'�w6��	7H�o�8x_T���Ĺgv�znQ�[���sM��6�r�z/�����ߋ��|��<Wahu̎����<{��=9�x_�㷀�taP��\'.�bi�N�	,\\ȑ��8���\"��ѽ�+\'��]��K��+�v�Vx:�X�]9�eu���C 9/U�q�.�]�ϯQ�{�6���e�.$��l�٠\n��\\C�$��΅E���r?K��VdG��~�&`w&Dq��z�]������`ZP�y�3�P\\W.O�.+�Sd�\"a��MBGF�0�\0�թFOC�]sݘ�Ԣ�B�� Q��_,Κk�[���JA���6�P2C�6�\\��c�B�u�E4�`Cɳ\reI��m$�,�Zt25���ܣ$n�j�E\Zh�5Ds+�� \\Xr\r���F�n\'�Fx(ʹ#*��WP�L+�O����ʒM ݽ(8�t�o!(�j���w�Y4�$!���Bc�e�|\'�k(G4�P�QL1��Z�:�[�[�f���B�`͠Zݴ�\Z��]�d#9C4�=�R�5�*f�0k�<[�7X�B����t/Jnc�u焢K@���9��)\Z�Am>�EM1^�a�����;f<��i������ۅ�=�9����b���hv�ԑ�?^�?/��=�6�ȝP)2�Р�PK\0\0\0\0�N�@��pн\0\0��\0\0\0\0\0word/document.xml�]�r�F}ߪ��)>d�*��|��XJ)�%��YŒ7���!0$\'0�̀4�ؗ��|ɞ�H�M3�m�@UbI \0�2�s���G߼I1V�i�w�������:w^_>����,����qg�\\盓���Ѥ��HU�N���$��;#������F*�����\Zg����:Rc�;�G��[nM������l,]�<]z�l&W�k`l*��\Z;<H��*�}�=�^�u���>|P��w\n���ڟ]�T��������\rG>.�\0�U	��dn���m�ٳ�G�%��u�4����G��}����<�r�W1?����0�pP���@�w�V�>����~�꼩�����܍.<���w=�rdЅ̿���k糽��{�+s��&�̚\"�]N�7;���jv.��5�����[sk����_�d�f�����y�>�^��;�L���u��t$�wt�\0��4�=f��~�{�������s��7�~��Ϲ�~�(1�er���s@���Po|��p���Δ{k�D�frf2oM�ǻ\"�-���C���i�:Ćo�Oq}6ҙ?�(���Ӳ�-�EZ_£�NR��z����4sK?�β�����N����B�7�~;�]|�v0����g^�=�]��I�\'���e��N/Qٱ�\\���B�J�ˍ��	)b�NT,�V�+�L����2�;��[Lc/c����Ij�w��<��\'�/����-}�3��(�{|����vR��ǰMw�ְ��CG��z�t�k���1�f�Qd1�a-12�-����T\"�M#�\'+)\"�c����w`M*\\�w��9A����S�FcC:�+\"Z�\":M���#��\0X�����!�f����>��z��;�#I|6�3E���4���!�\Z�Vx��l[g��	�\\��w?�?y���ߋ�~-���p�CLT\\�����3�i!�!�1�N��m�8q*��Cj�P�A��{m5R�9�]#��+8pK��zv�d�,����S��0ZX~ܹs�E\r��6�4f�q�cgK`��[\"�9��ҍ�Fڸf/��Oխ�c�o��T�BsD�<\r7#\n��|vj�Y�8�G��8���_[����)�pS�UZ��U���#PC��\ZKј�D�]�ȩ����~�\r\0��{�*�2����S�#&���@L��@��nc�ȭ��ZJ�-�d�sD��\"\n��-P�S��HG��\Z�D��ZM�Y�Ѩ��YAc��p� �x����\Z�h�w$�覨��R{1�x��ՠ1\0�~F�5ot3�N���0Y=53�&��Y��b�$6�hHl&Cf��z 萹�)�Jr2�dV�����<O4�Z߼a$���<����7�O���w~�0���s,SH~Q��6R*��G�s���\0%�+\0�)���fᰑJr���R��^��PP[E��)��4��	9�-���Niٸ9�����>:e�-w�+j��\'^���g2Ϳ��v/9�Iz����z����|��䷶o������n\r��Ty u���& g0Q,X�?~��E�R]�Io�����1�4�6[~���kꒉ��*��x.����@O�o� �!�!$>�*HDw$�`�E��~��k4�->��d����E�LQ3\"FZ:�\n\\��J�6��� |���q5�I[�?����\\�#�1�Gpz�#:�S�nc�#��������&>В���)B`�񵎍��\0�s�J�iO�>�x,���\r���\r�\\��W�T ��Uś_�G*(��\Z�V���˥��*�(��Z�i�ʩ\n+����D[��	C�	{�Z��D	�O����@?���wm\01w+�������D�ݮx\n��?�!&J\ru+\\W|�I���b��jc�c��h�ʜ����-��;O���\0�\0Q��7H`hT�!���P�VV��ص��#��[n�Ɉd��J9ZE� �I	}8S\r�8���TŘP�	�M���6�)�C�Y���SW|;�L=R�%���i���\0�����2r��\"�-H���9l��/�;\\P����4d�\"Q\Z�z�>��xHq�}�@	�.��Yxל1�|�x�S�t�����aj�X�##�3\Z&�(��uP����?�k	�%b{K�8̫&��5���w(UnpOě�qޢ�g.�D���\\�Dj�܏0�9WԾg�2|�ш�#S¾&���w��$2A&[s��GV�țq=G���n�mx�[Z��>��P<]I�b5�z�jQ/`L(8\0VN��[����G0#yH��ˤ1E�\n��8@fJ�a��{{C8��L�\0e�h�~�*J�P(��/�ߙ�Yhq:/�W󈍈)J�6�g��r3��)�?,ۚCCJ��k���(^2�E)Y��>��H����Ԡd3˽�h�	3En`2B���c����՜:�p���\r�fx���ls��Pܧ-�`�Fk2�R�\\1E2�P1Ԟ!\rq�U`\"�.��1q������m�S5=\n���t�!�i�l]�:agb��\Z���4}�9s�,�Ǩ���dQ�Q�sj���G�A�--�A\\\n�H���l�}��/�:��]�(7ӂ���p!4��V�:�o�(��\r�wշ�Rཬȩo�5���:a0�x3I�����|��=0!վO88{��Am�I���ʝ����jV	6Lk@��\"c\0�*�^���s�1$��S�\"�[|�H	�B��8�T΅7n���;3~7�Lɵ6�Ib*-�s�<Zr�#AN�j�Y�\\�9cM�?��n��l��zhj4�M7��[_�_/���Н��hu����E_���t⧘ƪԌ���#���[��$kґl��E���T�PtTJ�r(�u�NrؙfÛ���s@�� ��5������b�L�L��JD$�]u��#{���#gsDJ3�~!������DN�ee��ʣ,��\r�(!H���_�,\n�=3���<�M����', NULL, NULL, '2026-06-27 13:02:24.248', '2026-06-27 13:02:24.248', NULL),
('cmqwh7l8u0003sp3ee6yd3izi', 'cmqwc4mwk0000spcovxncaff6', 'Adventure Blueprint Chocolate.txt', 'OTHER', '', 327, 'Adventure\nBlueprint\nChocolate\nEducation\nFramework\nHappiness\nImportant\nJournalist\nKnowledge\nLandscape\nMigration\nNotebooks\nOptimized\nPassenger\nQualified\nResources\nSecretary\nTelescope\nUmbrellas\nVacations\nWarehouse\nYesterday\nYoungster\nZoologist\n\n\n\ndistance code innocent ensure join broccoli employ cattle chair degree acquire mad\n', NULL, NULL, '2026-06-27 14:49:36.078', '2026-06-27 14:49:36.078', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Hearing`
--

CREATE TABLE `Hearing` (
  `id` varchar(191) NOT NULL,
  `caseSpaceId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `court` varchar(191) DEFAULT NULL,
  `judge` varchar(191) DEFAULT NULL,
  `notes` text,
  `outcome` text,
  `nextDate` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Hearing`
--

INSERT INTO `Hearing` (`id`, `caseSpaceId`, `title`, `date`, `court`, `judge`, `notes`, `outcome`, `nextDate`, `createdAt`, `updatedAt`) VALUES
('cmqw8au8n000hspbyywji4qp3', 'cmqw88oco0003spbytfn7q0jk', 'werwer', '2026-06-27 14:44:00.000', 'werwe', 'werwe', 'werwer', NULL, NULL, '2026-06-27 10:40:11.160', '2026-06-27 10:40:11.160');

-- --------------------------------------------------------

--
-- Table structure for table `Invitation`
--

CREATE TABLE `Invitation` (
  `id` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `organizationId` varchar(191) DEFAULT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'MEMBER',
  `token` varchar(191) NOT NULL,
  `expiresAt` timestamp NULL DEFAULT NULL,
  `acceptedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Invoice`
--

CREATE TABLE `Invoice` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `amount` int NOT NULL,
  `currency` varchar(191) NOT NULL DEFAULT 'KES',
  `status` varchar(191) NOT NULL,
  `invoiceCode` varchar(191) NOT NULL,
  `paidAt` timestamp NULL DEFAULT NULL,
  `paymentId` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `KnowledgeArticle`
--

CREATE TABLE `KnowledgeArticle` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `content` varchar(191) NOT NULL,
  `summary` varchar(191) DEFAULT NULL,
  `category` varchar(191) NOT NULL,
  `tags` varchar(191) DEFAULT NULL,
  `sources` varchar(191) DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `LegalAct`
--

CREATE TABLE `LegalAct` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `actNumber` varchar(191) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `category` varchar(191) NOT NULL,
  `content` varchar(191) DEFAULT NULL,
  `summary` varchar(191) DEFAULT NULL,
  `sections` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Message`
--

CREATE TABLE `Message` (
  `id` varchar(191) NOT NULL,
  `conversationId` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `content` varchar(191) NOT NULL,
  `citations` varchar(191) DEFAULT NULL,
  `metadata` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Notification`
--

CREATE TABLE `Notification` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT '0',
  `type` varchar(191) DEFAULT NULL,
  `link` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Organization`
--

CREATE TABLE `Organization` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `logo` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OrganizationMember`
--

CREATE TABLE `OrganizationMember` (
  `id` varchar(191) NOT NULL,
  `organizationId` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'MEMBER',
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `amount` int NOT NULL,
  `currency` varchar(191) NOT NULL DEFAULT 'KES',
  `status` varchar(191) NOT NULL,
  `reference` varchar(191) NOT NULL,
  `paystackRef` varchar(191) DEFAULT NULL,
  `channel` varchar(191) DEFAULT NULL,
  `paidAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PromptTemplate`
--

CREATE TABLE `PromptTemplate` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `agentType` enum('RESEARCH','DRAFTING','CONTRACT_REVIEW','CASE_LAW','LITIGATION','FAMILY_LAW','EMPLOYMENT_LAW','LAND_LAW','IMMIGRATION','CORPORATE','TAX','COMPLIANCE','CRIMINAL_LAW','SUCCESSION','CONSTITUTION','BUSINESS_REGISTRATION') NOT NULL,
  `content` varchar(191) NOT NULL,
  `variables` varchar(191) DEFAULT NULL,
  `category` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Research`
--

CREATE TABLE `Research` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `query` varchar(191) NOT NULL,
  `summary` varchar(191) DEFAULT NULL,
  `analysis` varchar(191) DEFAULT NULL,
  `sources` varchar(191) DEFAULT NULL,
  `confidence` double DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Session`
--

CREATE TABLE `Session` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `expiresAt` timestamp NULL DEFAULT NULL,
  `token` varchar(191) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `ipAddress` varchar(191) DEFAULT NULL,
  `userAgent` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Session`
--

INSERT INTO `Session` (`id`, `userId`, `expiresAt`, `token`, `createdAt`, `updatedAt`, `ipAddress`, `userAgent`) VALUES
('548927f0-36c3-48c9-b433-ae28687702d6', 'cmqwc4mwk0000spcovxncaff6', '2026-07-04 17:22:01.061', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjbXF3YzRtd2swMDAwc3Bjb3Z4bmNhZmY2IiwiZXhwIjoxNzgzMTg1NzIxLCJpYXQiOjE3ODI1ODA5MjF9.hfsSN79CqRxVnYRKMBbVRChWi86EU7bhhlO2wk4AHGU', '2026-06-27 17:22:01.062', '2026-06-27 17:22:01.062', NULL, NULL),
('79093a37-0129-4546-ac54-f6e6c567239c', 'cmqwc4mwk0000spcovxncaff6', '2026-07-04 15:08:22.986', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjbXF3YzRtd2swMDAwc3Bjb3Z4bmNhZmY2IiwiZXhwIjoxNzgzMTc3NzAyLCJpYXQiOjE3ODI1NzI5MDJ9.RM3nxX-A95obpJfBwTjTMsfojYQlkG5cEHi8SUoi-qM', '2026-06-27 15:08:22.987', '2026-06-27 15:08:22.987', NULL, NULL),
('ac1d9231-24b8-4477-827b-5b0f3ccd80d9', 'cmqwc4mwk0000spcovxncaff6', '2026-07-04 12:27:20.257', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjbXF3YzRtd2swMDAwc3Bjb3Z4bmNhZmY2IiwiZXhwIjoxNzgzMTY4MDQwLCJpYXQiOjE3ODI1NjMyNDB9.fBOuD1XEqwXWSTzZBYCwjg9E-WvUWa2oyAiIPFhLwYg', '2026-06-27 12:27:20.260', '2026-06-27 12:27:20.260', NULL, NULL),
('ba9ccf80-60da-43ac-8ec2-caca154f0576', 'cmqwc4mwk0000spcovxncaff6', '2026-07-04 22:24:31.039', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJjbXF3YzRtd2swMDAwc3Bjb3Z4bmNhZmY2IiwiZXhwIjoxNzgzMjAzODcxLCJpYXQiOjE3ODI1OTkwNzF9.KH7rW_djfIqWAaAe7AjVF-ShV9pCyn71VPjHMdJWNtg', '2026-06-27 22:24:31.040', '2026-06-27 22:24:31.040', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Subscription`
--

CREATE TABLE `Subscription` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `plan` enum('FREE','PROFESSIONAL','BUSINESS','ENTERPRISE') NOT NULL DEFAULT 'FREE',
  `status` enum('ACTIVE','INACTIVE','CANCELLED','EXPIRED','TRIAL') NOT NULL DEFAULT 'TRIAL',
  `startsAt` timestamp NULL DEFAULT NULL,
  `endsAt` timestamp NULL DEFAULT NULL,
  `trialEndsAt` timestamp NULL DEFAULT NULL,
  `canceledAt` timestamp NULL DEFAULT NULL,
  `paystackSubId` varchar(191) DEFAULT NULL,
  `paystackPlanId` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Subscription`
--

INSERT INTO `Subscription` (`id`, `userId`, `plan`, `status`, `startsAt`, `endsAt`, `trialEndsAt`, `canceledAt`, `paystackSubId`, `paystackPlanId`, `createdAt`, `updatedAt`) VALUES
('cmqw7f8nf0002spub512vl5cd', 'cmqw7f8nf0000spubux8whzqz', 'FREE', 'TRIAL', '2026-06-27 10:15:36.843', NULL, '2026-07-11 10:15:36.841', NULL, NULL, NULL, '2026-06-27 10:15:36.843', '2026-06-27 10:15:36.843'),
('cmqwc4mwl0002spcob4npgaof', 'cmqwc4mwk0000spcovxncaff6', 'FREE', 'TRIAL', '2026-06-27 12:27:20.181', NULL, '2026-07-11 12:27:20.177', NULL, NULL, NULL, '2026-06-27 12:27:20.181', '2026-06-27 12:27:20.181');

-- --------------------------------------------------------

--
-- Table structure for table `Task`
--

CREATE TABLE `Task` (
  `id` varchar(191) NOT NULL,
  `caseSpaceId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text,
  `status` enum('TODO','IN_PROGRESS','DONE','CANCELLED') NOT NULL DEFAULT 'TODO',
  `priority` enum('HIGH','MEDIUM','LOW') NOT NULL DEFAULT 'MEDIUM',
  `assignedTo` varchar(191) DEFAULT NULL,
  `dueDate` timestamp NULL DEFAULT NULL,
  `completedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Team`
--

CREATE TABLE `Team` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TimelineEntry`
--

CREATE TABLE `TimelineEntry` (
  `id` varchar(191) NOT NULL,
  `caseSpaceId` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text,
  `type` enum('FILING','HEARING','MEETING','NOTE','DOCUMENT','TASK','MILESTONE') NOT NULL DEFAULT 'NOTE',
  `date` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `TimelineEntry`
--

INSERT INTO `TimelineEntry` (`id`, `caseSpaceId`, `title`, `description`, `type`, `date`, `createdAt`) VALUES
('cmqw88odb0005spbyqy2vt8pd', 'cmqw88oco0003spbytfn7q0jk', 'Case Created', 'Case space was created', 'MILESTONE', '2026-06-27 10:38:30.240', '2026-06-27 10:38:30.240'),
('cmqw896cd0009spbytpfitonc', 'cmqw88oco0003spbytfn7q0jk', 'Document Uploaded: REPORT OF PUBLIC PARTICIPATION - IMPEACHMENT_2.pdf', NULL, 'DOCUMENT', '2026-06-27 10:38:53.534', '2026-06-27 10:38:53.534'),
('cmqw8a3bq000dspbyoztsbyz5', 'cmqw88oco0003spbytfn7q0jk', 'Task Created: edwe', NULL, 'TASK', '2026-06-27 10:39:36.278', '2026-06-27 10:39:36.278'),
('cmqw8aden000fspbyt3pd2enj', 'cmqw88oco0003spbytfn7q0jk', 'wewe', 'erwerwer', 'NOTE', '2026-06-27 10:39:49.342', '2026-06-27 10:39:49.344'),
('cmqw8au91000jspby94l5oyxd', 'cmqw88oco0003spbytfn7q0jk', 'Hearing Scheduled: werwer', 'Court: werwe | Judge: werwe', 'HEARING', '2026-06-27 14:44:00.000', '2026-06-27 10:40:11.174'),
('cmqw99ld20005spw7d005z9pk', 'cmqw88oco0003spbytfn7q0jk', 'Task Created: sdasdsd', NULL, 'TASK', '2026-06-27 11:07:12.614', '2026-06-27 11:07:12.614'),
('cmqw9md2h0009spw7k8l2x2zx', 'cmqw9md1r0007spw78ca12kk9', 'Case Created', 'Case space was created', 'MILESTONE', '2026-06-27 11:17:08.394', '2026-06-27 11:17:08.394'),
('cmqwd6x3y0005spzutdmc55pu', 'cmqwd6x340003spzuut10gzr6', 'Case Created', 'Case space was created', 'MILESTONE', '2026-06-27 12:57:06.335', '2026-06-27 12:57:06.335');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `emailVerified` tinyint(1) NOT NULL DEFAULT '0',
  `image` varchar(191) DEFAULT NULL,
  `role` enum('USER','ADMIN','SUPER_ADMIN') NOT NULL DEFAULT 'USER',
  `credits` int NOT NULL DEFAULT '10',
  `phone` varchar(191) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `name`, `email`, `emailVerified`, `image`, `role`, `credits`, `phone`, `createdAt`, `updatedAt`) VALUES
('cmqw7f8nf0000spubux8whzqz', 'Josphat Mwangi Njoroge', 'josphatmn@gmail.com', 0, NULL, 'USER', 10, '+254726599429', '2026-06-27 10:15:36.843', '2026-06-27 10:49:41.100'),
('cmqwc4mwk0000spcovxncaff6', 'Administrator', 'josphatmn@live.com', 0, NULL, 'USER', 10, NULL, '2026-06-27 12:27:20.181', '2026-06-27 12:27:20.181');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` timestamp NULL DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text,
  `rolled_back_at` timestamp NULL DEFAULT NULL,
  `started_at` timestamp NULL DEFAULT NULL,
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0417442d-7f74-4833-a7b3-24bacbfbe5c8', '28d4ec9004e4752ac3eaf42b9706e665e5e7bdaa9ce7ad644325f7a05d8615d2', '2026-06-27 10:10:50.924', '20260627101042_init', NULL, NULL, '2026-06-27 10:10:42.866', 1),
('4014342b-56ab-46cb-84d8-d925b0eaa2a6', 'bb228bdc593c4c6643e0c8450787f7d343f4a98d06721a7bf631e49b69fc328b', '2026-06-27 10:29:35.445', '20260627102932_add_case_management', NULL, NULL, '2026-06-27 10:29:32.941', 1),
('4259e569-15c6-494f-a311-1854bc4692ab', 'deb9e999636bc3e88a06a989ca1b6d6d2268113a186f3ec474054846029eca71', '2026-06-27 10:24:36.064', '20260627102435_fix_document_content_type', NULL, NULL, '2026-06-27 10:24:35.770', 1),
('c5d13fab-d331-488f-8ac9-eff37fa08ada', '6e7d6d3fd49b12c329bacc133fb9fc43e0d65ebb378abbdf9ba3207426227a85', '2026-06-27 13:05:43.670', '20260627130542_add_contract_review', NULL, NULL, '2026-06-27 13:05:42.443', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Account_userId_idx` (`userId`),
  ADD KEY `Account_providerId_accountId_idx` (`providerId`,`accountId`);

--
-- Indexes for table `AIAgent`
--
ALTER TABLE `AIAgent`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `AIAgent_type_key` (`type`),
  ADD KEY `AIAgent_type_idx` (`type`);

--
-- Indexes for table `APIKey`
--
ALTER TABLE `APIKey`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `APIKey_key_key` (`key`),
  ADD KEY `APIKey_key_idx` (`key`),
  ADD KEY `APIKey_userId_idx` (`userId`),
  ADD KEY `APIKey_organizationId_fkey` (`organizationId`);

--
-- Indexes for table `AuditLog`
--
ALTER TABLE `AuditLog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AuditLog_userId_idx` (`userId`),
  ADD KEY `AuditLog_action_idx` (`action`),
  ADD KEY `AuditLog_createdAt_idx` (`createdAt`);

--
-- Indexes for table `CaseDocument`
--
ALTER TABLE `CaseDocument`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CaseDocument_caseSpaceId_idx` (`caseSpaceId`),
  ADD KEY `CaseDocument_uploadedBy_idx` (`uploadedBy`);

--
-- Indexes for table `CaseLaw`
--
ALTER TABLE `CaseLaw`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CaseLaw_title_idx` (`title`),
  ADD KEY `CaseLaw_court_idx` (`court`),
  ADD KEY `CaseLaw_year_idx` (`year`);

--
-- Indexes for table `CaseSpace`
--
ALTER TABLE `CaseSpace`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CaseSpace_clientId_idx` (`clientId`),
  ADD KEY `CaseSpace_status_idx` (`status`),
  ADD KEY `CaseSpace_caseNumber_idx` (`caseNumber`);

--
-- Indexes for table `Citation`
--
ALTER TABLE `Citation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Citation_researchId_idx` (`researchId`);

--
-- Indexes for table `Client`
--
ALTER TABLE `Client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Client_userId_idx` (`userId`),
  ADD KEY `Client_name_idx` (`name`),
  ADD KEY `Client_email_idx` (`email`);

--
-- Indexes for table `ContractReview`
--
ALTER TABLE `ContractReview`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ContractReview_userId_idx` (`userId`),
  ADD KEY `ContractReview_status_idx` (`status`);

--
-- Indexes for table `Conversation`
--
ALTER TABLE `Conversation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Conversation_userId_idx` (`userId`),
  ADD KEY `Conversation_createdAt_idx` (`createdAt`);

--
-- Indexes for table `Document`
--
ALTER TABLE `Document`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Document_userId_idx` (`userId`),
  ADD KEY `Document_type_idx` (`type`),
  ADD KEY `Document_contractReviewId_idx` (`contractReviewId`);

--
-- Indexes for table `Hearing`
--
ALTER TABLE `Hearing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Hearing_caseSpaceId_idx` (`caseSpaceId`),
  ADD KEY `Hearing_date_idx` (`date`);

--
-- Indexes for table `Invitation`
--
ALTER TABLE `Invitation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Invitation_token_key` (`token`),
  ADD KEY `Invitation_email_idx` (`email`),
  ADD KEY `Invitation_token_idx` (`token`),
  ADD KEY `Invitation_organizationId_fkey` (`organizationId`);

--
-- Indexes for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Invoice_invoiceCode_key` (`invoiceCode`),
  ADD KEY `Invoice_userId_idx` (`userId`),
  ADD KEY `Invoice_invoiceCode_idx` (`invoiceCode`),
  ADD KEY `Invoice_paymentId_fkey` (`paymentId`);

--
-- Indexes for table `KnowledgeArticle`
--
ALTER TABLE `KnowledgeArticle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `KnowledgeArticle_slug_key` (`slug`),
  ADD KEY `KnowledgeArticle_slug_idx` (`slug`),
  ADD KEY `KnowledgeArticle_category_idx` (`category`),
  ADD KEY `KnowledgeArticle_published_idx` (`published`);

--
-- Indexes for table `LegalAct`
--
ALTER TABLE `LegalAct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `LegalAct_title_idx` (`title`),
  ADD KEY `LegalAct_category_idx` (`category`);

--
-- Indexes for table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Message_conversationId_idx` (`conversationId`),
  ADD KEY `Message_createdAt_idx` (`createdAt`);

--
-- Indexes for table `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Notification_userId_read_idx` (`userId`,`read`);

--
-- Indexes for table `Organization`
--
ALTER TABLE `Organization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Organization_slug_key` (`slug`),
  ADD KEY `Organization_slug_idx` (`slug`);

--
-- Indexes for table `OrganizationMember`
--
ALTER TABLE `OrganizationMember`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `OrganizationMember_organizationId_userId_key` (`organizationId`,`userId`),
  ADD KEY `OrganizationMember_userId_idx` (`userId`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Payment_reference_key` (`reference`),
  ADD KEY `Payment_userId_idx` (`userId`),
  ADD KEY `Payment_reference_idx` (`reference`),
  ADD KEY `Payment_status_idx` (`status`);

--
-- Indexes for table `PromptTemplate`
--
ALTER TABLE `PromptTemplate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PromptTemplate_slug_key` (`slug`),
  ADD KEY `PromptTemplate_slug_idx` (`slug`),
  ADD KEY `PromptTemplate_agentType_idx` (`agentType`);

--
-- Indexes for table `Research`
--
ALTER TABLE `Research`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Research_userId_idx` (`userId`),
  ADD KEY `Research_createdAt_idx` (`createdAt`);

--
-- Indexes for table `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Session_token_key` (`token`),
  ADD KEY `Session_userId_idx` (`userId`),
  ADD KEY `Session_token_idx` (`token`);

--
-- Indexes for table `Subscription`
--
ALTER TABLE `Subscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Subscription_userId_key` (`userId`),
  ADD KEY `Subscription_userId_idx` (`userId`),
  ADD KEY `Subscription_status_idx` (`status`),
  ADD KEY `Subscription_plan_idx` (`plan`);

--
-- Indexes for table `Task`
--
ALTER TABLE `Task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Task_caseSpaceId_idx` (`caseSpaceId`),
  ADD KEY `Task_status_idx` (`status`),
  ADD KEY `Task_assignedTo_idx` (`assignedTo`);

--
-- Indexes for table `Team`
--
ALTER TABLE `Team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `TimelineEntry`
--
ALTER TABLE `TimelineEntry`
  ADD PRIMARY KEY (`id`),
  ADD KEY `TimelineEntry_caseSpaceId_idx` (`caseSpaceId`),
  ADD KEY `TimelineEntry_date_idx` (`date`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD KEY `User_email_idx` (`email`),
  ADD KEY `User_role_idx` (`role`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Account`
--
ALTER TABLE `Account`
  ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `APIKey`
--
ALTER TABLE `APIKey`
  ADD CONSTRAINT `APIKey_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `Organization` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `APIKey_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `CaseDocument`
--
ALTER TABLE `CaseDocument`
  ADD CONSTRAINT `CaseDocument_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `CaseSpace`
--
ALTER TABLE `CaseSpace`
  ADD CONSTRAINT `CaseSpace_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Citation`
--
ALTER TABLE `Citation`
  ADD CONSTRAINT `Citation_researchId_fkey` FOREIGN KEY (`researchId`) REFERENCES `Research` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Client`
--
ALTER TABLE `Client`
  ADD CONSTRAINT `Client_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ContractReview`
--
ALTER TABLE `ContractReview`
  ADD CONSTRAINT `ContractReview_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Conversation`
--
ALTER TABLE `Conversation`
  ADD CONSTRAINT `Conversation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Document`
--
ALTER TABLE `Document`
  ADD CONSTRAINT `Document_contractReviewId_fkey` FOREIGN KEY (`contractReviewId`) REFERENCES `ContractReview` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Document_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Hearing`
--
ALTER TABLE `Hearing`
  ADD CONSTRAINT `Hearing_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Invitation`
--
ALTER TABLE `Invitation`
  ADD CONSTRAINT `Invitation_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `Organization` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Invoice`
--
ALTER TABLE `Invoice`
  ADD CONSTRAINT `Invoice_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Message`
--
ALTER TABLE `Message`
  ADD CONSTRAINT `Message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Notification`
--
ALTER TABLE `Notification`
  ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `OrganizationMember`
--
ALTER TABLE `OrganizationMember`
  ADD CONSTRAINT `OrganizationMember_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `Organization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `OrganizationMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Payment`
--
ALTER TABLE `Payment`
  ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Research`
--
ALTER TABLE `Research`
  ADD CONSTRAINT `Research_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Session`
--
ALTER TABLE `Session`
  ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Subscription`
--
ALTER TABLE `Subscription`
  ADD CONSTRAINT `Subscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Task`
--
ALTER TABLE `Task`
  ADD CONSTRAINT `Task_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `TimelineEntry`
--
ALTER TABLE `TimelineEntry`
  ADD CONSTRAINT `TimelineEntry_caseSpaceId_fkey` FOREIGN KEY (`caseSpaceId`) REFERENCES `CaseSpace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
