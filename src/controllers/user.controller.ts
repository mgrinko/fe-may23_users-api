import { userService } from '../services/user.service';
import { ControllerAction } from '../types';

const getAll: ControllerAction = (req, res) => {
  const users = userService.getAll();

  res.send(users);
};

const getOne: ControllerAction = (req, res) => {
  const { userId } = req.params;
  const user = userService.getById(+userId);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
};

const create: ControllerAction = (req, res) => {
  const { name, carColorId } = req.body;

  console.log({ name, carColorId });

  if (!userService.validate({ name, carColorId })) {
    res.sendStatus(422);

    return;
  }

  const newUser = userService.create({ name, carColorId });

  res.status(201).send(newUser);
};

export const userController = { getAll, getOne, create };