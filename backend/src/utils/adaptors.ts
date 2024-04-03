import type { UserRecord, UserResponse } from "../types.d";

export function userToJson(record: UserRecord): UserResponse {
  const { id, firstname, lastname } = record;
  return { id, firstname, lastname };
}
