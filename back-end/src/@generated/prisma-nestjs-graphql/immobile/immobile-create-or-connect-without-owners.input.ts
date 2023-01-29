import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileCreateWithoutOwnersInput } from './immobile-create-without-owners.input';

@InputType()
export class ImmobileCreateOrConnectWithoutOwnersInput {

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;

    @Field(() => ImmobileCreateWithoutOwnersInput, {nullable:false})
    @Type(() => ImmobileCreateWithoutOwnersInput)
    create!: ImmobileCreateWithoutOwnersInput;
}
