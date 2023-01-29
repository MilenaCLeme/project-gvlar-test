import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateWithoutRecordInput } from './immobile-create-without-record.input';
import { Type } from 'class-transformer';
import { ImmobileCreateOrConnectWithoutRecordInput } from './immobile-create-or-connect-without-record.input';
import { ImmobileUpsertWithWhereUniqueWithoutRecordInput } from './immobile-upsert-with-where-unique-without-record.input';
import { ImmobileCreateManyRecordInputEnvelope } from './immobile-create-many-record-input-envelope.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { ImmobileUpdateWithWhereUniqueWithoutRecordInput } from './immobile-update-with-where-unique-without-record.input';
import { ImmobileUpdateManyWithWhereWithoutRecordInput } from './immobile-update-many-with-where-without-record.input';
import { ImmobileScalarWhereInput } from './immobile-scalar-where.input';

@InputType()
export class ImmobileUncheckedUpdateManyWithoutRecordNestedInput {

    @Field(() => [ImmobileCreateWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileCreateWithoutRecordInput)
    create?: Array<ImmobileCreateWithoutRecordInput>;

    @Field(() => [ImmobileCreateOrConnectWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileCreateOrConnectWithoutRecordInput)
    connectOrCreate?: Array<ImmobileCreateOrConnectWithoutRecordInput>;

    @Field(() => [ImmobileUpsertWithWhereUniqueWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileUpsertWithWhereUniqueWithoutRecordInput)
    upsert?: Array<ImmobileUpsertWithWhereUniqueWithoutRecordInput>;

    @Field(() => ImmobileCreateManyRecordInputEnvelope, {nullable:true})
    @Type(() => ImmobileCreateManyRecordInputEnvelope)
    createMany?: ImmobileCreateManyRecordInputEnvelope;

    @Field(() => [ImmobileWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    set?: Array<ImmobileWhereUniqueInput>;

    @Field(() => [ImmobileWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    disconnect?: Array<ImmobileWhereUniqueInput>;

    @Field(() => [ImmobileWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    delete?: Array<ImmobileWhereUniqueInput>;

    @Field(() => [ImmobileWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    connect?: Array<ImmobileWhereUniqueInput>;

    @Field(() => [ImmobileUpdateWithWhereUniqueWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileUpdateWithWhereUniqueWithoutRecordInput)
    update?: Array<ImmobileUpdateWithWhereUniqueWithoutRecordInput>;

    @Field(() => [ImmobileUpdateManyWithWhereWithoutRecordInput], {nullable:true})
    @Type(() => ImmobileUpdateManyWithWhereWithoutRecordInput)
    updateMany?: Array<ImmobileUpdateManyWithWhereWithoutRecordInput>;

    @Field(() => [ImmobileScalarWhereInput], {nullable:true})
    @Type(() => ImmobileScalarWhereInput)
    deleteMany?: Array<ImmobileScalarWhereInput>;
}
