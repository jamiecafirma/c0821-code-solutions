const express = require('express');
const path = require('path');
const app = express();
const absolutePath = path.join(__dirname, 'public');
const serveStatic = express.static(absolutePath);

app.use(serveStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
