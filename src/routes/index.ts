// src/routes/index.ts
import { Router } from 'express';
import loginRouter from './login.routes';
import userRouter from './user.routes';
import feedbackRouter from './feedback.routes';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/feedback', feedbackRouter);

export default routes;
