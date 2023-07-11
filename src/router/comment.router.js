const Router = require("koa-router")
const { vertifyAuth } = require("../middleware/auth.middleware")
const { 
  create, 
  reply, 
  update,
  remove,
  list } = require("../controller/comment.controller")
const vertifyIdentify = require("../service/identify")

const commentRouter = new Router({prefix: "/comment"})

commentRouter.post("/", vertifyAuth, create)
commentRouter.post("/:commentId/reply", vertifyAuth, reply)
commentRouter.get("/", list)
commentRouter.patch("/:commentId", vertifyAuth, vertifyIdentify, update)
commentRouter.delete("/:commentId",vertifyAuth, vertifyIdentify, remove)

module.exports = commentRouter