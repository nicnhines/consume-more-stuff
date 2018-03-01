
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`items`, table => {
    table.increments();
    table.string(`title`).notNullable();
    table.text(`description`).notNullable();
    table.integer(`price`).notNullable();
    table.enu(`condition`, [`new`, `like new`, `good`, `fair`, `salvage`]).notNullable();
    table.enu(`category`, [`electronics`, `vehicles`, `furniture`, `apparel`, `other`]).notNullable();
    table.enu(`status`, [`published`, `sold`, `deactivated`]).defaultTo(`published`).notNullable();
    table.string(`image_url`).notNullable();
    table.timestamp(`created_at`).defaultTo(knex.fn.now()).notNullable();
    table.timestamp(`updated_at`).defaultTo(knex.fn.now()).notNullable();
    table.integer(`user_id`).references(`id`).inTable(`users`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`items`);
};
