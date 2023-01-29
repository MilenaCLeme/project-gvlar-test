import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographScalarWhereInput } from './photograph-scalar-where.input';
import { Type } from 'class-transformer';
import { PhotographUpdateManyMutationInput } from './photograph-update-many-mutation.input';

@InputType()
export class PhotographUpdateManyWithWhereWithoutImmobileInput {

    @Field(() => PhotographScalarWhereInput, {nullable:false})
    @Type(() => PhotographScalarWhereInput)
    where!: PhotographScalarWhereInput;

    @Field(() => PhotographUpdateManyMutationInput, {nullable:false})
    @Type(() => PhotographUpdateManyMutationInput)
    data!: PhotographUpdateManyMutationInput;
}
