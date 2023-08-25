import { Sequelize } from 'sequelize-typescript';
import { Color, User } from '../models';

const URI = 'postgres://misha:fvdSZjXY1RvCc3KLbeVvTmegj4kPkOtc@dpg-cjk5eelk5scs73a6j2s0-a.frankfurt-postgres.render.com/users_db_bwnm';

const sequelize = new Sequelize(URI, {
  models: [Color, User],
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