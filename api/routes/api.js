var express = require('express');
var router = express.Router();
const {foo} =  require( './models');
const ctl = require("./controllers")


const randomId = require('random-id');
const users = []

router.get('/users', (req, res) => {
  let users =  ctl.users();

  console.log(' save123456 api/users call !!!3n')
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


/***
 * login: POST
 */
router.post('/login', async (req, res) => {
  let respost = await ctl.login(req.body);
  console.log(req.body)
  console.log(respost)
  if (respost.hasOwnProperty("error")){
    res.status(400).json(respost.error);
  }else{
    res.sendStatus(200);
  }
});

/***
 * login: GET
 */
router.get('/login', (req, res) => {
 
});



/***
 * logout: post
 */
router.post('/logout', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * signup: POST
 */
router.post('/signup', async (req, res) => {
  let respost = await ctl.signup(req.body);
  console.log(req.body)
  console.log(respost)
  if (respost.hasOwnProperty("error")){
    
    res.status(400).json(respost.error);
  }else{
    res.sendStatus(200);
  }
    
});


/***
 * profile: GET
 */
router.get('/profile', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * profile: update
 */
router.put('/profile', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});


/***
 * profile: delete
 */
router.delete('/login', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * article: POST
 */
router.post('/articles', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * article: GET
 */
router.get('/articles', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * article: update
 */
router.put('/articles', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});


/***
 * article: delete
 */
router.delete('/articles', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * note: POST
 */
router.post('/note', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * note: GET
 */
router.get('/note', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

/***
 * note: update
 */
router.put('/note', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});


/***
 * login: delete
 */
router.delete('/login', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user::?c:::', user);
  users.push(user);
  res.json("user addedd");
});

module.exports = router;
