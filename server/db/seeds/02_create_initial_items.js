
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex(`items`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`items`).insert([
        {
          title: `sphere round coffee table`,
          description: `richly grained wood`,
          price: 2500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/1.jpg`,
          user_id: 1
        },
        {
          title: `drifted branches side table`,
          description: `suspended branches in a crystalline cube`,
          price: 1000,
          condition: `new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/2.jpg`,
          user_id: 1
        },
        {
          title: `vintage velvet sofa`,
          description: `sofa melds serene minimalism with sumptuous comfort`,
          price: 3000,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/3.jpg`,
          user_id: 1
        },
        {
          title: `reclaimed oak coffee table`,
          description: `richly grained oak wood`,
          price: 1500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/4.jpg`,
          user_id: 1
        },
        {
          title: `concrete pier coffee table`,
          description: `reclaimed french oak supported by concrete slabs`,
          price: 1500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/5.jpg`,
          user_id: 1
        },
        {
          title: `modern leather sofa`,
          description: `a pure, architectural interpretation of comfort`,
          price: 2500,
          condition: `new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/6.jpg`,
          user_id: 1
        },
        {
          title: `malone side table`,
          description: `rustic beauty of unfinished wood`,
          price: 2500,
          condition: `new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/7.jpg`,
          user_id: 1
        },
        {
          title: `modular leather sectional sofa`,
          description: `a pure, architectural interpretation of comfort`,
          price: 2500,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/8.jpg`,
          user_id: 1
        },
        {
          title: `rivet round dining table`,
          description: `solid hardwood, glass and metal table`,
          price: 5000,
          condition: `like new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/9.jpg`,
          user_id: 1
        },
        {
          title: `concrete pier coffee table`,
          description: `reclaimed french oak supported by concrete slabs`,
          price: 1500,
          condition: `new`,
          category: `furniture`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/10.jpg`,
          user_id: 1
        },
        {
          title: `gill button artwork`,
          description: `watercolors painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/11.jpg`,
          user_id: 1
        },
        {
          title: `colorful artwork`,
          description: `watercolors and oils painting`,
          price: 2000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/12.jpg`,
          user_id: 1
        },
        {
          title: `graffiti artwork`,
          description: `oils painting`,
          price: 2000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/13.jpg`,
          user_id: 1
        },
        {
          title: `gill button artwork`,
          description: `watercolors painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/14.jpg`,
          user_id: 1
        },
        {
          title: `gill button artwork`,
          description: `watercolors painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/15.jpg`,
          user_id: 1
        },
        {
          title: `ian davenport artwork`,
          description: `oils painting`,
          price: 5000,
          condition: `new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/16.jpg`,
          user_id: 1
        },
        {
          title: `collage artwork`,
          description: `oils and collage painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/17.jpg`,
          user_id: 1
        },
        {
          title: `gill button artwork`,
          description: `watercolors painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/18.jpg`,
          user_id: 1
        },
        {
          title: `gill button artwork`,
          description: `watercolors and oils painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/19.jpg`,
          user_id: 1
        },
        {
          title: `modern artwork`,
          description: `oils painting`,
          price: 5000,
          condition: `like new`,
          category: `art`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/20.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/21.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/22.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/23.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/24.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/25.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/26.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/27.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/28.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/29.jpg`,
          user_id: 1
        },
        {
          title: `silk scarf`,
          description: `silk twill scarf`,
          price: 395,
          condition: `like new`,
          category: `scarves`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/30.jpg`,
          user_id: 1
        },
        {
          title: `emerald diamond earrings`,
          description: `white gold with white trillion diamonds and emeralds`,
          price: 3500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/31.jpg`,
          user_id: 1
        },
        {
          title: `emerald diamond earrings`,
          description: `white gold with white trillion diamonds, emeralds and black enamel`,
          price: 3500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/33.jpg`,
          user_id: 1
        },
        {
          title: `emerald diamond ring`,
          description: `white gold with white trillion diamonds and emeralds`,
          price: 5000,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/34.jpg`,
          user_id: 1
        },
        {
          title: `ruby diamond ring`,
          description: `white gold with white trillion diamonds, ruby and black enamel`,
          price: 5000,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/35.jpg`,
          user_id: 1
        },
        {
          title: `diamond enamel bracelet`,
          description: `white gold with white trillion diamonds and black enamel`,
          price: 4500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/36.jpg`,
          user_id: 1
        },
        {
          title: `diamond bracelet`,
          description: `white gold with white trillion diamonds`,
          price: 10000,
          condition: `new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/37.jpg`,
          user_id: 1
        },
        {
          title: `diamond enamel sapphire ring`,
          description: `white gold with white trillion diamonds, sapphire and black enamel`,
          price: 5000,
          condition: `new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/38.jpg`,
          user_id: 1
        },
        {
          title: `diamond earrings`,
          description: `white gold with white trillion diamonds`,
          price: 2500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/39.jpg`,
          user_id: 1
        },
        {
          title: `diamond ring`,
          description: `white gold with white trillion diamonds`,
          price: 2500,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/40.jpg`,
          user_id: 1
        },
        {
          title: `diamond emerald bracelet`,
          description: `white gold with white trillion diamonds and emeralds`,
          price: 5000,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/41.jpg`,
          user_id: 1
        },
        {
          title: `diamond emerald enamel earrings`,
          description: `white gold with white trillion diamonds, emeralds and black enamel`,
          price: 5000,
          condition: `like new`,
          category: `jewelry`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/42.jpg`,
          user_id: 1
        },
        {
          title: `glass globe chandelier`,
          description: `glass shades joined by metal tubing balanced on vertical rods`,
          price: 1500,
          condition: `new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/43.jpg`,
          user_id: 1
        },
        {
          title: `cage chandelier`,
          description: `rose gold cage ceiling chandelier`,
          price: 3500,
          condition: `like new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/44.jpg`,
          user_id: 1
        },
        {
          title: `link chandelier`,
          description: `silver link ceiling chandelier`,
          price: 3500,
          condition: `like new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/45.jpg`,
          user_id: 1
        },
        {
          title: `crystal tiered chandelier`,
          description: `faceted crystals with a solid brass frame`,
          price: 2500,
          condition: `new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/46.jpg`,
          user_id: 1
        },
        {
          title: `glass globe chandelier`,
          description: `glass shades joined by metal tubing balanced on vertical rods`,
          price: 1500,
          condition: `like new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/47.jpg`,
          user_id: 1
        },
        {
          title: `cage chandelier`,
          description: `rose gold cage ceiling chandelier`,
          price: 3500,
          condition: `like new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/48.jpg`,
          user_id: 1
        },
        {
          title: `linear chandelier`,
          description: `slender, ribbed-glass with bulbs that shimmer like flickering candles`,
          price: 2500,
          condition: `like new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/49.jpg`,
          user_id: 1
        },
        {
          title: `glass globe chandelier`,
          description: `glass shades joined by metal tubing balanced on vertical rods`,
          price: 1500,
          condition: `like new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/50.jpg`,
          user_id: 1
        },
        {
          title: `glass globe chandelier`,
          description: `glass shades joined by metal tubing balanced on vertical rods`,
          price: 1500,
          condition: `new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/51.jpg`,
          user_id: 1
        },
        {
          title: `linear chandelier`,
          description: `elegantly minimal white linen shades`,
          price: 1500,
          condition: `new`,
          category: `lighting`,
          image_url: `https://s3-us-west-1.amazonaws.com/consume-more-stuff/52.jpg`,
          user_id: 1
        },
      ]);
    });
};
