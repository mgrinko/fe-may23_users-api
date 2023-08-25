import { Sequelize } from 'sequelize-typescript';
import * as models from '../models';

const URI = 'postgres://misha:OIN303GWbyl9yTPgIJGdlFw1ySenK6FT@dpg-cjis7kj37aks73chadqg-a.frankfurt-postgres.render.com/postgress_lqt5';

export const sequelize = new Sequelize(URI, {
  models: Object.values(models),
  dialectOptions: {
    ssl: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
