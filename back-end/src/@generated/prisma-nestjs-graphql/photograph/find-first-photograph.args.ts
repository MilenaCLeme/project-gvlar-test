import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographWhereInput } from './photograph-where.input';
import { Type } from 'class-transformer';
import { PhotographOrderByWithRelationInput } from './photograph-order-by-with-relation.input';
import { PhotographWhereUniqueInput } from './photograph-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PhotographScalarFieldEnum } from './photograph-scalar-field.enum';

@ArgsType()
export class FindFirstPhotographArgs {

    @Field(() => PhotographWhereInput, {nullable:true})
    @Type(() => PhotographWhereInput)
    where?: PhotographWhereInput;

    @Field(() => [PhotographOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PhotographOrderByWithRelationInput>;

    @Field(() => PhotographWhereUniqueInput, {nullable:true})
    cursor?: PhotographWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PhotographScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PhotographScalarFieldEnum>;
}
