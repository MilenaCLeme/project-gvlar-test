import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PhotographCountOrderByAggregateInput } from './photograph-count-order-by-aggregate.input';
import { PhotographAvgOrderByAggregateInput } from './photograph-avg-order-by-aggregate.input';
import { PhotographMaxOrderByAggregateInput } from './photograph-max-order-by-aggregate.input';
import { PhotographMinOrderByAggregateInput } from './photograph-min-order-by-aggregate.input';
import { PhotographSumOrderByAggregateInput } from './photograph-sum-order-by-aggregate.input';

@InputType()
export class PhotographOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    describe?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    immobileId?: keyof typeof SortOrder;

    @Field(() => PhotographCountOrderByAggregateInput, {nullable:true})
    _count?: PhotographCountOrderByAggregateInput;

    @Field(() => PhotographAvgOrderByAggregateInput, {nullable:true})
    _avg?: PhotographAvgOrderByAggregateInput;

    @Field(() => PhotographMaxOrderByAggregateInput, {nullable:true})
    _max?: PhotographMaxOrderByAggregateInput;

    @Field(() => PhotographMinOrderByAggregateInput, {nullable:true})
    _min?: PhotographMinOrderByAggregateInput;

    @Field(() => PhotographSumOrderByAggregateInput, {nullable:true})
    _sum?: PhotographSumOrderByAggregateInput;
}
