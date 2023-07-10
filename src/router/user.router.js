const Router = require("koa-router");
const UserController = require("../controller/user.controller");

const userRouter = new Router({ prefix: "/users" });

const { vertifyUser, handlePassword } = require('../middleware/user.middleware')

userRouter.post("/", vertifyUser, handlePassword, UserController.create);

module.exports = userRouter;
