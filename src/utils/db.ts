import { Sequelize } from 'sequelize-typescript';
import * as models from '../models';

const { DB_PASSWORD, DB_HOST, DB_NAME, DB_USER } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  models: Object.values(models),
  dialectOptions: {
    ssl: true,
  }
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}