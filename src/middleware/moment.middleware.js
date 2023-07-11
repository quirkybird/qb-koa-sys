const { getMomentById } = require("../service/moment.service")
const errorType = require("../constant/error_type")

const vertifyIdentify = async (ctx, next) => {
    // 判断修改信息的人是否为本人
    const momentId = ctx.request.params.momentId
    // 获取发表内容的用户id
    const { id } = ctx.user
    const moment = await getMomentById(momentId)
    if( moment.user_id !== id ) {
      const error = new Error(errorType.ACCOUNT_DOES_NOT_MATCH)
      return ctx.app.emit("error", error, ctx)
    }
    await next()
}

module.exports = { vertifyIdentify }