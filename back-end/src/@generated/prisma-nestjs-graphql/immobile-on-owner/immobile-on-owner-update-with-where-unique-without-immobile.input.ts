import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerUpdateWithoutImmobileInput } from './immobile-on-owner-update-without-immobile.input';

@InputType()
export class ImmobileOnOwnerUpdateWithWhereUniqueWithoutImmobileInput {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => ImmobileOnOwnerUpdateWithoutImmobileInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUpdateWithoutImmobileInput)
    data!: ImmobileOnOwnerUpdateWithoutImmobileInput;
}
