import { Knex } from "knex";
import { postsMock } from "./mocks/posts-mock";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("posts").del();

    // Inserts seed entries
    await knex("posts").insert(postsMock.map(post => {
        return {
            title: post.title,
            content: post.body
        }
    }));
};


