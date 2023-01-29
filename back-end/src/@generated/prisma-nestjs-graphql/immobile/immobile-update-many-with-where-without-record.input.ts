import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileScalarWhereInput } from './immobile-scalar-where.input';
import { Type } from 'class-transformer';
import { ImmobileUpdateManyMutationInput } from './immobile-update-many-mutation.input';

@InputType()
export class ImmobileUpdateManyWithWhereWithoutRecordInput {

    @Field(() => ImmobileScalarWhereInput, {nullable:false})
    @Type(() => ImmobileScalarWhereInput)
    where!: ImmobileScalarWhereInput;

    @Field(() => ImmobileUpdateManyMutationInput, {nullable:false})
    @Type(() => ImmobileUpdateManyMutationInput)
    data!: ImmobileUpdateManyMutationInput;
}
