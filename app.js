const express = require('express');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/version', (req, res) => {
  res.send('2'); // change the string to ensure a new version is deployed
});

app.listen(PORT, () => {
  console.log('server started on port 3000');
});
