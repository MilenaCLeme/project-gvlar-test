import { CreateImmobileInput } from './create-immobile.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateImmobileInput extends PartialType(CreateImmobileInput) {
  @Field(() => ID)
  id: number;
}
