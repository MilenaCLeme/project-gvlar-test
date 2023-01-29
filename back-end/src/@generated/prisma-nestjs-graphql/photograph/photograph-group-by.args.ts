import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographWhereInput } from './photograph-where.input';
import { Type } from 'class-transformer';
import { PhotographOrderByWithAggregationInput } from './photograph-order-by-with-aggregation.input';
import { PhotographScalarFieldEnum } from './photograph-scalar-field.enum';
import { PhotographScalarWhereWithAggregatesInput } from './photograph-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PhotographCountAggregateInput } from './photograph-count-aggregate.input';
import { PhotographAvgAggregateInput } from './photograph-avg-aggregate.input';
import { PhotographSumAggregateInput } from './photograph-sum-aggregate.input';
import { PhotographMinAggregateInput } from './photograph-min-aggregate.input';
import { PhotographMaxAggregateInput } from './photograph-max-aggregate.input';

@ArgsType()
export class PhotographGroupByArgs {

    @Field(() => PhotographWhereInput, {nullable:true})
    @Type(() => PhotographWhereInput)
    where?: PhotographWhereInput;

    @Field(() => [PhotographOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PhotographOrderByWithAggregationInput>;

    @Field(() => [PhotographScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PhotographScalarFieldEnum>;

    @Field(() => PhotographScalarWhereWithAggregatesInput, {nullable:true})
    having?: PhotographScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PhotographCountAggregateInput, {nullable:true})
    _count?: PhotographCountAggregateInput;

    @Field(() => PhotographAvgAggregateInput, {nullable:true})
    _avg?: PhotographAvgAggregateInput;

    @Field(() => PhotographSumAggregateInput, {nullable:true})
    _sum?: PhotographSumAggregateInput;

    @Field(() => PhotographMinAggregateInput, {nullable:true})
    _min?: PhotographMinAggregateInput;

    @Field(() => PhotographMaxAggregateInput, {nullable:true})
    _max?: PhotographMaxAggregateInput;
}
