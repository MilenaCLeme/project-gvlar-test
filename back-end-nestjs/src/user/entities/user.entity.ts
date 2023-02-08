import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  validation: boolean;

  @Field()
  role: string;

  @Field()
  hashedPassword: string;

  @Field({ nullable: true })
  hashedRefreshToken?: string;
}
