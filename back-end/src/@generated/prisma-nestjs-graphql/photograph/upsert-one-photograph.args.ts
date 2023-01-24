import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { Type } from 'class-transformer';
import { PhotographCreateInput } from './photograph-create.input';
import { PhotographUpdateInput } from './photograph-update.input';

@ArgsType()
export class UpsertOnePhotographArgs {

    @Field(() => PhotographWhereUniqueInput, {nullable:false})
    @Type(() => PhotographWhereUniqueInput)
    where!: PhotographWhereUniqueInput;

    @Field(() => PhotographCreateInput, {nullable:false})
    @Type(() => PhotographCreateInput)
    create!: PhotographCreateInput;

    @Field(() => PhotographUpdateInput, {nullable:false})
    @Type(() => PhotographUpdateInput)
    update!: PhotographUpdateInput;
}
