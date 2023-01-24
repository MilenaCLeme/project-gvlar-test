import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerScalarWhereInput } from './immobile-on-owner-scalar-where.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerUncheckedUpdateManyWithoutOwnersInput } from './immobile-on-owner-unchecked-update-many-without-owners.input';

@InputType()
export class ImmobileOnOwnerUpdateManyWithWhereWithoutImmobileInput {

    @Field(() => ImmobileOnOwnerScalarWhereInput, {nullable:false})
    @Type(() => ImmobileOnOwnerScalarWhereInput)
    where!: ImmobileOnOwnerScalarWhereInput;

    @Field(() => ImmobileOnOwnerUncheckedUpdateManyWithoutOwnersInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUncheckedUpdateManyWithoutOwnersInput)
    data!: ImmobileOnOwnerUncheckedUpdateManyWithoutOwnersInput;
}
