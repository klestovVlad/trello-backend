import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/model/user';
import { UserRepository } from 'src/modules/users/service/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user: User = await this.userRepository.findByLogin(login);

    if (user && user.password === pass) {
      const { password, ...secureUser } = user;
      return secureUser;
    }
  }
}
