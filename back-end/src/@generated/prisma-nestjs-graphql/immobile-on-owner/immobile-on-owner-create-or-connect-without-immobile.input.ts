import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateWithoutImmobileInput } from './immobile-on-owner-create-without-immobile.input';

@InputType()
export class ImmobileOnOwnerCreateOrConnectWithoutImmobileInput {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => ImmobileOnOwnerCreateWithoutImmobileInput, {nullable:false})
    @Type(() => ImmobileOnOwnerCreateWithoutImmobileInput)
    create!: ImmobileOnOwnerCreateWithoutImmobileInput;
}
