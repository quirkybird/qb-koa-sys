const mysql = require("mysql2");
const config = require("./config");


const pool = mysql.createPool({
  host: config.MYSQL_HOST,
  port: String(config.MYSQL_PORT),
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});

pool.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("数据库连接失败~")
    } else {
      console.log("数据库连接成功~");
    }
  });
});

module.exports = pool.promise()