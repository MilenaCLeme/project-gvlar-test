import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePhotographArgs {

    @Field(() => PhotographWhereUniqueInput, {nullable:false})
    @Type(() => PhotographWhereUniqueInput)
    where!: PhotographWhereUniqueInput;
}
