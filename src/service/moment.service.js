const connection = require('../app/database')

class MomentService {
  async create(user_id, content) {
    const statement = "INSERT INTO moment (content, user_id) VALUES(?, ?)"
    const res = await connection.execute(statement, [content, user_id])
    return res[0]
  } 
  async getMomentById(momentId) {
    const statement = "SELECT * FROM moment WHERE id = ?"
    const [rows] = await connection.execute(statement, [momentId])
    return rows[0]
  }
  async getAllMoment(offset, size) {
    const returnValue = {}
    const statement = `   
      SELECT
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) user
      FROM moment m 
      LEFT JOIN user u ON  m.user_id = u.id
      LIMIT ?, ?`
      const [rows] = await connection.execute(statement, [offset, size])
      returnValue.data = rows
      return returnValue
  }
}

module.exports = new MomentService()