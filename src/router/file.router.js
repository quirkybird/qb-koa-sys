const Router = require("koa-router");

const { vertifyAuth } = require("../middleware/auth.middleware")
const avatarHandler = require("../middleware/file.middleware") 
const { createAvatar } = require("../controller/file.controller")
const fileRouter = new Router({prefix: "/upload"});


fileRouter.post("/avatar", vertifyAuth, avatarHandler, createAvatar)

module.exports = fileRouter