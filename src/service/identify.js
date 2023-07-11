const connection = require("../app/database");
const errorType = require("../constant/error_type");
const vertifyIdentify = async (ctx, next) => {
  try {
    const commentId = ctx.request.params.commentId;
    const { id } = ctx.user;
    const statement =
      "SELECT * FROM comment WHERE id = ? and user_id = ?";
    const [res] = await connection.execute(statement, [commentId, id]);
    if (!res.length) {
      const error = new Error(errorType.ACCOUNT_DOES_NOT_MATCH);
      return ctx.app.emit("error", error, ctx);
    }
    await next();
  } catch (error) {
    console.log(error)
  }
};

module.exports = vertifyIdentify;
