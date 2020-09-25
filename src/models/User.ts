import { uuid } from 'uuidv4';

class User {
  id: string;

  name: string;

  password: string;

  email: string;

  constructor({ name, password, email }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

export default User;
