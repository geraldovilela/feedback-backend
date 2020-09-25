import User from '../models/User';

interface UserDTO {
  name: string;

  password: string;

  email: string;
}

class UserRepository {
  private users: User[] = [];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public find(id: string): User {
    let dataUser: User = this.users.map(user => {
      if (user.id === id) {
        dataUser = user;
      }
      return dataUser;
    });

    return dataUser;
  }

  public create({ name, password, email }: UserDTO): User {
    const user = new User({ name, password, email });

    this.users.push(user);

    return user;
  }
}
export default UserRepository;
