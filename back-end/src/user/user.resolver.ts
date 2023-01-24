import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UserWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}
  @Query('users')
  async users() {
    return this.userService.users();
  }

  @Query('user')
  async userId(@Args('id') args: UserWhereUniqueInput) {
    return this.userService.user(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: UserCreateInput) {
    return this.userService.createUser(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UserUpdateInput) {
    const { id, email, name, password, phone, role, validation } = args;

    const hash = await bcrypt.hash(password, 10);

    const where = id ? { id: parseInt(id) } : { email };
    return this.userService.updateUser(where, {
      email,
      name,
      phone,
      validation,
      role,
      password: hash,
    });
  }

  @Mutation('deleteUser')
  async delete(@Args('input') input: UserWhereUniqueInput) {
    return this.userService.deleteUser(input);
  }
}
