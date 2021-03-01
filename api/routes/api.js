var express = require('express');
var router = express.Router();
const randomId = require('random-id');
const users = []
router.get('/users', (req, res) => {
  console.log('123 api/users call !!!3n')
  res.json(users);
//res.render('index', { title: 'Express' });
});

router.post('/user', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});




module.exports = router;
