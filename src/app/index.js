const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const errHandler = require("./error.handle")
const useRoutes = require("../router")
const app = new Koa();

// 使用body解析器
app.use(bodyParser());

useRoutes(app)
// 错误处理
app.on("error", errHandler)

module.exports = app;
