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
  userAll() {
    return this.userService.userAll();
  }

  @Query(() => User)
  userOneId(@CurrentUserId() id: number) {
    return this.userService.userOneId(id);
  }

  @Query(() => User)
  userOneEmail(@Args('email') email: string) {
    return this.userService.userOneEmail(email);
  }

  @Public()
  @Mutation(() => ResponseValidation)
  updateValidation(
    @Args('updateValidation') updateValidation: UpdateValidation,
  ) {
    return this.userService.updateValidation(updateValidation);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.updateUser(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => ResponseValidation)
  updateRole(
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
    @CurrentUserId() id: number,
  ) {
    return this.userService.updateRole(id, updateRoleInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.removeUser(id);
  }
}
