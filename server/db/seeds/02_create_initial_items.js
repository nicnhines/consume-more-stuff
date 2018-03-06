
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(`items`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`items`).insert([
        {
          title: `computer`,
          description: `macbook pro 2017 laptop`,
          price: 2000,
          condition: `like new`,
          category: `electronics`,
          image_url: `https://placeimg.com/400/400/animals`,
          user_id: 4
        },
        {
          title: `truck`,
          description: `2005 toyota tacoma`,
          price: 5000,
          condition: `fair`,
          category: `vehicles`,
          image_url: `https://placeimg.com/400/400/nature`,
          user_id: 4
        },
        {
          title: `couch`,
          description: `brown leather sofa`,
          price: 300,
          condition: `salvage`,
          category: `furniture`,
          image_url: `https://placeimg.com/400/400/people`,
          user_id: 4
        },
        {
          title: `t-shirt`,
          description: `blue tank top`,
          price: 10,
          condition: `new`,
          category: `apparel`,
          image_url: `https://placeimg.com/400/400/tech`,
          user_id: 4
        },
        {
          title: `books`,
          description: `game of thrones series set`,
          price: 100,
          condition: `good`,
          category: `other`,
          image_url: `https://placeimg.com/400/400/nature`,
          user_id: 4
        },
      ]);
    });
};
