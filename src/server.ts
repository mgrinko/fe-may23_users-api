import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { connect } from './utils/db';

connect();

import { userRouter } from './routes/user.router';
import { colorRouter } from './routes/color.router';


const CLIENT_URL = process.env.CLIENT_URL;
const PORT = process.env.PORT;

const app = express()
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json());

app.use('/users', userRouter);
app.use('/colors', colorRouter);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
});
