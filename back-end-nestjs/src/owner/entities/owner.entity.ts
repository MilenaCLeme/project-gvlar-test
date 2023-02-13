import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;
}
