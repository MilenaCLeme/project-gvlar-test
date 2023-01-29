import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImmobilesInput } from './user-create-without-immobiles.input';

@InputType()
export class UserCreateOrConnectWithoutImmobilesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutImmobilesInput, {nullable:false})
    @Type(() => UserCreateWithoutImmobilesInput)
    create!: UserCreateWithoutImmobilesInput;
}
