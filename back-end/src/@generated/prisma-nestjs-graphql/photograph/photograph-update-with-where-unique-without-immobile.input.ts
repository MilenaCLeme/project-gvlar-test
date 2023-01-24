import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { Type } from 'class-transformer';
import { PhotographUpdateWithoutImmobileInput } from './photograph-update-without-immobile.input';

@InputType()
export class PhotographUpdateWithWhereUniqueWithoutImmobileInput {

    @Field(() => PhotographWhereUniqueInput, {nullable:false})
    @Type(() => PhotographWhereUniqueInput)
    where!: PhotographWhereUniqueInput;

    @Field(() => PhotographUpdateWithoutImmobileInput, {nullable:false})
    @Type(() => PhotographUpdateWithoutImmobileInput)
    data!: PhotographUpdateWithoutImmobileInput;
}
