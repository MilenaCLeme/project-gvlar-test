import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographUpdateInput } from './photograph-update.input';
import { Type } from 'class-transformer';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';

@ArgsType()
export class UpdateOnePhotographArgs {

    @Field(() => PhotographUpdateInput, {nullable:false})
    @Type(() => PhotographUpdateInput)
    data!: PhotographUpdateInput;

    @Field(() => PhotographWhereUniqueInput, {nullable:false})
    @Type(() => PhotographWhereUniqueInput)
    where!: PhotographWhereUniqueInput;
}
