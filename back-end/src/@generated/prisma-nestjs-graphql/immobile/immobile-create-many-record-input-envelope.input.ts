import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateManyRecordInput } from './immobile-create-many-record.input';
import { Type } from 'class-transformer';

@InputType()
export class ImmobileCreateManyRecordInputEnvelope {

    @Field(() => [ImmobileCreateManyRecordInput], {nullable:false})
    @Type(() => ImmobileCreateManyRecordInput)
    data!: Array<ImmobileCreateManyRecordInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
