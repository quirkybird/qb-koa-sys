const connection = require('../app/database')
class UserService {
  async create(user) {
    const { username, password } = user
    // 数据库操作
    const statement = "INSERT INTO USER (name, password) VALUES(?, ?)"
    const res = await connection.execute(statement, [username, password])
    return res[0];
  }
  
  async getUserName(name) {
    const statement = "SELECT * FROM USER WHERE name = ?"
    const [rows] = await connection.execute(statement, [name])
    return rows
  }
}

module.exports = new UserService();
