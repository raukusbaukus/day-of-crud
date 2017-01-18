
exports.up = function(knex, Promise) {
  return knex.schema.createTable("inventory", function (table) {
    table.increments();
    table.text("name").notNullable();
    table.integer("quantity");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("inventory");
};
