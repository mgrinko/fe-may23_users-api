import { Color } from '../models/Color';
import { User, UserCreationAttributes } from '../models/User';

function getAll() {
  return User.findAll();
}

function getById(id: number) {
  return User.findByPk(id, {
    include: Color,
  });
}

function create({ name, carColorId }: UserCreationAttributes) {
  return User.create({ name, carColorId });
}

export const userService = { getAll, getById, create };