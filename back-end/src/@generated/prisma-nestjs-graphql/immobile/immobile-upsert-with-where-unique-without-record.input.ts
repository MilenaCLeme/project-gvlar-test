import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileUpdateWithoutRecordInput } from './immobile-update-without-record.input';
import { ImmobileCreateWithoutRecordInput } from './immobile-create-without-record.input';

@InputType()
export class ImmobileUpsertWithWhereUniqueWithoutRecordInput {

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;

    @Field(() => ImmobileUpdateWithoutRecordInput, {nullable:false})
    @Type(() => ImmobileUpdateWithoutRecordInput)
    update!: ImmobileUpdateWithoutRecordInput;

    @Field(() => ImmobileCreateWithoutRecordInput, {nullable:false})
    @Type(() => ImmobileCreateWithoutRecordInput)
    create!: ImmobileCreateWithoutRecordInput;
}
