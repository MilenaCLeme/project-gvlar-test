import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutImmobilesInput } from './user-create-without-immobiles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutImmobilesInput } from './user-create-or-connect-without-immobiles.input';
import { UserUpsertWithoutImmobilesInput } from './user-upsert-without-immobiles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutImmobilesInput } from './user-update-without-immobiles.input';

@InputType()
export class UserUpdateOneWithoutImmobilesNestedInput {

    @Field(() => UserCreateWithoutImmobilesInput, {nullable:true})
    @Type(() => UserCreateWithoutImmobilesInput)
    create?: UserCreateWithoutImmobilesInput;

    @Field(() => UserCreateOrConnectWithoutImmobilesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutImmobilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutImmobilesInput;

    @Field(() => UserUpsertWithoutImmobilesInput, {nullable:true})
    @Type(() => UserUpsertWithoutImmobilesInput)
    upsert?: UserUpsertWithoutImmobilesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutImmobilesInput, {nullable:true})
    @Type(() => UserUpdateWithoutImmobilesInput)
    update?: UserUpdateWithoutImmobilesInput;
}
