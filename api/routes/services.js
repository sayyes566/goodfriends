const {foo, Users, Tags, Articles} =  require( './models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); //hash password
const saltRounds = 10;  //bcrypt
const anyid = require("anyid").anyid;
const moment = require("moment"); // d = moment(new Date).format("YYYYMMDD)

// const ids = anyid().encode('Aa0').length(12).random();
// console.log(ids.id());


/***
 *  Tools
 * 
 */

 var createToken = async () =>{
  let token = jwt.sign({ name: logins.user }, logins.password);
  return token;
 }

 var verifyToken = async (token, password)=>{
   // verify a token symmetric
   jwt.verify(token, password, function(err, decoded) {
      return decoded.user
      console.log(decoded.user) // bar logins.user
    }); 
 }

 var createUrlPath = async ()=>{
  // var date = new Date();
  // var formattedDate = moment(date).format('YYYYMMDD');
  let urlCode = anyid().encode('Aa0').length(12).random();
  return urlCode;
 }

 var encodePassword = async (password)=>{
  const salt =  bcrypt.genSaltSync(saltRounds);
  const hash =  bcrypt.hashSync(password, salt);
  return hash;
 }

 var verifyPassword = async (password, passwordHash)=>{
  const match = await bcrypt.compare(password, passwordHash);
  if(match) {
      //login
      return true;
  }else{
    return false;
  }
 }
 var timestamp = async (type)=>{
   let d = new Date();
   let res = ""
   if (type = "date"){
    res +=  moment(d).format("YYYYMMDD")
   }
   else if (type = "datetime"){
    res +=  moment(d).format("YYYYMMDD hh:mm:ss")
   }
   return res;
    
 }
/***
 * User :CRUD
 */
var saveUsers = async (users)=>{

  let u = new Users(users);
  let result = await u.save();
    //save to db
    if (result){
      return {result: true};
    }else{
      return {result: false, err: "fail to save user"};
    }
}

var updateUsers = async ()=>{
  
}

var deleteUsers = async ()=>{
  
}

var getUser = async (json)=>{
  let user = await Users.find(json).exec();
  return user;
}




/***
 * Article :CRUD
 */
var saveArticle = async ()=>{

}

var updateArticle = async ()=>{
  
}

var deleteArticle = async ()=>{
  
}

var getArticle = async ()=>{
  
}

var verifyArticle = async (articles)=>{
    if(articles.content.length <30 ){
      return {err: true, reson: "content length less"};
    }else if (getArticle(articles.title)){
      return {err: true, reson: "title repeat"};
    }else if (getUser(todayPostNum) > 12){
      return {err: true, reson: "post to much"};
    }else{
      return true;
    }
}



/***
 * tag :CRUD
 */
var saveTags = async ()=>{

}

var updateTages = async ()=>{
  
}

var deleteTages = async ()=>{
  
}

var getTages = async ()=>{
  
}

const name = async () => {
  return "YYY"
}



/**
 *  LOGIN
 * @param {json} logins 
 */
const login = async (logins) => {
  let token = jwt.sign({ name: logins.user }, logins.password);
}

const verifyLogin = async (token, tokenRam) => {
  // verify a token symmetric
   jwt.verify(token, tokenRam, function(err, decoded) {
       console.log(decoded.foo) // bar logins.user
   }); 
}




module.exports = {
  createToken,
  verifyToken,
  createUrlPath,
  encodePassword,
  verifyPassword,
  timestamp,
  saveUsers,
  updateUsers,
  deleteUsers,
  getUser,
  saveArticle,
  updateArticle,
  deleteArticle,
  getArticle,
  verifyArticle,
  saveTags,
  deleteTages,
  updateTages,
  getTages
}