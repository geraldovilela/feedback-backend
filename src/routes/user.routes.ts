import { Router } from 'express';
import { uuid } from 'uuidv4';

const userRouter = Router();

const user = [];

userRouter.post('/', (request, response) => {
  const { name, password, email } = request.body;

  const newuser = {
    id: uuid(),
    name,
    password,
    email,
  };

  user.push(newuser);

  return response.status(201).json(newuser);
});

export default userRouter;
