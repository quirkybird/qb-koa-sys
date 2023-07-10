const UserService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 获取到传入参数
    const user = ctx.request.body;
    // 对数据库进行操作
    const res = await UserService.create(user);
    // 返回数据
    ctx.response.body = res;
  }
}

module.exports = new UserController();
