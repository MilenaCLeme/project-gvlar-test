import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewUser, UpdateUser } from 'src/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}
  @Query('users')
  async users() {
    return this.userService.users();
  }

  @Query('userId')
  async userId(@Args('id') args: string) {
    return this.userService.user({ id: parseInt(args) });
  }

  @Query('userEmail')
  async userEmail(@Args('email') email: string) {
    return this.userService.user({ email });
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createUser(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    const { id, name, validation, role, phone, password, email } = args;
    return this.userService.updateUser(id, {
      name,
      validation,
      email,
      password,
      phone,
      role,
    });
  }
}
