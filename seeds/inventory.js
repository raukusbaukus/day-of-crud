exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('inventory').del(),
    knex('inventory').insert({id: 1, name: 'set of clothing', quantity: 20, created_at: new Date('January 6, 2017 08:00:00'), updated_at: new Date('January 6, 2017 08:00:00')}),
    knex('inventory').insert({id: 2, name: 'oxen', quantity: 10, created_at: new Date('January 8, 2017 11:00:00'), updated_at: new Date('January 8, 2017 11:30:00')}),
    knex('inventory').insert({id: 3, name: 'box of bullets', quantity: 15, created_at: new Date('January 8, 2017 14:22:06'), updated_at: new Date('January 8, 2017 14:25:33')}),
    knex('inventory').insert({id: 4, name: 'spare wagon wheel', quantity: 4, created_at: new Date('January 7, 2017 10:14:38'), updated_at: new Date('January 7, 2017 10:14:38')}),
    knex('inventory').insert({id: 5, name: 'pound of food', quantity: 350, created_at: new Date('January 8, 2017 15:41:03'), updated_at: new Date('January 8, 2017 15:42:17')}),
    knex('inventory').insert({id: 6, name: 'barrel of water', quantity: 6, created_at: new Date('January 6, 2017 09:28:29'), updated_at: new Date('January 6, 2017 09:28:29')}),
    knex('inventory').insert({id: 7, name: 'blanket', quantity: 10, created_at: new Date('January 8, 2017 18:07:00'), updated_at: new Date('January 8, 2017 18:07:00')}),
    knex('inventory').insert({id: 8, name: 'cooking pot', quantity: 5, created_at: new Date('January 7, 2017 15:02:56'), updated_at: new Date('January 7, 2017 15:04:14')}),
    knex('inventory').insert({id: 9, name: 'rifle', quantity: 4, created_at: new Date('January 9, 2017 06:41:53'), updated_at: new Date('January 9, 2017 06:41:53')}),
    knex('inventory').insert({id: 10, name: 'spare wagon axle', quantity: 2, created_at: new Date('January 7, 2017 12:15:18'), updated_at: new Date('January 7, 2017 12:15:18')})
  );
};
