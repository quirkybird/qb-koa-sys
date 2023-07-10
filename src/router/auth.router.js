const Router = require('koa-router');

const { login, success } = require('../controller/auth.controller')
const { vertifyAuth, vertifyLogin } = require('../middleware/auth.middleware')

const loginRouter = new Router({prefix: "/login"})

loginRouter.post("/", vertifyLogin, login)
loginRouter.post("/test", vertifyAuth, success) 

module.exports = loginRouter