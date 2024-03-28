CREATE TABLE `countries` (
	`id` text(2) PRIMARY KEY NOT NULL,
	`name` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
