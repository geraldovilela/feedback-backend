import { Router } from 'express';

import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

const userRepository = new UserRepository();

userRouter.post('/create', (request, response) => {
  try {
    const { name, password, email } = request.body;

    const user = {
      name,
      password,
      email,
    };
    const newUser = userRepository.create(user);
    return response.status(201).json(newUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

userRouter.get('/list', (request, response) => {
  try {
    return response.json(userRepository.all());
  } catch (err) {
    return response.status(400).json({ errr: err.message });
  }
});

userRouter.get('/list/:id', (request, response) => {
  try {
    const { id } = request.params;

    const userData = userRepository.find(id);
    if (userData) {
      return response.status(200).json(userData);
    }
    throw Error;
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default userRouter;
