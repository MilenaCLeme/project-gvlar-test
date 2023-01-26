import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutImmobilesInput } from './user-update-without-immobiles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutImmobilesInput } from './user-create-without-immobiles.input';

@InputType()
export class UserUpsertWithoutImmobilesInput {

    @Field(() => UserUpdateWithoutImmobilesInput, {nullable:false})
    @Type(() => UserUpdateWithoutImmobilesInput)
    update!: UserUpdateWithoutImmobilesInput;

    @Field(() => UserCreateWithoutImmobilesInput, {nullable:false})
    @Type(() => UserCreateWithoutImmobilesInput)
    create!: UserCreateWithoutImmobilesInput;
}
