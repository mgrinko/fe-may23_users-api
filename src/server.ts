import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { userRouter } from './routes/user.route';
import { colorRouter } from './routes/color.route';

import { connect, sequelize } from './utils/db';
connect();

const { CLIENT_URL, PORT } = process.env;

const app = express();

app
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json())

app.use('/users', userRouter);
app.use('/colors', colorRouter);

const server = app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
});

// process.on('SIGTERM', () => {
//   sequelize.close();
//   console.log('DB connection is closed');
// });

// server.on('error', () => {
//   sequelize.close();
//   console.log('DB connection is closed');
// });
