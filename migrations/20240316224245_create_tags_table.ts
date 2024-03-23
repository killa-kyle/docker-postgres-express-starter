import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // Create tags table
    return await knex.schema.createTable('tags', function(table) {
        table.increments('id').primary();
    table.string('name').notNullable().unique();
  });
}


export async function down(knex: Knex): Promise<void> {
    // Drop tags table
    return knex.schema.dropTable('tags');
}

