import { mutation, query } from "./_generated/server";

export const getTasks = query(async ({ db }) => {
  return await db.query("tasks").collect();
});

export const addTask = mutation(async ({ db }, { title }: { title: string }) => {
  return await db.insert("tasks", { title });
});
