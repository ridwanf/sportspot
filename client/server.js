const express = require('express');

const app = express();
const fs = require('fs');
const path = require('path');

const indexHTML = (() => fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8'))();

app.use('/public', express.static(path.resolve(__dirname, './public')));

require('./build/dev-server')(app);

app.get('/', (req, res) => {
  res.write(indexHTML);
  res.end();
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
