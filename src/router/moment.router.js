const Router = require("koa-router")

const momentRouter = new Router({prefix: "/moment"})
const { vertifyAuth } = require("../middleware/auth.middleware")
const { vertifyIdentify } = require("../middleware/moment.middleware")
const { 
      momentDetail,
      list,
      update,
      remove,
      create } = require("../controller/moment.controller")

momentRouter.post("/", vertifyAuth, create)
momentRouter.get("/", list)
momentRouter.get("/:momentId", momentDetail)
momentRouter.patch("/:momentId",vertifyAuth,vertifyIdentify,update)
momentRouter.delete("/:momentId", vertifyAuth, vertifyIdentify, remove)

module.exports = momentRouter