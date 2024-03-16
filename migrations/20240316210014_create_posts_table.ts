import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('posts', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('content').notNullable();
        // Add other columns as needed
        table.timestamps(true, true); // Adds `created_at` and `updated_at` columns
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('posts');
}

