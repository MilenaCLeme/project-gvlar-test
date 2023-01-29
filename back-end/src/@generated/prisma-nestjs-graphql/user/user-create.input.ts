import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateNestedManyWithoutRecordInput } from '../immobile/immobile-create-nested-many-without-record.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => Boolean, {nullable:true})
    validation?: boolean;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => ImmobileCreateNestedManyWithoutRecordInput, {nullable:true})
    immobiles?: ImmobileCreateNestedManyWithoutRecordInput;
}
