var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 *
 * 
 * */

const foofoo = new Schema({
  x : String,
  y : String
});
const foo = mongoose.model("foo", foofoo);

const usersSchema = new Schema({
  user :  {
    type: String,
    unique: true
  },
  password : String,
  phone : {
    type: String,
    unique: true
  },
  passwordAns : String,
  signupOk : Boolean,
  token : String,
  loginOk: Boolean,
  liketags: [],
  todayPostNum: Number,
  allPostNum: Number,
  createtime: String,
  updatetime: String,
  logintime: String
});
const Users = mongoose.model("Users", usersSchema);


const articleSchema = new Schema({
  urlCode: {
    type: String,
    unique: true
  },
  user: String,
  phone: String,
  category: String,
  title: String,
  content: String,
  tags: [],
  countView: Number,
  countReply: Number,
  goodArticle: Boolean,
  createtime: String,
  updatetime:String
});
const Articles = mongoose.model("Articles", articleSchema);

const tagSchema = new Schema({
  tag: String,
  countArticles: Number,
  urlCodes: [],
  articleUsers: [],
  likeUsers: [],
  createtime: String,
  updatetime: String
});
const Tags = mongoose.model("Tags", tagSchema);


module.exports ={
  foo,
  Users,
  Tags,
  Articles
}
