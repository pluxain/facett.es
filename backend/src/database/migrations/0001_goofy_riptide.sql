CREATE TABLE `users_login_information` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`email_confirmation_token` text,
	`firstname` text NOT NULL,
	`last_login_at` integer,
	`lastname` text NOT NULL,
	`password_hash` text NOT NULL,
	`password_salt` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users_login_information` (`email`);