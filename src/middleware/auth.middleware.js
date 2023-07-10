const jwt = require("jsonwebtoken");
const errorType = require("../constant/error_type");
const { getUserName } = require("../service/user.service");
const encryptPassword = require("../utils/encrypt-password");
const { PUBLIC_KEY } = require("../app/config");

const vertifyLogin = async (ctx, next) => {
  // 获取到用户名和密码
  const { username, password } = ctx.request.body;
  const user = await getUserName(username);
  // 判断用户数输入是否为空
  if (!username || !password) {
    const error = new Error(errorType.USERNAME_OR_PASSWORD_IS_REQUIRE);
    ctx.app.emit("error", error, ctx);
  } else if (!user.length) {
    // 判断用户名是否存在
    const error = new Error(errorType.USERNAME_NOT_EXIST);
    ctx.app.emit("error", error, ctx);
  } else if (encryptPassword(password) !== user[0].password) {
    // 判断密码和账号是否匹配
    const error = new Error(errorType.USERNAME_OR_PASSWORD_IS_INCORRENT);
    ctx.app.emit("error", error, ctx);
  } else {
    ctx.user = user[0];
    // 必须有条件判断，否则拦截，不能往后执行
    await next();
  }
};

const vertifyAuth = async (ctx, next) => {
  // 获取token
  const authorization = ctx.request.headers.authorization;
  if(!authorization) {
    const error = new Error(errorType.AUTHORIZATION_IS_NULL)
    ctx.app.emit("error", error, ctx)
    return
  }
  const token = authorization.replace("Bearer ", "");

  try {
    const res = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    ctx.user = res
    await next();
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZATION);
    ctx.app.emit("error", error, ctx);
  }
};
module.exports = { vertifyAuth, vertifyLogin };
