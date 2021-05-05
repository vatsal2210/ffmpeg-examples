const multer = require('multer');
const subDir = 'public/uploads';
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, subDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({ storage: storage });
