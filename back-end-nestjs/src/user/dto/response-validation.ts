import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class ResponseValidation {
  @Field()
  success: boolean;

  @Field(() => User)
  user: User;
}
