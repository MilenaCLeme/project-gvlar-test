import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/updateUser-input';
import { Public } from 'src/auth/decorators/public.decoratior';
import { ResponseValidation } from './dto/response-validation';
import { UpdateValidation } from './dto/updateValidation-input';
import { CurrentUserId } from 'src/auth/decorators/currentUserId.decorator';
import { UpdateRoleInput } from './dto/updateRole-input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user' })
  async userAll() {
    return await this.userService.userAll();
  }

  @Query(() => User)
  async userOneId(@CurrentUserId() id: number) {
    return await this.userService.userOneId(id);
  }

  @Query(() => User)
  async userOneEmail(@Args('email') email: string) {
    return await this.userService.userOneEmail(email);
  }

  @Public()
  @Mutation(() => ResponseValidation)
  async updateValidation(
    @Args('updateValidation') updateValidation: UpdateValidation,
  ) {
    return await this.userService.updateValidation(updateValidation);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => ResponseValidation)
  async updateRole(
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
    @CurrentUserId() id: number,
  ) {
    return await this.userService.updateRole(id, updateRoleInput);
  }

  @Mutation(() => User)
  async removeUser(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUserId() userId: number,
  ) {
    return await this.userService.removeUser(id, userId);
  }
}
