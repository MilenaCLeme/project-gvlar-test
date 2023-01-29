import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PhotographOrderByRelationAggregateInput } from '../photograph/photograph-order-by-relation-aggregate.input';
import { ImmobileOnOwnerOrderByRelationAggregateInput } from '../immobile-on-owner/immobile-on-owner-order-by-relation-aggregate.input';

@InputType()
export class ImmobileOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    record?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    recordId?: keyof typeof SortOrder;

    @Field(() => PhotographOrderByRelationAggregateInput, {nullable:true})
    photographs?: PhotographOrderByRelationAggregateInput;

    @Field(() => ImmobileOnOwnerOrderByRelationAggregateInput, {nullable:true})
    owners?: ImmobileOnOwnerOrderByRelationAggregateInput;
}
