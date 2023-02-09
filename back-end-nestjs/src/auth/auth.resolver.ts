import {
  Resolver,
  Mutation,
  Args,
  Query,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignUpInput } from './dto/signup-input';
import { SignResponse } from './dto/sign-reponse';
import { SignInInput } from './dto/signin-input';
import { LogoutResponse } from './dto/logout-response';
import { Public } from './decorators/public.decoratior';
import { NewTokensResponse } from './dto/newTokensResponse';
import { CurrentUserId } from './decorators/currentUserId.decorator';
import { CurrentToken } from './decorators/currentToken.decorator';
import { ImmobileService } from 'src/immobile/immobile.service';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private immobileService: ImmobileService,
  ) {}

  @Public()
  @Mutation(() => SignResponse)
  async signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return await this.authService.signup(signUpInput);
  }

  @Public()
  @Mutation(() => SignResponse)
  async signin(@Args('signInInput') signInInput: SignInInput) {
    return await this.authService.signin(signInInput);
  }

  @ResolveField()
  async immobile(@Parent() signResponse: SignResponse) {
    const { user } = signResponse;

    if (user.role !== 'client') {
      return [];
    }

    return await this.immobileService.findManyImmobileUser(user.id);
  }

  @Query(() => String)
  userId(@CurrentUserId() userdi: number) {
    return userdi;
  }

  @Mutation(() => LogoutResponse)
  logout(@Args('id', { type: () => Int }) id: number) {
    return this.authService.logout(id);
  }

  @Mutation(() => NewTokensResponse)
  getNewTokens(@CurrentUserId() userId: number, @CurrentToken() header: any) {
    return this.authService.getNewTokens(userId, header);
  }
}
