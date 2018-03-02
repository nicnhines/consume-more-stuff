const express = require('express');
const router = express.Router();
const Item = require('../../models/Item.js');
const handleError = require('../errorHelper');

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
      return handleError(err, res);
  });
})

router.route('/:id')
  .get((req, res) => {
    return new Item({id: req.params.id})
    .fetch()
    .then((item) => {
      if(!item){
        res.status(404).json({message: 'Item Not Found'})
      }
      return res.json(item);
    })
    .catch((err) => {  
      return handleError(err, res);
    });
  })
  .put((req, res) => {
    return new Item({id: req.params.id})
    .save( req.body, { require: true })
    .then((item) => {
      return res.json(item);
    })
    .catch((err) => {
      return handleError(err, res);
    });
  });






