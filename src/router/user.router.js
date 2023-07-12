const Router = require("koa-router");
const UserController = require("../controller/user.controller");

const userRouter = new Router({ prefix: "/user" });

const { vertifyUser, handlePassword } = require('../middleware/user.middleware')

userRouter.post("/", vertifyUser, handlePassword, UserController.create);

userRouter.get("/:userId/avatar", UserController.avatarInfo)

module.exports = userRouter;
