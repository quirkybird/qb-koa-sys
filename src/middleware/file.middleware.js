const Multer = require("koa-multer");

const { AVATAR_PATH } = require("../constant/file_path")

const multerUpload = Multer({
  dest: AVATAR_PATH
});
const avatarHandler = multerUpload.single("avatar");

module.exports = avatarHandler;
