import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImmobileOnOwnerCountOrderByAggregateInput } from './immobile-on-owner-count-order-by-aggregate.input';
import { ImmobileOnOwnerAvgOrderByAggregateInput } from './immobile-on-owner-avg-order-by-aggregate.input';
import { ImmobileOnOwnerMaxOrderByAggregateInput } from './immobile-on-owner-max-order-by-aggregate.input';
import { ImmobileOnOwnerMinOrderByAggregateInput } from './immobile-on-owner-min-order-by-aggregate.input';
import { ImmobileOnOwnerSumOrderByAggregateInput } from './immobile-on-owner-sum-order-by-aggregate.input';

@InputType()
export class ImmobileOnOwnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    immobileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => ImmobileOnOwnerCountOrderByAggregateInput, {nullable:true})
    _count?: ImmobileOnOwnerCountOrderByAggregateInput;

    @Field(() => ImmobileOnOwnerAvgOrderByAggregateInput, {nullable:true})
    _avg?: ImmobileOnOwnerAvgOrderByAggregateInput;

    @Field(() => ImmobileOnOwnerMaxOrderByAggregateInput, {nullable:true})
    _max?: ImmobileOnOwnerMaxOrderByAggregateInput;

    @Field(() => ImmobileOnOwnerMinOrderByAggregateInput, {nullable:true})
    _min?: ImmobileOnOwnerMinOrderByAggregateInput;

    @Field(() => ImmobileOnOwnerSumOrderByAggregateInput, {nullable:true})
    _sum?: ImmobileOnOwnerSumOrderByAggregateInput;
}
