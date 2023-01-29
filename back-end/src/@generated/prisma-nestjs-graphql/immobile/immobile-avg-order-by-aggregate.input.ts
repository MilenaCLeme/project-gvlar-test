import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImmobileAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    footage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bathroom?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vacancy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recordId?: keyof typeof SortOrder;
}
