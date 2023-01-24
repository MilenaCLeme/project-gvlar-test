import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographCreateWithoutImmobileInput } from './photograph-create-without-immobile.input';
import { Type } from 'class-transformer';
import { PhotographCreateOrConnectWithoutImmobileInput } from './photograph-create-or-connect-without-immobile.input';
import { PhotographUpsertWithWhereUniqueWithoutImmobileInput } from './photograph-upsert-with-where-unique-without-immobile.input';
import { PhotographCreateManyImmobileInputEnvelope } from './photograph-create-many-immobile-input-envelope.input';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { PhotographUpdateWithWhereUniqueWithoutImmobileInput } from './photograph-update-with-where-unique-without-immobile.input';
import { PhotographUpdateManyWithWhereWithoutImmobileInput } from './photograph-update-many-with-where-without-immobile.input';
import { PhotographScalarWhereInput } from './photograph-scalar-where.input';

@InputType()
export class PhotographUncheckedUpdateManyWithoutImmobileNestedInput {

    @Field(() => [PhotographCreateWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographCreateWithoutImmobileInput)
    create?: Array<PhotographCreateWithoutImmobileInput>;

    @Field(() => [PhotographCreateOrConnectWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographCreateOrConnectWithoutImmobileInput)
    connectOrCreate?: Array<PhotographCreateOrConnectWithoutImmobileInput>;

    @Field(() => [PhotographUpsertWithWhereUniqueWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographUpsertWithWhereUniqueWithoutImmobileInput)
    upsert?: Array<PhotographUpsertWithWhereUniqueWithoutImmobileInput>;

    @Field(() => PhotographCreateManyImmobileInputEnvelope, {nullable:true})
    @Type(() => PhotographCreateManyImmobileInputEnvelope)
    createMany?: PhotographCreateManyImmobileInputEnvelope;

    @Field(() => [PhotographWhereUniqueInput], {nullable:true})
    @Type(() => PhotographWhereUniqueInput)
    set?: Array<PhotographWhereUniqueInput>;

    @Field(() => [PhotographWhereUniqueInput], {nullable:true})
    @Type(() => PhotographWhereUniqueInput)
    disconnect?: Array<PhotographWhereUniqueInput>;

    @Field(() => [PhotographWhereUniqueInput], {nullable:true})
    @Type(() => PhotographWhereUniqueInput)
    delete?: Array<PhotographWhereUniqueInput>;

    @Field(() => [PhotographWhereUniqueInput], {nullable:true})
    @Type(() => PhotographWhereUniqueInput)
    connect?: Array<PhotographWhereUniqueInput>;

    @Field(() => [PhotographUpdateWithWhereUniqueWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographUpdateWithWhereUniqueWithoutImmobileInput)
    update?: Array<PhotographUpdateWithWhereUniqueWithoutImmobileInput>;

    @Field(() => [PhotographUpdateManyWithWhereWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographUpdateManyWithWhereWithoutImmobileInput)
    updateMany?: Array<PhotographUpdateManyWithWhereWithoutImmobileInput>;

    @Field(() => [PhotographScalarWhereInput], {nullable:true})
    @Type(() => PhotographScalarWhereInput)
    deleteMany?: Array<PhotographScalarWhereInput>;
}
