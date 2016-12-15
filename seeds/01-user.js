
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from "user"; alter sequence user_id_seq restart with 3')
    .then(function () {
      const users = [{
        id: 1,
        email: 'mrkulwhip@gmail.com',
        password: 'password'
      },{
        id: 2,
        email: 'thegrumpygoose@icloud.com',
        password: 'heybro'
      }]
      return knex('user').insert(users);
    });
};
