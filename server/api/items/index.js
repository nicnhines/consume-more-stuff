const express = require('express');
const router = express.Router();
const Item = require('../../db/models/Item.js');
const handleError = require('../Utilities/errorHandler');
const isAuthenticated = require('../Utilities/authenticator');

// Amazon S3
const multer = require(`multer`);
const multers3 = require(`multer-s3`);
const fs = require(`fs`);
const AWS = require(`aws-sdk`);

AWS.config.loadFromPath(__dirname + `/../../../config/awsConfig.json`);
const s3 = new AWS.S3();

const upload = multer({
  storage: multers3({
    s3: s3,
    bucket: `consume.more.stuff.image.bucket`,
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});


module.exports = router;

router.route('/')
.get((req, res) => {
  return Item
  .fetchAll()
  .then((items) => {
    return res.json(items);
  })
  .catch((err) => {
    return handleError(err, res);
  });
})
.post(isAuthenticated, upload.array(`upl`, 1), (req, res) => {
  let {
    id,
    title,
    description,
    price,
    condition,
    category,
  } = req.body;
  let user_id = req.user.id;
  let image_url = req.files[0].location

  return new Item({
    id,
    title,
    description,
    price,
    condition,
    category,
    image_url,
    user_id
  })
  .save()
  .then((item) => {
    if (title.trim().length === 0 || description.trim().length === 0 || image_url.trim().length === 0) {
      return res.status(400).json({ message:'No Empty Input Fields' });
    }
    return res.json(item);
  })
  .catch((err) => {
    return handleError(err, res);
  });
});

router.route('/:id')
.get((req, res) => {
  return new Item({ id: req.params.id })
  .fetch()
  .then((item) => {
    if (item) {
      return res.json(item);
    }
    return res.status(404).json({ message: 'Item Not Found' });
  })
  .catch((err) => {  
    return handleError(err, res);
  });
})
.put(isAuthenticated, (req, res) => {
  return new Item({ id: req.params.id })
  .fetch()
  .then(item => {
    if (item) {
      return item;
    }
    throw new Error(`Item was not found`);
  })
  .then(item => {
    if (item.attributes.user_id === req.user.id) {
      return item;
    }
    throw new Error(`Forbidden`);
  })
  .then(item => {
    return item.save(req.body, { require: true });
  })
  .then(item => {
    return res.json(item);
  })
  .catch(err => {
    return handleError(err, res);
  });
});





