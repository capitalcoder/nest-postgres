import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService
      .findByName(username, pass)
      .then((u) => {
        console.log(u);
      })
      .catch((e) => {
        console.log(e);
        console.log(new UnauthorizedException());
      });
    return user;
  }
}
