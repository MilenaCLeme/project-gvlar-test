import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';
import { Public } from 'src/auth/decorators/public.decoratior';
import { ValidationUser } from './dto/validation-User.input';
import { UpdateValidation } from './dto/update-validation.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user' })
  userAll() {
    return this.userService.userAll();
  }

  @Query(() => User)
  userOne(@Args('email') email: string) {
    return this.userService.userOne(email);
  }

  @Public()
  @Mutation(() => ValidationUser)
  updateValidationPage(
    @Args('validationUserPage') validateUserPage: UpdateValidation,
  ) {
    return this.userService.updateValidationPage(validateUserPage);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
