import { userService } from '../services/user.service';
import { ControllerAction } from '../types';

const getAll: ControllerAction = async (req, res) => {
  const users = await userService.getAll();

  res.send(users);
};

const getOne: ControllerAction = async (req, res) => {
  const { userId } = req.params;
  const user = await userService.getById(+userId);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
};

const create: ControllerAction = async (req, res) => {
  const { name, carColorId } = req.body;

  console.log({ name, carColorId });

  if (typeof name !== 'string' || typeof carColorId !== 'number') {
    res.sendStatus(422);

    return;
  }

  const newUser = await userService.create({ name, carColorId });

  res.status(201).send(newUser);
};

export const userController = { getAll, getOne, create };