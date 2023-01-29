import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerWhereInput } from './owner-where.input';
import { Type } from 'class-transformer';
import { OwnerOrderByWithRelationInput } from './owner-order-by-with-relation.input';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OwnerScalarFieldEnum } from './owner-scalar-field.enum';

@ArgsType()
export class FindManyOwnerArgs {

    @Field(() => OwnerWhereInput, {nullable:true})
    @Type(() => OwnerWhereInput)
    where?: OwnerWhereInput;

    @Field(() => [OwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OwnerOrderByWithRelationInput>;

    @Field(() => OwnerWhereUniqueInput, {nullable:true})
    cursor?: OwnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OwnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OwnerScalarFieldEnum>;
}
