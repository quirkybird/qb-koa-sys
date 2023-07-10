const app = require("./app");
const config = require("./app/config");

require("./app/database.js");

app.listen(config.APP_PORT, () => {
  console.log(`qb_koa_sys在${APP_PORT}启动成功$$$$$$`);
});
