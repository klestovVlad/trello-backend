import { Injectable } from '@nestjs/common';
import { User } from '../model/user';

@Injectable()
export class UserRepository {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        id: 1,
        login: 'login',
        password: 'password',
      },
    ];
  }

  async findByLogin(login: string): Promise<User | undefined> {
    return this.users.find((user) => user.login === login);
  }
}
