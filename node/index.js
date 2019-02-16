import Routes from './routes';

const express = require('express');

// Set up the express app
const app = express();

const PORT = 8080;

app.use(express.json());
app.use('/api/v1', Routes);
app.get('/home', (req, res) => {
  res.status(200).send('Home url');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${PORT}`);
});
