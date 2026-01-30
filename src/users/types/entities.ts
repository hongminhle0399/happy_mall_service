import { usersEntity } from "@db/schema";

export type UserEntityInsert = typeof usersEntity.$inferInsert
export type UserEntitySelect = typeof usersEntity.$inferSelect