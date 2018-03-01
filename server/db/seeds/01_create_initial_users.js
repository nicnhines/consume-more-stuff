
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(`users`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`users`).insert([
        {
          username: `mika123`, 
          email: `mika@devleague.com`,
          password: `password`
        }, 
        {
          username: `nick456`,
          email: `nick@devleague.com`,
          password: `password`
        },
        {
          username: `brandon`,
          email: `brandon@devleague.com`,
          password: `password`
        }
      ]);
    });
};
