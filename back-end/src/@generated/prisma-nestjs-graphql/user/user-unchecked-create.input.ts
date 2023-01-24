import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ImmobileUncheckedCreateNestedManyWithoutRecordInput } from '../immobile/immobile-unchecked-create-nested-many-without-record.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(6, 10)
    password!: string;

    @Field(() => String, {nullable:false})
    @Validator.Length(10, 11)
    phone!: string;

    @Field(() => Boolean, {nullable:true})
    validation?: boolean;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => ImmobileUncheckedCreateNestedManyWithoutRecordInput, {nullable:true})
    immobiles?: ImmobileUncheckedCreateNestedManyWithoutRecordInput;
}
