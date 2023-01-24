import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateWithoutImmobileInput } from './immobile-on-owner-create-without-immobile.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateOrConnectWithoutImmobileInput } from './immobile-on-owner-create-or-connect-without-immobile.input';
import { ImmobileOnOwnerCreateManyImmobileInputEnvelope } from './immobile-on-owner-create-many-immobile-input-envelope.input';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';

@InputType()
export class ImmobileOnOwnerUncheckedCreateNestedManyWithoutImmobileInput {

    @Field(() => [ImmobileOnOwnerCreateWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateWithoutImmobileInput)
    create?: Array<ImmobileOnOwnerCreateWithoutImmobileInput>;

    @Field(() => [ImmobileOnOwnerCreateOrConnectWithoutImmobileInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateOrConnectWithoutImmobileInput)
    connectOrCreate?: Array<ImmobileOnOwnerCreateOrConnectWithoutImmobileInput>;

    @Field(() => ImmobileOnOwnerCreateManyImmobileInputEnvelope, {nullable:true})
    @Type(() => ImmobileOnOwnerCreateManyImmobileInputEnvelope)
    createMany?: ImmobileOnOwnerCreateManyImmobileInputEnvelope;

    @Field(() => [ImmobileOnOwnerWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    connect?: Array<ImmobileOnOwnerWhereUniqueInput>;
}
