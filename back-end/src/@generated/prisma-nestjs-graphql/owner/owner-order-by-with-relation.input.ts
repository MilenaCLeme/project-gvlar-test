import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImmobileOnOwnerOrderByRelationAggregateInput } from '../immobile-on-owner/immobile-on-owner-order-by-relation-aggregate.input';

@InputType()
export class OwnerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => ImmobileOnOwnerOrderByRelationAggregateInput, {nullable:true})
    immobiles?: ImmobileOnOwnerOrderByRelationAggregateInput;
}
