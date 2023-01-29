import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImmobileOnOwnerMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    immobileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
}
