import express from 'express';
import Routes from './routes';

// Set up the express app
const app = express();

const PORT = 2302;

app.use(express.json());

app.use('/api/v1/meals', Routes);

app.get('/', (req, res) => {
  res.send('The API is working');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${PORT}`);
});
