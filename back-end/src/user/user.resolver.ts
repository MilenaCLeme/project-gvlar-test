import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UpdateUser, WhereUser } from 'src/graphql';
import * as bcrypt from 'bcrypt';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}
  @Query('users')
  async users() {
    return this.userService.findAll();
  }

  @Query('user')
  async user(@Args('input') input: WhereUser) {
    return this.userService.findOne(input);
  }

  @Mutation('createUser')
  async create(@Args('input') args: UserCreateInput) {
    return this.userService.createUser(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    const { id, email, name, password, phone, role, validation } = args;

    if (password && (password.length < 6 || password.length > 10)) {
      throw new Error('password invalid');
    }

    if (phone && (phone.length < 10 || phone.length > 11)) {
      throw new Error('phone invalid');
    }

    const hash = password ? await bcrypt.hash(password, 10) : password;

    return this.userService.updateUser(id, {
      email,
      name,
      phone,
      validation,
      role,
      password: hash,
    });
  }

  @Mutation('deleteUser')
  async delete(@Args('input') input: WhereUser) {
    return this.userService.deleteUser(input);
  }

  @Mutation('login')
  async login(@Args() email: string, password: string) {
    console.log(email, password);
  }
}
