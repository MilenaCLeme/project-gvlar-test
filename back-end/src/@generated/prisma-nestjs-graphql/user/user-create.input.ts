import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ImmobileCreateNestedManyWithoutRecordInput } from '../immobile/immobile-create-nested-many-without-record.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  @Validator.Length(6, 10)
  password!: string;

  @Field(() => String, { nullable: false })
  @Validator.Length(10, 11)
  phone!: string;

  @Field(() => Boolean, { nullable: true })
  validation?: boolean;

  @Field(() => String, { nullable: false })
  role!: string;

  @Field(() => ImmobileCreateNestedManyWithoutRecordInput, { nullable: true })
  immobiles?: ImmobileCreateNestedManyWithoutRecordInput;
}
