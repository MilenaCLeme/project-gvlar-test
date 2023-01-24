import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileCreateWithoutRecordInput } from './immobile-create-without-record.input';

@InputType()
export class ImmobileCreateOrConnectWithoutRecordInput {

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;

    @Field(() => ImmobileCreateWithoutRecordInput, {nullable:false})
    @Type(() => ImmobileCreateWithoutRecordInput)
    create!: ImmobileCreateWithoutRecordInput;
}
