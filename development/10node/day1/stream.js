const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/stream', (req, res) => {
  const filePath = path.join(__dirname, 'large-file.txt');
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});