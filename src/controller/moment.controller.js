const momentService = require("../service/moment.service");
class MomentController {
  create = async (ctx, next) => {
    //我们需要获取到输入的内容以及用户id
    const { id } = ctx.user;
    const { content } = ctx.request.body;

    // 数据库操作
    const res = await momentService.create(id, content);
    // 返回数据
    ctx.response.body = res;
  };

  momentDetail = async (ctx, next) => {
    // 获取到需要获得的评论编号
    const momentId = ctx.request.params.momentId;
    // 数据查询
    const res = await momentService.getMomentById(momentId);
    // 返回数据
    ctx.response.body = res;
  };

  list = async (ctx, next) => {
    // 获取偏移量和大小
    const { offset, size } = ctx.request.query;
    // 数据查询
    const res = await momentService.getAllMoment(offset, size);
    // 返回数据
    ctx.response.body = res;
  };

  update = async (ctx, next) => {
    // 获取momentId,要修改的内容
    const momentId = ctx.request.params.momentId
    const { content } = ctx.request.body
    // 数据库update
    const res = await momentService.updateMoment(momentId, content)
    // 返回数据
    ctx.response.body = {
      momentId: momentId,
      content: content,
      info: res
    }
  };
  remove = async (ctx, next) => {
    // 获取momentId,要修改的内容
    const momentId = ctx.request.params.momentId
    // 数据库update
    const res = await momentService.deleteMoment(momentId)
    // 返回数据
    ctx.response.body = {
      momentId: momentId,
      info: res
    }
  }
}

module.exports = new MomentController();
