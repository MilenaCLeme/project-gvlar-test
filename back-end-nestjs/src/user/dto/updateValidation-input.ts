import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateValidation {
  @Field(() => ID)
  id: number;

  @Field()
  refreshToken: string;
}
