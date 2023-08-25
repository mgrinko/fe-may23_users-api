import { sequelize, connect } from './utils/db';
import { Color } from './models/Color';

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

function reset() {
  return sequelize.sync({ force: true })
    .catch(error => console.log('unable to reset table', error));
}

function addColors() {
  return Color.bulkCreate(colors)
    .catch(error => console.log('Unable to create colors', error));
}

connect()
  .then(reset)
  .then(addColors)
  .finally(() => {
    sequelize.close()
  })
