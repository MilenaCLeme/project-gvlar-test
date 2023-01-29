import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { Type } from 'class-transformer';
import { PhotographUpdateWithoutImmobileInput } from './photograph-update-without-immobile.input';
import { PhotographCreateWithoutImmobileInput } from './photograph-create-without-immobile.input';

@InputType()
export class PhotographUpsertWithWhereUniqueWithoutImmobileInput {

    @Field(() => PhotographWhereUniqueInput, {nullable:false})
    @Type(() => PhotographWhereUniqueInput)
    where!: PhotographWhereUniqueInput;

    @Field(() => PhotographUpdateWithoutImmobileInput, {nullable:false})
    @Type(() => PhotographUpdateWithoutImmobileInput)
    update!: PhotographUpdateWithoutImmobileInput;

    @Field(() => PhotographCreateWithoutImmobileInput, {nullable:false})
    @Type(() => PhotographCreateWithoutImmobileInput)
    create!: PhotographCreateWithoutImmobileInput;
}
