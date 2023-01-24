import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographCreateWithoutImmobileInput } from './photograph-create-without-immobile.input';
import { Type } from 'class-transformer';
import { PhotographCreateOrConnectWithoutImmobileInput } from './photograph-create-or-connect-without-immobile.input';
import { PhotographCreateManyImmobileInputEnvelope } from './photograph-create-many-immobile-input-envelope.input';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';

@InputType()
export class PhotographCreateNestedManyWithoutImmobileInput {

    @Field(() => [PhotographCreateWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographCreateWithoutImmobileInput)
    create?: Array<PhotographCreateWithoutImmobileInput>;

    @Field(() => [PhotographCreateOrConnectWithoutImmobileInput], {nullable:true})
    @Type(() => PhotographCreateOrConnectWithoutImmobileInput)
    connectOrCreate?: Array<PhotographCreateOrConnectWithoutImmobileInput>;

    @Field(() => PhotographCreateManyImmobileInputEnvelope, {nullable:true})
    @Type(() => PhotographCreateManyImmobileInputEnvelope)
    createMany?: PhotographCreateManyImmobileInputEnvelope;

    @Field(() => [PhotographWhereUniqueInput], {nullable:true})
    @Type(() => PhotographWhereUniqueInput)
    connect?: Array<PhotographWhereUniqueInput>;
}
