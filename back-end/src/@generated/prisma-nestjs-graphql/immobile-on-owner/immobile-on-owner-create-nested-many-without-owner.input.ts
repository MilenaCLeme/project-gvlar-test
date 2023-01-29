import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateWithoutOwnerInput } from './immobile-on-owner-create-without-owner.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateOrConnectWithoutOwnerInput } from './immobile-on-owner-create-or-connect-without-owner.input';
import { ImmobileOnOwnerCreateManyOwnerInputEnvelope } from './immobile-on-owner-create-many-owner-input-envelope.input';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';

@InputType()
export class ImmobileOnOwnerCreateNestedManyWithoutOwnerInput {

    @Field(() => [ImmobileOnOwnerCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateWithoutOwnerInput)
    create?: Array<ImmobileOnOwnerCreateWithoutOwnerInput>;

    @Field(() => [ImmobileOnOwnerCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ImmobileOnOwnerCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ImmobileOnOwnerCreateOrConnectWithoutOwnerInput>;

    @Field(() => ImmobileOnOwnerCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ImmobileOnOwnerCreateManyOwnerInputEnvelope)
    createMany?: ImmobileOnOwnerCreateManyOwnerInputEnvelope;

    @Field(() => [ImmobileOnOwnerWhereUniqueInput], {nullable:true})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    connect?: Array<ImmobileOnOwnerWhereUniqueInput>;
}
