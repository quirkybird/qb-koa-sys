const commentService = require("../service/comment.service");
class commentController {
  async create(ctx, next) {
    // user_id, moment_id, content
      const { id } = ctx.user;
      const { content, momentId } = ctx.request.body;
      const res = await commentService.create(id, content, momentId);
      ctx.response.body = res;
  }
  async reply(ctx, next) { 
    // user_id, moment_id, content, comment_id
      const { momentId, content } = ctx.request.body;
      const { id } = ctx.user;
      const commentId = ctx.params.commentId
      const res = await  commentService.reply(id, content, momentId, commentId)
      ctx.response.body = res
  }
  async list(ctx, next) {
    // moemont_id
    const { momentId } = ctx.query
    const res = await commentService.getCommentByMomentId(momentId)
    ctx.response.body = res
  }
  async update(ctx, next) {
    // comment_id, content
    const commentId  = ctx.params.commentId
    const { content } = ctx.request.body
    const res = await commentService.update(commentId, content)
    ctx.response.body = res
  }
  async remove(ctx, next) {
    // comment_id
    const commentId  = ctx.params.commentId
    const res = await commentService.remove(commentId)
    ctx.response.body = res
  }
}

module.exports = new commentController();
