import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserImmobile } from 'src/user/entities/userWithImmobile.entity';

@ObjectType()
export class SignResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accessToken: string;

  @Field(() => UserImmobile)
  user: UserImmobile;
}
