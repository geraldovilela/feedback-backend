import express from 'express';
import routes from './routes/index';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'Teste GoStack!!!' }),
);

app.listen(3333, () => {
  console.log('Server start on port 3333!');
});
