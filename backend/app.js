import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';
import 'express-async-errors';
import cors from 'cors';

dotenv.config();

import database from './database/index.js';
//import routes from './routes/index.js'

(async () => {
  await database();
})();

const app = express();

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'],
}
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Iniciando a API do projeto' });
});

app.use((err, req, res, next) => {
  if (process.env.APP.DEBUG) {
    console.log(err);

    return res.status(err.statusCode ?? 500).json({
      status: 'Error',
      message: err.message,
      error: err,
    })
  } else {
    return res.status(err.statusCode ?? 500).json({
      status: 'Error',
      message: err.message,
    });
  }
});

const port = process.env.NODE_LOCAL_PORT || 3001;
app.listen(port, () => {
  console.log(`API ouvindo na porta: ${port}`);
  console.log(`--> http://${process.env.NODE_APP_HOST}:${port}`);
});
