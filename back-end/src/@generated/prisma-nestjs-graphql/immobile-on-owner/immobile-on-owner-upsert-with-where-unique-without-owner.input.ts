import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerUpdateWithoutOwnerInput } from './immobile-on-owner-update-without-owner.input';
import { ImmobileOnOwnerCreateWithoutOwnerInput } from './immobile-on-owner-create-without-owner.input';

@InputType()
export class ImmobileOnOwnerUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => ImmobileOnOwnerUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUpdateWithoutOwnerInput)
    update!: ImmobileOnOwnerUpdateWithoutOwnerInput;

    @Field(() => ImmobileOnOwnerCreateWithoutOwnerInput, {nullable:false})
    @Type(() => ImmobileOnOwnerCreateWithoutOwnerInput)
    create!: ImmobileOnOwnerCreateWithoutOwnerInput;
}
