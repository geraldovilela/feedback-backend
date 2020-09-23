// src/routes/index.ts
import { Router } from 'express';
import loginRouter from './login.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);

export default routes;
