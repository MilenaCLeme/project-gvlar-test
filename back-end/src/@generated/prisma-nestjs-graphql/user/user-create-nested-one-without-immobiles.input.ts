import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImmobilesInput } from './user-create-without-immobiles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImmobilesInput } from './user-create-or-connect-without-immobiles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutImmobilesInput {

    @Field(() => UserCreateWithoutImmobilesInput, {nullable:true})
    @Type(() => UserCreateWithoutImmobilesInput)
    create?: UserCreateWithoutImmobilesInput;

    @Field(() => UserCreateOrConnectWithoutImmobilesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImmobilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutImmobilesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
