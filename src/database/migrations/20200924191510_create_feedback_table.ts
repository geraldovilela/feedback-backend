import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('feedback', table => {
    table.uuid('feedback_id').primary();
    table.string('user_post').notNullable();
    table.string('user_evaluated').notNullable();
    table.string('points_improvments');
    table.string('points_to_keep');
    table.string('sugestions');
    table.string('final_feedback').notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('feedback');
}
