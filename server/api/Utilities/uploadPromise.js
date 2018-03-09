module.exports = uploadPromise;

const AWS = require(`aws-sdk`);

AWS.config.loadFromPath(__dirname + `/../../../config/awsConfig.json`);
const s3 = new AWS.S3();

function uploadPromise (item, req) {
  return new Promise((resolve, reject) => {
    const key = Date.now().toString();
    const params = {
      Body: Buffer.from(req.body.imageFile.split(`,`)[1], `base64`),
      Bucket: `consume.more.stuff.image.bucket`,
      Key: key
    };

    s3.putObject(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        req.body.image_url = `https://s3-us-west-1.amazonaws.com/consume.more.stuff.image.bucket/${key}`;
        delete req.body.imageFile;

        item.save(req.body, { require: true })
        .then(item => {
          resolve(item);
        });
      }
    });
  });
}