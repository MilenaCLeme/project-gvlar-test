import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographWhereInput } from './photograph-where.input';

@InputType()
export class PhotographListRelationFilter {

    @Field(() => PhotographWhereInput, {nullable:true})
    every?: PhotographWhereInput;

    @Field(() => PhotographWhereInput, {nullable:true})
    some?: PhotographWhereInput;

    @Field(() => PhotographWhereInput, {nullable:true})
    none?: PhotographWhereInput;
}
