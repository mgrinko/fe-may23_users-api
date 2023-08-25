import { User, UserCreationAttributes } from '../models';

function getAll() {
  return User.findAll({
    where: {
      id: 1,
    },
    order: [['id', 'desc'], 'name'],
  });
}

function getById(id: number) {
  return User.findByPk(id);
}

function create({ name, carColorId }: UserCreationAttributes) {
  return User.create({ name, carColorId })
    .catch(error => {
      console.log('Unable to create User', error)
    })
}

export const userService = { getAll, getById, create };