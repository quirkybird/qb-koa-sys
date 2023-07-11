const connection = require("../app/database")
class commentService {
  async create(user_id, content, moemnt_id) {
    const statement = "INSERT INTO comment (user_id, content, moment_id) VALUES(?, ?, ?)"
    const res = await connection.execute(statement, [user_id, content, moemnt_id])
    return res
  }
  async reply(user_id, content, moment_id, comment_id) {   
    const statement = "INSERT INTO comment (user_id, content, moment_id, comment_id) VALUES(?, ?, ?, ?)"
    const res = await connection.execute(statement, [user_id, content, moment_id, comment_id])
    return res
  }
  async getCommentByMomentId(momentId) {
    const statement = "SELECT * FROM comment WHERE moment_id = ?"
    const [res] = await connection.execute(statement, [momentId])
    return res
  }
  async update(commentId, content) {
    const statement = "UPDATE comment SET content = ? WHERE id = ?"
    const res = await connection.execute(statement, [content, commentId])
    return res
  }
  async remove(commentId) {
    const statement = "DELETE FROM comment WHERE id = ?"
    const res = await connection.execute(statement, [commentId])
    return res 
  }
}

module.exports = new commentService