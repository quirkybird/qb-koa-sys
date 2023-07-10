const crypto =  require('crypto')

function encryptPassword(password) {
  // 创建一种hash对象
  let hash = crypto.createHash("sha256")
  // 给hash对象赋值
  hash = hash.update(password)
  // 计算hash值，以16进制返回
  return hash.digest("hex")
}

module.exports = encryptPassword