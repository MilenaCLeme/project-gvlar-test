import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OwnerCountOrderByAggregateInput } from './owner-count-order-by-aggregate.input';
import { OwnerAvgOrderByAggregateInput } from './owner-avg-order-by-aggregate.input';
import { OwnerMaxOrderByAggregateInput } from './owner-max-order-by-aggregate.input';
import { OwnerMinOrderByAggregateInput } from './owner-min-order-by-aggregate.input';
import { OwnerSumOrderByAggregateInput } from './owner-sum-order-by-aggregate.input';

@InputType()
export class OwnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => OwnerCountOrderByAggregateInput, {nullable:true})
    _count?: OwnerCountOrderByAggregateInput;

    @Field(() => OwnerAvgOrderByAggregateInput, {nullable:true})
    _avg?: OwnerAvgOrderByAggregateInput;

    @Field(() => OwnerMaxOrderByAggregateInput, {nullable:true})
    _max?: OwnerMaxOrderByAggregateInput;

    @Field(() => OwnerMinOrderByAggregateInput, {nullable:true})
    _min?: OwnerMinOrderByAggregateInput;

    @Field(() => OwnerSumOrderByAggregateInput, {nullable:true})
    _sum?: OwnerSumOrderByAggregateInput;
}
