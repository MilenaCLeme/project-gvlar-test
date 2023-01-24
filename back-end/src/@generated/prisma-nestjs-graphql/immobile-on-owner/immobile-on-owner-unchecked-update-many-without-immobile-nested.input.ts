import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateWithoutImmobileInput } from './immobile-on-owner-create-without-immobile.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateOrConnectWithoutImmobileInput } from './immobile-on-owner-create-or-connect-without-immobile.input';
import { ImmobileOnOwnerUpsertWithWhereUniqueWithoutImmobileInput } from './immobile-on-owner-upsert-with-where-unique-without-immobile.input';
import { ImmobileOnOwnerCreateManyImmobileInputEnvelope } from './immobile-on-owner-create-many-immobile-input-envelope.input';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { ImmobileOnOwnerUpdateWithWhereUniqueWithoutImmobileInput } from './immobile-on-owner-update-with-where-unique-without-immobile.input';
import { ImmobileOnOwnerUpdateManyWithWhereWithoutImmobileInput } from './immobile-on-owner-update-many-with-where-without-immobile.input';
import { ImmobileOnOwnerScalarWhereInput } from './immobile-on-owner-scalar-where.input';

@InputType()
export class ImmobileOnOwnerUncheckedUpdateManyWithoutImmobileNestedInput {

    @Field(() => [ImmobileOnOwnerCreateWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateWithoutImmobileInput)
    create?: Array<ImmobileOnOwnerCreateWithoutImmobileInput>;

    @Field(() => [ImmobileOnOwnerCreateOrConnectWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateOrConnectWithoutImmobileInput)
    connectOrCreate?: Array<ImmobileOnOwnerCreateOrConnectWithoutImmobileInput>;

    @Field(() => [ImmobileOnOwnerUpsertWithWhereUniqueWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerUpsertWithWhereUniqueWithoutImmobileInput)
    upsert?: Array<ImmobileOnOwnerUpsertWithWhereUniqueWithoutImmobileInput>;

    @Field(() => ImmobileOnOwnerCreateManyImmobileInputEnvelope, {nullable:true})
    @Type(() => ImmobileOnOwnerCreateManyImmobileInputEnvelope)
    createMany?: ImmobileOnOwnerCreateManyImmobileInputEnvelope;

    @Field(() => [ImmobileOnOwnerWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    set?: Array<ImmobileOnOwnerWhereUniqueInput>;

    @Field(() => [ImmobileOnOwnerWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    disconnect?: Array<ImmobileOnOwnerWhereUniqueInput>;

    @Field(() => [ImmobileOnOwnerWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    delete?: Array<ImmobileOnOwnerWhereUniqueInput>;

    @Field(() => [ImmobileOnOwnerWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    connect?: Array<ImmobileOnOwnerWhereUniqueInput>;

    @Field(() => [ImmobileOnOwnerUpdateWithWhereUniqueWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerUpdateWithWhereUniqueWithoutImmobileInput)
    update?: Array<ImmobileOnOwnerUpdateWithWhereUniqueWithoutImmobileInput>;

    @Field(() => [ImmobileOnOwnerUpdateManyWithWhereWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerUpdateManyWithWhereWithoutImmobileInput)
    updateMany?: Array<ImmobileOnOwnerUpdateManyWithWhereWithoutImmobileInput>;

    @Field(() => [ImmobileOnOwnerScalarWhereInput], {nullable:true})
    @Type(() => ImmobileOnOwnerScalarWhereInput)
    deleteMany?: Array<ImmobileOnOwnerScalarWhereInput>;
}
