
exports.up = function(knex, Promise) {
  return knex.schema.createTable("inventory", function (table) {
    table.increments()
    table.text("name")
    table.integer("quantity")
    table.timestamps() // do i need true, true as arguments?
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("inventory")
};
