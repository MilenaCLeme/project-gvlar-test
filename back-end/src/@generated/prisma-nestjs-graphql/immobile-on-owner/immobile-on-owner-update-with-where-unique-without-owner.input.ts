import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerUpdateWithoutOwnerInput } from './immobile-on-owner-update-without-owner.input';

@InputType()
export class ImmobileOnOwnerUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => ImmobileOnOwnerUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUpdateWithoutOwnerInput)
    data!: ImmobileOnOwnerUpdateWithoutOwnerInput;
}
