const express = require(`express`);
const router = express.Router();
const User = require('../../models/User')

module.exports = router;

// router
//   .route('/')
//   .get((req, res) => {
//     console.log('user route smoke test')
//   })

router.route('/:id')
  .get((req, res) => {
    return new User({id: req.params.id})
    .fetch()
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message
      });
    });
  })
  .put((req, res) => {
    return new User({id: req.params.id})
    .fetch()
    .save(req.body, {require: true})
    .then((user) => {
      return res.json(user)
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message
      });
    });
  });

// router
//   .route('/login')
//   .post((req, res) => {
//     let {user, password} = req.body.username;
//     return new User({'username': user, 'password': password})
//       .fetch()
//       .then((loggedIn) => {
//         return res.json(loggedIn)
//       })
//       .catch((err) => {
//         message : err.message
//       })
//   })