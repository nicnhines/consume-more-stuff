
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(`items`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`items`).insert([
        {
          title: `brass marble table lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/1.jpg`,
          user_id: 1
        },
        {
          title: `aged metal orb`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/2.jpg`,
          user_id: 1
        },
        {
          title: `rustic ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/3.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/4.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/5.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/6.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/7.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/8.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/9.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/10.jpg`,
          user_id: 1
        },
        {
          title: `brass marble table lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/11.jpg`,
          user_id: 1
        },
        {
          title: `aged metal orb`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/12.jpg`,
          user_id: 1
        },
        {
          title: `rustic ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/13.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/14.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/15.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/16.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/17.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/18.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/19.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/20.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/21.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/22.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/23.jpg`,
          user_id: 1
        },
        {
          title: `brass marble table lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/24.jpg`,
          user_id: 1
        },
        {
          title: `aged metal orb`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/25.jpg`,
          user_id: 1
        },
        {
          title: `rustic ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/26.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/27.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/28.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/29.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/30.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/31.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/32.png`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/33.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/34.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/35.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/36.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/37.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/38.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/39.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/40.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/41.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/42.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/43.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/44.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/45.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/46.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/47.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/48.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/49.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/50.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/51.jpg`,
          user_id: 1
        },
        {
          title: `aged metal ceiling lamp`,
          description: `macbook pro 2017 laptop`,
          price: 500,
          condition: `like new`,
          category: `light fixtures`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/52.jpg`,
          user_id: 1
        },
      ]);
    });
};
