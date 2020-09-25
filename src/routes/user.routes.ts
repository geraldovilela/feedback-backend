import { Router } from 'express';
import connection from '../database/connection';
import User from '../models/User';

const userRouter = Router();

userRouter.post('/create', async (request, response) => {
  try {
    const { name, password, email, login } = request.body;

    const user = new User({
      name,
      password,
      email,
      login,
    });

    const newUser = await connection('users').insert(user);
    return response.status(201).json(newUser);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

userRouter.get('/list', async (request, response) => {
  try {
    const users = await connection('users').select('*');
    return response.json(users);
  } catch (err) {
    return response.status(400).json({ errr: err.message });
  }
});

userRouter.get('/list/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const userData = await connection('users')
      .select('*')
      .where('id', id)
      .first();

    if (userData) {
      return response.status(200).json(userData);
    }
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default userRouter;
