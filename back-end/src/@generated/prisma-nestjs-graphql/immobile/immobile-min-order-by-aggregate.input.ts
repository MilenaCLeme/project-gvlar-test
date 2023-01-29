import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImmobileMinOrderByAggregateInput {

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
}
