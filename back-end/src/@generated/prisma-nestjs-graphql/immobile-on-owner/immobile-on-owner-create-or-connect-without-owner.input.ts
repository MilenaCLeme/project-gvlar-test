import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateWithoutOwnerInput } from './immobile-on-owner-create-without-owner.input';

@InputType()
export class ImmobileOnOwnerCreateOrConnectWithoutOwnerInput {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => ImmobileOnOwnerCreateWithoutOwnerInput, {nullable:false})
    @Type(() => ImmobileOnOwnerCreateWithoutOwnerInput)
    create!: ImmobileOnOwnerCreateWithoutOwnerInput;
}
