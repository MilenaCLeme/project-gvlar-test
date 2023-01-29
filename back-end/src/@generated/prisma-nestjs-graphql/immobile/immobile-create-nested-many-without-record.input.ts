import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateWithoutRecordInput } from './immobile-create-without-record.input';
import { Type } from 'class-transformer';
import { ImmobileCreateOrConnectWithoutRecordInput } from './immobile-create-or-connect-without-record.input';
import { ImmobileCreateManyRecordInputEnvelope } from './immobile-create-many-record-input-envelope.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';

@InputType()
export class ImmobileCreateNestedManyWithoutRecordInput {

    @Field(() => [ImmobileCreateWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileCreateWithoutRecordInput)
    create?: Array<ImmobileCreateWithoutRecordInput>;

    @Field(() => [ImmobileCreateOrConnectWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileCreateOrConnectWithoutRecordInput)
    connectOrCreate?: Array<ImmobileCreateOrConnectWithoutRecordInput>;

    @Field(() => ImmobileCreateManyRecordInputEnvelope, {nullable:true})
    @Type(() => ImmobileCreateManyRecordInputEnvelope)
    createMany?: ImmobileCreateManyRecordInputEnvelope;

    @Field(() => [ImmobileWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    connect?: Array<ImmobileWhereUniqueInput>;
}
