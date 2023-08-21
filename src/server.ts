import express from 'express';
import cors from 'cors';
import { User } from './types';

const CLIENT_URL = 'http://localhost:3000';
const PORT = 5000 || process.env.port;
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

function getMaxId(users: User[]): number {
  const ids = users.map(user => user.id);

  return Math.max(...ids);
}

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

app.get('/colors', (req, res) => {
  res.send(colors);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', express.json(), (req, res) => {
  const { name, carColorId } = req.body;

  if (typeof name !== 'string'
    || typeof carColorId !== 'number'
  ) {
    res.sendStatus(422);
    return;
  }

  const newUser = {
    id: getMaxId(users) + 1,
    name,
    carColorId,
  };

  users.push(newUser);

  res.statusCode = 201;
  res.send(newUser);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find(({ id }) => id === +userId)

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`)
});