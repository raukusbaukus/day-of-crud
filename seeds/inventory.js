exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('inventory').del(),
    knex('inventory').insert({id: 1, name: 'set of clothing', quantity: 20}),
    knex('inventory').insert({id: 2, name: 'oxen', quantity: 10}),
    knex('inventory').insert({id: 3, name: 'box of bullets', quantity: 15})
  );
};
