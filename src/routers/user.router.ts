import { Router } from 'express';
import { userController } from '../controllers/user.controller';

export const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.get('/:userId', userController.getOne);

userRouter.post('/', userController.create);

