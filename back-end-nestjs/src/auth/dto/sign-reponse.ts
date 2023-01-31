import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class SignResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => User)
  user: User;
}
