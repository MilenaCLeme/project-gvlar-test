import { CreateImmobileInput } from './create-immobile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImmobileInput extends PartialType(CreateImmobileInput) {
  @Field(() => Int)
  id: number;
}
