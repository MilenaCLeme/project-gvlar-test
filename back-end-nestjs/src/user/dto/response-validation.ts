import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class ResponseValidation {
  @Field()
  validation: boolean;

  @Field(() => User)
  user: User;
}
