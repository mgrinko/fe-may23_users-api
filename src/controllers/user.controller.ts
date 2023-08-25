import { User } from '../models/User';
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

  try {
    const newUser = userService.create({ name, carColorId });
    res.status(201).send(newUser);
  } catch (error) {
    res.sendStatus(422);
  }
};

export const userController = { getAll, getOne, create };