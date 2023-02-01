import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
}
