const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server A');
});

app.listen(8080, () => {
  console.log('server A running on port 8080');
});