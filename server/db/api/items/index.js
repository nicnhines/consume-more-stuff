const express = require('express');
const router = express.Router();
const Item = require('../../models/Item.js');

module.exports = router;

// router.route('/').get((req, res) => {   console.log('items smoke test'); });

router.route('/')
  .get((req, res) => {
    return Item
    .fetchAll()
    .then((items) => {
      return res.json(items);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message
      })
    })
  })
  .post((req, res) => {
    let {
      id,
      title,
      description,
      price,
      condition,
      category,
      image_url,
      user_id
    } = req.body;
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
        return res.json(item);
      })
      .catch((err) => {
        return res.status(400).json({
          message: err.message
        })
  })
})

router.route('/:id')
  .get((req, res) => {
    return new Item({id: req.params.id})
    .fetch()
    .then((item) => {
      return res.json(item);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message
      })
    })
  })
  .put((req, res) => {
    return new Item({id: req.params.id})
    .save( req.body, { require: true })
    .then((item) => {
      return res.json(item);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message
      });
    });
  });
