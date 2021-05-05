const express = require('express');
const { convert } = require('./ffmpeg/convert');
const { upload } = require('./services/upload');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

const dir = 'public';
const subDir = 'public/uploads';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  fs.mkdirSync(subDir);
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/convert', upload.single('file'), convert);

/* Initialize Server */
app.listen(PORT, function () {
  console.log('Launching App localhost:3000');
});

module.exports = app;
