const Router = require("koa-router")

const momentRouter = new Router({prefix: "/moment"})
const { vertifyAuth } = require("../middleware/auth.middleware")
const { 
      momentDetail,
      list,
      create } = require("../controller/moment.controller")

momentRouter.post("/", vertifyAuth, create)
momentRouter.get("/", list)
momentRouter.get("/:momentId", momentDetail)

module.exports = momentRouter