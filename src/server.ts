import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routers/user.router';
import { colorRouter } from './routers/color.router';

dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL;
const PORT = process.env.PORT;

const app = express();

app.use(cors({
  origin: CLIENT_URL
}));

app.use('/users', express.json(), userRouter);
app.use('/colors', colorRouter);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
});