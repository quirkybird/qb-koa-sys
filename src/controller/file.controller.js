const fileService = require("../service/file.service")
class FileController {
  async createAvatar(ctx, next) {
    const { filename, mimetype, size } = ctx.req.file;
    const { id } = ctx.user
    const res = await fileService.createAvatar(filename, mimetype, size, id)
    ctx.response.body = res
  }
}

module.exports = new FileController()