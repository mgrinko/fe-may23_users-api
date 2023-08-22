import path from 'path';
import express from 'express';
import cors from 'cors';
import { User } from './types';
import { userService } from './services/user.service';

const CLIENT_URL = 'http://localhost:3000';
const PORT = 5000;
const app = express();

app.use(cors({ origin: CLIENT_URL }));

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

app.get('/colors', (req, res) => {
  res.send(colors);
});

app.get('/users', (req, res) => {
  const users = userService.getAll();

  res.send(users);
});

app.post('/users', express.json(), (req, res) => {
  const { name, carColorId } = req.body;

  if (!userService.validate({ name, carColorId })) {
    res.sendStatus(422);

    return;
  }

  const newUser = userService.create({ name, carColorId });

  res.status(201).send(newUser);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = userService.getById(+userId);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
});