import { Knex } from "knex";
import { postsMock } from "./mocks/posts-mock";
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tags").del();

  // Extract all tags from postsMock and flatten the array
  const tags = postsMock.flatMap((post) => post.tags);

  // Create a Set to remove duplicates and map each tag to an object
  const uniqueTags = [...new Set(tags)].map((tag) => ({ name: tag }));

  // Inserts seed entries
  await knex("tags").insert(uniqueTags);
}
