import dotenv from 'dotenv';

dotenv.config();

import { Color, User } from './models';
import { sequelize, connect } from './utils/db';

function reset() {
  return sequelize.sync({ force: true })
}

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

function addColors() {
  return Color.bulkCreate(colors);
}

connect()
  .then(reset)
  .then(addColors)
  .finally(() => {
    sequelize.close();
  });