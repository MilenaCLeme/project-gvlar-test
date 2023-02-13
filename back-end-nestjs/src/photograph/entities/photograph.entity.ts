import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Photograph {
  @Field(() => String)
  name: string;
  @Field(() => String)
  breed: string;
  @Field(() => String)
  image: string;
}
