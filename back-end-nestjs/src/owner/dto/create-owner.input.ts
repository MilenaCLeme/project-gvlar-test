import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;
}
