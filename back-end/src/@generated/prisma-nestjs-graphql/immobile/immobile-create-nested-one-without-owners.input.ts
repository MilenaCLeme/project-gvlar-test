import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateWithoutOwnersInput } from './immobile-create-without-owners.input';
import { Type } from 'class-transformer';
import { ImmobileCreateOrConnectWithoutOwnersInput } from './immobile-create-or-connect-without-owners.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';

@InputType()
export class ImmobileCreateNestedOneWithoutOwnersInput {

    @Field(() => ImmobileCreateWithoutOwnersInput, {nullable:true})
    @Type(() => ImmobileCreateWithoutOwnersInput)
    create?: ImmobileCreateWithoutOwnersInput;

    @Field(() => ImmobileCreateOrConnectWithoutOwnersInput, {nullable:true})
    @Type(() => ImmobileCreateOrConnectWithoutOwnersInput)
    connectOrCreate?: ImmobileCreateOrConnectWithoutOwnersInput;

    @Field(() => ImmobileWhereUniqueInput, {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    connect?: ImmobileWhereUniqueInput;
}
