import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable('users_evaluation', table => {
    table.increments('id').primary();
    table.uuid('created_by_id').references('id').inTable('users').notNullable();
    table
      .uuid('feedback_for_id')
      .references('id')
      .inTable('users')
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user_evaluation');
}
