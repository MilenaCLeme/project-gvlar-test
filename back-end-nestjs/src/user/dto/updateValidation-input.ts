import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateValidation {
  @Field(() => Int)
  id: number;

  @Field()
  refreshToken: string;
}
