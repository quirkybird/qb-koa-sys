const errorType = require("../constant/error_type");
const errHandler = (err, ctx) => {
  let message, status;
  console.log(err.message);
  switch (err.message) {
    case errorType.USERNAME_OR_PASSWORD_IS_REQUIRE:
      message = "用户名或密码不能为空";
      status = 400; //bad request
      break;
    case errorType.USERNAME_ALREADY_EXIST:
      message = "用户名已被使用";
      status = 409; //coflict(冲突)
      break;
    case errorType.USERNAME_NOT_EXIST:
      message = "用户名不存在";
      status = 400;
      break;
    case errorType.USERNAME_OR_PASSWORD_IS_INCORRENT:
      message = "账号或者密码不正确";
      status = 400;
      break;
    case errorType.UNAUTHORIZATION:
      message = "token无效（授权失败）";
      status = 401;
      break;
    case errorType.AUTHORIZATION_IS_NULL:
      message = "未携带token";
      status = 401;
      break;
    case errorType.ACCOUNT_DOES_NOT_MATCH:
      message = "您没有操作的权限";
      status = 409;
      break;
    default:
      message = "NOT FOUNT";
      status = 404;
  }
  console.log(status)
  console.log(message)
  ctx.response.status = status;
  ctx.response.body = message;
};

module.exports = errHandler;
