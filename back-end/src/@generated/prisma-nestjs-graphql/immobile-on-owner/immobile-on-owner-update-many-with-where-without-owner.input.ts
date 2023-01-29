import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerScalarWhereInput } from './immobile-on-owner-scalar-where.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerUncheckedUpdateManyWithoutImmobilesInput } from './immobile-on-owner-unchecked-update-many-without-immobiles.input';

@InputType()
export class ImmobileOnOwnerUpdateManyWithWhereWithoutOwnerInput {

    @Field(() => ImmobileOnOwnerScalarWhereInput, {nullable:false})
    @Type(() => ImmobileOnOwnerScalarWhereInput)
    where!: ImmobileOnOwnerScalarWhereInput;

    @Field(() => ImmobileOnOwnerUncheckedUpdateManyWithoutImmobilesInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUncheckedUpdateManyWithoutImmobilesInput)
    data!: ImmobileOnOwnerUncheckedUpdateManyWithoutImmobilesInput;
}
