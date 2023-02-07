import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImmobileInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
