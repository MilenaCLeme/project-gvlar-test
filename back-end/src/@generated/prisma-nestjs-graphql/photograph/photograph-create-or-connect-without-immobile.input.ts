import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { Type } from 'class-transformer';
import { PhotographCreateWithoutImmobileInput } from './photograph-create-without-immobile.input';

@InputType()
export class PhotographCreateOrConnectWithoutImmobileInput {

    @Field(() => PhotographWhereUniqueInput, {nullable:false})
    @Type(() => PhotographWhereUniqueInput)
    where!: PhotographWhereUniqueInput;

    @Field(() => PhotographCreateWithoutImmobileInput, {nullable:false})
    @Type(() => PhotographCreateWithoutImmobileInput)
    create!: PhotographCreateWithoutImmobileInput;
}
