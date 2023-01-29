import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerWhereInput } from './owner-where.input';
import { Type } from 'class-transformer';
import { OwnerOrderByWithAggregationInput } from './owner-order-by-with-aggregation.input';
import { OwnerScalarFieldEnum } from './owner-scalar-field.enum';
import { OwnerScalarWhereWithAggregatesInput } from './owner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OwnerCountAggregateInput } from './owner-count-aggregate.input';
import { OwnerAvgAggregateInput } from './owner-avg-aggregate.input';
import { OwnerSumAggregateInput } from './owner-sum-aggregate.input';
import { OwnerMinAggregateInput } from './owner-min-aggregate.input';
import { OwnerMaxAggregateInput } from './owner-max-aggregate.input';

@ArgsType()
export class OwnerGroupByArgs {

    @Field(() => OwnerWhereInput, {nullable:true})
    @Type(() => OwnerWhereInput)
    where?: OwnerWhereInput;

    @Field(() => [OwnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OwnerOrderByWithAggregationInput>;

    @Field(() => [OwnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OwnerScalarFieldEnum>;

    @Field(() => OwnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: OwnerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OwnerCountAggregateInput, {nullable:true})
    _count?: OwnerCountAggregateInput;

    @Field(() => OwnerAvgAggregateInput, {nullable:true})
    _avg?: OwnerAvgAggregateInput;

    @Field(() => OwnerSumAggregateInput, {nullable:true})
    _sum?: OwnerSumAggregateInput;

    @Field(() => OwnerMinAggregateInput, {nullable:true})
    _min?: OwnerMinAggregateInput;

    @Field(() => OwnerMaxAggregateInput, {nullable:true})
    _max?: OwnerMaxAggregateInput;
}
