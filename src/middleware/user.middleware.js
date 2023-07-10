const errorType = require("../constant/error_type");
const { getUserName } = require("../service/user.service")
const encryptPassword = require("../utils/encrypt-password")

const vertifyUser = async (ctx, next) => {
  // 获取到用户名和密码
  const { username, password } = ctx.request.body;
  const user = await getUserName(username)
  // 用户名或者密码不能为空
  if (!username || !password) {
    const error = new Error(errorType.USERNAME_OR_PASSWORD_IS_REQUIRE);
    ctx.app.emit("error", error, ctx);
  }else if(user.length) {
    // 用户名已经被注册
    const error = new Error(errorType.USERNAME_ALREADY_EXIST)
    ctx.app.emit("error", error, ctx)
    
  } else {
    // 必须有条件判断，否则拦截，不能往后执行
    await next();
  }
};

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = encryptPassword(password)
  await next();
}

module.exports = { vertifyUser, handlePassword };
