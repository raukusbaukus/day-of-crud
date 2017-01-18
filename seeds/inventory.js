exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('inventory').del(),
    knex('inventory').insert({id: 1, name: 'set of clothing', quantity: 20, created_at: new Date('January 6, 2017 08:00:00'), updated_at: new Date('January 6, 2017 08:00:00')}),
    knex('inventory').insert({id: 2, name: 'oxen', quantity: 10, created_at: new Date('January 8, 2017 11:00:00'), updated_at: new Date('January 8, 2017 11:30:00')}),
    knex('inventory').insert({id: 3, name: 'box of bullets', quantity: 15, created_at: new Date('January 8, 2017 14:22:06'), updated_at: new Date('January 8, 2017 14:25:33')})
  );
};
