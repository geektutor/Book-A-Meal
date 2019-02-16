// import Routes from './routes';
import express from 'express';

// Set up the express app
const app = express();

const PORT = 2302;

app.use(express.json());
// app.use('/api/v1', Routes);
app.get('/', (req, res) => {
  res.send('The API is working');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${PORT}`);
});
