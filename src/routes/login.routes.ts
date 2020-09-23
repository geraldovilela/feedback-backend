import { Router } from 'express';

const loginRouter = Router();

loginRouter.post('/', (request, response) => {
  return response.json({ message: 'teste' });
});

export default loginRouter;
