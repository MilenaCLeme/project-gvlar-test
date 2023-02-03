import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidationUser {
  @Field()
  validation: boolean;
}
