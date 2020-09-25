import { uuid } from 'uuidv4';

class User {
  id: string;

  name: string;

  password: string;

  email: string;

  login: string;

  constructor({ name, password, email, login }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.login = login;
    this.password = password;
    this.email = email;
  }
}

export default User;
