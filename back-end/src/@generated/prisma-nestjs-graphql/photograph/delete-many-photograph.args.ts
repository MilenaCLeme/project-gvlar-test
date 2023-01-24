import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographWhereInput } from './photograph-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPhotographArgs {

    @Field(() => PhotographWhereInput, {nullable:true})
    @Type(() => PhotographWhereInput)
    where?: PhotographWhereInput;
}
