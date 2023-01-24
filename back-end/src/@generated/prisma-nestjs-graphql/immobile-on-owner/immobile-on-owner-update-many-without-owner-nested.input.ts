import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateWithoutOwnerInput } from './immobile-on-owner-create-without-owner.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateOrConnectWithoutOwnerInput } from './immobile-on-owner-create-or-connect-without-owner.input';
import { ImmobileOnOwnerUpsertWithWhereUniqueWithoutOwnerInput } from './immobile-on-owner-upsert-with-where-unique-without-owner.input';
import { ImmobileOnOwnerCreateManyOwnerInputEnvelope } from './immobile-on-owner-create-many-owner-input-envelope.input';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { ImmobileOnOwnerUpdateWithWhereUniqueWithoutOwnerInput } from './immobile-on-owner-update-with-where-unique-without-owner.input';
import { ImmobileOnOwnerUpdateManyWithWhereWithoutOwnerInput } from './immobile-on-owner-update-many-with-where-without-owner.input';
import { ImmobileOnOwnerScalarWhereInput } from './immobile-on-owner-scalar-where.input';

@InputType()
export class ImmobileOnOwnerUpdateManyWithoutOwnerNestedInput {

    @Field(() => [ImmobileOnOwnerCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateWithoutOwnerInput)
    create?: Array<ImmobileOnOwnerCreateWithoutOwnerInput>;

    @Field(() => [ImmobileOnOwnerCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ImmobileOnOwnerCreateOrConnectWithoutOwnerInput>;

    @Field(() => [ImmobileOnOwnerUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<ImmobileOnOwnerUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => ImmobileOnOwnerCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ImmobileOnOwnerCreateManyOwnerInputEnvelope)
    createMany?: ImmobileOnOwnerCreateManyOwnerInputEnvelope;

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

    @Field(() => [ImmobileOnOwnerUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<ImmobileOnOwnerUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [ImmobileOnOwnerUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<ImmobileOnOwnerUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [ImmobileOnOwnerScalarWhereInput], {nullable:true})
    @Type(() => ImmobileOnOwnerScalarWhereInput)
    deleteMany?: Array<ImmobileOnOwnerScalarWhereInput>;
}
