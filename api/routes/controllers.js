const services =  require( './services');




/***
 * 
 * Uesr -> Signup -> (verifySignup data -> saveSignup data (save signuptOk)) -> Login -> postArticle
 * 
 * User -> Login -> getArticle -> postArticle ->CRUD -> Logout (save loginOk)
 * 
 */


/**
 * Signup
 * @param {json} signup 
 */
const signup = async (signups) => {
  let resGetUser = await services.getUser({ user: signups.user});
  if ( resGetUser.length == 0 ){
    //front-end verify phone 10 code begin 09
    signups.password = await services.encodePassword(signups.password);
    signups.createtime = await services.timestamp("datetime");
    signups.updatetime = await signups.createtime;
    let resSaveUser = await services.saveUsers(signups);
    if (resSaveUser.result){
      //return true
      return  {res: true}
    }else{
      return {res: false, error: "can't save"}
    }
  }else{
    return  {res: false, error: "user repeat"}
  }

}

/**
 *  
 * @param {json} logins 
 */
const login = async (logins) => { 
  if (await services.getUser(logins)){
    let token = await services.createToken();
    let users = await services.getUser({user: logins.user});
    if(users){
      let isPass = await services.verifyPassword(logins.password, users.password);
      if (isPass){
        let updateUser = await services.updateUsers({loginOk: true, token: token, updatetime:  Date.now()});
        if (updateUser){
          return true;
        }else{
          return {res: false, error: "can't update"};
        }
      }else{
        return  {res: false, error: "login fail 2"};
      }
    }else{
      return  {res: false, error: "login fail 1"};
    }
  }else{
    return  {res: false, error: "login fail 0"};
  }
}

const verifyLogin = async (token, password) => {
  // verify a token symmetric
  return services.verifyToken(token, password)? true: false;
}

const postArticle = async (articles) =>{
  let urlCode = services.createUrlPath;
  while (services.getArticle({urlCode:urlCode})){
    urlCode = services.createUrlPath;
  }
  articles.urlCode = urlCode;
  let verify = services.verifyArticle(articles);
  if(verify){
    if(services.saveArticle(articles)){
      return true
    } else{
        return {res: false, error: "can't update"};
    }
  }else{
    return verify;
  }
}


const getArticlebyTag = async (tag) =>{
  
}

module.exports = {
  signup,
  login,
  postArticle
}