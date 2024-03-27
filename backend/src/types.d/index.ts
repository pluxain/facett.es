export const availableEnvs = ["development", "production", "test"] as const;
export type Env = (typeof availableEnvs)[number];
