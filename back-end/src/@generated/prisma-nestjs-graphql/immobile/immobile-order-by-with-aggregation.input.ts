import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImmobileCountOrderByAggregateInput } from './immobile-count-order-by-aggregate.input';
import { ImmobileAvgOrderByAggregateInput } from './immobile-avg-order-by-aggregate.input';
import { ImmobileMaxOrderByAggregateInput } from './immobile-max-order-by-aggregate.input';
import { ImmobileMinOrderByAggregateInput } from './immobile-min-order-by-aggregate.input';
import { ImmobileSumOrderByAggregateInput } from './immobile-sum-order-by-aggregate.input';

@InputType()
export class ImmobileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    about?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vsell?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vboth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iptu?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    describe?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    footage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bathroom?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vacancy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complement?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalcode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    district?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recordId?: keyof typeof SortOrder;

    @Field(() => ImmobileCountOrderByAggregateInput, {nullable:true})
    _count?: ImmobileCountOrderByAggregateInput;

    @Field(() => ImmobileAvgOrderByAggregateInput, {nullable:true})
    _avg?: ImmobileAvgOrderByAggregateInput;

    @Field(() => ImmobileMaxOrderByAggregateInput, {nullable:true})
    _max?: ImmobileMaxOrderByAggregateInput;

    @Field(() => ImmobileMinOrderByAggregateInput, {nullable:true})
    _min?: ImmobileMinOrderByAggregateInput;

    @Field(() => ImmobileSumOrderByAggregateInput, {nullable:true})
    _sum?: ImmobileSumOrderByAggregateInput;
}
