import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileUpdateWithoutRecordInput } from './immobile-update-without-record.input';

@InputType()
export class ImmobileUpdateWithWhereUniqueWithoutRecordInput {

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;

    @Field(() => ImmobileUpdateWithoutRecordInput, {nullable:false})
    @Type(() => ImmobileUpdateWithoutRecordInput)
    data!: ImmobileUpdateWithoutRecordInput;
}
